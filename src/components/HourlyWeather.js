import React from 'react';
import moment from 'moment';

export default function HourlyWeather({hourly}){
    return hourly.map((hour, index)=> {
            const time = index === 0 ? 'Now' : moment.unix(hour.dt).format('HH');
            return <div className='col-sm-2'>
                <p>
                    {time}
                </p>
                <p>
                    <img src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@4x.png`} alt="" />
                </p>
                <p>
                    {Math.trunc(hour.temp)}
                </p>
            </div>
    }
    );
}