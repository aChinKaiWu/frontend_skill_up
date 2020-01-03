import { AnyAction } from 'redux'
import { ActionsObservable, ofType } from 'redux-observable'
import { of } from 'rxjs'
import { catchError, exhaustMap, map } from 'rxjs/operators'

import {
  getScenarioListFailureAction,
  getScenarioListSuccessAction,
  scenarioActionTypes,
} from '../reducer/scenario/scenarioActions'
import { ScenarioList } from '../model/scenario'

export const getScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(scenarioActionTypes.GET_SCENARIO_LIST),
    exhaustMap(() =>
      of([]).pipe(
        map((res: ScenarioList) => getScenarioListSuccessAction(res)),
        catchError(() => of(getScenarioListFailureAction())),
      ),
    ),
  )

export default [getScenarioEpic]
