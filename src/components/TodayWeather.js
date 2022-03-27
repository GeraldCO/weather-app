import React from 'react'

export default function TodayWeather({results}){
    return(
        <div>
            <div class="list-group list-group-flush list-group-horizontal " >
                <li class="list-group-item"> Sunrise { new Date( results[1].current.sunrise * 1000).getHours()} </li>
                <li class="list-group-item"> Sunset { new Date( results[1].current.sunset * 1000).getHours()} </li>
                <li class="list-group-item"> Chance of rain {results[1].daily[0].temp.day} </li>
                <li class="list-group-item"> Humidity {results[1].daily[0].temp.day} </li>
                <li class="list-group-item"> Wind {results[1].daily[0].temp.day} </li>
            </div>
        </div>
    );
}