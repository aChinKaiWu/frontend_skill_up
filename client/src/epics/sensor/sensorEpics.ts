import { ActionsObservable, ofType } from 'redux-observable'
import { AnyAction } from 'redux'
import { sensorsActionTypes, getSensorListSucccessAction, getSensorListFailedAction } from '../../reducer/sensor/sensorActions'
import { exhaustMap, map, catchError } from 'rxjs/operators'
import { ajax, AjaxResponse } from 'rxjs/ajax'
import { of } from 'rxjs'

const getSensorEpics = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(sensorsActionTypes.GET),
    exhaustMap(({ payload: { skip, limit } }) =>
      ajax(`v1/sensors?skip=${skip}&limit=${limit}`).pipe(
        map((res: AjaxResponse) => getSensorListSucccessAction(res.response)),
        catchError(err => of(getSensorListFailedAction(err))),
      ),
    ),
  )

export default [getSensorEpics]