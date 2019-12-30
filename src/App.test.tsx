import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import ScenarioContainer from './containers/ScenarioContainer'

it('should render ScenarioContainer', () => {
  const wrapper = shallow(<App />)
  const scenarioContainer = (<ScenarioContainer />)

  expect(wrapper.contains(scenarioContainer)).toEqual(true)
})
