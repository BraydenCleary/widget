var React       = require('react'),
    $           = require('jquery');
    Itemization = require('./components/Itemization.react.jsx');

$('document').ready(function() {
  React.render(
    <div>
      <Itemization/>
    </div>,
    document.getElementById('react-app')
  );
});
