import { AnyAction } from 'redux'
import { scenarioActionTypes } from './scenarioAction'
import { ScenarioList } from '../../model/scenario'

export interface ScenarioState {
  scenarioList: ScenarioList
}

export const scenarioInitState: ScenarioState = {
  scenarioList: [],
}

export default function scenarioReducer(state: ScenarioState = scenarioInitState, action: AnyAction) {
  switch (action.type) {
    case scenarioActionTypes.GET_SCENARIO_LIST_SUCCESS:
      return {
        ...state,
        scenarioList: action.payload,
      }
    default:
      return state
  }
}
