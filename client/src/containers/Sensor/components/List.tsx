import React, { useEffect, useState, useCallback } from 'react'
import { Table, TableHead, TableBody, TableCell, TableRow, Button, Dialog, DialogContent } from '@material-ui/core'
import { Sensor, SensorRequestBody } from '../../../model/sensor'
import Form from './Form'
import { apiResponse } from '../../../epics/utils'
import { sensorActionTypes } from '../../../reducer/sensor/sensorActions'

interface Props {
  sensorList: Sensor[]
  onGetSensorList: (skip: number, limit: number) => void
  onCreateSensor: (formData: SensorRequestBody) => void
}

export default function List(props: Props) {
  const { sensorList, onGetSensorList, onCreateSensor } = props
  const [showForm, toggleForm] = useState(false)
  const tableHead: Array<keyof Sensor> = ['id', 'display_name', 'extra', 'type']

  useEffect(() => {
    onGetSensorList(0, 10)
  }, [onGetSensorList])

  useEffect(() => {
    const subscription = apiResponse.subscribe(
      {
        nextAction: [sensorActionTypes.CREATE_SENSOR_SUCCESS],
      },
      {
        next: () => {
          toggleForm(prev => !prev)
        },
      },
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const beforeSubmit = useCallback(
    (formData: SensorRequestBody) => {
      // do something before dispatch action if necessary
      onCreateSensor(formData)
    },
    [onCreateSensor],
  )

  return (
    <>
      <div>
        <Button variant="contained" onClick={() => toggleForm(prev => !prev)}>
          Add
        </Button>
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
              {tableHead.map((head, idx) => (
                <TableCell key={idx}>{sensor[head]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={showForm}>
        <DialogContent>
          <Form onSubmit={beforeSubmit} />
        </DialogContent>
      </Dialog>
    </>
  )
}
