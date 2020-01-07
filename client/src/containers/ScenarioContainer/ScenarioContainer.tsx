import React, { useCallback } from 'react'
import ScenarioList from '../../components/ScenarioList/ScenarioList'
import { useDispatch, useSelector } from 'react-redux'
import { getScenarioListAction, deleteScenariosAction } from '../../reducer/scenario/scenarioActions'
import { storeState } from '../../reducer/rootReducer'

export default function ScenarioContainer() {
  const dispatch = useDispatch()
  const scenarioList = useSelector((store: storeState) => store.scenario.scenarioList)
  // const {scenarios} = useSelector(....)

  const onGetSceanrioList = useCallback(() => {
    dispatch(getScenarioListAction())
  }, [])

  const onDeleteScenarios = useCallback(deleteIDs => {
    dispatch(deleteScenariosAction(deleteIDs))
  }, [])

  return (
    <>
      <ScenarioList
        scenarioList={scenarioList}
        onGetSceanrioList={onGetSceanrioList}
        onDeleteScenarios={onDeleteScenarios}
      />
    </>
  )
}
