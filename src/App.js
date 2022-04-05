import logo from './logo.svg';

import React, { useEffect, useState } from 'react';
import useAsyncHook from './customHooks/useAsyncHook';
import { createURL, getCoords, getDayName } from './utilities/api_functions';
import Navbar from './components/NavBar';
import currentWeather from './components/CurrentWeather';
import CurrentWeather from './components/CurrentWeather';
import HourlyWeather from './components/HourlyWeather';
import DailyWeather from './components/DailyWeather';
import TodayWeather from './components/TodayWeather';
import useFetch from './customHooks/useFetch';




function App() {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('managua');
    const [url, setUrl] = useState('')
    const [units, setUnits] = useState('metric');
    const [coords, setCoords] = useState('')
        

    useEffect(()=>{
        async function fetchWeatherInfo() {
            const coordsResult = await getCoords(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=20f7632ffc2c022654e4093c6947b4f4`);
            const url =  await createURL(coordsResult, units);
            setCoords(coordsResult);
            setUrl (url);
        }
        fetchWeatherInfo();        
    },[query]);

    const {data: results, loading, error} = useFetch(url);  //these are not states

    console.log(results);

    return (
        <div className="App">
             <Navbar 
                setQuery={setQuery}
                search={search}
                setSearch={setSearch}
            />
            {error && <div> {error} </div> }
            {!results &&  <div>Loading... </div> }
            {results && <div>
                <div className='d-flex'>
                    <CurrentWeather
                        results={results}
                        coords={coords}
                    />
                    <div className='d-flex flex-row overflow-auto border-top border-bottom pb-2 pt-2'>
                        <HourlyWeather
                            hourly={results.hourly}
                        />
                    </div>
                </div>
                <div className='container'>
                <TodayWeather results={results} />
                    <DailyWeather
                        daily= {results.daily}
                    />
                    
                </div>
                
            </div>
            }
            
            
        </div>
  );
}

export default App;
