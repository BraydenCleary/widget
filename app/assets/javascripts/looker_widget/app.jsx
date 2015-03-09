$('document').ready(function() {
  var React   = require('react'),
      $       = require('jquery');
      Hey     = require('./components/Hey.react.jsx');

  React.render(
    <div>
      <Hey/>
    </div>,
    document.getElementById('react-app')
  );
});
