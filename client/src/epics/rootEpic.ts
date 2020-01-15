import scenarioEpics from './scenario/scenarioEpics'
import sensorEpics from './sensor/sensorEpics'

import { combineEpics } from 'redux-observable'

export default combineEpics(...scenarioEpics, ...sensorEpics)
