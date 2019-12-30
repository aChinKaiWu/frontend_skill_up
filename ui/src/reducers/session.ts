import { Session } from '../models/session'
import { SessionAction, SessionActionTypes } from '../actions/session'

export default (state: Session | null = null, action: SessionAction) => {
  switch (action.type) {
    case SessionActionTypes.GET_SUCCESS:
      return action.session
    case SessionActionTypes.GET_FAILURE:
      return null
    case SessionActionTypes.SET_SUCCESS:
      return action.session
    case SessionActionTypes.SET_FAILURE:
      return state
    case SessionActionTypes.UNAUTHORIZED:
      return null
    default:
      return state
  }
}
