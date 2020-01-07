import { AnyAction } from 'redux'
import { scenarioActionTypes } from './scenarioActions'
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
    case scenarioActionTypes.DELETE_SCENARIO_SUCCESS:
      return {
        ...state,
        scenarioList: state.scenarioList.filter(scenario => !action.payload.includes(scenario.id)),
      }
    case scenarioActionTypes.GET_SCENARIO_LIST_FAILURE:
    default:
      return state
  }
}