import React, { useState } from 'react';

export default function CurrentWeather(props){
    return(
        <div className='d-flex flex-column col-md-4 m-5'>
            <h2>{props.results[0].name}</h2>
            <h4>{props.results[1].current.weather[0].main}</h4>
            <h1>{props.results[1].current.temp}°</h1>
            <div className='d-flex'>
                <p className='mx-1'> H: { Math.trunc(props.results[1].daily[0].temp.max)}°</p>
                <p className='mx-1'> L: { Math.trunc(props.results[1].daily[0].temp.min)}°</p>
            </div>
        </div> 
    )
}