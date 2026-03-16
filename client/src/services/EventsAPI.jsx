// Base URL for all event-related API calls
const BASE_URL = 'http://localhost:3000/api/events'

// Fetch all events from all venues
export const getAllEvents = async () => {
  const response = await fetch(BASE_URL)
  return response.json()
}

// Fetch all events for a specific venue by its location ID
export const getEventsByLocation = async (locationId) => {
  const response = await fetch(`${BASE_URL}/location/${locationId}`)
  return response.json()
}