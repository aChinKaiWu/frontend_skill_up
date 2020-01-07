import React, { useEffect } from 'react'
import { Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core'
import { Sensor } from '../../../model/sensor'

interface Props {
  sensorList: Sensor[]
  onGetSensorList: (skip: number, limit: number) => void
}

export default function List(props: Props) {
  const { sensorList, onGetSensorList } = props

  const tableHead: Array<keyof Sensor> = ['id', 'display_name', 'extra', 'type']

  useEffect(() => {
    onGetSensorList(0, 10)
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
              {tableHead.map((head, idx) => (
                <TableCell key={idx}>{sensor[head]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
