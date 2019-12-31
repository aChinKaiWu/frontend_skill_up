import React, { useEffect, useCallback } from 'react'
import ScenarioCard from './ScenarioCard'
import { Button, Icon } from '@material-ui/core'
import { Scenario } from '../../../model/scenario'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  button: {
    border: 'solid 2px #525B5C',
    borderRadius: 16,
    font: 'Bold 14px YuGothic',
    height: 32,
    padding: 0,
    width: 90,
  },
  icon: {
    color: '#525B5C',
    transform: 'rotateY(180deg)',
  },
})

interface Props {
  scenarioList: Scenario[]
  onGetScenarioList: () => void
}

export default function ScenarioList(props: Props) {
  const classes = useStyles()
  const { scenarioList, onGetScenarioList } = props

  useEffect(() => {
    onGetScenarioList()
  }, [onGetScenarioList])

  const onRefresh = useCallback(() => {
    onGetScenarioList()
  }, [onGetScenarioList])

  return (
    <>
      {/* header */}
      <div>
        <Button className={classes.button} variant="outlined" onClick={onRefresh}>
          <Icon className={classes.icon}>refresh</Icon>
          更新
        </Button>
      </div>
      {scenarioList.map((scenario: Scenario) => (
        <ScenarioCard scenario={scenario} key={scenario.id} />
      ))}
    </>
  )
}
