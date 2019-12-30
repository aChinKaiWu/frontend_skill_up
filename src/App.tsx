import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import ScenarioContainer from './containers/ScenarioContainer'

const store = configureStore()

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ScenarioContainer />
    </Provider>
  )
}

export default App
