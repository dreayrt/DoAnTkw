const signUp = document.querySelector(".signup-btn");
const form = document.querySelector("form");
signUp.addEventListener("click", function () {
  form.setAttribute("action", "signup.html");
  // gui form voi action moi
  form.submit();
});

// open faq
const helpFaqs = document.querySelector(".help-faqs");
const btnHelpFaqs = document.querySelector(".btn-helpfaqs");
btnHelpFaqs.addEventListener("click", function () {
  helpFaqs.classList.remove("d-none");
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
