var React = require('react'),
    Foo   = require('./foo.react.jsx'),
    YoStore = require('../stores/YoStore.jsx'),
    ViewActions = require('../actions/LookerWidgetViewActions.jsx')

var Hey = React.createClass({
  getInitialState: function() {
    return {
      yo: YoStore.getCurrent()
    }
  },

  render: function() {
    return (
      <div>
        <span onClick={this._yo}>{this.state.yo}</span>
        <Foo/>
      </div>
    )
  },

  componentDidMount: function() {
    YoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    YoStore.removeChangeListener(this._onChange);
  },

  _yo: function() {
    ViewActions.yo()
  },

  _onChange: function() {
    this.setState({
      yo: YoStore.getCurrent()
    })
  }
});

module.exports = Hey;
