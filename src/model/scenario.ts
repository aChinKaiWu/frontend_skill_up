export default interface Scenario {
  id: number
  display_name: string
  created_at: string
  updated_at: string
  thumbnail_url: string
}

export type ScenarioList = Scenario[]
