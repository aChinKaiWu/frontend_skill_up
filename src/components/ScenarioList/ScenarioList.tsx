import React, { useCallback, useEffect, useState } from 'react'
import { Button, makeStyles, Icon } from '@material-ui/core'
import ScenarioCard from '../ScenarioCard/ScenarioCard'
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
  onGetSceanrioList: () => void
  onDeleteScenarios: (ids: number[]) => void
}

export default function ScenarioList(props: Props) {
  // destruct
  const { scenarioList, onGetSceanrioList, onDeleteScenarios } = props
  const classes = useStyles()
  const [mode, setMode] = useState<ScenarioListMode>(ScenarioListMode.View)
  const [checkedScenarioIDs, setCheckedScenarioIDs] = useState<number[]>([])
  const isViewMode = mode === ScenarioListMode.View
  // dispatch get sceanrios action
  // reducer get sceanrios
  // fake componentDidMount
  useEffect(() => {
    onGetSceanrioList()
  }, [onGetSceanrioList])

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
    // Todo: refresh sceanrios
    onGetSceanrioList()
  }, [onGetSceanrioList])

  return (
    <>
      {/* header */}
      <Button className={classes.button} variant="outlined" onClick={onRefresh}>
        <Icon>refresh</Icon>
        更新
      </Button>
      <Button onClick={onClick}>
        <Icon>delete</Icon>
        {isViewMode ? 'Delete' : 'Comfirm Delete'}
      </Button>
      {/* sceanrio cards */}
      <div className={classes.list}>
        {scenarioList.map((scenario, idx) => {
          const isChecked = checkedScenarioIDs.includes(scenario.id)
          return <ScenarioCard key={idx} scenario={scenario} mode={mode} isChecked={isChecked} onCheck={onCheck} />
        })}
      </div>
    </>
  )
}
