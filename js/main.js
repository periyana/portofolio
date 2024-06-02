// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

function togglePortfolio() {
  var portfolioItems = document.getElementById("portfolioItems");
  if (portfolioItems.style.display === "none") {
    portfolioItems.style.display = "block";
  } else {
    portfolioItems.style.display = "none";
  }
}
