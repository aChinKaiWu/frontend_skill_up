import React, { useState, useCallback } from 'react'
import { Dialog, DialogTitle, TextField, DialogContent, DialogActions, Button } from '@material-ui/core'
import { ScenarioCreateParams } from '../../../model/scenario'

interface Props {
  onCreate: (scenarioBase: ScenarioCreateParams) => void
  onCancel: () => void
}

export default function ScenarioCreation(props: Props) {
  const { onCancel, onCreate } = props
  const [name, setName] = useState('')
  const [open, setOpen] = useState(true)

  const onSubmit = useCallback(() => {
    onCreate({ display_name: name })
    setOpen(false)
  }, [onCreate, name])

  return (
    <>
      <div>
        <Dialog open={open}>
          <DialogTitle>Create Scenario</DialogTitle>
          <DialogContent>
            <div>
              <TextField id="input-displayName" label="display name" onChange={e => setName(e.currentTarget.value)} />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={onSubmit}>Submit</Button>
            <Button onClick={onCancel}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  )
}
