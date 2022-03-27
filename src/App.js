import logo from './logo.svg';

import React, { useEffect, useState } from 'react';
import useAsyncHook from './customHooks/useAsyncHook';
import { getDayName } from './utilities/api_functions';
import Navbar from './components/NavBar';
import currentWeather from './components/CurrentWeather';
import CurrentWeather from './components/CurrentWeather';
import HourlyWeather from './components/HourlyWeather';
import DailyWeather from './components/DailyWeather';
import TodayWeather from './components/TodayWeather';



function App() {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('managua');
    const [units, setUnits] = useState('metric');
    const [results, loading] = useAsyncHook(query, units);

    return (
        <div className="App">
            <Navbar 
                setQuery={setQuery}
                search={search}
                setSearch={setSearch}
            />
            <div className='d-flex'>
            <CurrentWeather 
                results={results} 
            />
                <div className='d-flex flex-row overflow-auto border-top border-bottom pb-2 pt-2'>
                    <HourlyWeather
                        hourly={results[1].hourly}
                    />
                </div>
            </div>
            <DailyWeather
                daily= {results[1].daily}
            />
            {console.log(results)}
            {/* <TodayWeather results={results} /> */}
            
            
        </div>
  );
}

export default App;
