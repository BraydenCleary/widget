var React = require('React'),
    $     = require('jquery'),
    Hey   = require('./hey.react.jsx')

$('document').ready(function() {
  React.render(
    <div>
      <Hey/>
    </div>,
    document.getElementById('react-app')
  );
})
