
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });


$("#carouselRow").hide(100);
$("#carouselRow2").hide(100);
$("#carouselRow3").hide(100);
$("#carouselRow4").hide(100);
$("#carouselRow5").hide(100);


  $("#myBtn, #silhouette").on("click", function () {
    $('#carouselRow').delay(3000).fadeIn('slow');
    $('#carouselRow2').delay(3000).fadeIn('slow');
    $('#carouselRow3').delay(3000).fadeIn('slow');
    $('#carouselRow4').delay(3000).fadeIn('slow');
    $('#carouselRow5').delay(3000).fadeIn('slow');
    $("#myBtnRow").hide(2000).fadeout('slow');
    $("#silhouette").hide();
});


$('.active').mouseenter(function(){
	$('.card-image').animate({
        width: "200px",
        height: "300px",
        opacity: 0.8,
        fontSize: "3em",
      }, 1000 );

      $(".card-image" ).mouseleave(function() {
        $( ".card-image" ).css({
          width: "",
          height: "",
          fontSize: "",
          borderWidth: ""
        });
      });
    });

