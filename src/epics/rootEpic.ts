import { combineEpics } from 'redux-observable'
import senarioEpics from './senario/senariosEpics'
export default combineEpics(...senarioEpics)
