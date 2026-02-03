import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './styles/App.css'
import Home from './pages/Home'
import Admin from './pages/Admin'

const App = () => {
  const [managers, setManagers] = useState([])
  const [gifts, setGifts] = useState([])

  // Загружаем данные из базы данных при загрузке
  useEffect(() => {
    fetch('http://localhost:3001/managers')
      .then(res => res.json())
      .then(data => setManagers(data))
      .catch(err => console.error('Error loading managers:', err))

    fetch('http://localhost:3001/gifts')
      .then(res => res.json())
      .then(data => setGifts(data))
      .catch(err => console.error('Error loading gifts:', err))
  }, [])

  // Автоматическое обновление данных каждые 10 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://localhost:3001/managers')
        .then(res => res.json())
        .then(data => setManagers(data))
        .catch(err => console.error('Error updating managers:', err))

      fetch('http://localhost:3001/gifts')
        .then(res => res.json())
        .then(data => setGifts(data))
        .catch(err => console.error('Error updating gifts:', err))
    }, 10000) // 10 секунд

    return () => clearInterval(interval)
  }, [])

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