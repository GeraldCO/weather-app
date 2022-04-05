import React from 'react';
import { getDayName } from '../utilities/api_functions';

export default function DailyWeather({ daily }){
    return(
        <div className='col-md-12 order-md-5 mt-5'>
            <div className='list-group list-group-horizontal list-group-flush justify-content-between px-0 py-md-0 border-bottom text-center day-header'>
                <div className='list-group-item'>Day</div>
                <div className='list-group-item'></div>
                <div className='list-group-item'>Chance of rain</div>
                <div className='list-group-item'>Humidity</div>
                <div className='list-group-item'>Temperature</div>
            </div>
            {daily.map((day)=>{
                return <div className='list-group list-group-horizontal list-group-flush justify-content-between px-0 py-md-0 border-bottom text-center day-header'>
                    <div className='list-group-item'>{getDayName(day.dt)}</div>
                    <div className='list-group-item'> <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="" />  </div>
                    <div className='list-group-item'>{ Math.trunc(day.pop*100)} %</div>
                    <div className='list-group-item'>{day.humidity} %</div>
                    <div className='list-group-item'>{day.temp.day}°</div>
                </div>
            })}            
        </div>
        
        
    );
}