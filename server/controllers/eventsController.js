import { pool } from '../config/database.js'

// Get all events from the database, joined with their location name
export const getAllEvents = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT events.*, locations.name AS location_name
      FROM events
      JOIN locations ON events.location_id = locations.id
      ORDER BY event_date ASC
    `)
    res.json(result.rows)
  } catch (err) {
    console.error('Error fetching all events:', err)
    res.status(500).json({ error: 'Failed to fetch events' })
  }
}

// Get all events for a specific location using the location's ID
export const getEventsByLocation = async (req, res) => {
  const { locationId } = req.params
  try {
    const result = await pool.query(
      `SELECT * FROM events WHERE location_id = $1 ORDER BY event_date ASC`,
      [locationId]
    )
    res.json(result.rows)
  } catch (err) {
    console.error('Error fetching events by location:', err)
    res.status(500).json({ error: 'Failed to fetch events for this location' })
  }
}