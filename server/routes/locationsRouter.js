import express from 'express'
import { getAllLocations, getLocationById } from '../controllers/locationsController.js'

const router = express.Router()

// Route: GET /api/locations — returns all venues
router.get('/', getAllLocations)

// Route: GET /api/locations/:id — returns a single venue by ID
router.get('/:id', getLocationById)

export default router