var React = require('react');

var Header = React.createClass({
  render: function () {
    return (
      <div className="ui-header-wrap">
        <div className="ui-header">
          <div className="ui-page-page-title pull-left">Главная</div>
        </div>
      </div>
    )
  }
});

module.exports = Header;