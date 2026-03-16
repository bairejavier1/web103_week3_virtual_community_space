import express from 'express'
import { getAllEvents, getEventsByLocation } from '../controllers/eventsController.js'

const router = express.Router()

// Route: GET /api/events — returns all events
router.get('/', getAllEvents)

// Route: GET /api/events/location/:locationId — returns events for a specific venue
router.get('/location/:locationId', getEventsByLocation)

export default router