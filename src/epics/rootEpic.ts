import scenarioEpics from './scenario/scenarioEpics'
import { combineEpics } from 'redux-observable'

export default combineEpics(...scenarioEpics)
