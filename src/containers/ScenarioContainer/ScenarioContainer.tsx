import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../../reducer/rootReducer'
import { getSenarioAct, deleteSenarioAct, DeleteSenarioData } from '../../reducer/senario/senarioActions'
import ScenarioList from '../../components/ScenarioList/ScenarioList'

export default function ScenarioContainer() {
  const { scenarioList } = useSelector((state: StoreState) => ({
    scenarioList: state.senario.senarioList,
  }))
  const dispatch = useDispatch()
  const onGetSceanrioList = useCallback(() => {
    dispatch(getSenarioAct())
  }, [dispatch])

  const onDeleteSceanrioList = useCallback(
    (data: DeleteSenarioData) => {
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
