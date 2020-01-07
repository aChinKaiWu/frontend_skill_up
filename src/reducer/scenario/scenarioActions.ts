// import { actionCreator } from '../actionUtils'
import { Scenario } from '../../model/scenario'

export const scenarioActionTypes = {
  DELETE_SCENARIO: 'scenario/DELETE',
  DELETE_SCENARIO_SUCCESS: 'scenario/DELETE_SUCCESS',
  DELETE_SCENARIO_FAILURE: 'scenario/DELETE_FAILURE',

  GET_SCENARIO_LIST: 'scenario/GET_LIST',
  GET_SCENARIO_LIST_SUCCESS: 'scenario/GET_LIST_SUCCESS',
  GET_SCENARIO_LIST_FAILURE: 'scenario/GET_LIST_FAILURE',

  // CREATE_SCENARIO: 'scenario/CREATE',
  // CREATE_SCENARIO_SUCCESS: 'scenario/CREATE_SUCCESS',
  // CREATE_SCENARIO_FAILURE: 'scenario/CREATE_FAILURE',
}

export const deleteScenario = (deletionIDs: number[]) => ({
  type: scenarioActionTypes.DELETE_SCENARIO,
  deletionIDs,
})

export const deleteScenarioSuccess = (deletionIDs: number[]) => ({
  type: scenarioActionTypes.DELETE_SCENARIO_SUCCESS,
  deletionIDs,
})

export const deleteScenarioFailure = (error: any) => ({
  type: scenarioActionTypes.DELETE_SCENARIO_FAILURE,
  error,
})

export const getScenarioList = () => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST,
})

export const getScenarioListSuccess = (payload: Scenario[]) => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST_SUCCESS,
  payload,
})

export const getScenarioListFailure = (error: any) => ({
  type: scenarioActionTypes.GET_SCENARIO_LIST_FAILURE,
  error,
})

// export const createScenario = () => ({
//   type: scenarioActionTypes.CREATE_SCENARIO,
// })

// export const createScenarioSuccess = () => ({
//   type: scenarioActionTypes.CREATE_SCENARIO_SUCCESS,
// })
// export const createScenarioFailure = () => ({
//   type: scenarioActionTypes.CREATE_SCENARIO_FAILURE,
// })

// export const getScenarioList = actionCreator<Scenario[]>(scenarioActionTypes.GET_SCENARIO_LIST)
// export const getScenarioListSuccess = actionCreator<Scenario[]>(scenarioActionTypes.GET_SCENARIO_LIST_SUCCESS)
// export const getScenarioListFailure = actionCreator(scenarioActionTypes.GET_SCENARIO_LIST_FAILURE)

// export const deleteScenario = actionCreator<number[]>(scenarioActionTypes.DELETE_SCENARIO)
// export const deleteScenarioSuccess = actionCreator<number[]>(scenarioActionTypes.DELETE_SCENARIO_SUCCESS)
// export const deleteScenarioFailure = actionCreator(scenarioActionTypes.DELETE_SCENARIO_FAILURE)
