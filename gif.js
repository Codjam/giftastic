
$(document).ready(function() {

  $("#add-button").on("click", function(e){
    e.preventDefault()
    console.log("add-button");
    // save into and make a button
    // if {
    //
    // }
  })

  $("#btn1").click(function() {
    $("img").before("<b>Before</b>");
  });


  // Event listener for all button elements
  $(".gif-button").on("click", function() {
    // In this case, the "this" keyword refers to the button that was clicked
    var person = $(this).attr("data-person");

    // Constructing a URL to search Giphy for the name of the person who said the quote
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      // After the data comes back from the API
      .done(function(response) {
        // Storing an array of results in the results variable
        var results = response.data;

        // Looping over every result item
        for (var i = 0; i < results.length; i++) {

          // Only taking action if the photo has an appropriate rating
          if (results[i].rating !== "r" && results[i].rating !== "") {
            // Creating a div with the class "item"
            var gifDiv = $("<div class='item'>");

            // Storing the result item's rating
            var rating = results[i].rating;

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + rating);

            // Creating an image tag
            var personImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
            personImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and personImage we created to the "gifDiv" div we created
            gifDiv.append(p);
            gifDiv.append(personImage);

            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            $("#gifs-appear-here").prepend(gifDiv);



          }
        }
      });
  });
});

// Function for displaying movie data
function renderButtons() {

            // Deleting the movies prior to adding new movies
            // (this is necessary otherwise you will have repeat buttons)
            $("#buttons-view").empty();

            // Looping through the array of movies
            for (var i = 0; i < movies.length; i++) {
              // Then dynamicaly generating buttons for each movie in the array
              // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
              var a = $("<button>");
              // Adding a class of movie to our button
              a.addClass("gifs");
              // Adding a data-attribute
              a.attr("data-name", gifs[i]);
              // Providing the initial button text
              a.text(gifs[i]);
              // Adding the button to the buttons-view div
              $("#buttons-view").append(a);

              // This line grabs the input from the textbox
              var gifs = $("#gifs-input").val().trim();
              console.log(hello);
            }

          }
