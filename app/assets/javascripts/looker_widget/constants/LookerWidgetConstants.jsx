var keyMirror = require('keymirror');

module.exports = {
  ActionTypes: keyMirror({
    YO : null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION : null,
    VIEW_ACTION   : null
  }),

  CHANGE_EVENT: 'change'
};
