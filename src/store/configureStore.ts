import { createStore, applyMiddleware, Middleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer, { initialState } from '../reducer/rootReducer'

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV === 'development') {
    const logger: any = createLogger({ diff: true, collapsed: true })
    return applyMiddleware(...middleware, logger)
  }
  return applyMiddleware(...middleware)
}

export default function configureStore(preloadState = initialState) {
  const store = createStore(rootReducer, preloadState, bindMiddleware([]))
  return store
}
