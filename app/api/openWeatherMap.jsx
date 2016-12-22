var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=498142ced7e6b828a002a232d30ca218&units=imperial';

//api key:
//498142ced7e6b828a002a232d30ca218

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    
    return axios.get(requestUrl).then(function (res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function() {
      throw new Error('Unable to fetch weather data, try again soon');
    });
  }
};