import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import ScenarioContainer from './containers/ScenarioContainer/ScenarioContainer'
import SensorContainer from './containers/Sensor/Sensor'
import { Switch, Route, HashRouter } from 'react-router-dom'

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
            <SensorContainer />
          </Route>
        </Switch>
      </HashRouter>
    </Provider>
  )
}

export default App
