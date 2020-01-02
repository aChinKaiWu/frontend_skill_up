import { Scenario } from '../../model/scenario'

export const scenarioActionTypes = {
  GET_SCENARIO_LIST: '😎scenarios/GET_LIST',
  GET_SCENARIO_LIST_SUCCESS: '😎scenarios/GET_LIST_SUCCESS',
  GET_SCENARIO_LIST_FAILED: '😎scenarios/GET_SCENARIO_LIST_FAILED',

  DELETE_SCENARIO: '😎scenarios/DELETE',
  DELETE_SCENARIO_SUCCESS: '😎scenarios/DELETE_SUCCESS',
  DELETE_SCENARIO_FAILED: '😎scenarios/DELETE_SCENARIO_FAILED',
}

export const getScenarioListAction = () => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST,
})

export type ScenarioList = Scenario[]
export const getScenarioListSuccessAction = (payload: ScenarioList) => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST_SUCCESS,
  payload,
})

export const getScenarioListFailedAction = (error: any) => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST_FAILED,
  error,
})

export type DeleteScenarioData = number[]
export const deleteScenariosAction = (payload: DeleteScenarioData) => ({
  type: scenarioActionTypes.DELETE_SCENARIO,
  payload,
})

export const deleteScenariosSuccessAction = (payload: DeleteScenarioData) => ({
  type: scenarioActionTypes.DELETE_SCENARIO_SUCCESS,
  payload,
})

export const deleteScenariosFailedActionAction = (error: any) => ({
  type: scenarioActionTypes.DELETE_SCENARIO_SUCCESS,
  error,
})
