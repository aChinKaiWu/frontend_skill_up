import { AnyAction } from 'redux'
import { ScenarioList } from '../../model/scenario'

export interface ScenarioState {
  scenarioList: ScenarioList
}

export const scenarioInitState: ScenarioState = {
  scenarioList: [],
}

export default function scenarioReducer(state: ScenarioState = scenarioInitState, action: AnyAction) {
  switch (action.type) {
    default:
      return state
  }
}
