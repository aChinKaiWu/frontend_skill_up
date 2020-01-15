import { Scenario, ScenarioCreateParams } from '../../model/scenario'

export const scenarioActionTypes = {
  CREATE_SCENARIO: 'scenario/CREATE',
  CREATE_SCENARIO_SUCCESS: 'scenario/CREATE_SUCCESS',
  CREATE_SCENARIO_FAILURE: 'scenario/CREATE_FAILURE',

  DELETE_SCENARIO: 'scenario/DELETE',
  DELETE_SCENARIO_SUCCESS: 'scenario/DELETE_SUCCESS',
  DELETE_SCENARIO_FAILURE: 'scenario/DELETE_FAILURE',

  GET_SCENARIO_LIST: 'scenario/GET_LIST',
  GET_SCENARIO_LIST_SUCCESS: 'scenario/GET_LIST_SUCCESS',
  GET_SCENARIO_LIST_FAILURE: 'scenario/GET_LIST_FAILURE',
}

export const createScenario = (scenarioBase: ScenarioCreateParams) => ({
  type: scenarioActionTypes.CREATE_SCENARIO,
  payload: scenarioBase,
})

export const createScenarioSuccess = (scenario: Scenario[]) => ({
  type: scenarioActionTypes.CREATE_SCENARIO_SUCCESS,
  payload: scenario,
})
export const createScenarioFailure = (error: any) => ({
  type: scenarioActionTypes.CREATE_SCENARIO_FAILURE,
  payload: error,
})

export const deleteScenario = (deletionIDs: number[]) => ({
  type: scenarioActionTypes.DELETE_SCENARIO,
  payload: deletionIDs,
})

export const deleteScenarioSuccess = (deletionIDs: number[]) => ({
  type: scenarioActionTypes.DELETE_SCENARIO_SUCCESS,
  payload: deletionIDs,
})

export const deleteScenarioFailure = (error: any) => ({
  type: scenarioActionTypes.DELETE_SCENARIO_FAILURE,
  payload: error,
})

export const getScenarioList = () => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST,
})

export const getScenarioListSuccess = (scenarioList: Scenario[]) => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST_SUCCESS,
  payload: scenarioList,
})

export const getScenarioListFailure = (error: any) => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST_FAILURE,
  payload: error,
})
