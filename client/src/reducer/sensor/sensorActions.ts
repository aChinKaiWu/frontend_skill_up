import { SensorList } from '../../model/sensor'

export const sensorActionTypes = {
  GET_SENSOR_LIST: '😎sensors/GET_LIST',
  GET_SENSOR_LIST_SUCCESS: '😎sensors/GET_LIST_SUCCESS',
  GET_SENSOR_LIST_FAILURE: '😎sensors/GET_LIST_FAILURE',
}

export const getSensorListAction = () => ({
  type: sensorActionTypes.GET_SENSOR_LIST,
})
export const getSensorListSuccessAction = (payload: SensorList) => ({
  type: sensorActionTypes.GET_SENSOR_LIST_SUCCESS,
  payload,
})
export const getSensorListFailureAction = (error: any) => ({
  type: sensorActionTypes.GET_SENSOR_LIST_FAILURE,
  error,
})


