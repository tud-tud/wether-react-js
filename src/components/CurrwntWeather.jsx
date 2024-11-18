import React, { useContext } from 'react';
import WeatherIcon from './WeatherIcon';
import { BsDropletHalf, BsWind, BsMoisture, BsEmojiSunglasses, BsFillCloudsFill } from "react-icons/bs";
import { MdVisibility } from "react-icons/md";
import WeatherContext from '../context/weather.context';


const CurrwntWeather = ({data}) => {

  const { cloud_cover, feels_like, humidity, icon_num, precipitation, summary, temperature, uv_index, wind,visibility } = data

  const {units} = useContext(WeatherContext);
  const otherInfoWidgets = [
    {
      id: 0,
      icon: <BsDropletHalf/>,
      name: 'Precipitation',
      value: Math.round(precipitation.total),
      unit: units.precipitation,
    },
    {
      id: 1,
      icon: <BsWind/>,
      name: 'Wind',
      value: Math.round(wind.speed),
      unit: units.wind_speed,
    },
    {
      id: 2,
      icon: <BsMoisture/>,
      name: 'Humidity',
      value: Math.round(humidity),
      unit: units.humidity,
    },
    {
      id: 3,
      icon: <BsEmojiSunglasses/>,
      name: 'UV index',
      value: Math.round(uv_index),
      unit: units.uv_index,
    },
    {
      id: 4,
      icon: <BsFillCloudsFill/>,
      name: 'Clouds cover',
      value: Math.round(cloud_cover),
      unit: units.cloud_cover,
    },
    {
      id: 5,
      icon: <MdVisibility/>,
      name: 'Visibility',
      value: Math.round(visibility),
      unit: units.visibility,
    },
  ]




  return (
    <div className='sm:grid sm:grid-cols-3 gap-3 text-gray-600 dark:text-gray-200 transition duration-500'>
      <div className=' border-2 py-4 px-6 rounded-xl flex sm:flex-col justify-evenly' >
        <div className='max-w-24' >
        <WeatherIcon iconNumber={icon_num} summary={summary}/>
        </div>
        <div> 
          <h2 className='text-4xl'>{temperature} {units.temperature}</h2>
          <p className='text-sm font-light dark:text-gray-400'>feels like {feels_like} {units.temperature}</p>
          <h4 className='text- mt-2 dark:text-gray-300'>{summary}</h4>
        </div>
      </div>

      <div className=' border-2 py-4 px-6 rounded-xl col-span-2 grid mt-2 sm:mt-0 grid-cols-2 grid-flow-row gap-1'>
        {otherInfoWidgets.map(({ id, icon, name, value, unit }) => (
          <div key={id} className=' '>
          <div className=' flex flex-col items-center '>
            <div className='flex'>
              <div className=' inline-block text-xl mr-1'>{icon}</div>
              <p>{value} {unit}</p>
            </div>
            <div className='text-xs dark:text-gray-400'>
              {name}
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default CurrwntWeather