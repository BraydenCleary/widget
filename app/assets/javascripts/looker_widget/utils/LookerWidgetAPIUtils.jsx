var ServerActions = require('../actions/LookerWidgetServerActions.jsx');

module.exports = {
  getItemizationUPH: function() {
    $.ajax({
      dataType: 'json',
      url: '/widgets'
    }).done(function(data) {
      ServerActions.receiveUPH(data);
    }).fail(function(error){
      // sweetAlert('Error', 'There is a problem fetching the item from the server. Please try refreshing the page.', 'warning');
    });
  },

  getNewUsersCreated: function() {
    $.ajax({
      dataType: 'json',
      url: '/users_created/index'
    }).done(function(data) {
      ServerActions.receiveNewUsersCreated(data);
    }).fail(function(error){
      // sweetAlert('Error', 'There is a problem fetching the item from the server. Please try refreshing the page.', 'warning');
    });
  }
};
