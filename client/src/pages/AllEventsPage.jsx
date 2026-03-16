import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllEvents } from '../services/EventsAPI'
import { getAllLocations } from '../services/LocationsAPI'
import EventCard from '../components/EventCard'
import './AllEventsPage.css'

const AllEventsPage = () => {
  const navigate = useNavigate()
  const [events, setEvents] = useState([])
  const [locations, setLocations] = useState([])
  const [selectedLocation, setSelectedLocation] = useState('all')

  useEffect(() => {
    const fetchData = async () => {
      const eventsData = await getAllEvents()
      const locationsData = await getAllLocations()
      setEvents(eventsData)
      setLocations(locationsData)
    }
    fetchData()
  }, [])

  // Filter events by selected venue
  const filteredEvents = selectedLocation === 'all'
    ? events
    : events.filter(e => e.location_id === parseInt(selectedLocation))

  return (
    <div>
      {/* Page hero */}
      <div className="allevents-hero">
        <h1>🎟️ All Miami Events</h1>
        <p>Browse every upcoming and past concert across all venues</p>
      </div>

      <div className="allevents-container">
        <button className="allevents-back-btn" onClick={() => navigate('/')}>
          ← Back to Venues
        </button>

        {/* Venue filter dropdown */}
        <div className="allevents-filter">
          <label htmlFor="venue-filter">Filter by Venue:</label>
          <select
            id="venue-filter"
            value={selectedLocation}
            onChange={e => setSelectedLocation(e.target.value)}
          >
            <option value="all">All Venues</option>
            {locations.map(loc => (
              <option key={loc.id} value={loc.id}>{loc.name}</option>
            ))}
          </select>
          <span className="allevents-count">
            {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Event list */}
        {filteredEvents.length === 0 ? (
          <p className="allevents-empty">No events found.</p>
        ) : (
          filteredEvents.map(event => <EventCard key={event.id} event={event} />)
        )}
      </div>
    </div>
  )
}

export default AllEventsPage