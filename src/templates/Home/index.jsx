import Card from '../../components/card'
import './styles.css'

function Home() {

  return (
    <div className="Home">
      <h1>Weather App</h1>
      <div className="card">
        <Card />
      </div>
      <footer>
        <p>Made by <a target="_blank" href="https://github.com/davitostes">Davi Tostes</a></p>
      </footer>
    </div>
  )
}

export default Home
