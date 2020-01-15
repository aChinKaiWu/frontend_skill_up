import scenarioReducer, { ScenarioState } from './scenario/scenarioReducer'
import sensorReducer, { SensorState } from './sensor/sensorReducer'
import { combineReducers } from 'redux'

export interface StoreState {
  scenario: ScenarioState
  sensor: SensorState
}

export default combineReducers({ scenario: scenarioReducer, sensor: sensorReducer })
