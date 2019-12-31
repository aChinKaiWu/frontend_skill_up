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
}
