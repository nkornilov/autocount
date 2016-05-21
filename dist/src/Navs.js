var Navigation = React.createClass({displayName: "Navigation",
  render: function () {
    return (
      React.createElement("ul", {className: "nav nav-tabs"}, 
        React.createElement("li", {role: "presentation", class: "active"}, React.createElement("a", {href: "#"}, "Home")), 
        React.createElement("li", {role: "presentation"}, React.createElement("a", {href: "#"}, "Profile"))
      )
    )
  }
});