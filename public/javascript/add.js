$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

  $(document).ready(function(){
    $('.modal').modal();
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
  });




  function getPics() {
    $.ajax({
      type: "GET",
      url: "/api/add",
      dataType: "JSON",
    }).then((result) => {
      console.log(result);
      postPics(result);
    }).catch((err) => {
      console.log(err);
    });
  }

  getPics()


  

  function postPics(results) {

    results.forEach(pic => {
        var picLink = pic.clothingLink.slice(7);

      var card = `
          <div class="card hoverable col s12" style = "width: 250px; float: left;">
          <i style="z-index: 5px; left:100px;" id="favoriteItem" class="material-icons waves-effect">favorite_border</i>
          <img style="width: 250px;" class="materialboxed card-image" src="${picLink}" alt="Card image cap"></img>
          <button class = "btn pink lighten-4 waves-effect" id="wearCard" data-id="${pic.id}" >Wear</button>
          <button class = "btn pink lighten-4 waves-effect" action="donate1" id="donateCard" data-id="${pic.id}" >Donate</button>
          <button class = "btn pink lighten-4 waves-effect" id="deleteCard" data-id="${pic.id}" >Delete</button>
          </div>`

          $("#picsContainer").prepend(card)
        
        var carousel = `<div class="carousel-item" style = "width: 200px;">
          <img class="card-image hoverable" src="${picLink}" alt="Card image cap"></img>
          </div>`
          $("#picsContainer2").prepend(carousel)
          M.AutoInit();

    });    
  }

  ////// deletinggg////////////
$(document).on("click", "#deleteCard",handlePostDelete)
  function deleteCloths(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/add/" + id
    })
      .then(function() {
        getPics();
      });
  }
  function handlePostDelete() {
    var currentCloths = $(this)
      .data("id");
      console.log(currentCloths)
    deleteCloths(currentCloths);
  }

  //////////donateeeee///////////
  $(document).on("click", "#donateCard",handlePostDelete)
  function doCloths(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/add/" + id
    })
      .then(function() {
        getPics();
      });
  }
  function handlePostDelete() {
    var currentCloths = $(this)
      .data("id");
      console.log(currentCloths)
    deleteCloths(currentCloths);
  }


  });