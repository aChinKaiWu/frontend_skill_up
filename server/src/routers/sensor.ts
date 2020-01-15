import express from 'express'

const types = ['A', 'B', 'C']
const fakeSensors: any[] = []

for (let idx = 0; idx < 55; idx++) {
  const s: any = {
    id: idx,
    display_name: 'sensor ' + idx,
    type: types[idx % 3],
  }
  if (idx % 4 === 0) {
    s.extra = 'extra ' + idx
  }
  fakeSensors.push(s)
}

const SensorRouter = express.Router()

SensorRouter.get('/', function(req, res) {
  const { skip, limit } = req.query
  const len = skip + limit >= fakeSensors.length ? fakeSensors.length - 1 : skip + limit
  const result = []
  for (let i = skip; i <= len; i++) {
    result.push(fakeSensors[i])
  }
  res.send(result)
})

SensorRouter.get('/:id', function(req, res) {
  const sensor = fakeSensors.find(s => s.id === req.params.id)
  if (!sensor) {
    res.status(404).send('Sensor not found')
    return
  }

  res.send(sensor)
})

SensorRouter.post('/', async function(req, res) {
  const { display_name } = req.body
  if (!display_name) {
    res.status(400).send({
      code: '400-01',
      reason: 'Display name is missing',
    })
    return
  } else if (display_name.length > 10) {
    res.status(400).send({
      code: '400-02',
      reason: 'Display name exceeds maximum length',
    })
    return
  }
  const newSensor = await new Promise(resolve => {
    setTimeout(() => {
      resolve({
        ...req.body,
        id: fakeSensors.length + 1,
      })
    }, 2000)
  })
  fakeSensors.push(newSensor)
  res.send(newSensor)
})

export default SensorRouter
