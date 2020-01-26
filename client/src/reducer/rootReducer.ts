import { combineReducers } from 'redux'
import scenarioReducer, { scenarioInitState, ScenarioState } from '../reducer/scenario/scenarioReducer'
import sensorReducer, { sensorInitState, SensorState } from '../reducer/sensor/sensorReducer'

export interface StoreState {
  scenario: ScenarioState
  sensor: SensorState
}

export const initStoreState: StoreState = {
  scenario: scenarioInitState,
  sensor: sensorInitState,
}

export default combineReducers({
  scenario: scenarioReducer,
  sensor: sensorReducer,
})
