import dayjs from 'dayjs'
import IconData from '../../../assets/icons/scenario_data.svg'
import IconDetail from '../../../assets/icons/scenario_detail.svg'
import IconEdit from '../../../assets/icons/scenario_edit.svg'
import IconLock from '../../../assets/icons/status_lock.svg'
import IconRun from '../../../assets/icons/status_run.svg'
import IconStop from '../../../assets/icons/status_stop.svg'
import React, { useCallback } from 'react'
import { Card, CardHeader, CardMedia, CardContent, CardActions, Checkbox, Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Scenario } from '../../../model/scenario'
import { ScenarioListMode } from './ScenarioList'

const useStyle = makeStyles({
  card: {
    border: 'solid 1px #cccccc',
    borderRadius: 0,
    boxShadow: 'none !important',
    color: '#525b5c',
    float: 'left',
    marginRight: 18,
    marginTop: 12,
    position: 'relative',
    width: 230,
    '& .action': {
      width: 190,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-around',
    },
    '& .content': {
      font: '12px YuGothic',
      margin: '0 auto',
      width: 190,
    },
    '& .deletion_checkbox': {
      position: 'absolute',
      right: 0,
    },
    '& .material-icons': {
      height: 50,
      width: 50,
    },
    '& .thumbnail': {
      margin: '0 auto',
      width: 190,
    },
  },
})

interface Props {
  mode: ScenarioListMode
  scenario: Scenario
  onChecked: (scenarioID: number) => void
}

export default function ScenarioCard(props: Props) {
  const classes = useStyle()
  const { mode, onChecked, scenario } = props

  const onSelect = useCallback(() => {
    onChecked(scenario.id)
  }, [onChecked, scenario])

  return (
    <Card className={classes.card}>
      {mode === 'delete' && (
        <Checkbox
          className="deletion_checkbox"
          icon={<Icon style={{ fontSize: 44 }}>check_circle</Icon>}
          checkedIcon={
            <Icon style={{ fontSize: 44 }} color="error">
              check_circle
            </Icon>
          }
          onClick={onSelect}
        />
      )}
      <CardHeader
        title={
          <>
            <Icon>
              <img src={IconLock} alt="lock" />
            </Icon>
            <Icon>
              <img src={IconRun} alt="run" />
            </Icon>
            <Icon>
              <img src={IconStop} alt="stop" />
            </Icon>
          </>
        }
      />
      <CardMedia className="thumbnail" component="img" image={scenario.thumbnail_url} />
      <CardContent className="content">
        <div>{scenario.display_name}</div>
        <div>{dayjs(scenario.updated_at).format('YYYY/MM/DD HH:mm:ss')}</div>
      </CardContent>
      {mode === 'view' && (
        <CardActions className="action">
          <Icon>
            <img src={IconEdit} alt="edit" />
          </Icon>
          <Icon>
            <img src={IconDetail} alt="data" />
          </Icon>
          <Icon>
            <img src={IconData} alt="data" />
          </Icon>
        </CardActions>
      )}
    </Card>
  )
}
