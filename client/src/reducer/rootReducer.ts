import { combineReducers } from 'redux'
import scenarioReducer, { scenarioInitSate, ScanrioState } from './scenario/scenarioReducer'
import sensorReducer, { sensorInitSate, SensorState } from './sensor/sensorReducer'

export interface StoreState {
  scenario: ScanrioState
  sensor: SensorState
}

export const initStoreState: StoreState = {
  scenario: scenarioInitSate,
  sensor: sensorInitSate,
}

export default combineReducers({
  scenario: scenarioReducer,
  sensor: sensorReducer,
})
