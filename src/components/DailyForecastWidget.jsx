import React, { useContext } from 'react'
import WeatherIcon from './WeatherIcon';
import WeatherContext from '../context/weather.context';

const DailyForecastWidget = ({ data }) => {

  const { day, icon, temperature_max, temperature_min, precipitation, summary } = data;
  const {units} = useContext(WeatherContext);
  const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: '2-digit'
    }).format(new Date()),
  }
  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: '2-digit'
    }).format(new Date(day)),
  }

  weather_date.day = now_date.day === weather_date.day ? "Today" : weather_date.day;

  return (
    <div className='w-28 text-gray-600 dark:text-gray-200 transition duration-500'>
      <h4 className='h-6 text-center mt-1'>{weather_date.day}</h4>
      <div className=' flex flex-col border-2 py-2 px-2 rounded-lg w-full items-center'>
        <div>
          <WeatherIcon iconNumber={icon} summary={summary} />
        </div>
        <div className='text-sm'>
          {Math.round(temperature_max)} {units.temperature}
        </div>
        <div className='text-sm'>
          {Math.round(temperature_min)} {units.temperature}
        </div>
        <div className=' text-sm font-light dark:text-gray-300'>
          {Math.round(precipitation.total)} {units.precipitation}
        </div>
      </div>
    </div>
  )
}

export default DailyForecastWidget