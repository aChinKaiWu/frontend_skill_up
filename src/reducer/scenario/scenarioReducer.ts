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
    default:
      return state
  }
}
