import React from 'react'
import { Button, Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  button: {
    background: '#ffffff',
    border: 'solid 2px #525B5C',
    borderRadius: 16,
    color: '#525B5C',
    font: 'Bold 14px YuGothic',
    height: 32,
    left: 25,
    lineHeight: 1,
    opacity: 1,
    padding: 0,
    top: 79,
    width: 90,
  },
  icon: {
    color: '#525B5C',
    transform: 'rotateY(180deg)',
  },
})

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <div>
      <Button className={classes.button} variant="outlined">
        <Icon className={classes.icon}>refresh</Icon>
        更新
      </Button>
    </div>
  )
}

export default App
