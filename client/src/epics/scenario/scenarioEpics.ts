import { AnyAction } from 'redux'
import { ActionsObservable, ofType } from 'redux-observable'
import { of } from 'rxjs'
import { ajax, AjaxResponse } from 'rxjs/ajax'
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators'

import {
  getScenarioListFailureAction,
  getScenarioListSuccessAction,
  deleteScenarioFailureAction,
  deleteScenarioSuccessAction,
  scenarioActionTypes,
} from '../../reducer/scenario/scenarioActions'
// import { ScenarioList } from '../../model/scenario'

export const getScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(scenarioActionTypes.GET_SCENARIO_LIST),
    exhaustMap(() =>
      ajax.get('/v1/scenarios/').pipe(
        map((res: AjaxResponse) => getScenarioListSuccessAction(res.response)),
        catchError(err => of(getScenarioListFailureAction(err))),
      ),
    ),
  )

export const deleteScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(scenarioActionTypes.DELETE_SCENARIO),
    switchMap(action =>
      ajax.delete(`/v1/scenarios/${action.payload}`).pipe(
        map(() => deleteScenarioSuccessAction(action.payload)),
        catchError(err => of(deleteScenarioFailureAction(err))),
      ),
    ),
  )

export default [getScenarioEpic, deleteScenarioEpic]
