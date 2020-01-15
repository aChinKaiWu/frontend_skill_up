import { ActionsObservable, ofType } from 'redux-observable'
import { ajax, AjaxResponse } from 'rxjs/ajax'
import { AnyAction } from 'redux'
import { of } from 'rxjs'
import {
  createScenarioFailure,
  createScenarioSuccess,
  deleteScenarioFailure,
  deleteScenarioSuccess,
  getScenarioListFailure,
  getScenarioListSuccess,
  scenarioActionTypes,
} from '../../reducer/scenario/scenarioActions'
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators'

export const deleteScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(scenarioActionTypes.DELETE_SCENARIO),
    exhaustMap(action =>
      ajax.delete(`/v1/scenarios/${action.payload}`).pipe(
        map(() => {
          return deleteScenarioSuccess(action.payload)
        }),
        catchError(err => of(deleteScenarioFailure(err))),
      ),
    ),
  )

export const getScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(scenarioActionTypes.GET_SCENARIO_LIST),
    switchMap(() =>
      ajax.get('/v1/scenarios').pipe(
        map((res: AjaxResponse) => {
          return getScenarioListSuccess(res.response)
        }),
        catchError(err => of(getScenarioListFailure(err))),
      ),
    ),
  )

export const createScenarioEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(scenarioActionTypes.CREATE_SCENARIO),
    exhaustMap(action =>
      ajax.post('/v1/scenarios', action.payload).pipe(
        map((res: AjaxResponse) => {
          return createScenarioSuccess(res.response)
        }),
        catchError(err => of(createScenarioFailure(err))),
      ),
    ),
  )

export default [createScenarioEpic, getScenarioEpic, deleteScenarioEpic]
