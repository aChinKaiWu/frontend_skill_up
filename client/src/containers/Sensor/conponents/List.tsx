import React, { useEffect } from 'react'
import { Sensor } from '../../../model/sensor'
import { Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core'

interface Props {
  onGetSensorList: (skip: number, limit: number) => void
  sensorList: Sensor[]
}

export default function List({ onGetSensorList, sensorList }: Props) {
  useEffect(() => onGetSensorList(0, 10), [onGetSensorList])
  const tableHead: Array<keyof Sensor> = ['id', 'display_name', 'type', 'extra']
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            {tableHead.map(title => (
              <TableCell>{title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sensorList.map(sensor => (
            <TableRow>
              {tableHead.map(th => (
                <TableCell>{sensor[th]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
