export interface Sensor {
  id: string
  display_name: string
  type: 'A' | 'B' | 'C'
  extra?: string
}

export interface SensorRequestBody {
  display_name: string
  type: 'A' | 'B' | 'C'
  extra?: string
}
