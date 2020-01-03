import React, { useCallback } from 'react'
import ScenarioList from '../../components/ScenarioList/ScenarioList'
import { useSelector, useDispatch } from 'react-redux'
import { StoreState } from '../../reducer/rootReducer'
import { getScenarioListAction, deleteScenariosAction } from '../../reducer/scenario/scenarioActions'

export default function ScenarioContainer() {
  const { scenarioList } = useSelector((state: StoreState) => ({
    scenarioList: state.scenario.scenarioList,
  }))
  const dispatch = useDispatch()

  const onGetSceanrioList = useCallback(() => {
    dispatch(getScenarioListAction())
  }, [dispatch])

  const onDeleteScenarios = useCallback(
    (ids: number[]) => {
    dispatch(deleteScenariosAction(ids))
  }, [dispatch])

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
