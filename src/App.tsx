import background from './assets/images/background.png'
import React from 'react'
import Scenario from './containers/Scenario/Scenario'
import { styled } from '@material-ui/core'

const Background = styled('div')({
  background: `url(${background})`,
  height: '100vh',
  overflow: 'scroll',
  width: '100vw',
})

const App: React.FC = () => {
  return (
    <Background>
      <Scenario />
    </Background>
  )
}

export default App
