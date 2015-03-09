var assign                = require('object-assign'),
    EventEmitter          = require('events').EventEmitter,
    AppDispatcher         = require('../dispatcher/LookerWidgetDispatcher.jsx'),
    Constants             = require('../constants/LookerWidgetConstants.jsx'),
    CHANGE_EVENT          = Constants.CHANGE_EVENT,
    newUsersCreated       = null;

var NewUsersStore = assign({}, EventEmitter.prototype, {
  getCurrent: function() {
    return newUsersCreated;
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
    case Constants.ActionTypes.RECEIVE_NEW_USERS_CREATED:
      newUsersCreated = action.data[0]['users.count'];
      break;
    default:
      return true;
  }

  NewUsersStore.emitChange();

  return true;
});

module.exports = NewUsersStore;
