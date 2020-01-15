import { ActionsObservable, ofType } from 'redux-observable'
import { ajax, AjaxResponse } from 'rxjs/ajax'
import { AnyAction } from 'redux'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { sensorActionTypes, getSensorListFailure, getSensorListSuccess } from '../../reducer/sensor/sensorAction'

export const getSensorEpic = (action$: ActionsObservable<AnyAction>) =>
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

export default [getSensorEpic]
