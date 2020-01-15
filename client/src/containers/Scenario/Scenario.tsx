import React, { useCallback } from 'react'
import ScenarioList from './components/ScenarioList'
import { createScenario, deleteScenario, getScenarioList } from '../../reducer/scenario/scenarioActions'
import { StoreState } from '../../reducer/rootReducer'
import { useDispatch, useSelector } from 'react-redux'
import { ScenarioCreateParams } from '../../model/scenario'

export default function Scenario() {
  const scenarioList = useSelector((state: StoreState) => state.scenario.scenarioList)
  console.log(scenarioList)
  const dispatch = useDispatch()

  const onCreateScenario = useCallback(
    (scenarioBase: ScenarioCreateParams) => {
      dispatch(createScenario(scenarioBase))
    },
    [dispatch],
  )

  const onDeleteScenario = useCallback(
    (deletionIDs: number[]) => {
      dispatch(deleteScenario(deletionIDs))
    },
    [dispatch],
  )

  const onGetScenarioList = useCallback(() => {
    dispatch(getScenarioList())
  }, [dispatch])

  return (
    <>
      <ScenarioList
        onCreateScenario={onCreateScenario}
        onDeleteScenario={onDeleteScenario}
        onGetScenarioList={onGetScenarioList}
        scenarioList={scenarioList}
      />
    </>
  )
}
