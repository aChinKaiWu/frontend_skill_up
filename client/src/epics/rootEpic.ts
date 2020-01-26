import { combineEpics } from 'redux-observable'
import scenarioEpics from './scenario/scenarioEpics'
import sensorEpics from './sensor/sensorEpics'

export default combineEpics(...scenarioEpics, ...sensorEpics)
