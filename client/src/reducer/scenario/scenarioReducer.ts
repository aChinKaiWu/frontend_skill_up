import { AnyAction } from 'redux'
import { Scenario } from '../../model/scenario'
import { scenarioActionTypes } from './scenarioActions'

export interface ScenarioState {
  scenarioList: Scenario[]
}

const initState: ScenarioState = {
  scenarioList: [],
}

export default function scenarioReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case scenarioActionTypes.CREATE_SCENARIO_SUCCESS: {
      const currentScenarioList = [...state.scenarioList]
      currentScenarioList.push(action.payload)
      return {
        ...state,
        scenarioList: currentScenarioList,
      }
    }
    case scenarioActionTypes.GET_SCENARIO_LIST_SUCCESS: {
      return {
        ...state,
        scenarioList: action.payload,
      }
    }
    case scenarioActionTypes.DELETE_SCENARIO_SUCCESS: {
      return {
        ...state,
        scenarioList: state.scenarioList.filter((scenario: Scenario) => !action.payload.includes(scenario.id)),
      }
    }
    default:
      return state
  }
}
