import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LocationPage from './pages/LocationPage'
import AllEventsPage from './pages/AllEventsPage'

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page shows all venue cards */}
        <Route path="/" element={<HomePage />} />

        {/* Location detail page — :id is the venue's ID from the database */}
        <Route path="/location/:id" element={<LocationPage />} />

        {/* All events page — stretch feature */}
        <Route path="/events" element={<AllEventsPage />} />
      </Routes>
    </Router>
  )
}

export default App