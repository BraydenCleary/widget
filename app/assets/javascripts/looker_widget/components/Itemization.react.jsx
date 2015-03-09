var React            = require('react'),
    ItemizationStore = require('../stores/ItemizationStore.jsx'),
    ViewActions      = require('../actions/LookerWidgetViewActions.jsx');

var Itemization = React.createClass({
  getInitialState: function() {
    return {
      uph: ItemizationStore.getCurrentUPH()
    }
  },

  render: function() {
    return (
      <div>
        <span>{this.state.uph}</span>
      </div>
    )
  },

  componentDidMount: function() {
    ItemizationStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ItemizationStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
      uph: ItemizationStore.getCurrentUPH()
    })
  }
});

module.exports = Itemization;
