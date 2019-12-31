import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../../reducer/rootReducer'
import { getScenarioListAction } from '../../reducer/scenario/scenarioActions'
import ScenarioList from '../../components/ScenarioList/ScenarioList'

export default function ScenarioContainer() {
  const { scenarioList } = useSelector((state: StoreState) => ({
    scenarioList: state.scenario.scenarioList,
  }))
  const dispatch = useDispatch()
  const onGetSceanrioList = useCallback(() => {
    dispatch(getScenarioListAction())
  }, [dispatch])

  return (
    <>
      <ScenarioList scenarioList={scenarioList} onGetSceanrioList={onGetSceanrioList} />
    </>
  )
}
