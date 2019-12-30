import React, { useCallback } from 'react'
import ScenarioList from '../../components/ScenarioList/ScenarioList'
import { fakeScenarioList as scenarioList } from './mocks'

export default function ScenarioContainer() {
  // const {scenarios} = useSelector(....)
  const onGetScenarioList = useCallback(() => {
    // dispatch action
  }, [])

  return (
    <>
      <ScenarioList scenarioList={scenarioList} onGetScenarioList={onGetScenarioList} />
    </>
  )
}
