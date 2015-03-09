'use strict';

var AppDispatcher = require('../dispatcher/LookerWidgetDispatcher.jsx'),
    Constants     = require('../constants/LookerWidgetConstants.jsx'),
    ActionTypes   = Constants.ActionTypes;

module.exports = {
  yo: function(location_code) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.YO
    });
  }
};
