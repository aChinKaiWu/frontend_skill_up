import { ScenarioList } from '../../model/scenario'

export const scenarioActionTypes = {
  GET_SCENARIO_LIST: '😎scenarios/GET_LIST',
  GET_SCENARIO_LIST_SUCCESS: '😎scenarios/GET_LIST_SUCCESS',

  DELETE_SCENARIO: '😎scenarios/DELETE',
  DELETE_SCENARIO_SUCCESS: '😎scenarios/DELETE_SUCCESS',
}

export const getScenarioListAction = () => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST,
})
export const getScenarioListSuccessAction = (payload: ScenarioList) => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST_SUCCESS,
  payload,
})

export const deleteScenarioAction = (payload: number[]) => ({
  type: scenarioActionTypes.DELETE_SCENARIO,
  payload,
})
export const deleteScenarioSuccessAction = (payload: ScenarioList) => ({
  type: scenarioActionTypes.DELETE_SCENARIO_SUCCESS,
  payload,
})
