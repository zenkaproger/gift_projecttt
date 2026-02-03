import { useState } from 'react'
import '../styles/Admin.css'

const Admin = ({ managers, setManagers, gifts, setGifts }) => {
  const [managerName, setManagerName] = useState('')
  const [giftName, setGiftName] = useState('')
  const [editingManager, setEditingManager] = useState(null)
  const [editingGift, setEditingGift] = useState(null)
  const [addPoint, setAddPoint] = useState('')
  const [removePoint, setRemovePoint] = useState('')
  const [selectedManagerId, setSelectedManagerId] = useState('')

  // Функции для менеджеров
  const addManager = () => {
    if (managerName.trim()) {
      const newManager = {
        id: Date.now(),
        name: managerName,
        points: 0
      }
      setManagers([...managers, newManager])
      setManagerName('')
    }
  }

  const deleteManager = (id) => {
    setManagers(managers.filter(m => m.id !== id))
  }

  const updateManager = (id, newName) => {
    setManagers(managers.map(m => m.id === id ? { ...m, name: newName } : m))
    setEditingManager(null)
  }

  // Функции для подарков
  const addGift = () => {
    if (giftName.trim()) {
      const newGift = {
        id: Date.now(),
        name: giftName
      }
      setGifts([...gifts, newGift])
      setGiftName('')
    }
  }

  const deleteGift = (id) => {
    setGifts(gifts.filter(g => g.id !== id))
  }

  const updateGift = (id, newName) => {
    setGifts(gifts.map(g => g.id === id ? { ...g, name: newName } : g))
    setEditingGift(null)
  }

  const addPointsToManager = () => {
    if(!selectedManagerId || !addPoint) return;
    setManagers(
        managers.map(manager => manager.id === Number(selectedManagerId)
        ? { ...manager, points: manager.points + Number(addPoint) }
        : manager
    )
    )
    setAddPoint('')
  }

  const removePointsFromManager = () => {
    if(!selectedManagerId || !removePoint) return;
    setManagers(
        managers.map(manager => manager.id === Number(selectedManagerId)
        ? { ...manager, points: Math.max(0, manager.points - Number(removePoint)) }
        : manager
    )
    )
    setRemovePoint('')
  }

  return (
    <div className="adminContainer">
      <h1>Админ-панель</h1>
      
      <div className="adminSection">
        <h2>Управление менеджерами</h2>
        
        <div className="inputGroup">
          <input
            type="text"
            placeholder="Ім'я менеджера"
            value={managerName}
            onChange={(e) => setManagerName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addManager()}
          />
          <button onClick={addManager}>Додати менеджера</button>
        </div>

        <table className="adminTable">
          <thead>
            <tr>
              <th>#</th>
              <th>Ім'я</th>
              <th>Очки</th>
              <th>Дії</th>
            </tr>
          </thead>
          <tbody>
            {managers.map((manager, index) => (
              <tr key={manager.id}>
                <td>{index + 1}</td>
                <td>
                  {editingManager === manager.id ? (
                    <input
                      type="text"
                      defaultValue={manager.name}
                      onBlur={(e) => updateManager(manager.id, e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && updateManager(manager.id, e.target.value)}
                      autoFocus
                    />
                  ) : (
                    manager.name
                  )}
                </td>
                <td>{manager.points}</td>
                <td>
                  <button onClick={() => setEditingManager(manager.id)}>Редагувати</button>
                  <button onClick={() => deleteManager(manager.id)}>Видалити</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="inputGroup">
  <select
    value={selectedManagerId}
    onChange={(e) => setSelectedManagerId(e.target.value)}
  >
    <option value="">Оберіть менеджера</option>
    {managers.map(manager => (
      <option key={manager.id} value={manager.id}>
        {manager.name}
      </option>
    ))}
  </select>

  <input
    type="number"
    placeholder="Кількість очок"
    value={addPoint}
    onChange={(e) => setAddPoint(e.target.value)}
  />

  <button onClick={addPointsToManager}>
    Додати очки
  </button>
</div>

<div className="inputGroup">
  <select
    value={selectedManagerId}
    onChange={(e) => setSelectedManagerId(e.target.value)}
  >
    <option value="">Оберіть менеджера</option>
    {managers.map(manager => (
      <option key={manager.id} value={manager.id}>
        {manager.name}
      </option>
    ))}
  </select>

  <input
    type="number"
    placeholder="Кількість очок для видалення"
    value={removePoint}
    onChange={(e) => setRemovePoint(e.target.value)}
  />

  <button onClick={removePointsFromManager}>
    Видалити очки
  </button>
</div>


      <div className="adminSection">
        <h2>Управление подарками</h2>
        
        <div className="inputGroup">
          <input
            type="text"
            placeholder="Назва подарунка"
            value={giftName}
            onChange={(e) => setGiftName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addGift()}
          />
          <button onClick={addGift}>Додати подарунок</button>
        </div>

        <table className="adminTable">
          <thead>
            <tr>
              <th>#</th>
              <th>Назва</th>
              <th>Дії</th>
            </tr>
          </thead>
          <tbody>
            {gifts.map((gift, index) => (
              <tr key={gift.id}>
                <td>{index + 1}</td>
                <td>
                  {editingGift === gift.id ? (
                    <input
                      type="text"
                      defaultValue={gift.name}
                      onBlur={(e) => updateGift(gift.id, e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && updateGift(gift.id, e.target.value)}
                      autoFocus
                    />
                  ) : (
                    gift.name
                  )}
                </td>
                <td>
                  <button onClick={() => setEditingGift(gift.id)}>Редагувати</button>
                  <button onClick={() => deleteGift(gift.id)}>Видалити</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin
