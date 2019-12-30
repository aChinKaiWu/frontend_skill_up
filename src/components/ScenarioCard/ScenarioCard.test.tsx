import React from 'react'
import { shallow, mount } from 'enzyme'
import ScenarioCard from '../ScenarioCard'
import DeletionCheckbox from './DeletionCheckbox'
import { ScenarioListMode } from '../ScenarioList/ScenarioList'
import { CardHeader, CardMedia, CardActions, CardContent, Icon } from '@material-ui/core'
import FakeScenarioImg from '../../assets/icons/fake-scenario.png'
import IconEdit from '../../assets/icons/scenario_edit.svg'
import IconDetail from '../../assets/icons/scenario_detail.svg'
import IconData from '../../assets/icons/scenario_data.svg'
import IconLock from '../../assets/icons/status_lock.svg'
import IconRun from '../../assets/icons/status_run.svg'
import IconStop from '../../assets/icons/status_stop.svg'

describe('<ScenarioCard />', () => {
  const scenario = {
    id: 1,
    display_name: 'abc',
    created_at: '2019-12-19T11:22:33Z',
    updated_at: '2019-12-20T03:04:05Z',
    thumbnail_url: FakeScenarioImg,
  }
  const defaultProps = {
    scenario,
    mode: ScenarioListMode.View,
    isChecked: false,
    onCheck: () => {},
  }

  describe('deletion checkbox', () => {
    it('should not be rendered in view mode', () => {
      const wrapper = shallow(<ScenarioCard {...defaultProps} />)
      expect(wrapper.find(DeletionCheckbox)).toHaveLength(0)
    })

    it('should be rendered in delete mode', () => {
      const wrapper = shallow(<ScenarioCard {...defaultProps} mode={ScenarioListMode.Delete} />)
      const deleteCheckbox = wrapper.find(DeletionCheckbox).first()
      expect(deleteCheckbox.exists()).toBeTruthy()
      expect(deleteCheckbox.prop('isChecked')).toBeFalsy()
    })

    it('should trigger onCheck when click', () => {
      const onCheck = jest.fn()
      const wrapper = mount(<ScenarioCard {...defaultProps} mode={ScenarioListMode.Delete} onCheck={onCheck} />)
      const deleteCheckbox = wrapper.find(DeletionCheckbox).first()
      deleteCheckbox.simulate('click')
      expect(onCheck).toBeCalledWith(scenario.id)
    })
  })

  it('should render scenario actions', () => {
    const wrapper = mount(<ScenarioCard {...defaultProps} />)
    const header = wrapper.find(CardHeader).first()
    expect(header.exists()).toBeTruthy()
    const icons = header.find(Icon)
    expect(icons).toHaveLength(3)
    expect(icons.at(0).find('img').first().prop('src')).toEqual(IconLock)
    expect(icons.at(1).find('img').first().prop('src')).toEqual(IconRun)
    expect(icons.at(2).find('img').first().prop('src')).toEqual(IconStop)
  })

  it('should render scenario thumbnail', () => {
    const wrapper = shallow(<ScenarioCard {...defaultProps} />)
    const thumbnail = wrapper.find(CardMedia).first()
    expect(thumbnail.exists()).toBeTruthy()
    expect(thumbnail.prop('component')).toEqual('img')
    expect(thumbnail.prop('image')).toEqual(scenario.thumbnail_url)
  })

  it('should render scenario info', () => {
    const wrapper = shallow(<ScenarioCard {...defaultProps} />)
    const content = wrapper.find(CardContent).first()
    expect(content.exists()).toBeTruthy()
    expect(content.find('div').at(0).text()).toEqual(scenario.display_name)
    expect(content.find('div').at(1).text()).toEqual('2019/12/20 11:04')
  })

  describe('options', () => {
    it('should be rendered in view mode', () => {
      const wrapper = shallow(<ScenarioCard {...defaultProps} />)
      const actions = wrapper.find(CardActions).first()
      expect(actions.exists()).toBeTruthy()
      const icons = actions.find(Icon)
      expect(icons).toHaveLength(3)
      expect(icons.at(0).find('img').prop('src')).toEqual(IconEdit)
      expect(icons.at(1).find('img').prop('src')).toEqual(IconDetail)
      expect(icons.at(2).find('img').prop('src')).toEqual(IconData)
    })

    it('should not be rendered in delete mode', () => {
      const wrapper = shallow(<ScenarioCard {...defaultProps} mode={ScenarioListMode.Delete} />)
      expect(wrapper.find(CardActions)).toHaveLength(0)
    })
  })
})
