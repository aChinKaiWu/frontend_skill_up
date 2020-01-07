import React, { useCallback } from 'react'
import List from './components/List'
import { useSelector, useDispatch } from 'react-redux'
import { StoreState } from '../../reducer/rootReducer'
import { getSensorListAction } from '../../reducer/sensor/sensorActions'

export default function Sensor() {
  const dispatch = useDispatch()
  const { sensorList } = useSelector((state: StoreState) => ({
    sensorList: state.sensor.sensorList,
  }))

  const onGetSensorList = useCallback(
    (skip: number, limit: number) => {
      dispatch(getSensorListAction({ skip, limit }))
    },
    [dispatch],
  )

  return <List sensorList={sensorList} onGetSensorList={onGetSensorList} />
}
