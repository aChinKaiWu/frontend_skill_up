import scenarioReducer, { ScenarioState } from '../reducer/scenario/scenarioReducer'
import { combineReducers } from 'redux'

export interface StoreState {
  scenario: ScenarioState
}

export default combineReducers({ scenario: scenarioReducer })
