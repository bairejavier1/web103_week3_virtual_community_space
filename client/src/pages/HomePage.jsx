import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllLocations } from '../services/LocationsAPI'
import './HomePage.css'

const venueIcons = ['🏟️', '🎸', '🌊', '🎭']

const cardGradients = [
  'linear-gradient(135deg, #e94560, #c62a47)',
  'linear-gradient(135deg, #f5a623, #e8890a)',
  'linear-gradient(135deg, #0f3460, #16213e)',
  'linear-gradient(135deg, #533483, #3b2468)',
]

const HomePage = () => {
  const [locations, setLocations] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchLocations = async () => {
      const data = await getAllLocations()
      setLocations(data)
    }
    fetchLocations()
  }, [])

  return (
    <div>
      {/* Hero banner */}
      <div className="home-hero">
        <h1>🎶 Miami Music Scene</h1>
        <p>Your guide to live music in the Magic City</p>
      </div>

      <div className="home-container">
        {/* All Events button */}
        <button className="home-all-events-btn" onClick={() => navigate('/events')}>
          🎟️ View All Events
        </button>

        <p className="home-section-label">Select a Venue</p>

        {/* Venue cards grid */}
        <div className="home-grid">
          {locations.map((location, i) => (
            <div
              key={location.id}
              className="venue-card"
              style={{ background: cardGradients[i % cardGradients.length] }}
              onClick={() => navigate(`/location/${location.id}`)}
            >
              <div className="venue-card-icon">{venueIcons[i % venueIcons.length]}</div>
              <h2>{location.name}</h2>
              <p className="venue-card-address">📍 {location.address}</p>
              <p className="venue-card-desc">{location.description}</p>
              <p className="venue-card-cta">View Events →</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage