import React, { useCallback, useEffect, useState } from 'react'
import { Button, makeStyles, Icon } from '@material-ui/core'
import ScenarioCard from '../ScenarioCard/ScenarioCard'
import { DeleteScenarioData } from '../../reducer/scenario/scenarioActions'
import { Scenario } from '../../model/scenario'

const useStyles = makeStyles({
  button: {
    border: '2px solid #525B5C',
    borderRadius: 16,
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
  },
})

export enum ScenarioListMode {
  View = 'view',
  Delete = 'delete',
}

interface Props {
  scenarioList: Scenario[]
  onGetScenarioList: () => void
  onDeleteScenarioList: (data: DeleteScenarioData) => void
}

export default function ScenarioList(props: Props) {
  // destruct
  const { scenarioList, onGetScenarioList, onDeleteScenarioList } = props
  const classes = useStyles()
  const [mode, setMode] = useState<ScenarioListMode>(ScenarioListMode.View)
  const [checkedScenarioIDs, setCheckedScenarioIDs] = useState<number[]>([])
  const isViewMode = mode === ScenarioListMode.View
  // dispatch get scenarios action
  // reducer get scenarios
  // fake componentDidMount
  useEffect(() => {
    onGetScenarioList()
  }, [onGetScenarioList])

  const onCheck = useCallback(
    (scenarioID: number) => {
      const idx = checkedScenarioIDs.findIndex(id => id === scenarioID)
      if (idx === -1) {
        checkedScenarioIDs.push(scenarioID)
        setCheckedScenarioIDs([...checkedScenarioIDs])
        return
      }

      checkedScenarioIDs.splice(idx, 1)
      setCheckedScenarioIDs([...checkedScenarioIDs])
    },
    [checkedScenarioIDs],
  )

  const onButtonClick = useCallback(() => {
    if (isViewMode) {
      setMode(ScenarioListMode.Delete)
      return
    }
    onDeleteScenarioList(checkedScenarioIDs)
    setMode(ScenarioListMode.View)
    setCheckedScenarioIDs([])
  }, [isViewMode, onDeleteScenarioList, setMode, checkedScenarioIDs, setCheckedScenarioIDs])

  const onRefresh = useCallback(() => {
    // Todo: refresh scenarios
    onGetScenarioList()
  }, [onGetScenarioList])

  return (
    <>
      {/* header */}
      <Button className={classes.button} variant="outlined" onClick={onRefresh}>
        <Icon>refresh</Icon>
        更新
      </Button>
      <Button onClick={onButtonClick}>{isViewMode ? '選擇刪除項目' : '刪除'}</Button>
      {/* scenario cards */}
      <div className={classes.list}>
        {scenarioList.map((scenario, idx) => {
          const isChecked = checkedScenarioIDs.includes(scenario.id)
          return <ScenarioCard key={idx} scenario={scenario} mode={mode} isChecked={isChecked} onCheck={onCheck} />
        })}
      </div>
    </>
  )
}
