import { Sensor, SensorCreateParams } from '../../model/sensor'

export const sensorActionTypes = {
  CREATE_SENSOR: 'sensor/CREATE',
  CREATE_SENSOR_SUCCESS: 'sensor/CREATE_SUCCESS',
  CREATE_SENSOR_FAILURE: 'sensor/CREATE_FAILURE',

  GET_SENSOR_LIST: 'sensor/GET_LIST',
  GET_SENSOR_LIST_SUCCESS: 'sensor/GET_LIST_SUCCESS',
  GET_SENSOR_LIST_FAILURE: 'sensor/GET_LIST_FAILURE',
}

export const createSensor = (sensorBase: SensorCreateParams) => ({
  type: sensorActionTypes.CREATE_SENSOR,
  payload: sensorBase,
})

export const createSensorSuccess = (sensor: Sensor) => ({
  type: sensorActionTypes.CREATE_SENSOR_SUCCESS,
  payload: sensor,
})

export const createSensorFailure = (error: any) => ({
  type: sensorActionTypes.CREATE_SENSOR,
  payload: error,
})

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
