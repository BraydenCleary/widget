var keyMirror = require('keymirror');

module.exports = {
  ActionTypes: keyMirror({
    RECEIVE_UPH : null,
    RECEIVE_NEW_USERS_CREATED : null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION : null,
    VIEW_ACTION   : null
  }),

  CHANGE_EVENT: 'change'
};
