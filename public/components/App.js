const auth = function(state = {status: 'logged out', value: 'guest'}, action) {
  switch (action.type) {
    case "LOGIN":
      return Object.assign({}, state, {
        status: 'logged in',
        value: action.value
      });
    case "LOGOUT":
      return Object.assign({}, state, {
        status: 'logged out',
        value: action.value
      });
    default:
      return state;
  }
};

const { createStore } = Redux;
const store = createStore(auth);

var Login = React.createClass({
  handleLogin: function () {
    let username = this.refs.username.value;
    console.log("username: ", username);
    store.dispatch({
      type: "LOGIN",
      value: username
    });
  },

  handleLogout: function() {
  // dispatch action
    store.dispatch({
        type: 'LOGOUT',
      value: 'guest'
    });
    this.refs.username.value = '';
  },

  render: function () {
  let button;
   if (this.props.state.status === 'logged in') {
    button = <button onClick={this.handleLogout}>Log out</button>;
   } else {
    button = <input type="button" value="Login" onClick={this.handleLogin} />
   };
    return (
      <div>
        <input type="text" ref="username" />
        {button}
        <h1>Current state is {this.props.state.status + ' as ' + this.props.state.value}</h1>
      </div>
    )
  }
});

const render = function() {
  ReactDOM.render(
    <Login state={store.getState()}/>,
    document.getElementById("app")
  );
};

store.subscribe(render);
render();
