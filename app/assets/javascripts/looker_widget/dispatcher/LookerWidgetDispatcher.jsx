var Constants         = require('../constants/LookerWidgetConstants.jsx'),
    Dispatcher        = require('flux').Dispatcher,
    assign            = require('object-assign'),
    PayloadSources    = Constants.PayloadSources;

var LookerWidgetDispatcher = assign(new Dispatcher(), {

  handleServerAction: function(action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction: function(action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
});

module.exports = LookerWidgetDispatcher;
