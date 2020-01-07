export interface Scenario {
  id: number
  display_name: string
  created_at: string
  updated_at: string
  thumbnail_url: string
}

export interface Sensor {
  id: string
  display_name: string
  type: 'a' | 'b'
  qq?: number
}
