var React = require('react');

var ErrorModal = React.createClass({
<<<<<<< HEAD
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
=======
  getDefaultProps: function() {
    return {
      title: 'Error',
    };
  },
  
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired,
  },
  
  componentDidMount: function() {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {
    var {title, message} = this.props;
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
>>>>>>> revealmodal
            Close
          </button>
        </p>
      </div>
    );
    
    
  }
  
});

module.exports = ErrorModal;