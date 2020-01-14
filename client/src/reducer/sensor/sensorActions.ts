import { Sensor, SensorRequestBody } from '../../model/sensor'

export const sensorActionTypes = {
  GET_SENSOR_LIST: '😎sensors/GET_LIST',
  GET_SENSOR_LIST_SUCCESS: '😎sensors/GET_LIST_SUCCESS',
  GET_SENSOR_LIST_FAILED: '😎sensors/GET_SENSOR_LIST_FAILED',
  CREATE_SENSOR: '😎sensors/CREATE',
  CREATE_SENSOR_SUCCESS: '😎sensors/CREATE_SUCCESS',
  CREATE_SENSOR_FAILED: '😎sensors/CREATE_FAILED',
}

export const getSensorListAction = (payload: { skip: number; limit: number }) => ({
  type: sensorActionTypes.GET_SENSOR_LIST,
  payload,
})

export type SensorList = Sensor[]
export const getSensorListSuccessAction = (payload: SensorList) => ({
  type: sensorActionTypes.GET_SENSOR_LIST_SUCCESS,
  payload,
})

export const getSensorListFailedAction = (error: any) => ({
  type: sensorActionTypes.GET_SENSOR_LIST_FAILED,
  error,
})

export const createSensorAction = (payload: SensorRequestBody) => ({
  type: sensorActionTypes.CREATE_SENSOR,
  payload,
})

export const createSensorSuccessAction = () => ({
  type: sensorActionTypes.CREATE_SENSOR_SUCCESS,
})

export const createSensorFailedAction = (error: any) => ({
  type: sensorActionTypes.CREATE_SENSOR_FAILED,
  error,
})
