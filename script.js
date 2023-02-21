$(document).ready(function() {
    // Add click event listener to boxes
    $('.box').click(function() {
      // Toggle background color between blue and green
      $(this).toggleClass('blue green');
    });
  });