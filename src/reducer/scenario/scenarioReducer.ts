import { AnyAction } from 'redux'
import { SCENARIO_ACTION_TYPES } from './scenarioActions'
import { Scenario } from '../../model/scenario'

export interface ScenarioState {
  scenarioList: Scenario[]
}

export const initScenarioState = {
  scenarioList: [],
}

const { GET_SCENARIO_LIST_SUCCESS, DELETE_SCENARIO_SUCCESS } = SCENARIO_ACTION_TYPES
const handlers: Record<string, Function> = {
  [GET_SCENARIO_LIST_SUCCESS]: (state: ScenarioState, action: AnyAction) => ({
    ...state,
    scenarioList: action.payload,
  }),
  [DELETE_SCENARIO_SUCCESS]: (state: ScenarioState, action: AnyAction) => ({
    ...state,
    scenarioList: state.scenarioList.filter((scenario: Scenario) => !action.payload.includes(scenario.id)),
  }),
}

export default function scenarioReducer(state = initScenarioState, action: AnyAction) {
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action)
  }
  return state
}
