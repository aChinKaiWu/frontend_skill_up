import React from 'react'
import { shallow } from 'enzyme'
import ScenarioContainer from './ScenarioContainer'
import ScenarioList from '../../components/ScenarioList'
import { fakeScenarioList } from './mocks'

it('should render ScenarioList', () => {
  const wrapper = shallow(<ScenarioContainer />)
  expect(wrapper.find(ScenarioList)).toHaveLength(1)
  expect(wrapper.find(ScenarioList).first().prop('scenarioList')).toEqual(fakeScenarioList)
})
