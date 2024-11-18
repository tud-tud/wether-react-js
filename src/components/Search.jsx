import React, { useContext, useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { searchPlaces } from '../api';
import WeatherContext from '../context/weather.context';


const Search = () => {
  const [text, setText] = useState('');
  const [searchResults, setSearchResults] = useState([])
  const { setPlace } = useContext(WeatherContext);

  async function onSearch(e) {
    setText(e.target.value);
    const data = await searchPlaces(e.target.value);
    setSearchResults(data)
  }

  const changePlace = (place) => {
    setPlace(place)
    setText('');
  }

  return (
    <div className=' relative flex'>
      <div className=' absolute text-gray-500 text-xl pl-3 pt-[7px]'>
        <BsSearch />
      </div>
      <input
        type='text'
        name='search-city'
        className=' border-2 w-[320px] rounded-full py-1 pl-10'
        placeholder='Search city ...'
        value={text}
        onChange={onSearch}
      />
      <div className={` ${text === '' ? 'h-0' : 'h-72'} absolute w-full   top-12 rounded-md overflow-scroll dark:bg-gray-800 bg-gray-200 shadow-lg transitio duration-500`} >

        {searchResults.map((place) => (
          <div key={place.place_id}
            className=' cursor-pointer hover:bg-gray-700 hover:text-gray-300 py-1 px-3  text-gray-600 dark:text-gray-400  '
            onClick={()=>changePlace(place)}
          >
            {place.name}, {place.adm_area1}, {place.country}
          </div>
        ))}

      </div>
    </div>
  )
}

export default Search