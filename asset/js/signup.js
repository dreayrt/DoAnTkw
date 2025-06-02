// open faq
const helpFaqs = document.querySelector(".help-faqs");
const btnHelpFaqs = document.querySelector(".btn-helpfaqs");
btnHelpFaqs.addEventListener("click", function () {
  helpFaqs.classList.remove("d-none");
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
