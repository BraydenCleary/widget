var assign                = require('object-assign'),
    EventEmitter          = require('events').EventEmitter,
    AppDispatcher         = require('../dispatcher/LookerWidgetDispatcher.jsx'),
    Constants             = require('../constants/LookerWidgetConstants.jsx'),
    CHANGE_EVENT          = Constants.CHANGE_EVENT,
    uph                   = null,
    CURRENT_OPERATOR_NAME = "david u",
    $                     = require('jquery');

function _setUPHForOperator(data) {
  $.each(data, function(index, itemizer_uph) {
    if (itemizer_uph['operators.name'] == CURRENT_OPERATOR_NAME) {
      uph = itemizer_uph['operator_sessions.itemization_UPH'];
    }
  })
}

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
    case Constants.ActionTypes.RECEIVE_UPH:
      _setUPHForOperator(action.data);
      break;
    default:
      return true;
  }

  ItemizationStore.emitChange();

  return true;
});

module.exports = ItemizationStore;
