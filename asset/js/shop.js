// search-box
// const inputGroup = document.querySelector(".input-group");
// const btnSearch = document.querySelector(".btn-search");
// btnSearch.addEventListener("click", function () {
//   inputGroup.classList.toggle("active-search");
// });
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
// // border-bottom email
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
const carouselImages = document.querySelectorAll(
  ".carousel-inner .carousel-item img"
);
const modalThumbs = document.querySelectorAll(".modal__item-img img");

// cac vung can cap nhat noi dung
const modalTitle = document.querySelector(".modal-title");
const modalPrice = document.querySelector(".modal-price");
const modalDesc = document.querySelector(".modal-desc");

quickViews.forEach((quickView) => {
  quickView.addEventListener("click", function (e) {
    e.preventDefault();

    const img1 = this.getAttribute("data-image1");
    const img2 = this.getAttribute("data-image2");
    const img3 = this.getAttribute("data-image3");

    const title = this.getAttribute("data-title");
    const price = this.getAttribute("data-price");
    const desc = this.getAttribute("data-desc");

    if (carouselImages.length >= 3) {
      carouselImages[0].src = img1;
      carouselImages[1].src = img2;
      carouselImages[2].src = img3;
    }

    if (modalThumbs.length >= 3) {
      modalThumbs[0].src = img1;
      modalThumbs[1].src = img2;
      modalThumbs[2].src = img3;
    }

    modalTitle.textContent = title;
    modalPrice.textContent = price;
    modalDesc.textContent = desc;

    modalQuickView.classList.remove("d-none");
  });
});
// close
const closeModal = document.querySelector(".icon-close");
closeModal.addEventListener("click", function () {
  modalQuickView.classList.add("d-none");
});
// card added
const btnAddQuickView = document.querySelector(".btn__add-to-cart");
const modalAdded = document.querySelector(".modal-add");
const yourCart = document.querySelector(".your-cart");
const btnYourCart = document.querySelector(".btn-your-cart");

btnAddQuickView.addEventListener("click", function (e) {
  e.preventDefault();
  const titleModalAdd = document.querySelector(".modal-title-add-display");
  titleModalAdd.textContent = modalTitle.textContent;
  modalAdded.classList.remove("d-none");
  // lay du lieu product dang xem them vao your card
  const titleProductYourCard = titleModalAdd.textContent;
  const priceProductYourCard = modalPrice.textContent;
  const imgProductYourCard = document.querySelector(
    ".carousel-inner .carousel-item.active img"
  ).src;
  // tao phan tu html moi
  const cartItem = document.createElement("div");
  cartItem.className = "cart-list row mb-3";
  cartItem.innerHTML = `
    <div class="cart-item__img col-3">
      <img src="${imgProductYourCard}" alt="" class="w-100" />
    </div>
    <div class="cart-item__content col-9">
      <div class="cart-item__heading py-3 fw-light">
        <a href="#">${titleProductYourCard}</a>
      </div>
      <div class="cart-item__detail fw-light"> ${quantity.value}x ${priceProductYourCard}</div>
    </div>
  `;
  // them vao your card
  const totalBox = document.querySelector(".your-cart .total");
  yourCart.querySelector(".your-cart__box").insertBefore(cartItem, totalBox);
  updateTotal();
});
// tinh tien
function updateTotal() {
  const prices = document.querySelectorAll(".your-cart .cart-item__detail");
  let total = 0;

  prices.forEach((item) => {
    const text = item.textContent.trim();
    const parts = text.split("x");
    const price = parseFloat(parts[1].replace("$", ""));
    total += quantity.value * price;
  });

  document.querySelector(
    ".your-cart .total"
  ).textContent = `Total: $${total.toFixed(2)}`;
}

// close card added
const btnModalAdd = document.querySelector(".btn-modal-add");
btnModalAdd.addEventListener("click", function () {
  modalAdded.classList.add("d-none");
});
// open your cart
btnYourCart.addEventListener("click", function () {
  yourCart.classList.remove("d-none");
});

//close your cart
const btnCloselYourCart = document.querySelector(".btn-close__modal-your-cart");
btnCloselYourCart.addEventListener("click", function () {
  yourCart.classList.add("d-none");
});

// open faq
const helpFaqs = document.querySelector(".help-faqs");
const btnHelpFaqs = document.querySelector(".btn-helpfaqs");
btnHelpFaqs.addEventListener("click", function () {
  helpFaqs.classList.remove("d-none");
});
//nav-product
const navLinkPros = document.querySelectorAll(".nav-link-product");
navLinkPros.forEach((navLinkPro) => {
  navLinkPro.addEventListener("click", function () {
    removeActiveNavLink();
    navLinkPro.classList.add("nav-link-product__active");
  });
});
function removeActiveNavLink() {
  navLinkPros.forEach((navLinkPro) => {
    navLinkPro.classList.remove("nav-link-product__active");
  });
}
//open/close modal filter
const modalFilter = document.querySelector(".modal-filter");
const openFilter = document.querySelector(".open-filter");
const iconOpenModal = document.querySelector(".open-filter i");
openFilter.addEventListener("click", function () {
  if (modalFilter.classList.contains("d-none")) {
    modalFilter.classList.remove("d-none");
    iconOpenModal.classList.remove("fa-filter");
    iconOpenModal.classList.add("fa-xmark");
  } else {
    modalFilter.classList.add("d-none");
    iconOpenModal.classList.remove("fa-xmark");
    iconOpenModal.classList.add("fa-filter");
  }
});
// open/close modal search
const shopModalSearch = document.querySelector(".shop-modal-search");
const OpenSearchShop = document.querySelector(".open-search__shop");
const iconSearchShop = document.querySelector(".open-search__shop i");
OpenSearchShop.addEventListener("click", function () {
  if (shopModalSearch.classList.contains("d-none")) {
    shopModalSearch.classList.remove("d-none");
    iconSearchShop.classList.remove("fa-magnifying-glass");
    iconSearchShop.classList.add("fa-xmark");
  } else {
    shopModalSearch.classList.add("d-none");
    iconSearchShop.classList.remove("fa-xmark");
    iconSearchShop.classList.add("fa-magnifying-glass");
  }
});
