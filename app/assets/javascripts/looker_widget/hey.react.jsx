var React = require('react'),
    Foo   = require('./foo.react.jsx'),
    YoStore = require('../stores/YoStore.jsx');

var Hey = React.createClass({
  render: function() {
    return (
      <div>
        <span onClick={this._yo}>0</span>
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
