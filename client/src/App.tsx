import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import ScenarioContainer from './containers/ScenarioContainer/ScenarioContainer'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Sensor from './containers/Sensor/Sensor'

const store = configureStore()

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/scenarios">
            <ScenarioContainer />
          </Route>
          <Route exact path="/sensors">
            <Sensor />
          </Route>
        </Switch>
      </HashRouter>
    </Provider>
  )
}

export default App
