import React, { useCallback, useEffect, useState } from 'react'
import { Button, makeStyles, Icon } from '@material-ui/core'
import ScenarioCard from '../ScenarioCard'
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
  onDeleteScenarios: (ids: number[]) => void
}

export default function ScenarioList(props: Props) {
  const { scenarioList, onGetScenarioList, onDeleteScenarios } = props
  const classes = useStyles()
  const [mode, setMode] = useState<ScenarioListMode>(ScenarioListMode.View)
  const [checkedScenarioIDs, setCheckedScenarioIDs] = useState<number[]>([])

  useEffect(() => {
    onGetScenarioList()
  }, [onGetScenarioList])

  const onCheck = useCallback(
    (scenarioID: number) => {
      const idx = checkedScenarioIDs.findIndex(id => id === scenarioID)

      if (idx === -1) {
        checkedScenarioIDs.push(scenarioID)
      } else {
        checkedScenarioIDs.splice(idx, 1)
      }

      setCheckedScenarioIDs([...checkedScenarioIDs])
    },
    [checkedScenarioIDs],
  )

  const onRefresh = useCallback(() => {
    onGetScenarioList()
    setCheckedScenarioIDs([])
  }, [onGetScenarioList])

  return (
    <>
      {/* header */}
      <Button className={classes.button} variant="outlined" onClick={onRefresh}>
        <Icon>refresh</Icon>
        更新
      </Button>
      {
        mode === ScenarioListMode.View ? (
          <Button onClick={() => setMode(ScenarioListMode.Delete)}>刪除</Button>
        ) : (
          <Button
            onClick={() => {
              onDeleteScenarios(checkedScenarioIDs)
              setMode(ScenarioListMode.View)
            }}
          >
            確定刪除
          </Button>
        )
      }

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
