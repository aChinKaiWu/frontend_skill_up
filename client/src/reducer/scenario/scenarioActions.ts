import { ScenarioList, DeleteScenarioData } from '../../model/scenario'

export const scenarioActionTypes = {
  GET_SCENARIO_LIST: '😎scenarios/GET_LIST',
  GET_SCENARIO_LIST_SUCCESS: '😎scenarios/GET_LIST_SUCCESS',
  GET_SCENARIO_LIST_FAILURE: '😎scenarios/GET_LIST_FAILURE',

  DELETE_SCENARIO: '😎scenarios/DELETE',
  DELETE_SCENARIO_SUCCESS: '😎scenarios/DELETE_SUCCESS',
  DELETE_SCENARIO_FAILURE: '😎scenarios/DELETE_FAILURE',
}

export const getScenarioListAction = () => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST,
})
export const getScenarioListSuccessAction = (payload: ScenarioList) => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST_SUCCESS,
  payload,
})
export const getScenarioListFailureAction = (error: any) => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST_FAILURE,
  error,
})

export const deleteScenarioAction = (payload: DeleteScenarioData) => ({
  type: scenarioActionTypes.DELETE_SCENARIO,
  payload,
})
export const deleteScenarioSuccessAction = (payload: ScenarioList) => ({
  type: scenarioActionTypes.DELETE_SCENARIO_SUCCESS,
  payload,
})
export const deleteScenarioFailureAction = (error: any) => ({
  type: scenarioActionTypes.DELETE_SCENARIO_FAILURE,
  error,
})
