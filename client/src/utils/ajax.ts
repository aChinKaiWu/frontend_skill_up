import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {},
})

export const setAxiosToken = (token: string) => {
  axiosInstance.defaults.headers.common['Authorization'] = token
}

export const removeAxiosToken = () => {
  delete axiosInstance.defaults.headers.common['Authorization']
}

export type HttpResponse<T> = {
  status: number
  data: T
}

export default axiosInstance
