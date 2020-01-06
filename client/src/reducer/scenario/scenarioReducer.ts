import { AnyAction } from 'redux'
import { scenarioActionTypes } from './scenarioActions'
import { Scenario } from '../../model/scenario'

export interface ScanrioState {
  scenarioList: Scenario[]
}

export const scenarioInitSate: ScanrioState = {
  scenarioList: [],
}

export default function scenarioReducer(state: ScanrioState = scenarioInitSate, action: AnyAction) {
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
    default:
      return state
  }
}
