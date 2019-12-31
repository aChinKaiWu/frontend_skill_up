import { combineReducers } from 'redux'
import scenarioReducer, { initSenarioState, ScenarioState } from './scenario/scenarioReducer'

export interface StoreState {
  scenario: ScenarioState
}

export const initialState: StoreState = {
  scenario: initSenarioState,
}

export default combineReducers({
  scenario: scenarioReducer,
})
