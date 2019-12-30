import React from 'react'
import { Icon, styled } from '@material-ui/core'

const CheckBox = styled('div')({
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

export default function DeletionCheckBox(props: Props) {
  const { isChecked, onSelect } = props
  return (
    <CheckBox className={isChecked ? 'active' : ''} onClick={onSelect}>
      <Icon children="check_circle" />
    </CheckBox>
  )
}
