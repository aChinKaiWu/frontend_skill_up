import { AnyAction } from 'redux'
import { sensorActionTypes } from './sensorActions'
import { Sensor } from '../../model/sensor'

export interface SensorState {
  sensorList: Sensor[]
}

export const sensorInitSate: SensorState = {
  sensorList: [],
}

export default function sensorReducer(state: SensorState = sensorInitSate, action: AnyAction) {
  switch (action.type) {
    case sensorActionTypes.GET_SENSOR_LIST_SUCCESS:
      return {
        ...state,
        sensorList: action.payload,
      }
    default:
      return state
  }
}
