var Navigation = require("./Navs");

var Header = React.createClass({
  render: function () {
    return (
      <header>
        <Navigation />
      </header>
    )
  }
});

module.exports = Header;