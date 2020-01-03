import { combineEpics } from 'redux-observable'
import scenarioEpics from './scenarioEpics'

export default combineEpics(...scenarioEpics)
