'use strict';

var ServerActions = require('../actions/LookerWidgetServerActionCreators');

module.exports = {
  fetchBrand: function(brandId) {
    $.ajax({
      dataType: 'json',
      url: //
    }).done(function(data) {
      ServerActions.receiveUPH(data);
    }).fail(function(error){
      // sweetAlert('Error', 'There is a problem fetching the item from the server. Please try refreshing the page.', 'warning');
    });
  }
};
