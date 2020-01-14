import {Sensor} from '../../model/sensor'

export const sensorsActionTypes = {
  GET: '😎sensors/GET_LIST',
  GET_SUCCESS: '😎sensors/GET_LIST_SUCCESS',
  GET_FAILED: '😎sensors/GET_LIST_FAILED',

  DELETE: '😎sensors/DELETE',
  DELETE_SUCCESS: '😎sensors/DELETE_SUCCESS',
  DELETE_FAILED: '😎sensors/DELETE_FAILED',
}

export const getSensorListAction = (payload: { skip: number; limit: number }) => ({
  type: sensorsActionTypes.GET,
  payload,
})

export const getSensorListSucccessAction = (payload: Sensor[]) => ({
  type: sensorsActionTypes.GET_SUCCESS,
  payload,
})

export const getSensorListFailedAction = (error: any) => ({
  type: sensorsActionTypes.GET_FAILED,
  error,
})
