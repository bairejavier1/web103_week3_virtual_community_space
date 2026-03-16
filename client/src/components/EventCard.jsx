import './EventCard.css'

const EventCard = ({ event }) => {
  const eventDate = new Date(event.event_date)
  const now = new Date()
  const isPast = eventDate < now
  const diff = eventDate - now

  const days = Math.floor(Math.abs(diff) / (1000 * 60 * 60 * 24))
  const hours = Math.floor((Math.abs(diff) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((Math.abs(diff) % (1000 * 60 * 60)) / (1000 * 60))

  return (
    <div className={`event-card ${isPast ? 'past' : ''}`}>
      <h3 className={`event-card-title ${isPast ? 'past' : ''}`}>
        🎵 {event.title}
      </h3>

      <p className="event-card-desc">{event.description}</p>

      <p className="event-card-date">
        📅 {eventDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        {' · '}
        {eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </p>

      {/* Venue name only appears on the All Events page */}
      {event.location_name && (
        <p className="event-card-venue">📍 {event.location_name}</p>
      )}

      {isPast ? (
        <span className="event-card-badge past">⛔ Event Passed</span>
      ) : (
        <span className="event-card-badge upcoming">⏳ {days}d {hours}h {minutes}m away</span>
      )}
    </div>
  )
}

export default EventCard