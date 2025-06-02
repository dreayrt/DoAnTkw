// search-box
const inputGroup = document.querySelector(".input-group");
const btnSearch = document.querySelector(".btn-search");
btnSearch.addEventListener("click", function () {
  inputGroup.classList.toggle("active-search");
});
//overview__item--active
const overViewItems = document.querySelectorAll(".overview__item");
overViewItems.forEach((item) => {
  item.addEventListener("click", function () {
    // xoa class active da co
    removeActive();
    item.classList.add("overview__item--active");
  });
});
function removeActive() {
  overViewItems.forEach((item) => {
    item.classList.remove("overview__item--active");
  });
}
//heart1 -> heart2
const heart1s = document.querySelectorAll(".heart1");
heart1s.forEach((heart1) => {
  heart1.addEventListener("click", function () {
    if (heart1.getAttribute("src") === "../images/icon-heart-02.png") {
      heart1.setAttribute("src", "../images/icon-heart-01.png");
      alert("You have unfavorite the product");
    } else {
      heart1.setAttribute("src", "../images/icon-heart-02.png");
      alert("You liked the product");
    }
  });
});
// border-bottom email
const footerNewSletterInput = document.querySelector(
  ".footer__newsletter--input"
);
const footerInput = document.querySelector(".footer__input");
footerInput.addEventListener("click", function () {
  footerNewSletterInput.classList.add("active__input-footer");
});
// load lai trang
const btn = document.querySelector(".btn-sub");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  location.reload();
});
// tang giam so luong san pham
const quantity = document.querySelector("#quantity");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
increase.addEventListener("click", function () {
  quantity.value = parseInt(quantity.value) + 1;
});
decrease.addEventListener("click", function () {
  quantity.value = parseInt(quantity.value) - 1;
  if (quantity.value < 0) {
    quantity.value = 0;
  }
});
// hieu ung tuong ung anh cua carousel va anh nho
const carouselModal = document.querySelector("#carouselModalQv");
const carouselModalInner = document.querySelector(
  "#carouselModalQv .carousel-inner"
);
const imgSmalls = document.querySelectorAll(".modal__item-img");
const modalqv = document.querySelector(".modalqv");

function updateActive() {
  // tim chi muc cua muc hien dang hoat dong trong carousel modal
  const activeIndex = [...carouselModalInner.children].findIndex((child) => {
    return child.classList.contains("active");
  });
  //xoa tat ca cac active-border cua imgsmall
  imgSmalls.forEach((img) => {
    img.classList.remove("active-border");
  });

  if (activeIndex >= 0) {
    imgSmalls[activeIndex].classList.add("active-border");
  }
}
// su kien slid.bs.carousel: hieu ung chuyen trang hoan tat
carouselModal.addEventListener("slid.bs.carousel", () => {
  updateActive();
});

// su kien 'shown.bs.modal' duoc goi khi modal da mo xong hoan tat (tuc la sau khi hieu ung mo modal ket thuc).
// xay ra Ngay sau khi modal hien thi hoan tat tren man hinh
modalqv.addEventListener("shown.bs.modal", () => {
  updateActive();
});
// dong bo hoa ban dau khi script tai
updateActive();

// bat modal quick view
const quickViews = document.querySelectorAll(".quick-view");
const modalQuickView = document.querySelector(".modalqv");
quickViews.forEach((quickView) => {
  quickView.addEventListener("click", function (e) {
    e.preventDefault();
    modalQuickView.classList.remove("d-none");
  });
});
// close
const closeModal = document.querySelector(".icon-close");
closeModal.addEventListener("click", function () {
  modalQuickView.classList.add("d-none");
});
// card added added
const btnAddQuickView = document.querySelector(".btn__add-to-cart");
const modalAdded = document.querySelector(".modal-add");
btnAddQuickView.addEventListener("click", function (e) {
  e.preventDefault();
  modalAdded.classList.remove("d-none");
});
// close card added
const btnModalAdd = document.querySelector(".btn-modal-add");
btnModalAdd.addEventListener("click", function () {
  modalAdded.classList.add("d-none");
});
// open your cart
const btnYourCart = document.querySelector(".btn-your-cart");
btnYourCart.addEventListener("click", function () {
  yourCart.classList.remove("d-none");
});
//close your cart
const btnCloselYourCart = document.querySelector(".btn-close__modal-your-cart");
const yourCart = document.querySelector(".your-cart");
btnCloselYourCart.addEventListener("click", function () {
  yourCart.classList.add("d-none");
});

// open faq
const helpFaqs = document.querySelector(".help-faqs");
const btnHelpFaqs = document.querySelector(".btn-helpfaqs");
btnHelpFaqs.addEventListener("click", function () {
  helpFaqs.classList.remove("d-none");
});

// doi my account -->username tren localStorage
// lay doi tuong hien tai sau khi da login thanh cong
const currUser = JSON.parse(localStorage.getItem("currentUser"));
const myAcc = document.querySelector(".myacc");
myAcc.innerHTML = `<i class="fa-solid fa-user"></i> ${currUser.username}`;
myAcc.setAttribute("href", "");

// bat sign out
const boxSignOut = document.querySelector(".box-signout");
myAcc.addEventListener("click", function (e) {
  e.preventDefault();
  boxSignOut.classList.toggle("d-none");
});

// dang xuat
const signOut = document.querySelector(".signout");
signOut.addEventListener("click", function (e) {
  e.preventDefault();
  boxSignOut.classList.add("d-none");
  myAcc.innerHTML = `My Account`;
});
// signout box-quay lai
const comeBack = document.querySelector(".comeback");
const iconSignOut = document.querySelector(".icon--signout i");
comeBack.addEventListener("click", function (e) {
  e.preventDefault();
  iconSignOut.classList.remove("fa-face-sad-tear");
  iconSignOut.classList.add("fa-face-kiss-wink-heart");
  setTimeout(() => {
    iconSignOut.classList.remove("fa-face-kiss-wink-heart");
    iconSignOut.classList.add("fa-face-sad-tear");
    boxSignOut.classList.add("d-none");
  }, 500);
});
