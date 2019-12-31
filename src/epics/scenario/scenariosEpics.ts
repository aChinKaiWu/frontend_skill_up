import { AnyAction } from 'redux'
import { ActionsObservable, ofType } from 'redux-observable'
import { of } from 'rxjs'
import { ajax, AjaxResponse } from 'rxjs/ajax'
import { exhaustMap, map, catchError } from 'rxjs/operators'
import { Scenario } from '../../model/scenario'
import { setSenarioAct, deleteSenarioSuccessAct, SCENARIO_ACTION_TYPES } from '../../reducer/scenario/scenarioActions'
import FakeScenarioImg from '../../assets/icons/fake-scenario.png'

interface ResponseType<T> extends AjaxResponse {
  response: T
}

export const getScenarioListEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(SCENARIO_ACTION_TYPES.GET_SENARIO_LIST),
    exhaustMap(() =>
      ajax('https://svelte-functions.cruzshia.now.sh/api/scenarios').pipe(
        map((res: ResponseType<{ scenarios: Scenario[] }>) => {
          res.response.scenarios.forEach((scenario: Scenario) => (scenario.thumbnail_url = FakeScenarioImg))
          return setSenarioAct(res.response.scenarios)
        }),
        catchError(err => of({ type: err })),
      ),
    ),
  )

export const deleteScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(SCENARIO_ACTION_TYPES.DELETE_SENARIO),
    exhaustMap(action =>
      ajax.delete(`https://svelte-functions.cruzshia.now.sh/api/scenarios?ids=${action.data.join(',')}`).pipe(
        map(() => deleteSenarioSuccessAct(action.data)),
        catchError(err => of({ type: err })),
      ),
    ),
  )

export default [deleteScenarioEpic, getScenarioListEpic]
