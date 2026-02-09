const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

console.log('Server initializing...')

// Подключаем БД после инициализации Express
const db = require('./src/db.cjs')

// 🔹 получить всех менеджеров
app.get('/managers', (req, res) => {
  db.all('SELECT * FROM managers', (err, rows) => {
    if (err) return res.status(500).json(err)
    res.json(rows)
  })
})

// 🔹 получить все подарки
app.get('/gifts', (req, res) => {
  db.all('SELECT * FROM gifts', (err, rows) => {
    if (err) return res.status(500).json(err)
    res.json(rows)
  })
})

// 🔹 добавить менеджера
app.post('/managers', (req, res) => {
  const { id, name } = req.body

  db.run(
    'INSERT OR IGNORE INTO managers (id, name, points) VALUES (?, ?, ?)',
    [id, name, 0],
    function (err) {
      if (err) return res.status(500).json(err)
      res.json({ success: true })
    }
  )
})

// 🔹 удалить менеджера
app.delete('/managers/:id', (req, res) => {
  const { id } = req.params

  db.run(
    'DELETE FROM managers WHERE id = ?',
    [id],
    function (err) {
      if (err) return res.status(500).json(err)
      res.json({ success: true })
    }
  )
})

// 🔹 обновить имя менеджера
app.put('/managers/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body

  db.run(
    'UPDATE managers SET name = ? WHERE id = ?',
    [name, id],
    function (err) {
      if (err) return res.status(500).json(err)
      res.json({ success: true })
    }
  )
})

// 🔹 добавить очки менеджеру
app.post('/managers/add-points', (req, res) => {
  const { id, points } = req.body

  db.run(
    'UPDATE managers SET points = points + ? WHERE id = ?',
    [points, id],
    function (err) {
      if (err) return res.status(500).json(err)
      res.json({ success: true })
    }
  )
})

app.listen(3001, () => {
  console.log('✅ Server started on http://localhost:3001')
})

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server')
  process.exit(0)
})