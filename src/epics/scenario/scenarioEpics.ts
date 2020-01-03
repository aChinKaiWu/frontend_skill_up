import { ActionsObservable, ofType } from "redux-observable";
import { AnyAction } from "redux";
import { scenarioActionTypes, getScenarioListSuccessAction } from "../../reducer/scenario/scenarioActions"
import { of } from 'rxjs'
import { exhaustMap, catchError, map } from 'rxjs/operators'
import { Scenario } from '../../model/scenario'
import mockData from './mockData'

export const getScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(scenarioActionTypes.GET_SCENARIO_LIST),
    exhaustMap(() =>
      of(mockData).pipe(
        map((res: Scenario[]) => getScenarioListSuccessAction(res)),
        catchError(err => of({type: 'error', err}))
      )
    ),
  )

export default [getScenarioEpic]