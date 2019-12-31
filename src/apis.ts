import superagent from 'superagent'
import queryString from 'query-string'

const API_ENDPOINT = 'https://svelte-functions.cruzshia.now.sh/api'

const handleErrors = (err: Error) => console.log(err)
const handleResponse = (res: any) => res.body

const requests = {
  del: (url: string, query: any = {}) =>
    superagent
      .del(`${API_ENDPOINT}${url}?${queryString.stringify(query)}`)
      .then(handleResponse)
      .catch(handleErrors),
  get: (url: string, query: any = {}) =>
    superagent
      .get(`${API_ENDPOINT}${url}?${queryString.stringify(query)}`)
      .then(handleResponse)
      .catch(handleErrors),
  put: (url: string, body: any) =>
    superagent
      .put(`${API_ENDPOINT}${url}`, body)
      .then(handleResponse)
      .catch(handleErrors),
  post: (url: string, body: any) =>
    superagent
      .post(`${API_ENDPOINT}${url}`, body)
      .then(handleResponse)
      .catch(handleErrors),
}

export const Scenario = {
  getList: (): Promise<any> =>
    requests.get(`/scenarios`),
  deleteList: (scenarioIDs: number[]): Promise<any> =>
    requests.del(`/scenarios`, { ids: scenarioIDs.join(',') })
}
