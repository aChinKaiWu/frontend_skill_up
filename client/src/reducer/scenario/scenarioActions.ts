import { actionCreator, pureActionCreator } from '../actionUtils'
import { Scenario } from '../../model/scenario'

export const SCENARIO_ACTION_TYPES = {
  GET_SCENARIO_LIST: '@SCENARIO/GET_LIST',
  GET_SCENARIO_LIST_SUCCESS: '@SCENARIO/GET_LIST_SUCCESS',
  GET_SCENARIO_LIST_FAILED: '@SCENARIO/GET_LIST_FAILED',

  DELETE_SCENARIO: '@SCENARIO/DELETE_SCENARIO',
  DELETE_SCENARIO_SUCCESS: '@SCENARIO/DELETE_SUCCESS',
  DELETE_SCENARIO_FAILED: '@SCENARIO/DELETE_FAILED',
}

export const getScenarioAct = pureActionCreator(SCENARIO_ACTION_TYPES.GET_SCENARIO_LIST)
export const getScenarioFailedAct = pureActionCreator(SCENARIO_ACTION_TYPES.GET_SCENARIO_LIST_FAILED)
export const getScenarioSuccessAct = actionCreator<Scenario[]>(SCENARIO_ACTION_TYPES.GET_SCENARIO_LIST_SUCCESS)

export type DeleteScenarioData = number[]
export const deleteScenarioAct = actionCreator<DeleteScenarioData>(SCENARIO_ACTION_TYPES.DELETE_SCENARIO)
export const deleteScenarioSuccessAct = actionCreator<DeleteScenarioData>(SCENARIO_ACTION_TYPES.DELETE_SCENARIO_SUCCESS)
export const deleteScenarioFailedAct = pureActionCreator(SCENARIO_ACTION_TYPES.DELETE_SCENARIO_FAILED)
