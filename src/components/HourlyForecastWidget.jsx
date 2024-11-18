import React, { useContext } from 'react'
import WeatherIcon from './WeatherIcon';
import { BsFillSendFill } from "react-icons/bs";
import WeatherContext from '../context/weather.context';


const HourlyForecastWidget = ({ data }) => {
  const { date, icon, summary, temperature, precipitation, wind } = data;

  const { units } = useContext(WeatherContext)

  // date
  const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: '2-digit'
    }).format(new Date()),
    time: new Intl.DateTimeFormat(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date().setMinutes(0)),
  }
  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: '2-digit'
    }).format(new Date(date)),
    time: new Intl.DateTimeFormat(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date).setMinutes(0)),
  }

  weather_date.day =
    weather_date.day === now_date.day &&
      weather_date.time === now_date.time
      ? "Today"
      : weather_date.time === "12:00 AM"
        ? weather_date.day : "";



  return (
    <div className='w-28 text-gray-600 dark:text-gray-200 transition duration-500'>
      <div className='h-6 text-center'>{weather_date.day}</div>
      <div className=' flex flex-col border-2 py-2 px-2 rounded-lg w-full items-center'>
        <h4 className='text-sm'>{weather_date.time}</h4>
        <div>
          <WeatherIcon iconNumber={icon} summary={summary} />
        </div>
        <div className=' text-sm'>
          {Math.round(temperature)} {units.temperature}
        </div>
        <div className='text-sm font-light dark:text-gray-300'>
          {Math.round(precipitation.total)} {units.precipitation}
        </div>
        <div className='text-sm font-light dark:text-gray-300'>
          {Math.round(wind.speed)} {units.wind_speed}
        </div>
      </div>


    </div>
  )
}

export default HourlyForecastWidget