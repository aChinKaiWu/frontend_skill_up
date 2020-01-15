import rootEpic from '../epics/rootEpic'
import rootReducer from '../reducer/rootReducer'
import { applyMiddleware, createStore, Middleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { createLogger } from 'redux-logger'

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV === 'development') {
    const logger: any = createLogger({ diff: true, collapsed: true })
    return applyMiddleware(...middleware, logger)
  }
  return applyMiddleware(...middleware)
}

export default function configureStore() {
  const epicMiddleware = createEpicMiddleware()
  const store = createStore(rootReducer, bindMiddleware([epicMiddleware]))
  epicMiddleware.run(rootEpic)
  return store
}
