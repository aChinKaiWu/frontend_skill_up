import background from './assets/images/background.png'
import configureStore from './store/configureStore'
import React from 'react'
import Scenario from './containers/Scenario/Scenario'
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
        <Scenario />
      </Provider>
    </Background>
  )
}

export default App
