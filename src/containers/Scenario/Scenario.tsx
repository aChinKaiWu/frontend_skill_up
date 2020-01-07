import React, { useCallback } from 'react'
import ScenarioList from '../Scenario/components/ScenarioList'
import { deleteScenario, getScenarioList } from '../../reducer/scenario/scenarioActions'
import { StoreState } from '../../reducer/rootReducer'
import { useDispatch, useSelector } from 'react-redux'

export default function Scenario() {
  const { scenarioList } = useSelector((state: StoreState) => ({
    scenarioList: state.scenario.scenarioList,
  }))

  const dispatch = useDispatch()
  const onGetScenarioList = useCallback(() => {
    dispatch(getScenarioList())
  }, [dispatch])

  const onDeleteScenario = useCallback(
    (deletionIDs: number[]) => {
      dispatch(deleteScenario(deletionIDs))
    },
    [dispatch],
  )

  return (
    <ScenarioList
      onDeleteScenario={onDeleteScenario}
      onGetScenarioList={onGetScenarioList}
      scenarioList={scenarioList}
    />
  )
}
