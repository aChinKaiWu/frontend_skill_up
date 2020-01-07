import { AnyAction } from 'redux'
import {
  sensorActionTypes,
  getSensorListSuccessAction,
  getSensorListFailedAction,
} from '../../reducer/sensor/sensorActions'
import { ActionsObservable, ofType } from 'redux-observable'
import { of } from 'rxjs'
import { catchError, exhaustMap, map } from 'rxjs/operators'
import { ajax, AjaxResponse } from 'rxjs/ajax'

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

export default [getSensorListEpic]
