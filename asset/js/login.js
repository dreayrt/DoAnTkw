const signUp = document.querySelector(".signup-btn");
const form = document.querySelector("form");
signUp.addEventListener("click", function () {
  form.setAttribute("action", "signup.html");
  // gui form voi action moi
  form.submit();
});

// open faq
document.addEventListener("DOMContentLoaded", function () {
  const helpFaqs = document.querySelector(".help-faqs");
  const btnHelpFaqs = document.querySelector(".btn-helpfaqs");

  btnHelpFaqs.addEventListener("click", function () {
    helpFaqs.classList.remove("d-none");
  });
});
