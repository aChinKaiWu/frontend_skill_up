import { Scenario } from '../../model/scenario'

export const scenarioActionTypes = {
  GET_SCENARIO_LIST: '😎scenarios/GET_LIST',
  GET_SCENARIO_LIST_SUCCESS: '😎scenarios/GET_LIST_SUCCESS',

  DELETE_SCENARIO: '😎scenarios/DELETE',
  DELETE_SCENARIO_SUCCESS: '😎scenarios/DELETE_SUCCESS',
}

export const getScenarioListAction = () => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST,
})

export type ScenarioList = Scenario[]
export const getScenarioListSuccessAction = (payload: Scenario[]) => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST_SUCCESS,
  payload,
})

export type DeleteScenarioData = number[]
export const deleteScenarios = (payload: DeleteScenarioData) => ({
  type: scenarioActionTypes.DELETE_SCENARIO,
  payload,
})
