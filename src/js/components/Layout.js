var React = require('react');
var Header = require('./Header');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="ui-layout">
        <Header />
      </div>
    )
  }
});