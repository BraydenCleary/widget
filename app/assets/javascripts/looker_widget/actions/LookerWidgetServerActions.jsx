var AppDispatcher    = require('../dispatcher/LookerWidgetDispatcher.jsx'),
    Constants        = require('../constants/LookerWidgetConstants.jsx'),
    ActionTypes      = Constants.ActionTypes;

module.exports = {
  receiveUPH: function(data) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_UPH,
      data: data
    })
  }
}
