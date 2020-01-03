import { ActionsObservable, ofType } from "redux-observable";
import { AnyAction } from "redux";
import { scenarioActionTypes, getScenarioListSuccessAction, getScenarioListFailedAction, deleteScenariosFailedAction, deleteScenariosSuccessAction } from "../../reducer/scenario/scenarioActions"
import { of } from 'rxjs'
import { exhaustMap, catchError, map, switchMap } from 'rxjs/operators'
import { Scenario } from '../../model/scenario'
import mockData from './mockData'

export const getScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(scenarioActionTypes.GET_SCENARIO_LIST),
    exhaustMap(() =>
      of(mockData).pipe(
        map((res: Scenario[]) => getScenarioListSuccessAction(res)),
        catchError(err => of(getScenarioListFailedAction(err)))
      )
    ),
  )

export const deleteScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(scenarioActionTypes.DELETE_SCENARIO),
    switchMap(action =>
      of([]).pipe(
        map(()=> deleteScenariosSuccessAction(action.payload)),
        catchError(err => of(deleteScenariosFailedAction(err))),
      )  
    )
  )

export default [getScenarioEpic, deleteScenarioEpic]