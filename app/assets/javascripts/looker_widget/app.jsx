$('document').ready(function() {
  var React       = require('react'),
      $           = require('jquery');
      Itemization = require('./components/Itemization.react.jsx');

  React.render(
    <div>
      <Itemization/>
    </div>,
    document.getElementById('react-app')
  );
});
