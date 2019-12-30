import React from 'react'
import { shallow, mount } from 'enzyme'
import ScenarioList, { ScenarioListMode } from './ScenarioList'
import ScenarioCard from '../ScenarioCard'
import { Button } from '@material-ui/core'
import FakeScenarioImg from '../../assets/icons/fake-scenario.png'

const scenarioList = [
  {
    id: 1,
    display_name: 'abc',
    created_at: '2019-12-19T11:22:33Z',
    updated_at: '2019-12-20T03:04:05Z',
    thumbnail_url: FakeScenarioImg,
  },
  {
    id: 2,
    display_name: 'def',
    created_at: '2019-12-18T11:22:33Z',
    updated_at: '2019-12-20T07:08:09Z',
    thumbnail_url: FakeScenarioImg,
  },
]

it('should get scenario list after mounted', () => {
  const onGetScenarioList = jest.fn()
  mount(<ScenarioList scenarioList={scenarioList} onGetScenarioList={onGetScenarioList} />)
  expect(onGetScenarioList).toBeCalledTimes(1)
})

describe('<ScenarioList />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<ScenarioList scenarioList={scenarioList} onGetScenarioList={() => {}} />)
  })

  describe('update button', () => {
    it('should be rendered at first position', () => {
      const button = wrapper.find(Button).at(0)
      expect(button.text()).toContain('更新')
    })

    it('should get scenario list when click', () => {
      const onGetScenarioList = jest.fn()
      const wrapper = mount(<ScenarioList scenarioList={scenarioList} onGetScenarioList={onGetScenarioList} />)
      wrapper.find(Button).at(0).simulate('click')
      expect(onGetScenarioList).toBeCalledTimes(2)
    })
  })

  describe('delete button', () => {
    let button

    beforeEach(() => { button = wrapper.find(Button).at(1) })

    it('should be rendered at second position', () => {
      expect(button.text()).toContain('刪除')
    })

    it('should switch mode when click', () => {
      button.simulate('click')
      expect(wrapper.find(ScenarioCard).first().prop('mode')).toEqual(ScenarioListMode.Delete)
    })
  })

  describe('scenario card list', () => {
    it('should be rendered', () => {
      const scenarioCardList = wrapper.find(ScenarioCard)
      expect(scenarioCardList).toHaveLength(scenarioList.length)
      expect(scenarioCardList.first().prop('scenario')).toEqual(scenarioList[0])
      expect(scenarioCardList.first().prop('isChecked')).toBeFalsy()
    })

    it('should be toggled when the checkbox is clicked in delete mode', () => {
      wrapper.find(Button).at(1).simulate('click')
      wrapper.find(ScenarioCard).first().prop('onCheck')(scenarioList[0].id)
      expect(wrapper.find(ScenarioCard).first().prop('isChecked')).toBeTruthy()

      wrapper.find(ScenarioCard).first().prop('onCheck')(scenarioList[0].id)
      expect(wrapper.find(ScenarioCard).first().prop('isChecked')).toBeFalsy()
    })
  })
})
