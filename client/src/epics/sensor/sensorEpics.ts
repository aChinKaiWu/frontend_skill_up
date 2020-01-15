import { ActionsObservable, ofType } from 'redux-observable'
import { ajax, AjaxResponse } from 'rxjs/ajax'
import { AnyAction } from 'redux'
import { apiResponse } from '../utils'
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators'
import {
  createSensorFailure,
  createSensorSuccess,
  sensorActionTypes,
  getSensorListFailure,
  getSensorListSuccess,
} from '../../reducer/sensor/sensorAction'
import { of } from 'rxjs'

const createSensorEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(sensorActionTypes.CREATE_SENSOR),
    exhaustMap(action =>
      ajax.post('/v1/sensors', action.payload).pipe(
        tap(() => apiResponse.next(sensorActionTypes.CREATE_SENSOR_SUCCESS)),
        map((res: AjaxResponse) => createSensorSuccess(res.response)),
      ),
    ),
    catchError(err => of(createSensorFailure(err))),
  )

const getSensorEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(sensorActionTypes.GET_SENSOR_LIST),
    switchMap(({ payload: { skip, limit } }) =>
      ajax.get(`/v1/sensors?skip=${skip}&limit=${limit}`).pipe(
        map((res: AjaxResponse) => {
          return getSensorListSuccess(res.response)
        }),
        catchError(err => of(getSensorListFailure(err))),
      ),
    ),
  )

export default [createSensorEpic, getSensorEpic]
