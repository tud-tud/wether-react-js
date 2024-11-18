import React, { useContext } from 'react'
import CurrwntWeather from './CurrwntWeather'
import Forecast from './Forecast'
import Loader from './Loader'
import WeatherContext from '../context/weather.context'

const Main = () => {
  const { loading, currentWeather, hourlyForecast, dailyForecast, } = useContext(WeatherContext);
  return (
    <div className=' w-full h-screen flex  flex-col md:px-32 sm:px-20 px-5 py-4 shadow-md dark:bg-gray-950 transition duration-500'>
      {loading ? (<Loader />) : (
        <>
          <CurrwntWeather data={currentWeather} />
          <Forecast type="hourly" title='Hourly Forecast' data={hourlyForecast} />
          <Forecast type="daily" title="21 Days Forecast" data={dailyForecast} />
        </>

      )}

    </div>
  )
}

export default Main