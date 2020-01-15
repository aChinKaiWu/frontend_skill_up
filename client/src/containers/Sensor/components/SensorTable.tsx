import React, { useEffect, useState, useCallback } from 'react'
import { apiResponse } from '../../../epics/utils'
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { Sensor, SensorCreateParams } from '../../../model/sensor'
import SensorCreation from './SensorCreation'

interface Props {
  onCreateSensor: (sensorBase: SensorCreateParams) => void
  onGetSensorList: () => void
  sensorList: Sensor[]
}

export default function SensorTable(props: Props) {
  const { onCreateSensor, onGetSensorList, sensorList } = props
  const [showForm, toggleForm] = useState(false)
  const tableHead: Array<keyof Sensor> = ['id', 'display_name', 'extra', 'type']

  useEffect(() => {
    onGetSensorList()
  }, [onGetSensorList])

  useEffect(() => {
    const subscription = apiResponse.subscribe({
      next: () => {
        toggleForm(false)
      },
    })

    return () => subscription.unsubscribe()
  }, [])

  const onSubmit = useCallback(
    (sensorBase: SensorCreateParams) => {
      onCreateSensor(sensorBase)
    },
    [onCreateSensor],
  )

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
      {showForm && <SensorCreation onCancel={() => toggleForm(false)} onSubmit={onSubmit} />}
    </>
  )
}
