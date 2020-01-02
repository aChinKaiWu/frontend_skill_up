import { AnyAction } from 'redux'
import { SCENARIO_ACTION_TYPES } from './scenarioActions'
import { Scenario } from '../../model/scenario'

export interface ScenarioState {
  scenarioList: Scenario[]
}

export const initSenarioState = {
  scenarioList: [],
}

export default function scenarioReducer(state = initSenarioState, action: AnyAction) {
  switch (action.type) {
    case SCENARIO_ACTION_TYPES.GET_SCENARIO_LIST_SUCCESS:
      return {
        ...state,
        scenarioList: action.payload,
      }
    case SCENARIO_ACTION_TYPES.DELETE_SCENARIO_SUCCESS:
      return {
        ...state,
        scenarioList: state.scenarioList.filter((senario: Scenario) => !action.payload.includes(senario.id)),
      }
    default:
      return state
  }
}
