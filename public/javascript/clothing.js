
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });


$("#carouselRow").hide(200);
$("#carouselRow2").hide(200);
$("#carouselRow3").hide(200);
$("#carouselRow4").hide(200);

  $("#myBtn, #silhouette").on("click", function () {
    $("#carouselRow, #carouselRow2, #carouselRow3, #carouselRow4").delay(3000).fadeIn('slow');
    $("#myBtnRow, #silhouette").hide(2000).fadeout('slow');
    M.AutoInit();

});


