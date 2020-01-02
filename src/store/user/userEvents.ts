import { createEffect } from 'effector'
import { AxiosResponse } from 'axios'
import { User } from '../../model/user'
import axiosInstance from '../../utils/ajax'

const API_PATH = '/api/user'

export const getUserProfile = createEffect<void, AxiosResponse<User>>('GET_USER_PROFILE', {
  handler: () => axiosInstance.get(API_PATH),
})
