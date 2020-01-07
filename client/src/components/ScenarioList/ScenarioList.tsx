import React, { useCallback, useEffect, useState } from 'react'
import { Button, Icon, makeStyles } from '@material-ui/core'
import ScenarioCard from '../ScenarioCard/ScenarioCard'
import { DeleteScenarioData, Scenario } from '../../model/scenario'

const useStyles = makeStyles({
  button: {
    width: 90,
    height: 32,
    border: '2px solid #525B5C',
    borderRadius: 16,
    opacity: 1,
    padding: '0px 15px',
    textAlign: 'center',
    font: 'Bold 14px YuGothic',
    letterSpacing: 0,
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
  },
})

interface Props {
  scenarioList: Scenario[]
  onGetScenarioList: () => void
  onDeleteScenarios: (ids: DeleteScenarioData) => void
}

export enum ScenarioListMode {
  View = 'view',
  Delete = 'delete',
}

export default function ScenarioList(props: Props) {
  const { scenarioList, onGetScenarioList, onDeleteScenarios } = props
  const classes = useStyles()
  const [mode, setMode] = useState<ScenarioListMode>(ScenarioListMode.View)
  const [checkedScenarioIDs, setCheckedScenarioIDs] = useState<DeleteScenarioData>([])
  const isViewMode = mode === ScenarioListMode.View

  // dispatch get scenarios action
  // get scenarios from reducer
  useEffect(() => {
    onGetScenarioList()
  }, [onGetScenarioList])

  const onCheck = useCallback(
    (scenarioID: number) => {
      const index = checkedScenarioIDs.findIndex(id => id === scenarioID)
      if (index === -1) {
        checkedScenarioIDs.push(scenarioID)
        setCheckedScenarioIDs([...checkedScenarioIDs])
        return
      }
      checkedScenarioIDs.splice(index, 1)
      setCheckedScenarioIDs([...checkedScenarioIDs])
    },
    [checkedScenarioIDs],
  )

  const onClick = useCallback(() => {
    if (isViewMode) {
      setMode(ScenarioListMode.Delete)
      return
    }
    onDeleteScenarios(checkedScenarioIDs)
    setMode(ScenarioListMode.View)
    setCheckedScenarioIDs([])
  }, [checkedScenarioIDs, isViewMode, setMode, onDeleteScenarios])

  const onRefresh = useCallback(() => {
    // TODO handle refresh
    onGetScenarioList()
  }, [onGetScenarioList])

  return (
    <>
      {/* header */}
      <Button className={classes.button} variant="outlined" onClick={onRefresh}>
        <Icon children="refresh" />
        更新
      </Button>
      <Button className={classes.button} variant="outlined" onClick={onClick}>
        <Icon children="delete" />
        {isViewMode ? '刪除' : '確認'}
      </Button>
      {/* scenario cards */}
      <div className={classes.list}>
        {scenarioList.map((scenario, index) => {
          const isChecked = checkedScenarioIDs.includes(scenario.id)
          return <ScenarioCard key={index} scenario={scenario} mode={mode} isChecked={isChecked} onCheck={onCheck} />
        })}
      </div>
    </>
  )
}
