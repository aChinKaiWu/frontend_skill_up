import { AnyAction } from 'redux'
import { ActionsObservable, ofType } from 'redux-observable'
import { of } from 'rxjs'
// import { ajax } from 'rxjs/ajax'
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators'
import mockData from './mockData'

import {
  getScenarioListFailureAction,
  getScenarioListSuccessAction,
  deleteScenarioFailureAction,
  deleteScenarioSuccessAction,
  scenarioActionTypes,
} from '../../reducer/scenario/scenarioActions'
import { ScenarioList } from '../../model/scenario'

export const getScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(scenarioActionTypes.GET_SCENARIO_LIST),
    exhaustMap(() =>
      of(mockData).pipe(
        map((res: ScenarioList) => getScenarioListSuccessAction(res)),
        catchError(err => of(getScenarioListFailureAction(err))),
      ),
    ),
  )

export const deleteScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(scenarioActionTypes.DELETE_SCENARIO),
    switchMap(action =>
      of([]).pipe(
        map(() => deleteScenarioSuccessAction(action.payload)),
        catchError(err => of(deleteScenarioFailureAction(err))),
      ),
    ),
  )

export default [getScenarioEpic, deleteScenarioEpic]
