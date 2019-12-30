# Group Sensor Data

Edge 向けセンサーデータに関連する API 群。

## Sensor Data [/v1/sensor_data/thermal_camera/{sensor_id}]

### Create [POST]

[状態遷移表](state_transition_table/sensor_data_create_api.png)

サーマルセンサーデータの登録。以下の状況に該当する場合、データを保存せず破棄する。

1. 被験者を特定できない
2. 最新センサーデータの登録時間と API 呼び出し時間の差が閾値以下、および被験者が同様

破棄条件に該当しない場合、下記の処理を行う。

1. settings collection から設定情報を取り出す。
2. daily_average collection から該当被験者過去一ヶ月分を日平均体温を取り出し、月平均体温を算出。
3. 月平均体温と API 呼び出し時渡す体温の差を算出。
4. 算出された値と受け取った情報をデータベースに保存。

保存した後、以下の処理を行う。

1. 体温差が閾値以下の場合、処理なし。
2. 体温差が閾値以上の場合、関連情報を alert collection に保存。
3. 設定された送信先へアラートメールを送信。

- Request
  - Headers

            Content-Type: application/json

  - Body
    - Attributes (ThermalSensorData)
- Response 204
- Response 400 (application/json)
  - Attributes (BadRequest)

## Empty Sensor Data [/v1/sensor_data/empty]

### Create [POST]

[状態遷移表](state_transition_table/empty_sensor_data_create_api.png)

画像がない/顔を検出できない場合用の API。サーバーは空のデータを保存せず、システム状態を更新。

- Request
  - Headers

            Content-Type: application/json

- Response 204
- Response 400 (application/json)
  - Attributes (BadRequest)

## Sensor Data Image Path [/v1/sensor_data/{sensor_type}/{sensor_id}/images]

### Create [POST]

計測時に利用した iPod touch / AX8 の画像を timestamp でファイル名を設定して直接装置内の領域に保存。データベース上は画像へのパスを保存。

- Request
  - Headers

            Content-Type: application/json

  - Body
    - Attributes (SensorImagePath)

- Response 204
- Response 400 (application/json)
  - Attributes (BadRequest)

# Data Structures

## ThermalSensorData (object)

- `temperature_displayed`: 36.6 (number, required)
- `body_temperature_pattern_01` (Temperatures, required)
- `body_temperature_pattern_02` (Temperatures, required)
- `body_temperature_pattern_03` (Temperatures, required)
- `timestamp`: `1546515192463` (number, required)

## SensorImagePath (object)

- `image_path`: `/thermal_camera/1483574400.png` (string, required)
- `timestamp`: `1546515192463` (number, required)

## Temperatures (object)

- `max`: `36.6` (number, required)
- `min`: `35.2` (number, required)
- `average`: `36.1` (number, required)
- `standard_deviation`: `36.0` (number, required)

## BadRequest (object)

- `status`: `400` (number, fixed)
- `name`: `BadRequest` (string, fixed)
- `description`: `(inspected error)` (string, required)
