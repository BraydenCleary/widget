var assign = require('object-assign'),
    EventEmitter = require('events').EventEmitter,
    yo = 0,
    CHANGE_EVENT = 'change',
    AppDispatcher = require('../dispatcher/LookerWidgetDispatcher.jsx'),
    Constants     = require('../constants/LookerWidgetConstants.jsx');

var YoStore = assign({}, EventEmitter.prototype, {
  getCurrent: function() {
    return yo;
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
    case Constants.ActionTypes.YO:
      yo++
      break;
    default:
      return true;
  }

  YoStore.emitChange();

  return true;
});

module.exports = YoStore;
