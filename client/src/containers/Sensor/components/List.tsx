import React from 'react'
import { Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core'
import { Sensor } from '../../../model/scenario'

export default function List() {
  const tableHead: Array<keyof Sensor> = ['id', 'display_name', 'qq', 'type']
  const sensors: Sensor[] = [
    {
      id: '1',
      display_name: 'sensor 1',
      type: 'a',
      qq: 123,
    },
    {
      id: '2',
      display_name: 'sensor 2',
      type: 'b',
    },
  ]

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
          {sensors.map(sensor => (
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
