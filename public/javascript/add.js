$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
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
          <div class="card mbuttom"  style="width: 450px; border: 1px solid blue;" >
              <img class="card-img-top imgSize" src="${picLink}" alt="Card image cap">
              <button id="wearCard" data-id="${pic.id}" >Wear</button>
               <button action="donate1" id="donateCard" data-id="${pic.id}" >Donate</button>
               <button id="deleteCard" data-id="${pic.id}" >Delete</button>
      </div>
      `
      $("#picsContainer").prepend(card)
    });    
  }

  ////// deletinggg////////////
  $("#picsContainer").on("click", "#deleteCard", function (e) {
    e.preventDefault();
    var picId1 = ($(this).data("id"))
    addInputBoxes(picId1)
  });

  function addInputBoxes(id) {
    $("#picsContainer").remove();
  };

  //////////donateeeee//////////

  });

