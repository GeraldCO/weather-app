import React from 'react'

export default function TodayWeather({results}){
    return(
        <div className='col-md-12 order-md-5 mt-5'>
            <div className="list-group list-group-horizontal list-group-flush justify-content-between px-0 py-md-0 border-bottom text-center day-header" >
                <li className="list-group-item"> 
                    <small className='text-muted'>
                    Sunrise
                        </small>
                    <h5>
                        { new Date( results.current.sunrise * 1000).getHours()}:{ new Date( results.current.sunset * 1000).getMinutes()}     
                    </h5>
                </li>
                <li className="list-group-item">
                    <small className='text-muted'>
                        Sunset
                    </small> 
                    <h5>
                    { new Date( results.current.sunset * 1000).getHours()}:{ new Date( results.current.sunset * 1000).getMinutes()}          
                    </h5>
                </li>
                <li className="list-group-item">
                    <small className='text-muted'>
                        Chance of rain
                    </small>
                    <h5>
                        { Math.round(results.hourly[0].pop * 100)}%
                        
                    </h5>
                </li>
                <li className="list-group-item"> 
                    <small className='text-muted'>
                        Humidity
                    </small>
                    <h5>
                        {results.current.humidity}% 
                    </h5>
                </li>
                <li className="list-group-item"> 
                    <small className='text-muted'>
                        Wind 
                    </small>
                    <h5>
                        {results.current.wind_speed} Km/h 
                    </h5>
                </li>
            </div>
            <div className="list-group list-group-horizontal list-group-flush justify-content-between px-0 py-md-0 border-bottom text-center day-header" >
                <li className='list-group-item'>  
                    <small className='text-muted'>
                        Feels Like
                    </small>
                    <h5>
                        {results.current.feels_like}°
                    </h5>
               </li>
                <li className='list-group-item'> 
                    <small className='text-muted'>
                        Temp
                    </small>  
                    <h5>
                        {results.daily[0].temp.day}° 
                    </h5>
                </li>
                <li className='list-group-item'> 
                    <small className='text-muted'>
                        Pressure
                    </small> 
                    <h5>
                        {results.current.pressure} hPa
                    </h5>
                 </li>
                <li className='list-group-item'> 
                    <small className='text-muted'>
                        Visibility
                    </small>
                    <h5>
                        {(results.current.visibility)/100}Km
                    </h5>
                </li>
                <li className='list-group-item'> 
                    <small className='text-muted'>
                        UV index
                    </small>  
                    <h5>
                        {results.current.uvi}
                    </h5>
                </li>
            </div>
        </div>
    );
}