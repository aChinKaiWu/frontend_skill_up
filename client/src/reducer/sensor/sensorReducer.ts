import { AnyAction } from 'redux'
import { Sensor } from '../../model/sensor'
import { sensorActionTypes } from './sensorAction'

export interface SensorState {
  sensorList: Sensor[]
}

const initState: SensorState = {
  sensorList: [],
}

export default function sensorReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case sensorActionTypes.CREATE_SENSOR_SUCCESS: {
      return {
        ...state,
        sensorList: [...state.sensorList, action.payload],
      }
    }
    case sensorActionTypes.GET_SENSOR_LIST_SUCCESS: {
      return {
        ...state,
        sensorList: action.payload,
      }
    }
    default:
      return state
  }
}
