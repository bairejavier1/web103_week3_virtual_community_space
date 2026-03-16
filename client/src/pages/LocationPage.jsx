import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getEventsByLocation } from '../services/EventsAPI'
import { getLocationById } from '../services/LocationsAPI'
import EventCard from '../components/EventCard'
import './LocationPage.css'

const LocationPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [location, setLocation] = useState(null)
  const [events, setEvents] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const fetchData = async () => {
      const locationData = await getLocationById(id)
      const eventsData = await getEventsByLocation(id)
      setLocation(locationData)
      setEvents(eventsData)
    }
    fetchData()
  }, [id])

  const filteredEvents = events.filter(event => {
    const isPast = new Date(event.event_date) < new Date()
    if (filter === 'upcoming') return !isPast
    if (filter === 'past') return isPast
    return true
  })

  if (!location) return (
    <div className="location-loading">Loading venue...</div>
  )

  return (
    <div>
      {/* Venue hero banner */}
      <div className="location-hero">
        <div className="location-hero-inner">
          <button className="location-back-btn" onClick={() => navigate('/')}>
            ← Back to Venues
          </button>
          <h1>🏟️ {location.name}</h1>
          <p className="location-hero-address">📍 {location.address}</p>
          <p className="location-hero-desc">{location.description}</p>
        </div>
      </div>

      <div className="location-container">
        {/* Filter buttons */}
        <div className="location-filters">
          {['all', 'upcoming', 'past'].map(option => (
            <button
              key={option}
              className={`filter-btn ${filter === option ? 'active' : 'inactive'}`}
              onClick={() => setFilter(option)}
            >
              {option === 'all' ? '🎵 All' : option === 'upcoming' ? '⏳ Upcoming' : '⛔ Past'}
            </button>
          ))}
          <span className="filter-count">
            {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Event list */}
        {filteredEvents.length === 0 ? (
          <p className="location-empty">No events found.</p>
        ) : (
          filteredEvents.map(event => <EventCard key={event.id} event={event} />)
        )}
      </div>
    </div>
  )
}

export default LocationPage