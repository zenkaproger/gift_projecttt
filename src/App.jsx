import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './styles/App.css'
import Home from './pages/Home'
import Admin from './pages/Admin'

const App = () => {
  const [managers, setManagers] = useState([])
  const [gifts, setGifts] = useState([])

  // Загружаем данные из localStorage при загрузке
  useEffect(() => {
    const savedManagers = localStorage.getItem('managers')
    const savedGifts = localStorage.getItem('gifts')

    if (savedManagers) {
      setManagers(JSON.parse(savedManagers))
    } else {
      const defaultManagers = [
        { id: 1, name: 'Marcel Komar', points: 0 },
        { id: 2, name: 'Maria Smoligova', points: 0 },
        { id: 3, name: 'Peter Bari', points: 0 },
        { id: 4, name: 'Vladislav Kostra', points: 0 },
        { id: 5, name: 'Izidor Korec', points: 0 },
        { id: 6, name: 'Vladislav Kovalski', points: 0 },
        { id: 7, name: 'Milos Varga', points: 0 },
        { id: 8, name: 'Michal Sobotka', points: 0 },
        { id: 9, name: 'Milan Graf', points: 0 },
        { id: 10, name: 'Martin Molnar', points: 0 },
        { id: 11, name: 'Pavlina Cerna', points: 0 },
        { id: 12, name: 'Michal Molnar', points: 0 },
        { id: 13, name: 'Roberta Cerna', points: 0 },
        { id: 14, name: 'Jana Kovarikova', points: 0 },
        { id: 15, name: 'Vaclav Nesvera', points: 0 },
        { id: 16, name: 'Josef Sadecki', points: 0 },
        { id: 17, name: 'Sofia Sabo', points: 0 },
        { id: 18, name: 'Bogumil Kopacek', points: 0 },
        { id: 19, name: 'Tobias Varga', points: 0 },
        { id: 20, name: 'Juraj Kremnicky', points: 0 },
        { id: 21, name: 'Roman Bartos', points: 0 },
        { id: 22, name: 'Adam Hasek', points: 0 },
        { id: 23, name: 'Ivan Kovac', points: 0 },
        { id: 24, name: 'Jan Rudicki', points: 0 },
        { id: 25, name: 'Jan Markos', points: 0 },
        { id: 26, name: 'Emma Novakova', points: 0 },
        { id: 27, name: 'Martian Matiasko', points: 0 },
        { id: 28, name: 'Michal Sloboda', points: 0 },
        { id: 29, name: 'Milan Majernik', points: 0 },
        { id: 30, name: 'Mia Kral', points: 0 },
        { id: 31, name: 'Anna Novakova', points: 0 },
        { id: 32, name: 'Karl Novak', points: 0 },
        { id: 33, name: 'Jan Kravchik', points: 0 },
        { id: 34, name: 'Marek Bartos', points: 0 },
        { id: 35, name: 'Jakub Betynsky', points: 0 },
        { id: 36, name: 'Daniel Pokorny', points: 0 },
        { id: 37, name: 'Peter Kolar', points: 0 },
        { id: 38, name: 'Simona Simkova', points: 0 },
        { id: 39, name: 'Sebastijan Perašič', points: 0 },
        { id: 40, name: 'Maria Novak', points: 0 },
        { id: 41, name: 'Daniel Perus', points: 0 },
        { id: 42, name: 'Kaja Lah', points: 0 },
        { id: 43, name: 'Nika Kos', points: 0 },
        { id: 44, name: 'Branko Kolic', points: 0 },
        { id: 45, name: 'Jan Oblak', points: 0 },
        { id: 46, name: 'Jože Rozman', points: 0 },
        { id: 47, name: 'Anika Breht', points: 0 },
        { id: 48, name: 'Liam Lauro', points: 0 },
        { id: 49, name: 'David Zorman', points: 0 },
        { id: 50, name: 'Rudolf Bril', points: 0 }

      ]
      setManagers(defaultManagers)
      localStorage.setItem('managers', JSON.stringify(defaultManagers))
    }

    if (savedGifts) {
      setGifts(JSON.parse(savedGifts))
    } else {
      const defaultGifts = [
        { id: 1, name: 'Телефон' },
        { id: 2, name: 'AppleWatch' },
        { id: 3, name: 'Телевiзор' },
        { id: 4, name: 'iPad' },
        { id: 5, name: 'PlayStation' },
        { id: 6, name: 'Сертифікат в брендовий магазин' },
        { id: 7, name: 'Ноутбук' },
        { id: 8, name: 'Зарядна станція чи акумулятор' },
        { id: 9, name: 'AirPods чи хороші навушники' },
        { id: 10, name: 'Колонка' },
        { id: 11, name: 'Електросамокат' },
        { id: 12, name: 'Робот пилосос чи кофемашинка' },
        { id: 13, name: 'Дрон з камерой' },
        { id: 14, name: 'Якийсь спортивний тренажер' },
        { id: 15, name: 'Будь яка річ з брендового магазину' },
        { id: 16, name: 'Мебель на вибір' }
      ]
      setGifts(defaultGifts)
      localStorage.setItem('gifts', JSON.stringify(defaultGifts))
    }
  }, [])

  // Сохраняем менеджеров в localStorage при изменении
  useEffect(() => {
    if (managers.length > 0) {
      localStorage.setItem('managers', JSON.stringify(managers))
    }
  }, [managers])

  // Сохраняем подарки в localStorage при изменении
  useEffect(() => {
    if (gifts.length > 0) {
      localStorage.setItem('gifts', JSON.stringify(gifts))
    }
  }, [gifts])

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