var React         = require('react'),
    NewUsersStore = require('../stores/NewUsersStore.jsx'),
    ViewActions   = require('../actions/LookerWidgetViewActions.jsx');

var NewUsers = React.createClass({
  getInitialState: function() {
    return {
      newUsers: NewUsersStore.getCurrent()
    }
  },

  componentDidMount: function() {
    this._setUpPolling();
    NewUsersStore.addChangeListener(this._onChange);
  },

  componentWillUnmound: function() {
    NewUsersStore.addChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        <span>New Users Created Today: {this.state.newUsers}</span>
      </div>
    );
  },

  _onChange: function() {
    this.setState({
      newUsers: NewUsersStore.getCurrent()
    })
  },

  _setUpPolling: function() {
    setInterval(function() {
      ViewActions.getNewUsersCreated();
    }, 3000)
  }
});

module.exports = NewUsers;


