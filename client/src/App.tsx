import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'
import configureStore from './store/configureStore'
import ScenarioContainer from './containers/ScenarioContainer/ScenarioContainer'

const store = configureStore()

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/scenarios">
            <ScenarioContainer />
          </Route>
        </Switch>
      </HashRouter>
    </Provider>
  )
}

export default App
