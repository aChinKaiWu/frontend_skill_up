import React, { useEffect, useState } from 'react'
import { apiResponse } from '../../../epics/utils'
import { Button, Dialog, DialogActions, DialogContent, TextField } from '@material-ui/core'
import { SensorCreateParams } from '../../../model/sensor'

interface Props {
  onCancel: () => void
  onSubmit: (sensorBase: SensorCreateParams) => void
}

export default function SensorCreation(props: Props) {
  const { onCancel, onSubmit } = props
  const [isLoading, setIsLoading] = useState(false)
  const [sensorBase, setSensorBase] = useState<SensorCreateParams>({
    display_name: '',
    type: 'A',
    extra: '',
  })

  useEffect(() => {
    const subscription = apiResponse.subscribe({
      next: () => setIsLoading(false),
    })

    return () => subscription.unsubscribe()
  }, [])

  const beforeSubmit = () => {
    setIsLoading(true)
    onSubmit(sensorBase)
  }

  return (
    <Dialog open={true}>
      <DialogContent>
        <div>
          <TextField
            disabled={isLoading}
            label="Display name"
            onChange={e => setSensorBase({ ...sensorBase, display_name: e.target.value })}
          />
        </div>
        <div>
          <TextField
            disabled={isLoading}
            label="Type"
            onChange={e => setSensorBase({ ...sensorBase, type: e.target.value as SensorCreateParams['type'] })}
          />
        </div>
        <div>
          <TextField
            disabled={isLoading}
            label="Extra"
            onChange={e => setSensorBase({ ...sensorBase, extra: e.target.value })}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={beforeSubmit}>Submit</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}
