"use-strict";

const showMoreButton = document.querySelector(".show-more-btn");
const msg = document.querySelector("#white");

const openShowMore = function (){
  msg.classList.remove("hidden")
  console.log(`show more button clicked`);
}

showMoreButton.addEventListener("click", openShowMore);
