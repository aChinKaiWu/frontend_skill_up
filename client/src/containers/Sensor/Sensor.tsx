import React, { useCallback } from 'react'
import SensorTable from './components/SensorTable'
import { getSensorList, createSensor } from '../../reducer/sensor/sensorAction'
import { StoreState } from '../../reducer/rootReducer'
import { useDispatch, useSelector } from 'react-redux'
import { SensorCreateParams } from '../../model/sensor'

export default function Sensor() {
  const dispatch = useDispatch()
  const { sensorList } = useSelector((state: StoreState) => ({
    sensorList: state.sensor.sensorList,
  }))

  const onCreateSensor = useCallback(
    (sensorBase: SensorCreateParams) => {
      dispatch(createSensor(sensorBase))
    },
    [dispatch],
  )

  const onGetSensorList = useCallback(
    (skip: number, limit: number) => {
      dispatch(getSensorList(skip, limit))
    },
    [dispatch],
  )

  return (
    <>
      <SensorTable onCreateSensor={onCreateSensor} onGetSensorList={onGetSensorList} sensorList={sensorList} />
    </>
  )
}
