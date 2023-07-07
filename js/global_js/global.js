
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