import { AnyAction } from 'redux'
import { Scenario } from '../../model/scenario'
import { scenarioActionTypes } from './scenarioActions'

export interface ScenarioState {
  scenarioList: Scenario[]
}

export const scenarioInitState: ScenarioState = {
  scenarioList: []
}

export default function scenarioReducer(state: ScenarioState = scenarioInitState, action: AnyAction) {
  switch(action.type) {
    case scenarioActionTypes.GET_SCENARIO_LIST_SUCCESS:
      return {
        ...state,
        scenarioList: action.payload,
      }
    default:
      return state
  }
}