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
const modalThumbs = document.querySelectorAll(".modal__item-img img");
const modalCarouselImages = document.querySelectorAll(
  "#carouselModalQv .carousel-inner .carousel-item img"
);

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
    const desc = this.getAttribute("data-desc") || "";

    if (modalThumbs.length >= 3) {
      modalThumbs[0].src = img1;
      modalThumbs[1].src = img2;
      modalThumbs[2].src = img3;
    }

    if (modalCarouselImages.length >= 3) {
      modalCarouselImages[0].src = img1;
      modalCarouselImages[1].src = img2;
      modalCarouselImages[2].src = img3;
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
  cartItem.className = "cart-list row mb-3 align-items-center";
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
// luu cart vao gio hang
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
    cartItem.className = "cart-list row mb-3 align-items-center";
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

// close cart added
const btnModalAdd = document.querySelector(".btn-modal-add");
btnModalAdd.addEventListener("click", function () {
  modalAdded.classList.add("d-none");
});
// open your cart
btnYourCart.addEventListener("click", function () {
  yourCart.classList.remove("d-none");
});
// xoa san pham
const cartBox = document.querySelector(".your-cart__box");
cartBox.addEventListener("click", function (e) {
  // <-- thêm tham số e vào đây
  if (e.target.classList.contains("cart-item__remove")) {
    const cartItemElement = e.target.closest(".cart-list");
    const title = cartItemElement
      .querySelector(".cart-item__heading a")
      .textContent.trim();

    // xóa phần tử HTML
    cartItemElement.remove();

    // xóa trong localStorage
    let cart = getCartFormLocalStorage();
    cart = cart.filter((item) => item.title !== title);
    saveCartToLocalStorage(cart);

    // cập nhật tổng tiền
    updateTotal();
  }
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
  const currUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currUser) {
    window.location.href = "login.html";
  } else {
    boxSignOut.classList.toggle("d-none");
  }
});

// dang xuat
const signOut = document.querySelector(".signout");
signOut.addEventListener("click", function (e) {
  e.preventDefault();
  // lay currentuser va  danh sach users
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userIndex = users.findIndex(
    (u) => u.username === currentUser.username && u.pass === currentUser.pass
  );

  if (userIndex !== -1) {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    users[userIndex].cart = currentCart;
    localStorage.setItem("users", JSON.stringify(users));
  }

  localStorage.removeItem("currentUser");
  localStorage.removeItem("cart");

  boxSignOut.classList.add("d-none");
  myAcc.innerHTML = `My Account`;
});
// giao dien truoc khi dang xuat
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
