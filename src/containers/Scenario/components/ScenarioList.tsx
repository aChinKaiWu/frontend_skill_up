import React, { useEffect, useCallback, useState } from 'react'
import ScenarioCard from './ScenarioCard'
import { Button, Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Scenario } from '../../../model/scenario'

const useStyles = makeStyles({
  button: {
    border: 'solid 2px #525B5C',
    borderRadius: 16,
    color: '#525B5C',
    font: 'Bold 14px YuGothic',
    height: 32,
    padding: 0,
    width: 90,
  },
  icon: {
    transform: 'rotateY(180deg)',
  },
})

export enum ScenarioListMode {
  View = 'view',
  Delete = 'delete',
}

interface Props {
  scenarioList: Scenario[]
  onGetScenarioList: () => void
}

export default function ScenarioList(props: Props) {
  const classes = useStyles()
  const { scenarioList, onGetScenarioList } = props
  const [mode, setMode] = useState<ScenarioListMode>(ScenarioListMode.View)
  const [checkedScenarioIDs, setCheckedScenarioIDs] = useState<number[]>([])

  useEffect(() => {
    onGetScenarioList()
  }, [onGetScenarioList])

  const onRefresh = useCallback(() => {
    onGetScenarioList()
  }, [onGetScenarioList])

  const onChecked = useCallback(
    (scenarioID: number) => {
      const idx = checkedScenarioIDs.findIndex(id => id === scenarioID)
      if (idx === -1) {
        checkedScenarioIDs.push(scenarioID)
        return setCheckedScenarioIDs([...checkedScenarioIDs])
      }
      checkedScenarioIDs.splice(idx, 1)
      setCheckedScenarioIDs([...checkedScenarioIDs])
    },
    [checkedScenarioIDs],
  )

  return (
    <>
      {/* header */}
      <div>
        <Button className={classes.button} variant="outlined" onClick={onRefresh}>
          <Icon className={classes.icon}>refresh</Icon>
          更新
        </Button>
        <Button onClick={() => setMode(ScenarioListMode.Delete)}>刪除</Button>
        <Button
          onClick={() => {
            setMode(ScenarioListMode.View)
            setCheckedScenarioIDs([])
          }}
        >
          取消
        </Button>
      </div>
      {scenarioList.map((scenario: Scenario) => (
        <ScenarioCard scenario={scenario} key={scenario.id} mode={mode} onChecked={onChecked} />
      ))}
    </>
  )
}
