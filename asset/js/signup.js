const reloadSignUp = document.querySelector(".reset-btn button");
const inputValue = document.querySelectorAll("input");
reloadSignUp.addEventListener("click", function () {
  inputValue.forEach((inputItem) => {
    inputItem.value = "";
  });
});
