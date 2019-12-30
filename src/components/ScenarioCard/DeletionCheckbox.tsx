import React from 'react'
import { Icon, styled } from '@material-ui/core'

const Checkbox = styled('div')({
  background: '#CCCCCC',
  position: 'absolute',
  top: 4,
  right: 4,
  width: 44,
  height: 44,
  '&.active': {
    background: 'red',
  },
})

interface Props {
  onSelect: () => void
  isChecked: boolean
}

export default function DeletionCheckbox(props: Props) {
  const { isChecked, onSelect } = props
  return (
    <Checkbox className={isChecked ? 'active' : ''} onClick={onSelect}>
      <Icon children="check_circle" />
    </Checkbox>
  )
}
