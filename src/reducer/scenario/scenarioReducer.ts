import { AnyAction } from 'redux'
import { Scenario } from '../../model/scenario'

export interface ScenarioState {
  scenarioList: Scenario[]
}

export const scenarioInitState: ScenarioState = {
  scenarioList: []
}

export default function scenarioReducer(state: ScenarioState = scenarioInitState, action: AnyAction) {
  switch(action.type) {
    default:
      return state
  }
}