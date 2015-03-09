var keyMirror = require('keymirror');

module.exports = {
  ActionTypes: keyMirror({
    RECEIVE_UPH : null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION : null,
    VIEW_ACTION   : null
  }),

  CHANGE_EVENT: 'change'
};
