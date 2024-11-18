import React, { useContext } from 'react'
import { BsGeoAltFill } from "react-icons/bs";
import WeatherContext from '../context/weather.context';

const Place = () => {
  const {place} = useContext(WeatherContext)
  return (
    <div className=' flex gap-1 text-gray-700  dark:text-gray-300'>
      <BsGeoAltFill/> 
      <b>{place.name}</b>,  {place.country}
    </div>
  )
}

export default Place