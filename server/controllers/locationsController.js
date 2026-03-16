import { pool } from '../config/database.js'

// Get all locations (venues) from the database
export const getAllLocations = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM locations ORDER BY name ASC`)
    res.json(result.rows)
  } catch (err) {
    console.error('Error fetching locations:', err)
    res.status(500).json({ error: 'Failed to fetch locations' })
  }
}

// Get a single location by its ID
export const getLocationById = async (req, res) => {
  const { id } = req.params
  try {
    const result = await pool.query(
      `SELECT * FROM locations WHERE id = $1`,
      [id]
    )
    // If no location found, return a 404 error
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Location not found' })
    }
    res.json(result.rows[0])
  } catch (err) {
    console.error('Error fetching location by ID:', err)
    res.status(500).json({ error: 'Failed to fetch location' })
  }
}