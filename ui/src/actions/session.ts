import { Dispatch } from 'redux'
import { Session } from '../models/session'

export enum SessionActionTypes {
  GET_SUCCESS = 'SESSION_GET_SUCCESS',
  GET_FAILURE = 'SESSION_GET_FAILURE',
  SET_SUCCESS = 'SESSION_SET_SUCCESS',
  SET_FAILURE = 'SESSION_SET_FAILURE',
  UNAUTHORIZED = 'SESSION_UNAUTHORIZED',
}

export interface SessionAction {
  type: SessionActionTypes
  session?: Session
}

const getSessionSuccess = (session: Session) => ({
  type: SessionActionTypes.GET_SUCCESS,
  session,
})
const getSessionFailure = () => ({ type: SessionActionTypes.GET_FAILURE })

export const getSession = () => (dispatch: Dispatch) => {
  const sessionString = window.localStorage.getItem('session')
  if (sessionString === null) {
    dispatch(getSessionFailure())
    return
  }
  try {
    const session = JSON.parse(sessionString) as Session
    dispatch(getSessionSuccess(session))
  } catch (e) {
    console.error(e)
    dispatch(getSessionFailure())
  }
}

const setSessionSuccess = (session: Session) => ({
  type: SessionActionTypes.SET_SUCCESS,
  session,
})
const setSessionFailure = () => ({ type: SessionActionTypes.SET_FAILURE })

export const setSession = (session: Session) => (dispatch: Dispatch) => {
  try {
    window.localStorage.setItem('session', JSON.stringify(session))
    dispatch(setSessionSuccess(session))
  } catch (e) {
    console.error(e)
    dispatch(setSessionFailure())
  }
}

export const unauthorized = () => ({ type: SessionActionTypes.UNAUTHORIZED })
