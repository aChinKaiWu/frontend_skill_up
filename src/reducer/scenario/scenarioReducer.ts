import { AnyAction } from 'redux'
import { Scenario } from '../../model/scenario'

export interface scenarioState {
  scenarioList: Scenario[]
}

export const scenarioInitState: scenarioState = {
  scenarioList: []
}

export default function scenarioReducer(state: scenarioState = scenarioInitState, action: AnyAction) {
  switch(action.type) {
    default:
      return state
  }
}