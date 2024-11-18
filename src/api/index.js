import axios from "axios";

export async function getWeatherData(endpoint, place_id, measuremenySystem){

    const options = {
      method: 'GET',
      url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
      params: {
        place_id,
        language: 'en',
        units: measuremenySystem
      },
      headers: {
        'x-rapidapi-key': '0f7aaaac61msheb7a2a353a039b7p100bb9jsnda26b54c76fe',
        'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
   

}

export async function searchPlaces(text) {

const options = {
  method: 'GET',
  url: 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places',
  params: {
    text,
    language: 'en'
  },
  headers: {
    'x-rapidapi-key': '0f7aaaac61msheb7a2a353a039b7p100bb9jsnda26b54c76fe',
    'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	return response.data;

} catch (error) {
	console.error(error);
}
}