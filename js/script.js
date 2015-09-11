'use strict';

$( document ).ready(function() {
  $('.button-collapse').sideNav({
      closeOnClick: true
    }
  );

  /* ScrollFire options */
  var options = [
    {
      selector: '.tech-item',
      offset: 300,
      callback: 'Materialize.showStaggeredList("#tech-list")'
    }
  ];
  Materialize.scrollFire(options);
});
