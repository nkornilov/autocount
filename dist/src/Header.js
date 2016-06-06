var Header = React.createClass({displayName: "Header",
  render: function () {
    return (
      React.createElement("header", null, 
        "This is header.", 
        React.createElement(Navigation, null)
      )
    )
  }
});

module.exports = Header;