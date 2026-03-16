// Base URL for all location-related API calls
const BASE_URL = 'http://localhost:3000/api/locations'

// Fetch all venues
export const getAllLocations = async () => {
  const response = await fetch(BASE_URL)
  return response.json()
}

// Fetch a single venue by its ID
export const getLocationById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`)
  return response.json()
}