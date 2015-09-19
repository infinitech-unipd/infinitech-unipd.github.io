'use strict';

$(document).ready(function() {

  /* Side nav settings */
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

  /* Repo settings */
  $('#source').repo({
    user: 'infinitech-unipd',
    name: 'Premi',
    branch: 'master'
  });
});
