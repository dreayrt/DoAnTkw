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
