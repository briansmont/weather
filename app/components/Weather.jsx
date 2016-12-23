var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
//use debugger; to find errors


var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false,
    };
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({isLoading: true,});
    
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false,
      });
    }, function(errorMessage) {
        that.setState({isLoading: false});
        alert(errorMessage);
    });
  },
  render: function() {
    var {isLoading, temp, location} = this.state;
    
    function renderMessage() {
      if (isLoading) {
        return (
          <div>
            <h3 className="text-center">Weather is coming...</h3>
            <img src="http://media.tumblr.com/tumblr_m9qhpjWTDU1qzytg1.jpg"/>
          </div>
        );
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }
    
<<<<<<< HEAD
=======
    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }
    
>>>>>>> revealmodal
    return(
      <div>
        <h1 className="text-center">Get the weather!</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;