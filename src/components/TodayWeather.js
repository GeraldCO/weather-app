import React from 'react'

export default function TodayWeather({results}){
    return(
        <div>
            <div className="list-group list-group-flush list-group-horizontal " >
                <li className="list-group-item"> 
                    <small className='text-muted'>
                    Sunrise
                        </small>
                    <h5>
                        { new Date( results[1].current.sunrise * 1000).getHours()}:{ new Date( results[1].current.sunset * 1000).getMinutes()}     
                    </h5>
                </li>
                <li className="list-group-item">
                    <small className='text-muted'>
                        Sunset
                    </small> 
                    <h5>
                    { new Date( results[1].current.sunset * 1000).getHours()}:{ new Date( results[1].current.sunset * 1000).getMinutes()}          
                    </h5>
                </li>
                <li className="list-group-item">
                    <small className='text-muted'>
                        Chance of rain
                    </small>
                    <h5>
                        { Math.round(results[1].hourly[0].pop * 100)}%
                        
                    </h5>
                </li>
                <li className="list-group-item"> 
                    <small className='text-muted'>
                        Humidity
                    </small>
                    <h5>
                        {results[1].current.humidity}% 
                    </h5>
                </li>
                <li className="list-group-item"> 
                    <small className='text-muted'>
                        Wind 
                    </small>
                    <h5>
                        {results[1].current.wind_speed} Km/h 
                    </h5>
                </li>
            </div>
            <div className="list-group list-group-flush list-group-horizontal " >
                <li className='list-group-item'>  
                    <small className='text-muted'>
                        Feels Like
                    </small>
                    <h5>
                        {results[1].current.feels_like}°
                    </h5>
               </li>
                <li className='list-group-item'> 
                    <small className='text-muted'>
                        Temp
                    </small>  
                    <h5>
                        {results[1].daily[0].temp.day}° 
                    </h5>
                </li>
                <li className='list-group-item'> 
                    <small className='text-muted'>
                        Pressure
                    </small> 
                    <h5>
                        {results[1].current.pressure} hPa
                    </h5>
                 </li>
                <li className='list-group-item'> 
                    <small className='text-muted'>
                        Visibility
                    </small>
                    <h5>
                        {(results[1].current.visibility)/100}Km
                    </h5>
                </li>
                <li className='list-group-item'> 
                    <small className='text-muted'>
                        UV index
                    </small>  
                    <h5>
                        {results[1].current.uvi}
                    </h5>
                </li>
            </div>
        </div>
    );
}