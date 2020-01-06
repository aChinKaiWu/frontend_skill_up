import { createStore, applyMiddleware, Middleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer, { initStoreState } from '../reducer/rootReducer'
import { createEpicMiddleware } from 'redux-observable'
import rootEpics from '../epics/rootEpic'

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV === 'development') {
    const logger: any = createLogger({ diff: true, collapsed: true })
    return applyMiddleware(...middleware, logger)
  }
  return applyMiddleware(...middleware)
}

export default function configureStore(preloadState = initStoreState) {
  const epicMiddleware = createEpicMiddleware()
  const store = createStore(rootReducer, preloadState, bindMiddleware([epicMiddleware]))
  epicMiddleware.run(rootEpics)
  return store
}
