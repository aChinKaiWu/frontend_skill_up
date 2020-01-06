import express, { Application } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import ScenarioRouter from '@routers/scenario'

const app = express()

app.use(express.static('public'))

app.use(bodyParser.json({ limit: '50mb' }))

// Allows us to receive requests with data in x-www-form-urlencoded format
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

// Enables cors
app.use(cors())

// Routes
app.use('/v1/scenarios', ScenarioRouter)

export default app
