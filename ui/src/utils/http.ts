import { API_PATH } from '../appConfig/index'
import i18n from '../locale'

const send = (method: string, path: string, headers: HeadersInit, prefixPath: string) =>
  fetch(`${prefixPath}${path}`, { method, headers })

const sendJson = (method: string, path: string, body: object, headers: HeadersInit, prefixPath: string) =>
  fetch(`${prefixPath}${path}`, {
    method,
    body: JSON.stringify(body),
    headers,
  })

const sendFile = (method: string, path: string, headers: HeadersInit, file: File) =>
  fetch(path, {
    method,
    body: file,
    headers,
  })

export interface HttpResponse<T> {
  readonly status: number
  readonly data: T
}

export interface ErrorData {
  readonly code: string
  readonly name: string
}

const resWithJson = async (res: Response): Promise<HttpResponse<any>> =>
  res
    .json()
    .then((data: any) => ({ status: res.status, data }))
    .catch(() => ({
      status: 500,
      data: {
        name: i18n.http.unexpectedJsonError.name,
        description: i18n.http.unexpectedJsonError.description,
      },
    }))

const resWithEmptyJson = (): HttpResponse<any> => ({
  status: 200,
  data: {},
})

export const serviceUnavailable = (): HttpResponse<any> => ({
  status: 503,
  data: {
    name: i18n.http.serviceUnavailable.name,
    description: i18n.http.serviceUnavailable.description,
  },
})

const encodeKV = (key: string, value: string) => [key, value].map(encodeURIComponent).join('=')
const encodeKVs = (map: object) =>
  Object.keys(map)
    .map(key => encodeKV(key, map[key]))
    .join('&')
const withQuery = (path: string, queryString: string) => (queryString ? `${path}?${queryString}` : path)
const jsonHeader = { 'content-type': 'application/json' }
const authHeader = (sessionKey: string): HeadersInit => (sessionKey ? { authorization: sessionKey } : {})

export const http = {
  get: (path: string, sessionKey: string, query: object = {}, prefixPath: string = API_PATH) =>
    send('GET', withQuery(path, encodeKVs(query)), authHeader(sessionKey), prefixPath)
      .then(resWithJson)
      .catch(serviceUnavailable),
  post: (path: string, body: object, sessionKey: string, prefixPath: string = API_PATH) =>
    sendJson('POST', path, body, { ...jsonHeader, ...authHeader(sessionKey) }, prefixPath)
      .then(resWithJson)
      .catch(serviceUnavailable),
  put: (path: string, body: object, sessionKey: string, prefixPath: string = API_PATH) =>
    sendJson('PUT', path, body, { ...jsonHeader, ...authHeader(sessionKey) }, prefixPath)
      .then(resWithJson)
      .catch(serviceUnavailable),
  putFile: (path: string, headers: HeadersInit, file: File) =>
    sendFile('PUT', path, headers, file)
      .then(resWithEmptyJson)
      .catch(serviceUnavailable),
  delete: (path: string, sessionKey: string, query: object = {}, prefixPath: string = API_PATH) =>
    send('DELETE', withQuery(path, encodeKVs(query)), { ...authHeader(sessionKey) }, prefixPath).catch(
      serviceUnavailable,
    ),
}
