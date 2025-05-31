import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '../components/Header'
import CurrentTemperature from '../components/Current_Temperature'
import Hourly_Forecast from '../components/Hourly_Forecast'
import Air_Conditons from '../components/Air_Conditons'
import Daily_Forecast from '../components/Daily_Forecast'

function WeatherPage() {
  const [weather, setWeather] = useState(null)

  const isValidCityName = (city) => {
    if (!city || city.trim().length < 2) return false
    const regex = /^[a-zA-Z\s\-]+$/
    return regex.test(city.trim())
  }

  const handleSearch = async (city) => {
    if (!isValidCityName(city)) {
      alert("Please enter a valid city name (at least 2 letters, letters only).")
      return
    }

    try {
      const response = await axios.get(`http://localhost:3000/weather?address=${city}`)
      setWeather(response.data)
    } catch (error) {
      console.error('Error fetching weather:', error)
      alert("Failed to fetch weather data")
    }
  }

  useEffect(() => {
    handleSearch('Lahore')
  }, [])

  let content1 = null
  let content2 = null

  if (weather) {
    if (weather.error) {
      content1 = <p className="text-red-500">{weather.error}</p>
    } else {
      content1 = (
        <CurrentTemperature
          city={weather.city}
          temperature={weather.forecast.temp}
          chanceOfRain={weather.forecast.pop}
        />
      )
    }
  }

  if (weather) {
    if (weather.error) {
      content2 = <p className="text-red-500">{weather.error}</p>
    } else {
      content2 = (
        <Air_Conditons
          realFeel={weather.forecast.feelTemp}
          wSpeed={weather.forecast.windSpeed}
          chanceOfRain={weather.forecast.pop}
          uv={weather.forecast.uvIndex}
        />
      )
    }
  }
  

  return (
    <div className="bg-[#0B121E] min-h-screen flex flex-col md:flex-row md:space-x-4 p-4 md:p-8">
      <div className="flex flex-col flex-1 space-y-4 md:space-y-6">
        <Header onSearch={handleSearch} />
        {content1}
        {weather && <Hourly_Forecast city={weather.city} />}
        {content2}
      </div>

      <div className="md:mt-0 md:w-[520px]">
        <Daily_Forecast/>
      </div>
    </div>
  )
}

export default WeatherPage
