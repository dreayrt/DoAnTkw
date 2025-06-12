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
// rang buoc form
const sizeSelect = document.querySelector("#size");
const colorSelect = document.querySelector("#color");
const addToCartBtn = document.querySelector("#addToCartBtn");
// ham kiem tra trang thai
function checkOptions() {
  const sizeValue = sizeSelect.value;
  const colorValue = colorSelect.value;

  if (sizeValue && colorValue) {
    if (parseInt(quantity.value) >= 1) {
      addToCartBtn.classList.remove("disabled");
    } else {
      addToCartBtn.classList.add("disabled");
    }
  } else {
    addToCartBtn.classList.add("disabled");
  }
}
sizeSelect.addEventListener("change", checkOptions);
colorSelect.addEventListener("change", checkOptions);
// cap nhat so luong va check
increase.addEventListener("click", function () {
  let value = parseInt(quantity.value) || 0;
  quantity.value = value;
  checkOptions();
});
decrease.addEventListener("click", function () {
  let value = parseInt(quantity.value) || 0;
  if (value > 0) {
    quantity.value = value;
  }
  checkOptions();
});
checkOptions();
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
// cart added
const btnAddQuickView = document.querySelector(".btn__add-to-cart");
const modalAdded = document.querySelector(".modal-add");
const yourCart = document.querySelector(".your-cart");
const btnYourCart = document.querySelector(".btn-your-cart");

btnAddQuickView.addEventListener("click", function (e) {
  e.preventDefault();
  const titleModalAdd = document.querySelector(".modal-title-add-display");
  titleModalAdd.textContent = modalTitle.textContent;
  modalAdded.classList.remove("d-none");

  //  lay du lieu product dang xem them vao your cart
  const titleProductYourCart = titleModalAdd.textContent;
  const priceProductYourCart = modalPrice.textContent;
  const imgProductYourCart = document.querySelector(
    "#carouselModalQv .carousel-inner .carousel-item.active img"
  ).src;
  // tao phan tu html moi
  const cartItem = document.createElement("div");
  cartItem.className = "cart-list row mb-3 d-flex align-items-center";
  cartItem.innerHTML = `
     <div class="cart-item__img col-3">
       <img src="${imgProductYourCart}" alt="" class="w-100" />
     </div>
     <div class="cart-item__content col-7">
       <div class="cart-item__heading py-3 fw-light">
         <a href="#">${titleProductYourCart}</a>
       </div>
       <div class="cart-item__detail fw-light"> ${quantity.value}x ${priceProductYourCart}</div>
     </div>
      <a class="cart-item__remove btn col-2">X</a>
   `;

  //them vao your cart
  const totalBox = document.querySelector(".your-cart .total");
  yourCart.querySelector(".your-cart__box").insertBefore(cartItem, totalBox);

  // luu vao localStorage
  const currentCart = getCartFormLocalStorage();
  currentCart.push({
    title: titleProductYourCart,
    price: priceProductYourCart,
    image: imgProductYourCart,
    quantity: quantity.value,
  });
  saveCartToLocalStorage(currentCart);
  // cap nhat tong tien
  updateTotal();
});

// lay danh sach cart o localStorage
function getCartFormLocalStorage() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}
// luu vao gio hang
function saveCartToLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// lay du lieu tren localStorage
function renderCartFromLocalStorage() {
  const cart = getCartFormLocalStorage();
  const cartBox = document.querySelector(".your-cart__box ");
  const totalBox = document.querySelector(".your-cart .total");

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-list row mb-3 d-flex align-items-center";
    cartItem.innerHTML = `
      <div class="cart-item__img col-3">
        <img src="${item.image}" alt="" class="w-100" />
      </div>
      <div class="cart-item__content col-7">
        <div class="cart-item__heading py-3 fw-light">
          <a href="#">${item.title}</a>
        </div>
        <div class="cart-item__detail fw-light"> ${item.quantity}x ${item.price}</div>
      </div>
      <a class="cart-item__remove btn col-2">X</a>
    `;
    cartBox.appendChild(cartItem);
  });

  cartBox.appendChild(totalBox);
  updateTotal();
}
// load lai gio hang
document.addEventListener("DOMContentLoaded", function () {
  renderCartFromLocalStorage();
});
//tinh tien
function updateTotal() {
  const prices = document.querySelectorAll(".your-cart .cart-item__detail");
  let total = 0;

  prices.forEach((item) => {
    const text = item.textContent.trim();
    const parts = text.split("x");
    const quantity = parseInt(parts[0]);
    const priceStr = parts[1].trim().replace("VNĐ", "").replace(/\./g, ""); //bieu thuc chinh quy tim tat ca dau (.):(/\./g)
    const price = parseInt(priceStr);
    total += quantity * price;
  });
  const totalFormatted = formatNumberWithDot(total);
  document.querySelector(
    ".your-cart .total"
  ).textContent = `Tổng Cộng: ${totalFormatted} VNĐ`;
}
// them dau .
function formatNumberWithDot(number) {
  let str = number.toString();
  let result = "";
  let count = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    result = str[i] + result;
    count++;
    if (count % 3 === 0 && i !== 0) {
      result = "." + result;
    }
  }
  return result;
}
// xoa san pham
const cartBox = document.querySelector(".your-cart__box");
cartBox.addEventListener("click", function (e) {
  if (e.target.classList.contains("cart-item__remove")) {
    const cartItemElement = e.target.closest(".cart-list");
    const title = cartItemElement
      .querySelector(".cart-item__heading a")
      .textContent.trim();
    cartItemElement.remove();
    let cart = getCartFormLocalStorage();
    cart = cart.filter((item) => item.title !== title);
    saveCartToLocalStorage(cart);
    updateTotal();
  }
});
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
const btnHelpFaqs = document.querySelectorAll(".btn-helpfaqs");
btnHelpFaqs.forEach((item) => {
  item.addEventListener("click", function () {
    helpFaqs.classList.remove("d-none");
  });
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

// mua hang
const modalBuy = document.querySelector(".modal-buy");
const buyNow = document.querySelector(".buy");
const cartItemsContainer = document.querySelector(".your-cart__box");
buyNow.addEventListener("click", function () {
  const cart = getCartFormLocalStorage();
  if (cart && cart.length > 0) {
    modalBuy.classList.remove("d-none");
    setTimeout(() => {
      modalBuy.classList.add("d-none");
      const cartItems = cartItemsContainer.querySelectorAll(".cart-list");
      cartItems.forEach((item) => item.remove());
      clearCart();
      updateTotal();
    }, 1000);
  } else {
    alert("Giỏ hàng chưa có gì:(((");
  }
});
// xoa cart o localStorage
function clearCart() {
  localStorage.setItem("cart", JSON.stringify([]));
}
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
// loc san pham
const priceItems = document.querySelectorAll(".price-list li");
const productCards = document.querySelectorAll(".shop-prod .card");

// ham chuyen doi text->so
function parsePrice(text) {
  return parseInt(text.replace(/[^\d]/g, ""));
}

priceItems.forEach((item) => {
  item.addEventListener("click", () => {
    const text = item.innerText.trim();

    let min = 0;
    let max = Infinity;

    // xac dinh khoang gia
    if (text.includes("50.00VNĐ") && text.includes("1.000.000VNĐ")) {
      min = 50000;
      max = 1000000;
    } else if (text.includes("1.000.00VNĐ") && text.includes("1.500.00VNĐ")) {
      min = 1000000;
      max = 1500000;
    } else if (text.includes("1.500.000VNĐ") && text.includes("2.000.00VNĐ")) {
      min = 1500000;
      max = 2000000;
    } else if (text.includes("2.000.00VNĐ+")) {
      min = 2000000;
    } else {
      // khon gioi han
      min = 0;
      max = Infinity;
    }
    // loc san pham
    productCards.forEach((card) => {
      const priceText = card.querySelector(".card-text").innerText;
      const priceValue = parsePrice(priceText);
      if (priceValue >= min && priceValue <= max) {
        card.parentElement.style.display = "block";
      } else {
        card.parentElement.style.display = "none";
      }
    });
  });
});
