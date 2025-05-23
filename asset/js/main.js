// search-box
const inputGroup = document.querySelector(".input-group");
const btnSearch = document.querySelector(".btn-search");
btnSearch.addEventListener("click", function () {
  inputGroup.classList.toggle("active-search");
});
//overview__item--active
const overViewItems = document.querySelectorAll(".overview__item");
overViewItems.forEach((item) => {
  item.addEventListener("click", function () {
    // xoa class active da co
    removeActive();
    item.classList.add("overview__item--active");
  });
});
function removeActive() {
  overViewItems.forEach((item) => {
    item.classList.remove("overview__item--active");
  });
}
//heart1 -> heart2
const heart1s = document.querySelectorAll(".heart1");
heart1s.forEach((heart1) => {
  heart1.addEventListener("click", function () {
    if (heart1.getAttribute("src") === "../images/icon-heart-02.png") {
      heart1.setAttribute("src", "../images/icon-heart-01.png");
      alert("You have unfavorite the product");
    } else {
      heart1.setAttribute("src", "../images/icon-heart-02.png");
      alert("You liked the product");
    }
  });
});
