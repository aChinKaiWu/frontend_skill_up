import React, { useCallback } from 'react'
import List from './conponents/List'
import { useDispatch, useSelector } from 'react-redux'
import { getSensorListAction } from '../../reducer/sensor/sensorActions'
import { storeState } from '../../reducer/rootReducer'

export default function Sensors() {
  const dispatch = useDispatch()
  const sensorList = useSelector((store: storeState) => store.sensor.sensorList)
  const onGetSensorList = useCallback(
    (skip: number, limit: number) => {
      dispatch(getSensorListAction({ skip, limit }))
    },
    [dispatch],
  )

  return <List onGetSensorList={onGetSensorList} sensorList={sensorList} />
}
