import { useState } from 'react'
import './styles.css'

import searchCity from '../../utils/searchCity'
import CityInfo from '../cityInfo'

const Card = () => {
  const [cityName, setCityName] = useState('')
  const [cityData, setCityData] = useState()

  const handleSearchCity = async () => {
    if(cityName != '') {
      setCityData(await searchCity(cityName))
    } else {
      alert('City name empty')
    }
  }

  return (
    <div className="card-wrapper">
      <div className="input-wrapper">
        <input type="text" placeholder='Type the city' onChange={e => setCityName(e.target.value)} />
        <button onClick={handleSearchCity}>Submit</button>
      </div>
      <div className="result-wrapper">
        {
          cityData == 'Não encontramos nada' || cityData == undefined 
          ? <p>{cityData}</p> 
          : <CityInfo cityData={cityData} />
        }
      </div>
    </div>
  ) 
}

export default Card
