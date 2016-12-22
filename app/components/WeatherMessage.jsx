var React = require('react');

//ES6 markdown below to define temp & location from props in the params!
var WeatherMessage = ({temp, location}) => {
  return(
    <h3 className="text-center">It is {temp} degrees in {location}</h3>
  );
};

module.exports = WeatherMessage;