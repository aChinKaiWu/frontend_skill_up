import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../../reducer/rootReducer'
import { getScenarioListAction } from '../../reducer/scenario/scenarioActions'
import ScenarioList from '../../components/ScenarioList/ScenarioList'
import { DeleteScenarioData } from '../../model/scenario'

export default function ScenarioContainer() {
  const { scenarioList } = useSelector((state: StoreState) => ({
    scenarioList: state.scenario.scenarioList,
  }))
  const dispatch = useDispatch()
  const onGetScenarioList = useCallback(() => {
    dispatch(getScenarioListAction())
  }, [dispatch])

  const onDeleteScenarios = useCallback((ids: DeleteScenarioData) => {
    console.log(ids)
  }, [])

  return (
    <>
      <ScenarioList
        scenarioList={scenarioList}
        onGetScenarioList={onGetScenarioList}
        onDeleteScenarios={onDeleteScenarios}
      ></ScenarioList>
    </>
  )
}
