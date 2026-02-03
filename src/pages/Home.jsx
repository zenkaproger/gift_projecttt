import '../styles/App.css'

const Home = ({ managers, gifts }) => {
  // Сортируем менеджеров по очкам от большего к меньшему и берем только первых 20
  const sortedManagers = [...managers].sort((a, b) => b.points - a.points).slice(0, 20)

  return (
    <div className="root">
        <div className='leftColumn'>
      <div className='managerForm'>
        <hr className='divider'/>
        <div className='formTitle'>
          <h2 className='title'>Менеджери</h2>
        </div>
        <div className='managerList'>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Ім'я менеджера</th>
                <th>Очки</th>
              </tr>
            </thead>
            <tbody>
              {sortedManagers.map((manager, index) => (
                <tr key={manager.id}>
                  <td>{index + 1}</td>
                  <td>{manager.name}</td>
                  <td>{manager.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr className='divider'/>
      </div>
    </div>
    <div className='rightColumn'>
      <div className='giftForm'>
        <hr className='divider'/>    
        <div className='formTitle'>
          <h2>Подарунки</h2>
        </div>
        <div className='giftList'>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Назва подарунка</th>
              </tr>
            </thead>
            <tbody>
              {gifts.map((gift, index) => (
                <tr key={gift.id}>
                  <td>{index + 1}</td>
                  <td>{gift.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr className='divider'/>
      </div>
    
      <div className='rules'>
        <div className='rulesform'>
        <p>Бальна система для лотереї:
            <br />10 балов - сам знайшов, сам закрив.
            <br />5 балов - закрив але не находив.
            <br />3 бал - знайшов, передав, кінець не важливий.
        </p>
        </div>
        <div className='rulesform'>
            <p>Бальна система для мурзаводів:
            <br />10 балов - приняв і завів от 20к.
            <br />5 балов - приняв і завів от 10к до 20к.
            <br />3 бала - приняв і завів до 10км.
        </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
