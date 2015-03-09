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
        <span>David U UPH: {this.state.uph}</span>
      </div>
    )
  },

  componentDidMount: function() {
    this._setUpPolling();
    ItemizationStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ItemizationStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
      uph: ItemizationStore.getCurrentUPH()
    })
  },

  _setUpPolling: function() {
    setInterval(function() {
      ViewActions.getItemizationUPH();
    }, 3000);
  }
});

module.exports = Itemization;
