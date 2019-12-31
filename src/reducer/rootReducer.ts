import { combineReducers } from 'redux'
import scenarioReducer, { scenarioInitSate, ScanrioState } from './scenario/scenarioReducer'

export interface StoreState {
  scenario: ScanrioState
}

export const initStoreState: StoreState = {
  scenario: scenarioInitSate,
}

export default combineReducers({
  scenario: scenarioReducer,
})
