import { createEvent, createEffect } from 'effector'
import { AxiosResponse } from 'axios'
import { Scenario } from '../../model/scenario'
import axiosInstance from '../../utils/ajax'

const API_PATH = '/api/scenarios'

export const getScenarioList = createEffect<void, AxiosResponse<{ scenarios: Scenario[] }>>('GET_SCEANARIO_LIST', {
  handler: () => axiosInstance.get(API_PATH),
})

export const deleteScenarios = createEffect<number[], AxiosResponse<{ message?: string }>>('DELETE_SCENARIOS', {
  handler: (ids: number[]) => axiosInstance.delete(`${API_PATH}?ids=${ids.join(',')}`),
})

export const updateScenario = createEvent('UPDATE_SCENARIO')
export const createScenario = createEvent('CREATE_SCENARIO')
