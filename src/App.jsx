import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './styles/App.css'
import Home from './pages/Home'
import Admin from './pages/Admin'

const App = () => {
  const [managers, setManagers] = useState([
    { id: 1, name: 'Marcel Komar', points: 0 },
    { id: 2, name: 'Maria Smoligova', points: 0 },
    { id: 3, name: 'Peter Bari', points: 0 },
    { id: 4, name: 'Vladislav Kostra', points: 0 }
  ])

  const [gifts, setGifts] = useState([
    { id: 1, name: 'Smart Watch' },
    { id: 2, name: 'Wireless Earbuds' },
    { id: 3, name: 'Fitness Tracker' },
    { id: 4, name: 'Portable Charger' }
  ])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home managers={managers} gifts={gifts} />} />
        <Route 
          path="/admin" 
          element={<Admin 
            managers={managers} 
            setManagers={setManagers} 
            gifts={gifts} 
            setGifts={setGifts}
          />} 
        />
      </Routes>
    </Router>
  )
}

export default App