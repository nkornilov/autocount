var React = require('react');
var Navigation = require('./Navigation');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="ui-header">
        This is Header
        <Navigation />
      </div>
    )
  }
});