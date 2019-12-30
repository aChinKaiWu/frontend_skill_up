import { Dispatch } from 'redux'

// import { APP_KEY } from '../appConfig'
// import { http, HttpResponse } from '../utils/http'
import { LoginRequestBody, LoginResponseBody } from '../models/user'
import { setSession } from './session'

export enum LoginActionType {
  LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
  LOGIN_FAILURE = 'USER_LOGIN_FAILURE',
}

export interface LoginAction {
  readonly type: LoginActionType
  readonly data?: LoginResponseBody
}

interface IncomingLoginResponseBody {
  readonly id: string
  readonly email: string
  readonly session: {
    readonly password_set_at: string
    readonly key: string
    readonly expires_at: string
  }
}

// const API_PATH = '/management/admin/login'

const responseToModel = ({
  id,
  email,
  session: { password_set_at, key, expires_at },
}: IncomingLoginResponseBody): LoginResponseBody => ({
  id,
  email,
  session: {
    key,
    expiresAt: expires_at,
    passwordSetAt: password_set_at,
  },
})

const loginSuccess = (data: LoginResponseBody): LoginAction => ({
  type: LoginActionType.LOGIN_SUCCESS,
  data,
})
const loginFailure = (): LoginAction => ({
  type: LoginActionType.LOGIN_FAILURE,
})

export const login = (body: LoginRequestBody) => async (dispatch: Dispatch) => {
  // TODO: Connect with login API when ready
  // const res: HttpResponse<IncomingLoginResponseBody> = await http.post(API_PATH, body, APP_KEY)
  const res = {
    status: 200,
    data: {
      _id: 'user0',
      email: body.email,
      session: {
        expiresAt: '',
        key: 'ukey_0',
        passwordSetAt: '',
      },
    },
  } as any
  if (res.status === 200) {
    const model: LoginResponseBody = responseToModel(res.data)
    dispatch(loginSuccess(model))
    setSession(model.session)(dispatch)
  } else {
    dispatch(loginFailure())
  }
}
