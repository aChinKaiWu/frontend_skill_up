import { Scenario } from '../../model/scenario'

export const scenarioActionTypes = {
  GET_SCENARIO_LIST: '@scenarios/GET_LIST',
  GET_SCENARIO_LIST_SUCCESS: '@scenarios/GET_LIST_SUCCESS',

  DELETE_SCENARIO_LIST: '@scenarios/DELETE_LIST',
  DELETE_SCENARIO_LIST_SUCCESS: '@scenarios/DELETE_LIST_SUCCESS'
}

export const getScenarioListAction = () => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST
})

export const getScenarioListSuccessAction = (payload: Scenario[]) => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST_SUCCESS,
  payload,
})

export const deleteScenarioList = (payload: number[]) => ({
  type: scenarioActionTypes.DELETE_SCENARIO_LIST,
  payload,
})
