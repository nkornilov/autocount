var React = require('react');

var Header = React.createClass({
  render: function () {
    return (
      <navs>
        <ul className="nav nav-pills">
          <li role="presentation" className="active"><a href="#">Home</a></li>
          <li role="presentation"><a href="#">Profile</a></li>
          <li role="presentation"><a href="#">Messages</a></li>
        </ul>
      </navs>
    )
  }
});

module.exports = Header;