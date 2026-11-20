$(document).ready(function() {
  // Init Masonry
  var $grid = $('.grid').masonry({
    gutter: 10,
    horizontalOrder: true,
    itemSelector: '.grid-item',
  });
  // Layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
  // Layout again once web fonts (e.g. CMU Serif card titles) have loaded,
  // since they change card heights after the images are in
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function() {
      $grid.masonry('layout');
    });
  }
  $(window).on('load', function() {
    $grid.masonry('layout');
  });
});
