import background from './assets/images/background.png'
import configureStore from './store/configureStore'
import React from 'react'
import Scenario from './containers/Scenario/Scenario'
import Sensor from './containers/Sensor/Sensor'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { styled } from '@material-ui/core'

const store = configureStore()

const Background = styled('div')({
  background: `url(${background})`,
  height: '100vh',
  overflow: 'scroll',
  width: '100vw',
})

const App: React.FC = () => {
  return (
    <Background>
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path={'/scenarios'}>
              <Scenario />
            </Route>
            <Route path={'/sensors'}>
              <Sensor />
            </Route>
          </Switch>
        </HashRouter>
      </Provider>
    </Background>
  )
}

export default App
