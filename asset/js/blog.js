// search-box
const inputGroup = document.querySelector(".input-group");
const btnSearch = document.querySelector(".btn-search");
btnSearch.addEventListener("click", function () {
  inputGroup.classList.toggle("active-search");
});
// //overview__item--active
// const overViewItems = document.querySelectorAll(".overview__item");
// overViewItems.forEach((item) => {
//   item.addEventListener("click", function () {
//     // xoa class active da co
//     removeActive();
//     item.classList.add("overview__item--active");
//   });
// });
// function removeActive() {
//   overViewItems.forEach((item) => {
//     item.classList.remove("overview__item--active");
//   });
// }
// //heart1 -> heart2
// const heart1s = document.querySelectorAll(".heart1");
// heart1s.forEach((heart1) => {
//   heart1.addEventListener("click", function () {
//     if (heart1.getAttribute("src") === "../images/icon-heart-02.png") {
//       heart1.setAttribute("src", "../images/icon-heart-01.png");
//       alert("You have unfavorite the product");
//     } else {
//       heart1.setAttribute("src", "../images/icon-heart-02.png");
//       alert("You liked the product");
//     }
//   });
// });
// // border-bottom email
// const footerNewSletterInput = document.querySelector(
//   ".footer__newsletter--input"
// );
// const footerInput = document.querySelector(".footer__input");
// footerInput.addEventListener("click", function () {
//   footerNewSletterInput.classList.add("active__input-footer");
// });
// // load lai trang
// const btn = document.querySelector(".btn-sub");
// btn.addEventListener("click", function (e) {
//   e.preventDefault();
//   location.reload();
// });
// // tang giam so luong san pham
// const quantity = document.querySelector("#quantity");
// const increase = document.querySelector(".increase");
// const decrease = document.querySelector(".decrease");
// increase.addEventListener("click", function () {
//   quantity.value = parseInt(quantity.value) + 1;
// });
// decrease.addEventListener("click", function () {
//   quantity.value = parseInt(quantity.value) - 1;
//   if (quantity.value < 0) {
//     quantity.value = 0;
//   }
// });
// // hieu ung tuong ung anh cua carousel va anh nho
// const carouselModal = document.querySelector("#carouselModalQv");
// const carouselModalInner = document.querySelector(
//   "#carouselModalQv .carousel-inner"
// );
// const imgSmalls = document.querySelectorAll(".modal__item-img");
// const modalqv = document.querySelector(".modalqv");

// function updateActive() {
//   // tim chi muc cua muc hien dang hoat dong trong carousel modal
//   const activeIndex = [...carouselModalInner.children].findIndex((child) => {
//     return child.classList.contains("active");
//   });
//   //xoa tat ca cac active-border cua imgsmall
//   imgSmalls.forEach((img) => {
//     img.classList.remove("active-border");
//   });

//   if (activeIndex >= 0) {
//     imgSmalls[activeIndex].classList.add("active-border");
//   }
// }
// // su kien slid.bs.carousel: hieu ung chuyen trang hoan tat
// carouselModal.addEventListener("slid.bs.carousel", () => {
//   updateActive();
// });

// // su kien 'shown.bs.modal' duoc goi khi modal da mo xong hoan tat (tuc la sau khi hieu ung mo modal ket thuc).
// // xay ra Ngay sau khi modal hien thi hoan tat tren man hinh
// modalqv.addEventListener("shown.bs.modal", () => {
//   updateActive();
// });
// // dong bo hoa ban dau khi script tai
// updateActive();

// // bat modal quick view
// const quickViews = document.querySelectorAll(".quick-view");
// const modalQuickView = document.querySelector(".modalqv");
// quickViews.forEach((quickView) => {
//   quickView.addEventListener("click", function (e) {
//     e.preventDefault();
//     modalQuickView.classList.remove("d-none");
//   });
// });
// // close
// const closeModal = document.querySelector(".icon-close");
// closeModal.addEventListener("click", function () {
//   modalQuickView.classList.add("d-none");
// });
// // card added added
// const btnAddQuickView = document.querySelector(".btn__add-to-cart");
// const modalAdded = document.querySelector(".modal-add");
// btnAddQuickView.addEventListener("click", function (e) {
//   e.preventDefault();
//   modalAdded.classList.remove("d-none");
// });
// // close card added
// const btnModalAdd = document.querySelector(".btn-modal-add");
// btnModalAdd.addEventListener("click", function () {
//   modalAdded.classList.add("d-none");
// });
// open your cart
// const btnYourCart = document.querySelector(".btn-your-cart");
// btnYourCart.addEventListener("click", function () {
//   yourCart.classList.remove("d-none");
// });
// //close your cart
// const btnCloselYourCart = document.querySelector(".btn-close__modal-your-cart");
// const yourCart = document.querySelector(".your-cart");
// btnCloselYourCart.addEventListener("click", function () {
//   yourCart.classList.add("d-none");
// });

// open faq
const helpFaqs = document.querySelector(".help-faqs");
const btnHelpFaqs = document.querySelectorAll(".btn-helpfaqs");
btnHelpFaqs.forEach((item) => {
  item.addEventListener("click", function () {
    helpFaqs.classList.remove("d-none");
  });
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
