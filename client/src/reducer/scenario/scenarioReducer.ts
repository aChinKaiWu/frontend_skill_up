import { Scenario } from '../../model/scenario'
import { AnyAction } from 'redux'
import { scenarioActionTypes } from './scenarioActions'

export interface ScenarioState {
  scenarioList: Scenario[]
}

export const ScenarioInitState = {
  scenarioList: [],
}

export default function scenarioReducer(state: ScenarioState = ScenarioInitState, action: AnyAction) {
  switch (action.type) {
    case scenarioActionTypes.GET_SUCCESS:
      return {
        ...state,
        scenarioList: action.payload,
      }
    default:
      return state
  }
}
