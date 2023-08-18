filterSelection("all")
function filterSelection(card) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (card == "all") card = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(card) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// JavaScript code to toggle the active class on filter buttons
var filterButtons = document.getElementsByClassName('filter-btn');

for (var i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener('click', function() {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

// Project About ALerts
// PHP Dashboard
function phpDescription() {
  const description = `
      PHP Dashboard:
      This dashboard includes the following tools:
      - Login and register functionality
      - Inventory system
      - Calendar
      - String to binary converter
      - Code editor (work in progress)
  `;
  
  window.alert(description);
}

// Movie Rating App II
function TMDbDescription() {
  const description = `
      TMDb Movie App:
      The TMDb Movie App is a comprehensive movie management and exploration platform built using Vue.js and the TMDb API.
      It offers the following features:
      
      - User Authentication: Secure user login functionality to access personalized movie data.
      - Movie Dashboard: A dashboard that displays a collection of trending movies fetched from the TMDb API.
      - Movie Details: Detailed information about individual movies, including posters, overviews, and ratings.
      - Search Functionality: Search for movies using keywords and get instant results.
      - User Ratings: Ability to rate movies and save user-specific ratings.
      - Route Navigation: Smooth navigation between different app sections using Vue Router.
      - Responsive Design: A responsive user interface that adapts to various screen sizes.
      
      Whether you want to discover trending movies, explore movie details, or rate your favorite films, the TMDb Movie App provides an immersive movie-watching experience.
  `;
  
  window.alert(description);
}
