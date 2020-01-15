import React, { useEffect, useState, useCallback } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from '@material-ui/core'
import { Sensor, SensorCreateParams } from '../../../model/sensor'

interface Props {
  onCreateSensor: (sensorBase: SensorCreateParams) => void
  onGetSensorList: () => void
  sensorList: Sensor[]
}

export default function SensorTable(props: Props) {
  const { onCreateSensor, onGetSensorList, sensorList } = props
  const [sensorBase, setSensorBase] = useState<SensorCreateParams>({
    display_name: '',
    type: 'A',
    extra: '',
  })
  const [showForm, toggleForm] = useState(false)
  const tableHead: Array<keyof Sensor> = ['id', 'display_name', 'extra', 'type']

  useEffect(() => {
    onGetSensorList()
  }, [onGetSensorList])

  const onSubmit = useCallback(() => {
    onCreateSensor(sensorBase)
    toggleForm(false)
  }, [onCreateSensor, sensorBase])

  return (
    <>
      <div>
        <Button onClick={() => toggleForm(true)}>新增</Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            {tableHead.map(head => (
              <TableCell key={head}>{head}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sensorList.map(sensor => (
            <TableRow key={sensor.id}>
              {tableHead.map(head => (
                <TableCell key={head}>{sensor[head]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {showForm && (
        <Dialog open={true}>
          <DialogContent>
            <div>
              <TextField
                label="Display name"
                onChange={e => setSensorBase({ ...sensorBase, display_name: e.target.value })}
              />
            </div>
            <div>
              <TextField
                label="Type"
                onChange={e => setSensorBase({ ...sensorBase, type: e.target.value as SensorCreateParams['type'] })}
              />
            </div>
            <div>
              <TextField label="Extra" onChange={e => setSensorBase({ ...sensorBase, extra: e.target.value })} />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={onSubmit}>Submit</Button>
            <Button onClick={() => toggleForm(false)}>Cancel</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  )
}
