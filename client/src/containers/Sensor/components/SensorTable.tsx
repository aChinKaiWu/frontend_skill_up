import React, { useEffect } from 'react'
import { Sensor } from '../../../model/sensor'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'

interface Props {
  onGetSensorList: () => void
  sensorList: Sensor[]
}

export default function SensorTable(props: Props) {
  const { onGetSensorList, sensorList } = props
  const tableHead: Array<keyof Sensor> = ['id', 'display_name', 'extra', 'type']

  useEffect(() => {
    onGetSensorList()
  }, [onGetSensorList])

  return (
    <>
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
    </>
  )
}
