var React = require('react');

var ErrorModal = React.createClass({
  componentDidMount: function() {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open;
  },
  render: function() {
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal>
        <h4>Error</h4>
        <p>Sorry, the citadel has no weather reports at the moment, try again soon!</p>
        <p>
          <button className="button hollow" data-close>
            Close
          </button>
        </p>
      </div>
    );
    
    
  }
  
});

module.exports = ErrorModal;