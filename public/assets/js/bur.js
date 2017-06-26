/* global moment */

// When the page loads, grab and display all of our burgers
$.get("/", function(err, data) {
    //if(err) throw err;
    if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {
      console.log("burger name is "+ data[i].burger_name);
      var row = $("<div>");
      row.append("<p>" + data[i].burger_name + "</p>");
      $("#burg-area").prepend(row);
    }
  }
});

// When user chirps (clicks addBtn)
$("#burg-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
  var newburg = {
    burger_name: $("#burg").val().trim(),
  };

  console.log(newburg);

  // Send an AJAX POST-request with jQuery
  $.post("/", newburg)
    // On success, run the following code
    .done(function() {

      var row = $("<div>");
      row.addClass("burg");

      row.append("<p>" + newburg.burger_name + "</p>");
      row.append("<p>" + newburg.date + "</p>");
      $("#burg-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#burg").val("");
 
});
