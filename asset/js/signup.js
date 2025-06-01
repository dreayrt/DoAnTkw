const reloadSignUp = document.querySelector(".reset-btn button");
const inputValue = document.querySelectorAll("input");
reloadSignUp.addEventListener("click", function () {
  inputValue.forEach((inputItem) => {
    inputItem.value = "";
  });
});
// // open faq
// const helpFaqs = document.querySelector(".help-faqs");
// const btnHelpFaqs = document.querySelector(".btn-helpfaqs");
// btnHelpFaqs.addEventListener("click", function () {
//   helpFaqs.classList.remove("d-none");
// });
// localStorage acc
const form = document.querySelector(".card-body form");
console.log("Form:", form);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const userName = document.querySelector("#username").value;
  const passWord = document.querySelector("#pass").value;
  localStorage.setItem("username", userName);
  localStorage.setItem("password", passWord);
});

// const form = document.querySelector(".card-body form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // Ngăn gửi form

//   const formData = {
//     name: document.querySelector("#name").value,
//     username: document.querySelector("#username").value,
//     password: document.querySelector("#pass").value,
//     gender: document.querySelector("#gender").value,
//     email: document.querySelector("#email").value,
//     address: document.querySelector("#address").value,
//   };

//   const jsonData = JSON.stringify(formData);
//   localStorage.setItem("user", jsonData);

//   // Delay 100ms để đảm bảo localStorage được lưu xong
//   setTimeout(() => {
//     window.location.href = "login.html";
//   }, 100);
// });
