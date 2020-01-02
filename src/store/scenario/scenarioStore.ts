import { createStore } from 'effector'
import { getScenarioList, deleteScenarios } from './scenarioEvents'
import { Scenario } from '../../model/scenario'
import FakeThumbnail from '../../assets/icons/fake-scenario.png'

export interface ScenarioStore {
  scenarios: Scenario[]
}

const initState: ScenarioStore = {
  scenarios: [],
}

const scenarioStore = createStore<ScenarioStore>(initState)
  .on(getScenarioList.done, (state, { result }) => {
    return {
      ...state,
      scenarios: result.data.scenarios.map(scenario => {
        scenario.thumbnail_url = FakeThumbnail
        return scenario
      }),
    }
  })
  .on(deleteScenarios.done, (state, { params }) => {
    return {
      ...state,
      scenarios: state.scenarios.filter(scenario => !params.includes(scenario.id)),
    }
  })

export default scenarioStore
