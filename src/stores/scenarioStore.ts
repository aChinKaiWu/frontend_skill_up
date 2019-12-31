import { observable, action } from 'mobx'
import { Scenario } from '../model/scenario'
import { fakeScenarioList } from '../containers/ScenarioContainer/mocks'

export class ScenarioStore {
  @observable
  scenarios: Scenario[] = []

  @action
  loadScenarios(): void {
    this.scenarios = [...fakeScenarioList]
  }

  @action
  deleteScenarios(ids: number[]): void {
    this.scenarios = this.scenarios.filter(scenario => !ids.includes(scenario.id))
  }
}
