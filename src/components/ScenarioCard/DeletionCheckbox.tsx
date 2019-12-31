import React from 'react'
import { styled, Icon, Box } from '@material-ui/core'

const Checkbox = styled(Box)({
  background: '#CCCCCC',
  position: 'absolute',
  top: 4,
  right: 4,
  width: 44,
  height: 44,
  '&.active': {
    background: 'red',
  },
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const CheckIcon = styled(Icon)({
  fontSize: 32,
  color: 'white',
  fontWeight: 'bold'
})

interface Props {
  onSelect: () => void
  isChecked: boolean
}

export default function DeletionCheckbox(props: Props) {
  const { isChecked, onSelect } = props
  return (
    <>
      <Checkbox textAlign="center" className={isChecked ? 'active' : ''} onClick={onSelect}>
        <CheckIcon>check</CheckIcon>
      </Checkbox>
    </>
  )
}
