const express = require('express')
const cors = require('cors')
const db = require('./src/db.cjs')

const app = express()
app.use(cors())
app.use(express.json())

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