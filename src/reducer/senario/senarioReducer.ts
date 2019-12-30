import { AnyAction } from 'redux'
import { SENARIO_ACTION_TYPES } from './senarioActions'
import { Scenario } from '../../model/scenario'

export interface ScenarioState {
  senarioList: Scenario[]
}

export const initSenarioState = {
  senarioList: [],
}

export default function senarioReducer(state = initSenarioState, action: AnyAction) {
  switch (action.type) {
    case SENARIO_ACTION_TYPES.SET_SENARIO_LIST:
      return {
        ...state,
        senarioList: action.data,
      }
    case SENARIO_ACTION_TYPES.DELETE_SENARIO_SUCCESS:
      return {
        ...state,
        senarioList: state.senarioList.filter((senario: Scenario) => !action.data.includes(senario.id)),
      }
    default:
      return state
  }
}
