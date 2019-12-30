import React from 'react'
import { shallow } from 'enzyme'
import DeletionCheckbox from './DeletionCheckbox'

const defaultProps = {
  onSelect: () => {},
  isChecked: false,
}

it('should render a checkbox', () => {
  const wrapper = shallow(<DeletionCheckbox {...defaultProps} />)
  expect(wrapper.name()).toEqual('Styled(div)')
  expect(wrapper.text()).toEqual('V')
  expect(wrapper.hasClass('active')).toBeFalsy()
})

it('should display actived when is checked', () => {
  const wrapper = shallow(<DeletionCheckbox {...defaultProps} isChecked />)
  expect(wrapper.hasClass('active')).toBeTruthy()
})

it('should trigger onSelect when click', () => {
  const onSelect = jest.fn()
  const wrapper = shallow(<DeletionCheckbox {...defaultProps} onSelect={onSelect} />)
  wrapper.simulate('click')
  expect(onSelect).toBeCalled()
})
