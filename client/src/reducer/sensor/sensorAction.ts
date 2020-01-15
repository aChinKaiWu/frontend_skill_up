import { Sensor } from '../../model/sensor'

export const sensorActionTypes = {
  GET_SENSOR_LIST: 'sensor/GET_LIST',
  GET_SENSOR_LIST_SUCCESS: 'sensor/GET_LIST_SUCCESS',
  GET_SENSOR_LIST_FAILURE: 'sensor/GET_LIST_FAILURE',
}

export const getSensorList = () => ({
  type: sensorActionTypes.GET_SENSOR_LIST,
})

export const getSensorListSuccess = (sensorList: Sensor[]) => ({
  type: sensorActionTypes.GET_SENSOR_LIST_SUCCESS,
  payload: sensorList,
})
export const getSensorListFailure = (error: any) => ({
  type: sensorActionTypes.GET_SENSOR_LIST_FAILURE,
  payload: error,
})
