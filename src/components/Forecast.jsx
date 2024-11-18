import React from 'react'
import HourlyForecastWidget from './HourlyForecastWidget';
import DailyForecastWidget from './DailyForecastWidget';

const Forecast = ({ title, type, data }) => {
  return (
    <div className='text-gray-600 dark:text-gray-200 transition duration-500'>
      <div>
        <h3 className='mt-6 text-2xl font-bold capitalize '>{title}</h3>
        <div className='flex gap-2 overflow-scroll snap-x'>
          {data.map((singleData) => (
            <div key={singleData.date || singleData.day} className=' snap-start mb-5'>
              {type === "hourly" ? <HourlyForecastWidget data={singleData} /> : <DailyForecastWidget data={singleData} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Forecast