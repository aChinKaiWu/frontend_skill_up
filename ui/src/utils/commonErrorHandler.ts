import { Dispatch } from 'redux'

import { HttpResponse } from './http'
import { unauthorized } from '../actions/session'

export default (res: HttpResponse<any>, dispatch: Dispatch, f: () => void) => {
  if (res.status === 401) {
    window.localStorage.removeItem('session')
    dispatch(unauthorized())
  } else {
    f()
  }
}
