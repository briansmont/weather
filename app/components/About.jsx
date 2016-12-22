var React = require('react');

var About = (props) => {
  return(
      <div>
        <h1 className="text-center">About</h1>
        <p>Basic Weather Application - You request we provide!</p>
        
        <p>Here are some of the tools and info used in this app:</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react" target="_blank">React</a> - This was the JS library used.
          </li>
          <li>
            <a href="http://openweathermap.org/" target="_blank">Open Weather Map</a> - Their API provides all of our weather data! You search the city name, and they provide the information.
          </li>
          <li>
            <a href="https://github.com/briansmont/weather" target="_blank">Weather App Repo</a> - My github repo.
          </li>

          
        </ul>
      </div>
    );
};

module.exports = About;