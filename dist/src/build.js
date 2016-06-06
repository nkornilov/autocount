(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/Nikita/development/autocount/src/js/App.js":[function(require,module,exports){
var Header = require('./Header');

React.render(React.createElement(Header, null), document.getElementById('app'));

},{"./Header":"/Users/Nikita/development/autocount/src/js/Header.js"}],"/Users/Nikita/development/autocount/src/js/Header.js":[function(require,module,exports){
var Navigation = require("./Navs");

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

},{"./Navs":"/Users/Nikita/development/autocount/src/js/Navs.js"}],"/Users/Nikita/development/autocount/src/js/Navs.js":[function(require,module,exports){
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

module.exports = Navigation;

},{}]},{},["/Users/Nikita/development/autocount/src/js/App.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvTmlraXRhL2RldmVsb3BtZW50L2F1dG9jb3VudC9zcmMvanMvQXBwLmpzIiwiL1VzZXJzL05pa2l0YS9kZXZlbG9wbWVudC9hdXRvY291bnQvc3JjL2pzL0hlYWRlci5qcyIsIi9Vc2Vycy9OaWtpdGEvZGV2ZWxvcG1lbnQvYXV0b2NvdW50L3NyYy9qcy9OYXZzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDOztBQUVqQyxLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFDLE1BQU0sRUFBQSxJQUFBLENBQUcsQ0FBQSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7OztBQ0Z4RCxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRW5DLElBQUksNEJBQTRCLHNCQUFBO0VBQzlCLE1BQU0sRUFBRSxZQUFZO0lBQ2xCO01BQ0Usb0JBQUEsUUFBTyxFQUFBLElBQUMsRUFBQTtBQUFBLFFBQUEsaUJBQUEsRUFBQTtBQUFBLFFBRU4sb0JBQUMsVUFBVSxFQUFBLElBQUEsQ0FBRyxDQUFBO01BQ1AsQ0FBQTtLQUNWO0dBQ0Y7QUFDSCxDQUFDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU07OztBQ2J2QixJQUFJLGdDQUFnQywwQkFBQTtFQUNsQyxNQUFNLEVBQUUsWUFBWTtJQUNsQjtNQUNFLG9CQUFBLElBQUcsRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsY0FBZSxDQUFBLEVBQUE7UUFDM0Isb0JBQUEsSUFBRyxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyxjQUFBLEVBQWMsQ0FBQyxLQUFBLEVBQUssQ0FBQyxRQUFTLENBQUEsRUFBQSxvQkFBQSxHQUFFLEVBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLEdBQUksQ0FBQSxFQUFBLE1BQVEsQ0FBSyxDQUFBLEVBQUE7UUFDaEUsb0JBQUEsSUFBRyxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyxjQUFlLENBQUEsRUFBQSxvQkFBQSxHQUFFLEVBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLEdBQUksQ0FBQSxFQUFBLFNBQVcsQ0FBSyxDQUFBO01BQ2pELENBQUE7S0FDTjtHQUNGO0FBQ0gsQ0FBQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBIZWFkZXIgPSByZXF1aXJlKCcuL0hlYWRlcicpO1xuXG5SZWFjdC5yZW5kZXIoPEhlYWRlciAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiLCJ2YXIgTmF2aWdhdGlvbiA9IHJlcXVpcmUoXCIuL05hdnNcIik7XG5cbnZhciBIZWFkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aGVhZGVyPlxuICAgICAgICBUaGlzIGlzIGhlYWRlci5cbiAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgIDwvaGVhZGVyPlxuICAgIClcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSGVhZGVyOyIsInZhciBOYXZpZ2F0aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFic1wiPlxuICAgICAgICA8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiIGNsYXNzPVwiYWN0aXZlXCI+PGEgaHJlZj1cIiNcIj5Ib21lPC9hPjwvbGk+XG4gICAgICAgIDxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+PGEgaHJlZj1cIiNcIj5Qcm9maWxlPC9hPjwvbGk+XG4gICAgICA8L3VsPlxuICAgIClcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTmF2aWdhdGlvbjsiXX0=
