var React       = require('react'),
    $           = require('jquery');
    Itemization = require('./components/Itemization.react.jsx'),
    NewUsers    = require('./components/NewUsers.react.jsx');

$('document').ready(function() {
  React.render(
    <div>
      <Itemization/>
      <NewUsers/>
    </div>,
    document.getElementById('react-app')
  );
});
