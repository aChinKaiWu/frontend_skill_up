import { combineReducers } from 'redux'
import scenario, { ScenarioInitState, ScenarioState } from './scenario/scenarioReducer'
import sensor, { SensorInitState, SensorState } from './sensor/sensorReducer'

export interface storeState {
  scenario: ScenarioState
  sensor: SensorState
}

export const initialState = { scenario: ScenarioInitState, sensor: SensorInitState }

export default combineReducers({
  scenario,
  sensor,
})
