# Group Sensors

## Sensor [/v1/sensors/{sensor_id}]

- Parameters
  - `sensor_id`: `5a45d96cb53625210024c1d4` (string, required)

### Update sensor [PATCH]

Updates sensor.

- Request
  - Body
    - Attributes (UpdateSensorRequestBody, required)
- Response 200 (application/json)
  -  Attributes (Sensor, fixed-type)
- Response 400 (application/json)
  - Attributes (BadRequest)
- Response 404 (application/json)
  - Attributes (ResourceNotFound)

# Data Structures

## SensorType (enum)

### Members

- `thermal`
- `colorcode`

## Sensor (object)

- `id`: `5a45d96cb53625210024c1d4` (string, required)
- `name`: `AX8` (string, required)
- `type` (SensorType, required)
- `alive`: `false` (boolean, required)
- `error`: `(error message)` (string, required)
- `created_at`: `2017-01-05T00:00:00+00:00` (string, required)
- `updated_at`: `2017-01-05T00:10:00+00:00` (string, required)

## UpdateSensorRequestBody (object)

- `name`: `AX8` (string, optional)
- `alive`: `false` (boolean, optional) - This field is updated only by Edge.
- `error`: `異常が起きました` (string, optional) - This field is updated only by Edge.

## BadRequest (object)

- `status`: 400 (number, fixed)
- `name`: `BadRequest` (string, fixed)
- `description`: `(inspected error)` (string, required)

## ResourceNotFound (object)

- `status`: 404 (number, fixed)
- `name`: `ResourceNotFound` (string, fixed)
- `description`: `The resource does not exist in the database.` (string, required)
