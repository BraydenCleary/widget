var AppDispatcher = require('../dispatcher/LookerWidgetDispatcher.jsx'),
    Constants     = require('../constants/LookerWidgetConstants.jsx'),
    LookerWidgitAPIUtils = require('../utils/LookerWidgetAPIUtils.jsx'),
    ActionTypes   = Constants.ActionTypes;

module.exports = {
  getItemizationUPH: function() {
    LookerWidgitAPIUtils.getItemizationUPH();
  }
};
