function getDayName(dt){
    const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    var date = new Date(dt * 1000)
    var dayName = days[date.getDay()];
    return dayName;
}

function getTime(dt){
  const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  var date = new Date(dt * 1000)
  var dayName = days[date.getDay()];
  return dayName;
}

// obtain coords based on URL
const getCoords = async function (url) {
    const response = await fetch(url);
    const weatherData = await response.json();
    const { coord } = weatherData;
    coord.name = weatherData.name;
    coord.country = weatherData.sys.country;
    //  console.log(weatherData);
    //  console.log(weatherData.weather);
    console.log(coord);
    return coord;
  }

export {
   getDayName,
   getCoords
}