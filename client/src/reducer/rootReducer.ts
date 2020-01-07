import { combineReducers } from 'redux'
import scenario, { ScenarioInitState, ScenarioState } from './scenario/scenarioReducer'

export interface storeState {
  scenario: ScenarioState
}

export const initialState = { scenario: ScenarioInitState }

export default combineReducers({
  scenario,
})
