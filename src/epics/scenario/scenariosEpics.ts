import { AnyAction } from 'redux'
import { ActionsObservable, ofType } from 'redux-observable'
import { of, from } from 'rxjs'
import { exhaustMap, map, catchError } from 'rxjs/operators'
import { Scenario } from '../../model/scenario'
import {
  getScenarioSuccessAct,
  deleteScenarioSuccessAct,
  SCENARIO_ACTION_TYPES,
} from '../../reducer/scenario/scenarioActions'
import { fetchScenariosAjax, deleteScenariosAjax } from './scenarioService'
import FakeScenarioImg from '../../assets/icons/fake-scenario.png'

export const getScenarioListEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(SCENARIO_ACTION_TYPES.GET_SCENARIO_LIST),
    exhaustMap(() =>
      from(fetchScenariosAjax()).pipe(
        map(res => {
          // fake thumbnail images temporarily
          res.data.scenarios.forEach((scenario: Scenario) => (scenario.thumbnail_url = FakeScenarioImg))
          return getScenarioSuccessAct(res.data.scenarios)
        }),
        catchError(err => of({ type: err })),
      ),
    ),
  )

export const deleteScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(SCENARIO_ACTION_TYPES.DELETE_SCENARIO),
    exhaustMap(action =>
      from(deleteScenariosAjax(action.payload.join(','))).pipe(
        map(() => deleteScenarioSuccessAct(action.payload)),
        catchError(err => of({ type: err })),
      ),
    ),
  )

export default [deleteScenarioEpic, getScenarioListEpic]
