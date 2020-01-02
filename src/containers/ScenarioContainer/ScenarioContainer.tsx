import React, { useCallback } from 'react'
import { useStore } from 'effector-react'
import scenarioStore from '../../store/scenario/scenarioStore'
import { getScenarioList, deleteScenarios } from '../../store/scenario/scenarioEvents'
import ScenarioList from '../../components/ScenarioList/ScenarioList'

export default function ScenarioContainer() {
  const { scenarios } = useStore(scenarioStore)
  const onGetSceanrioList = useCallback(() => getScenarioList(), [])

  const onDeleteSceanrioList = useCallback((ids: number[]) => deleteScenarios(ids), [])

  return (
    <>
      <ScenarioList
        scenarioList={scenarios}
        onGetSceanrioList={onGetSceanrioList}
        onDeleteSceanrioList={onDeleteSceanrioList}
      />
    </>
  )
}
