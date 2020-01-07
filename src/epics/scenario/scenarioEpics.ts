import FakeScenarioImg from '../../assets/images/fake_scenario.png'
import { ActionsObservable, ofType } from 'redux-observable'
import { ajax, AjaxResponse } from 'rxjs/ajax'
import { AnyAction } from 'redux'
import { of } from 'rxjs'
import { Scenario } from '../../model/scenario'
import {
  deleteScenarioFailure,
  deleteScenarioSuccess,
  getScenarioListFailure,
  getScenarioListSuccess,
  scenarioActionTypes,
  // createScenarioSuccess,
} from '../../reducer/scenario/scenarioActions'
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators'

export const deleteScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(scenarioActionTypes.DELETE_SCENARIO),
    exhaustMap(action =>
      ajax.delete(`https://svelte-functions.cruzshia.now.sh/api/scenarios?ids=${action.deletionIDs}`).pipe(
        map(() => {
          return deleteScenarioSuccess(action.deletionIDs)
        }),
        catchError(err => of(deleteScenarioFailure(err))),
      ),
    ),
  )

export const getScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(scenarioActionTypes.GET_SCENARIO_LIST),
    switchMap(() =>
      ajax('https://svelte-functions.cruzshia.now.sh/api/scenarios').pipe(
        map((res: AjaxResponse) => {
          res.response.scenarios.forEach((scenario: Scenario) => (scenario.thumbnail_url = FakeScenarioImg))
          return getScenarioListSuccess(res.response.scenarios)
        }),
        catchError(err => of(getScenarioListFailure(err))),
      ),
    ),
  )

// export const createScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
// action$.pipe(
//   ofType(scenarioActionTypes.CREATE_SCENARIO),
//   exhaustMap(action =>
//     ajax.post(`https://svelte-functions.cruzshia.now.sh/api/scenarios?`).pipe(
//       map(()=> {
//         return createScenarioSuccess(action)
//       }),
//       catchError(err => of(createScenarioFailure(err))),
//     ),
//   ),
// )

export default [getScenarioEpic, deleteScenarioEpic]
