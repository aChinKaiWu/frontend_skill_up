import { combineEpics } from 'redux-observable'
import scenarioEpics from './scenario/scenariosEpics'
export default combineEpics(...scenarioEpics)
