var assign        = require('object-assign'),
    EventEmitter  = require('events').EventEmitter,
    AppDispatcher = require('../dispatcher/LookerWidgetDispatcher.jsx'),
    Constants     = require('../constants/LookerWidgetConstants.jsx'),
    CHANGE_EVENT  = Constants.CHANGE_EVENT,
    uph           = null;

var ItemizationStore = assign({}, EventEmitter.prototype, {
  getCurrentUPH: function() {
    return uph;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function (payload) {
  var action = payload.action;

  switch(action.type) {
    case Constants.ActionTypes.RECEIVE_ITEMIZATION_UPH:
      // set uph
      break;
    default:
      return true;
  }

  ItemizationStore.emitChange();

  return true;
});

module.exports = ItemizationStore;
