import { AnyAction } from 'redux'
import {
  sensorActionTypes,
  getSensorListSuccessAction,
  getSensorListFailedAction,
  createSensorSuccessAction,
  createSensorFailedAction,
} from '../../reducer/sensor/sensorActions'
import { ActionsObservable, ofType } from 'redux-observable'
import { of } from 'rxjs'
import { catchError, exhaustMap, map, tap } from 'rxjs/operators'
import { ajax, AjaxResponse } from 'rxjs/ajax'
import { apiReponse } from '../utils'

export const getSensorListEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(sensorActionTypes.GET_SENSOR_LIST),
    exhaustMap(({ payload: { skip, limit } }) =>
      ajax.get(`v1/sensors?skip=${skip}&limit=${limit}`).pipe(
        map((res: AjaxResponse) => getSensorListSuccessAction(res.response)),
        catchError(err => of(getSensorListFailedAction(err))),
      ),
    ),
  )

export const createSensorEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(sensorActionTypes.CREATE_SENSOR),
    exhaustMap(({ payload }) =>
      ajax
        .post('v1/sensors', payload, {
          'Content-Type': 'application/json',
        })
        .pipe(
          tap(() => apiReponse.next(sensorActionTypes.CREATE_SENSOR_SUCCESS)),
          map(() => createSensorSuccessAction()),
          catchError(err => of(createSensorFailedAction(err))),
        ),
    ),
  )

export default [getSensorListEpic, createSensorEpic]
