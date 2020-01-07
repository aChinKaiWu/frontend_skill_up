import { Scenario } from '../../model/scenario'

export const scenarioActionTypes = {
  GET: '😎scenarios/GET_LIST',
  GET_SUCCESS: '😎scenarios/GET_LIST_SUCCESS',
  GET_FAILED: '😎scenarios/GET_SCENARIO_LIST_FAILED',

  DELETE: '😎scenarios/DELETE',
  DELETE_SUCCESS: '😎scenarios/DELETE_SUCCESS',
  DELETE_FAILED: '😎scenarios/DELETE_SCENARIO_FAILED',
}

export const getScenarioListAction = () => ({
  type: scenarioActionTypes.GET,
})

export type ScenarioList = Scenario[]
export const getScenarioListSuccessAction = (payload: ScenarioList) => ({
  type: scenarioActionTypes.GET_SUCCESS,
  payload,
})

export const getScenarioListFailedAction = (error: any) => ({
  type: scenarioActionTypes.GET_FAILED,
  error,
})

export type DeleteScenarioData = number[]
export const deleteScenariosAction = (payload: DeleteScenarioData) => ({
  type: scenarioActionTypes.DELETE,
  payload,
})

export const deleteScenariosSuccessAction = (payload: DeleteScenarioData) => ({
  type: scenarioActionTypes.DELETE_SUCCESS,
  payload,
})

export const deleteScenariosFailedAction = (error: any) => ({
  type: scenarioActionTypes.DELETE_FAILED,
  error,
})