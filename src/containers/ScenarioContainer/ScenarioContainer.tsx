import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../../reducer/rootReducer'
import { getSenarioAct, deleteSenarioAct, DeleteScenarioData } from '../../reducer/scenario/scenarioActions'
import ScenarioList from '../../components/ScenarioList/ScenarioList'

export default function ScenarioContainer() {
  const { scenarioList } = useSelector((state: StoreState) => ({
    scenarioList: state.scenario.scenarioList,
  }))
  const dispatch = useDispatch()
  const onGetSceanrioList = useCallback(() => {
    dispatch(getSenarioAct())
  }, [dispatch])

  const onDeleteSceanrioList = useCallback(
    (data: DeleteScenarioData) => {
      dispatch(deleteSenarioAct(data))
    },
    [dispatch],
  )

  return (
    <>
      <ScenarioList
        scenarioList={scenarioList}
        onGetSceanrioList={onGetSceanrioList}
        onDeleteSceanrioList={onDeleteSceanrioList}
      />
    </>
  )
}
