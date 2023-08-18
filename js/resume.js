var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

window.onload = function() {
    // Get elements with class name
    var elements_array = document.getElementsByClassName("collapsible");
    // Change first element
    elements_array[0].style.borderRadius = "20px 20px 50px 50px / 20px 20px 0px 0px";
    // Change last element
    elements_array[5].style.borderRadius = "0px 0px 20px 20px;";
  }