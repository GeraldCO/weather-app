import React, {useState} from 'react';
import { getCoords } from '../utilities/api_functions';


export default function useAsyncHook(searchCity, unit) {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState("false");


  
  React.useEffect(() => {
    async function fetchWeatherInfo() {
      try {
        //request coords url
        const coord = await getCoords(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=20f7632ffc2c022654e4093c6947b4f4`);
        setResult( prevState => [...prevState, coord] );
        setLoading("true");
        const response = await fetch(
          //forecast url
          `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=1e4a89c7477a829ee12ab9437c6de27d&units=${unit}`
        );
        const json = await response.json();
        // console.log(json);
        setResult( prevState => [...prevState, json] );
      } catch (error) {
        setLoading("null");
      }
    }

    if (searchCity !== "") {
      fetchWeatherInfo();
    }
  }, [searchCity]);

  return [result, loading];
}
