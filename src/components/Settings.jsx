import React, { useContext } from 'react'
import { HiSun } from "react-icons/hi2";
import { HiMoon } from "react-icons/hi2";
import { IoIosSettings } from "react-icons/io";
import { useState } from 'react';
import { MEASUURMENT_SYSTEMS } from '../utils';
import WeatherContext from '../context/weather.context';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const { measuremenySystem, setMeasurementSystem } = useContext(WeatherContext)
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  }
  const toggleOpenSettings = () => {
    setOpenSettings(!openSettings)
  }
  const changeMeasurementSystem = (system) => {
    setMeasurementSystem(system);
    setOpenSettings(false)
  }
  return (
    <div className='flex sm:gap-5 gap-3 text-xl dark:text-gray-300 transition duration-500 relative '>

      <button className=' transition duration-500' onClick={toggleDarkMode}>{darkMode ? <HiMoon className='text-xl' /> : <HiSun className='text-xl' />} </button>
      <button onClick={toggleOpenSettings}><IoIosSettings className='text-xl' /></button>

      <div className={`${openSettings ? 'absolute ' : 'hidden'}  top-8 right-0 bg-gray-200 shadow-md dark:bg-gray-800 dark:text-gray-200 text-gray-700  px-4 py-2 w-auto text-nowrap rounded-md transition duration-1000`} >
        <div>
          <h4 className='text-[16px]'>
            Measurement Systems
          </h4>
          <div className='grid grid-cols-2 gap-1'>
            {Object.values(MEASUURMENT_SYSTEMS).map((system) => (
              <div key={system}>
                <button
                  className={`${system === measuremenySystem ? 'bg-gray-800 text-gray-200' : 'bg-gray-400 text-gray-700'} w-full   py-1 rounded-md border-2 font-light text-sm  hover:bg-gray-800 hover:text-gray-200 transition duration-500`}
                  onClick={() => changeMeasurementSystem(system)}
                >
                  {system}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings