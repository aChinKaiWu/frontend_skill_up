import { combineReducers } from 'redux'
import scenarioReducer, { initScenarioState, ScenarioState } from './scenario/scenarioReducer'

export interface StoreState {
  scenario: ScenarioState
}

export const initialState: StoreState = {
  scenario: initScenarioState,
}

export default combineReducers({
  scenario: scenarioReducer,
})
