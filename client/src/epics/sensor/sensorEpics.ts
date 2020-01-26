import { AnyAction } from 'redux'
import { ActionsObservable, ofType } from 'redux-observable'
import { of } from 'rxjs'
import { ajax, AjaxResponse } from 'rxjs/ajax'
import { catchError, exhaustMap, map } from 'rxjs/operators'

import {
  getSensorListFailureAction,
  getSensorListSuccessAction,
  sensorActionTypes,
} from '../../reducer/sensor/sensorActions'

export const getSensorListEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(sensorActionTypes.GET_SENSOR_LIST),
    exhaustMap(() =>
      ajax.get('/v1/sensors/').pipe(
        map((res: AjaxResponse) => getSensorListSuccessAction(res.response)),
        catchError(err => of(getSensorListFailureAction(err))),
      ),
    ),
  )

export default [getSensorListEpic]
