import Header from '../components/Header'
import CurrentTemperature from '../components/Current_Temperature'
import Hourly_Forecast from '../components/Hourly_Forecast'
import Air_Conditons from '../components/Air_Conditons'
import Daily_Forecast from '../components/Daily_Forecast'

function WeatherPage() {
  return (
    <div className="bg-[#0B121E] min-h-screen flex flex-col md:flex-row md:space-x-4 p-4 md:p-8">
      <div className="flex flex-col flex-1 space-y-4 md:space-y-6">
        <Header />
        <CurrentTemperature />
        <Hourly_Forecast />
        <Air_Conditons />
      </div>

      <div className="md:mt-0 md:w-[520px]">
        <Daily_Forecast />
      </div>
    </div>
  )
}

export default WeatherPage
