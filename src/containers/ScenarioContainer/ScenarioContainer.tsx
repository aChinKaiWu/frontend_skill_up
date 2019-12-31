import React, { useCallback } from 'react'
import { useObserver } from 'mobx-react-lite'
import ScenarioList from '../../components/ScenarioList/ScenarioList'
import { useStores } from '../../stores'

export default function ScenarioContainer() {
  const { scenarioStore } = useStores()

  const onGetScenarioList = useCallback(() => {
    scenarioStore.loadScenarios()
  }, [scenarioStore])

  const onDeleteScenarios = useCallback((scenarioIDs) => {
    scenarioStore.deleteScenarios(scenarioIDs)
  }, [scenarioStore])

  return useObserver(() => (
    <ScenarioList
      scenarioList={scenarioStore.scenarios}
      onGetScenarioList={onGetScenarioList}
      onDeleteScenarios={onDeleteScenarios}
    />
  ))
}
