import { ActionsObservable, ofType } from 'redux-observable'
import { ajax, AjaxResponse } from 'rxjs/ajax'
import { AnyAction } from 'redux'
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators'
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
      ajax.post('/v1/sensors', action.payload).pipe(map((res: AjaxResponse) => createSensorSuccess(res.response))),
    ),
    catchError(err => of(createSensorFailure(err))),
  )

const getSensorEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(sensorActionTypes.GET_SENSOR_LIST),
    switchMap(() =>
      ajax.get('/v1/sensors').pipe(
        map((res: AjaxResponse) => {
          return getSensorListSuccess(res.response)
        }),
        catchError(err => of(getSensorListFailure(err))),
      ),
    ),
  )

export default [createSensorEpic, getSensorEpic]
