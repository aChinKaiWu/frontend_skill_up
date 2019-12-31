import { observable, action } from 'mobx'
import { Scenario } from '../model/scenario'
import { Scenario as ScenarioAPI } from '../apis'

export class ScenarioStore {
  @observable
  scenarios: Scenario[] = []

  loadScenarios(): void {
    ScenarioAPI.getList().then(
      action(({ scenarios }) => { this.scenarios = scenarios })
    )
  }

  deleteScenarios(ids: number[]): void {
    ScenarioAPI.deleteList(ids).then(
      action(() => {
        this.scenarios = this.scenarios.filter(scenario => !ids.includes(scenario.id))
      })
    )
  }
}
