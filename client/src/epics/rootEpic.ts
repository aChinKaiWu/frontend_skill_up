import { combineEpics } from 'redux-observable'
import scenarioEpics from './scenario/scenarioEpics'
export default combineEpics(...scenarioEpics)
