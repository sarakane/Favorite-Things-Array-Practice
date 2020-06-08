$("document").ready(function() {
  $("form#favorites").submit(function(event) {
    event.preventDefault();

    const favThings = [$("input#fav-food").val(), $("input#fav-color").val(), $("input#fav-animal").val()];
    console.log("Favorite Things Array: " + favThings);
    
    const adjustedFavThings = [];
    adjustedFavThings.push(favThings[1], favThings[0], favThings[2]);
    console.log("Adjusted Favorite Things Array: " + adjustedFavThings);
  });
});