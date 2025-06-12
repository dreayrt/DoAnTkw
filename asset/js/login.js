const signUp = document.querySelector(".signup-btn");
const form = document.querySelector("form");
signUp.addEventListener("click", function () {
  form.setAttribute("action", "signup.html");
  // gui form voi action moi
  form.submit();
});

// open faq
const helpFaqs = document.querySelector(".help-faqs");
const btnHelpFaqs = document.querySelectorAll(".btn-helpfaqs");
btnHelpFaqs.forEach((item) => {
  item.addEventListener("click", function () {
    helpFaqs.classList.remove("d-none");
  });
});
// login acc
// lay danh sach doi tuong tu localStorage
const users = JSON.parse(localStorage.getItem("users")) || [];
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const pass = document.getElementById("pass").value;

  // Tim vi tri user khop username va password voi file signUp
  const userIndex = users.findIndex(
    (u) => u.username === username && u.pass === pass
  );

  if (userIndex !== -1) {
    const user = users[userIndex];
    alert("Đăng nhập thành công!");
    localStorage.setItem("currentUser", JSON.stringify(user));
    if (Array.isArray(user.cart)) {
      localStorage.setItem("cart", JSON.stringify(user.cart));
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }

    window.location.href = "index.html";
  } else {
    alert("Sai tên đăng nhập hoặc mật khẩu!");
  }
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
