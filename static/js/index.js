$(document).ready(function() {
  // Smooth scrolling for in-page anchor links.
  $('a[href^="#"]').on('click', function(event) {
    var targetId = $(this).attr('href');
    if (!targetId || targetId === '#') return;
    var target = $(targetId);
    if (target.length === 0) return;
    event.preventDefault();
    $('html, body').animate({ scrollTop: target.offset().top - 10 }, 250);
  });
})
