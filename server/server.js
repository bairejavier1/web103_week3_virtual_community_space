import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import eventsRouter from './routes/eventsRouter.js'
import locationsRouter from './routes/locationsRouter.js'

const app = express()
const PORT = process.env.PORT || 3000

// Allow the React frontend to communicate with this server
app.use(cors())

// Parse incoming JSON request bodies
app.use(express.json())

// Register API routes
app.use('/api/events', eventsRouter)
app.use('/api/locations', locationsRouter)

app.listen(PORT, () => {
  console.log(`🎵 Server running on port ${PORT}`)
})