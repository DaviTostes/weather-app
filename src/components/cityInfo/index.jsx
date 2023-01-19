import './styles.css'

const CityInfo = ({cityData}) => {
  return (
    <div className="city-wrapper">
      <h2>City:</h2>
      <p>{cityData.name}</p>
      <h2>Temperature:</h2>
      <p>{cityData.temperature}</p>
      <h2>Wind Speed:</h2>
      <p>{cityData.wind}</p>
      <h2>Status</h2>
      <p>{cityData.description}</p>
    </div>
  )
}

export default CityInfo