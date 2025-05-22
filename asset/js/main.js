const inputGroup = document.querySelector(".input-group");
const btnSearch = document.querySelector(".btn-search");
btnSearch.addEventListener("click", function () {
  inputGroup.classList.toggle("active-search");
});
