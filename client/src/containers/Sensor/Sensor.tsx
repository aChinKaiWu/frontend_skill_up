import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../../reducer/rootReducer'
import { getSensorListAction } from '../../reducer/sensor/sensorActions'
import List from './components/List'

export default function Sensor() {
  const { sensorList } = useSelector((state: StoreState) => ({
    sensorList: state.sensor.sensorList,
  }))
  const dispatch = useDispatch()
  const onGetSensorList = useCallback(
    (skip: number, limit: number) => {
      dispatch(getSensorListAction({skip, limit}))
    },
    [dispatch],
  )

  return <List sensorList={sensorList} onGetSensorList={onGetSensorList} />
}
