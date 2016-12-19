var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    return(
      <h3>It is 37 degrees in Philadelphia</h3>
    );
  }
});

module.exports = WeatherMessage;