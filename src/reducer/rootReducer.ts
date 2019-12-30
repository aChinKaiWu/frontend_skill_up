import { combineReducers } from 'redux'
import senarioReducer, { initSenarioState, ScenarioState } from './senario/senarioReducer'

export interface StoreState {
  senario: ScenarioState
}

export const initialState: StoreState = {
  senario: initSenarioState,
}

export default combineReducers({
  senario: senarioReducer,
})
