import { AnyAction } from 'redux'
import { ActionsObservable, ofType } from 'redux-observable'
import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { catchError, exhaustMap, map } from 'rxjs/operators'

import {
  getScenarioListFailureAction,
  getScenarioListSuccessAction,
  scenarioActionTypes,
} from '../reducer/scenario/scenarioActions'
// import { ScenarioList } from '../model/scenario'

export const getScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(scenarioActionTypes.GET_SCENARIO_LIST),
    exhaustMap(() =>
      ajax('https://svelte-functions.cruzshia.now.sh/api/scenarios').pipe(
        map(res => getScenarioListSuccessAction(res.response['scenarios'])),
        catchError(() => of(getScenarioListFailureAction())),
      ),
    ),
  )

export default [getScenarioEpic]
