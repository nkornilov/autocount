var React = require('react');
var ReactDOM = require('react-dom');
var Navigation = require('./Navigation');
var Header = require('./Header');

var Main = React.createClass({
  render: function () {
    return (
      <div className="ui-layout">
        <Navigation />
        <Header />
        <div className="container">

        </div>
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('app'));