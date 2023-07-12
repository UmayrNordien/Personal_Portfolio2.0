
//Back to top button
const backToTopButton = document.querySelector(".back-to-top-btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  console.log('%cHome button clicked', 'color: #adadee;');
  console.log('%cDirected to html top', 'color: #dfb6ee;');
});



// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }



// let fontSizeAdjusted = false;

// function adjustFontSize() {
//   if (!fontSizeAdjusted && window.innerWidth < 389) {
//     // Reduce font size of body, headings, and spans by 5 pixels
//     document.body.style.fontSize = (parseInt(window.getComputedStyle(document.body).fontSize) - 5) + 'px';
//     const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, span');
//     for (let i = 0; i < elements.length; i++) {
//       elements[i].style.fontSize = (parseInt(window.getComputedStyle(elements[i]).fontSize) - 5) + 'px';
//     }
//     fontSizeAdjusted = true;
//   } else if (fontSizeAdjusted && window.innerWidth >= 389) {
//     // Reset font size of body, headings, and spans to default
//     document.body.style.fontSize = '';
//     const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, span');
//     for (let i = 0; i < elements.length; i++) {
//       elements[i].style.fontSize = '';
//     }
//     fontSizeAdjusted = false;
//   }
// }

// // Call the function initially on page load
// adjustFontSize();

// // Call the function on window resize
// window.addEventListener('resize', adjustFontSize);