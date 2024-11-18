import React, { useState } from 'react'
import Place from './Place'
import Search from './Search'
import Settings from './Settings'
 
const Header = () => {
  

  return (
    <div className=' w-full flex md:flex-row md:justify-between md:items-center flex-col md:px-32 sm:px-20 px-5 py-4 shadow-md dark:bg-gray-900  transition duration-500'>
      <Place />
      <div className='flex justify-between mt-2 sm:gap-10 gap-3'>
        <Search />
        <Settings />
      </div>
    </div>
  )
}

export default Header