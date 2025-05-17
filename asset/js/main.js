const search = document.querySelector(".search");
const inputSearch = document.querySelector(".input-search");
const btnSearch = document.querySelector("#btn-search");
btnSearch.addEventListener("click", function () {
  search.classList.toggle("search-active");
});
