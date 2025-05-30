import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import axios from 'axios'
import CurrentTemperature from './Current_Temperature'
import { useEffect } from 'react'

function Header() {
  // State to keep track of the city input by the user
  const [city, setCity] = useState('')
  
  // State to store weather data fetched from the backend API
  const [weather, setWeather] = useState(null)

  function isValidCityName(city) {
  if (!city || city.trim().length < 2) return false;
  const regex = /^[a-zA-Z\s\-]+$/;
  return regex.test(city.trim());
}

  // Function to fetch weather data for the given city
  const handleSearch = async(city) => {
    if (!isValidCityName(city)) {
    alert("Please enter a valid city name (at least 2 letters, letters only).");
    return;
  }

    try {
      // Make GET request to backend with the city name as query parameter
      const response = await axios.get(`http://localhost:3000/weather?address=${city}`)
      // Update weather state with the response data
      console.log('Weather Data:', response.data);
      setWeather(response.data)
    } catch (error) {
      // Log any error that occurs during the API call
      console.error('Error fetching weather:', error) 
      alert("Failed to fetch weather data");
    }
  }

  // useEffect runs once when the component mounts
  // It fetches the default weather data for "Lahore"
  useEffect(() => {
    handleSearch('Lahore')
  }, [])

  // Variable to hold the weather display content conditionally
  let content = null

  if(weather){
    if(weather.error){
      // If the response contains an error, show the error message
      content = <p className="text-red-500">{weather.error}</p>
    } else{
      // If weather data is valid, pass the data to CurrentTemperature component
      content = (
        <CurrentTemperature
          city={weather.city}
          temperature={weather.forecast.temp}
          chanceOfRain={weather.forecast.pop}  
        />
      )
    }
  }

  return (
    <div className="ml-20 sm:ml-8 mr-15">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for cities"
          value={city}
          onChange={(e) => setCity(e.target.value)}  // Update city state on user input
          onKeyDown={(e) =>{
            if(e.key === 'Enter') handleSearch(city)  // Search when user presses Enter
          }}
          className="w-full max-w-[650px] md:pl-14 py-2 bg-[#202C3A] text-white placeholder-gray-400 rounded-md focus:outline-none font-light text-center md:text-left"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-6 top-5 transform -translate-y-1/2 text-white"
        />
      </div>

      <div className="mt-6">
        {content} {/* Show weather info or error message */}
      </div>

    </div>
  )
}

export default Header
