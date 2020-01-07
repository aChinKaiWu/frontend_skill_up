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
    case scenarioActionTypes.DELETE_SCENARIO_SUCCESS: {
      return {
        ...state,
        scenarioList: state.scenarioList.filter((scenario: Scenario) => !action.deletionIDs.includes(scenario.id)),
      }
    }
    case scenarioActionTypes.GET_SCENARIO_LIST_SUCCESS: {
      return {
        ...state,
        scenarioList: action.payload,
      }
    }
    default:
      return state
  }
}
