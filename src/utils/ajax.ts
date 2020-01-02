import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://svelte-functions.cruzshia.now.sh',
  headers: {},
})

export const setAxiosHost = (hostUrl: string) => {
  axiosInstance.defaults.baseURL = hostUrl
}

export const setAxiosToken = (token: string) => {
  axiosInstance.defaults.headers.common['Authorization'] = token
}

export const removeAxiosToken = () => {
  delete axiosInstance.defaults.headers.common['Authorization']
}

export default axiosInstance
