var Navigation = React.createClass({
  render: function () {
    return (
      <ul className="nav nav-tabs">
        <li role="presentation" class="active"><a href="#">Home</a></li>
        <li role="presentation"><a href="#">Profile</a></li>
      </ul>
    )
  }
});

module.exports = Navigation;