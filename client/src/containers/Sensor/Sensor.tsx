import React, { useCallback } from 'react'
import SensorTable from './components/SensorTable'
import { getSensorList } from '../../reducer/sensor/sensorAction'
import { StoreState } from '../../reducer/rootReducer'
import { useDispatch, useSelector } from 'react-redux'

export default function Sensor() {
  const dispatch = useDispatch()
  const { sensorList } = useSelector((state: StoreState) => ({
    sensorList: state.sensor.sensorList,
  }))

  const onGetSensorList = useCallback(() => {
    dispatch(getSensorList())
  }, [dispatch])

  return (
    <>
      <SensorTable onGetSensorList={onGetSensorList} sensorList={sensorList} />
    </>
  )
}
