// open faq
const helpFaqs = document.querySelector(".help-faqs");
const btnHelpFaqs = document.querySelectorAll(".btn-helpfaqs");
btnHelpFaqs.forEach((item) => {
  item.addEventListener("click", function () {
    helpFaqs.classList.remove("d-none");
  });
});

// reset form
const resetButton = document.querySelector(".reset-btn button");
const inputValue = document.querySelectorAll("input");
resetButton.addEventListener("click", function () {
  signupForm.reset();
});
resetButton.addEventListener("click", function () {
  signupForm.reset();
});

//localStorage acc
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  const pass = document.getElementById("pass").value;
  // khoi tao doi tuong
  const newUser = {
    id: Date.now(), // tao id duy nhat dua tren timestamp
    username,
    pass,
  };
  //lay danh sach hien co o localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];
  // user la mang, neu localStorage chua co thi mac dinh []

  users.push(newUser);

  //luu mang users tro lai localStorage
  localStorage.setItem("users", JSON.stringify(users));

  // thong bao thanh cong va reset form
  alert("Đăng ký thành công! Thông tin đã được lưu vào localStorage.");
  signupForm.reset();

  window.location.href = "login.html";
});
// responsive-nav
const resNav = document.querySelector(".res__nav");
const btnNavbar = document.querySelector(".btn-navbar");
const resNavOverlay = document.querySelector(".res__nav-overlay");
btnNavbar.addEventListener("click", function () {
  resNav.classList.remove("d-none");
  resNavOverlay.classList.add("res__overlay");
});
resNavOverlay.addEventListener("click", function () {
  resNav.classList.add("d-none");
  resNavOverlay.classList.remove("res__overlay");
});
// chan su kien lan khi con nam trong phan tu cha deu co gan su kien giong nhau
resNav.addEventListener("click", function (event) {
  event.stopPropagation();
});
