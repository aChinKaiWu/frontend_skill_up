import { createHashHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createRootReducer from '../reducers/index'

declare global {
  interface Window {
    readonly __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any
  }
}

export const history = createHashHistory()

const mandatoryMiddlewares = [thunkMiddleware, routerMiddleware(history)]
const logger: any = createLogger({ diff: true, collapsed: true })
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose
const composed =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...mandatoryMiddlewares))
    : composeEnhancers(applyMiddleware(...mandatoryMiddlewares, logger))

export const store = createStore(createRootReducer(history), composed)
