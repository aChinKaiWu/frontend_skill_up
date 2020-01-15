export interface Scenario {
  id: number
  display_name: string
  created_at: string
  updated_at: string
  thumbnail_url: string
}

export interface ScenarioCreateParams {
  display_name: string
}
