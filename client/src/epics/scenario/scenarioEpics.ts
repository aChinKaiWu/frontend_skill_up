import { AnyAction } from 'redux'
import {
  scenarioActionTypes,
  getScenarioListSuccessAction,
  getScenarioListFailedAction,
  deleteScenariosSuccessAction,
  deleteScenariosFailedActionAction,
  ScenarioList,
} from '../../reducer/scenario/scenarioActions'
import { ActionsObservable, ofType } from 'redux-observable'
import { of } from 'rxjs'
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators'
import mockData from './mockData'

export const getScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(scenarioActionTypes.GET_SCENARIO_LIST),
    exhaustMap(() =>
      of(mockData).pipe(
        map((res: ScenarioList) => getScenarioListSuccessAction(res)),
        catchError(err => of(getScenarioListFailedAction(err))),
      ),
    ),
  )

export const deleteScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(scenarioActionTypes.DELETE_SCENARIO),
    switchMap(action =>
      of([]).pipe(
        map(() => deleteScenariosSuccessAction(action.payload)),
        catchError(err => of(deleteScenariosFailedActionAction(err))),
      ),
    ),
  )

export default [getScenarioEpic, deleteScenarioEpic]
