var React = require('react');

var Navigation = React.createClass({
  getInitialState: function () {
    this.navs = ["Главная", "Осмотр", "Поиск"];
    return {
      active: 1
    }
  },
  mapNavs: function () {
    return this.navs.reverse().map((navName, index) => {
      return (
        <li role="presentation" key={index} className={index === this.state.active ? "active" : ""}>
          <a href="javascript:void(0)" className="ui-navigation-item">{navName}</a>
        </li>
      )
    })
  },
  render: function () {
    return (
      <div className="ui-navigation">
        <div className="container">
          <ul className="nav nav-pills ">
            {this.mapNavs()}
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = Navigation;