const signUp = document.querySelector(".signup-btn");
const form = document.querySelector("form");
signUp.addEventListener("click", function () {
  form.setAttribute("action", "signup.html");
  // gui form voi action moi
  form.submit();
});
