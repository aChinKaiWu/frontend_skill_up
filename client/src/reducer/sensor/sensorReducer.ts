import { AnyAction } from 'redux'
import { sensorsActionTypes } from './sensorActions'
import { Sensor } from '../../model/sensor'

export interface SensorState {
  sensorList: Sensor[]
}

export const SensorInitState = { sensorList: [] }

export default function sensorReducer(state: SensorState = SensorInitState, action: AnyAction) {
  switch (action.type) {
    case sensorsActionTypes.GET_SUCCESS:
      return { ...state, sensorList: action.payload }
    default:
      return state
  }
}
