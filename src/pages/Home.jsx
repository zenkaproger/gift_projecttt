import '../styles/App.css'

const Home = ({ managers, gifts }) => {
  return (
    <div className="root">
      <div className='managerForm'>
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
              {managers.map((manager, index) => (
                <tr key={manager.id}>
                  <td>{index + 1}</td>
                  <td>{manager.name}</td>
                  <td>{manager.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='giftForm'>
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
      </div>
    </div>
  )
}

export default Home
