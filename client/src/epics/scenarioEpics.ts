import { ActionsObservable, ofType } from 'redux-observable'
import { AnyAction } from 'redux'
import {
  scenarioActionTypes,
  getScenarioListSuccessAction,
  // ScenarioList,
  getScenarioListFailedAction,
  deleteScenariosSuccessAction,
  deleteScenariosFailedAction,
  getScenarioListAction,
} from '../reducer/scenario/scenarioActions'
import { exhaustMap, switchMap, catchError, map, mergeMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { ajax, AjaxResponse } from 'rxjs/ajax'
// import { scenarioList as scenarioListMockData } from './mockData'

const getScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(scenarioActionTypes.GET),
    exhaustMap(() =>
      ajax('https://svelte-functions.cruzshia.now.sh/api/scenarios').pipe(
        map((res: AjaxResponse) => getScenarioListSuccessAction(res.response.scenarios)),
        catchError(err => of(getScenarioListFailedAction(err))),
      ),
    ),
  )

const deleteScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(scenarioActionTypes.DELETE),
    switchMap(action =>
      ajax.delete(`https://svelte-functions.cruzshia.now.sh/api/scenarios?ids=${action.payload}`).pipe(
        mergeMap((res: AjaxResponse) => of(getScenarioListAction(), deleteScenariosSuccessAction(res.response))),
        catchError(err => of(deleteScenariosFailedAction(err))),
      ),
    ),
  )

export default [getScenarioEpic, deleteScenarioEpic]
