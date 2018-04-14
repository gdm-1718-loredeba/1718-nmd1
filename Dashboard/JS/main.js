// functie expressie om JSON-request via url uit te voeren
 const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

// get json data
getJSON('http://api.openweathermap.org/data/2.5/weather?q=Pamel&APPID=a75d87bef9265d431c0ad4bf462e420b&units=metric', function(error, data) {
    // show error
    if(error) {  
        // do something here
        return false;
    }

    console.log(data);

    let weer = document.getElementById('weer');
    let mijnData = data;

    let weather = document.createElement('div');
    weather.className = 'weather';

    let place = document.createElement('h3');
    place.className = 'place';
    place.innerHTML = mijnData.name
    weather.appendChild(place);

    let info = document.createElement('div');
    info.className = 'info';
    weather.appendChild(info);
    
    let degree = document.createElement('p');
    degree.className = 'degree';
    degree.innerHTML = `${mijnData.main.temp} °C`
    info.appendChild(degree);

    let wind = document.createElement('p');
    wind.className = 'wind';
    wind.innerHTML = `windsnelheid: ${mijnData.wind.speed} m/s `
    info.appendChild(wind);

    let vochtigheid = document.createElement('p');
    vochtigheid.className = 'vochtigheid';
    vochtigheid.innerHTML = `vochtigheid: ${mijnData.main.humidity} %`
    info.appendChild(vochtigheid);

    let bewolking = document.createElement('p');
    bewolking.className = 'bewolking';
    bewolking.innerHTML = `bewolking: ${mijnData.weather[0].main} `
    info.appendChild(bewolking);

    let weerIcoon = document.createElement('img');
    weerIcoon.className='weather-icon';
    let weatherIconState= mijnData.weather[0].icon;
    console.log(weatherIconState)
    weerIcoon.src = 'http://openweathermap.org/img/w/'+ weatherIconState +'.png';
    info.appendChild(weerIcoon);

    let zichtbaarheid = document.createElement('p');
    zichtbaarheid.className ='zichtbaarheid';
    zichtbaarheid.innerHTML = `zichtbaarheid: ${mijnData.visibility}`
    info.appendChild(zichtbaarheid);

    weer.appendChild(weather);
});

    