var Navigation = require("./Navs");

var Header = React.createClass({
  render: function () {
    return (
      <header>
        This is header.
        <Navigation />
      </header>
    )
  }
});

module.exports = Header;