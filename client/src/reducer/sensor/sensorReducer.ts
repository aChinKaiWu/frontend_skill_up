import { AnyAction } from 'redux'
import { sensorActionTypes } from './sensorActions'
import { SensorList } from '../../model/sensor'

export interface SensorState {
  sensorList: SensorList
}

export const sensorInitState: SensorState = {
  sensorList: [],
}

export default function sensorReducer(state: SensorState = sensorInitState, action: AnyAction) {
  switch (action.type) {
    case sensorActionTypes.GET_SENSOR_LIST_SUCCESS:
      return {
        ...state,
        sensorList: action.payload,
      }
    case sensorActionTypes.GET_SENSOR_LIST_FAILURE:
    default:
      return state
  }
}
