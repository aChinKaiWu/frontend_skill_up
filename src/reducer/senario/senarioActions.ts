import { actionCreator } from '../actionUtils'
import { Scenario } from '../../model/scenario'

export const SENARIO_ACTION_TYPES = {
  GET_SENARIO_LIST: '@SENARIO/GET_SENARIO_LIST',
  GET_SENARIO_LIST_FAILED: '@SENARIO/GET_SENARIO_LIST_FAILED',
  SET_SENARIO_LIST: '@SENARIO/SET_SENARIO_LIST',

  DELETE_SENARIO: '@SENARIO/DELETE_SENARIO',
  DELETE_SENARIO_SUCCESS: '@SENARIO/DELETE_SENARIO_SUCCESS',
  DELETE_SENARIO_FAILED: '@SENARIO/DELETE_SENARIO_FAILED',
}

export const getSenarioAct = actionCreator(SENARIO_ACTION_TYPES.GET_SENARIO_LIST)
export const getSenarioFailedAct = actionCreator(SENARIO_ACTION_TYPES.GET_SENARIO_LIST_FAILED)
export const setSenarioAct = actionCreator<Scenario[]>(SENARIO_ACTION_TYPES.SET_SENARIO_LIST)

export type DeleteSenarioData = number[]
export const deleteSenarioAct = actionCreator<DeleteSenarioData>(SENARIO_ACTION_TYPES.DELETE_SENARIO)
export const deleteSenarioSuccessAct = actionCreator<DeleteSenarioData>(SENARIO_ACTION_TYPES.DELETE_SENARIO_SUCCESS)
export const deleteSenarioFailedAct = actionCreator(SENARIO_ACTION_TYPES.DELETE_SENARIO_FAILED)
