import axios from 'axios';

const searchCity = async (cityName) => {
  try {
    const result = await axios.get(`https://goweather.herokuapp.com/weather/${cityName}`)
    return (
      {
        name: cityName,
        temperature: result.data.temperature,
        wind: result.data.wind,
        description: result.data.description
      }
    )
  } catch(e) {
    return 'Não encontramos nada'
  }
}

export default searchCity