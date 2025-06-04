// ===== Đồng bộ Carousel =====
document.addEventListener("DOMContentLoaded", function () {
  // 1. Khởi tạo Bootstrap Carousel
  const carouselEl = document.getElementById('carouselExampleAutoplaying');
  const bsCarousel = new bootstrap.Carousel(carouselEl, {
    interval: 5000,   // Tự chuyển slide mỗi 5000ms (5s). Nếu false, carousel sẽ không tự chạy.
    pause: false      // Khi hover không dừng, vẫn tiếp tục tự chuyển
  });

  // 2. Lấy tất cả thumbnail để đồng bộ highlight
  const thumbnails = document.querySelectorAll('.carousel-thumbnails .thumb-item');

  // 3. Khi carousel chuyển slide xong, bắt event 'slid.bs.carousel'
  carouselEl.addEventListener('slid.bs.carousel', function (event) {
    const newIndex = event.to;   // index slide mới (0,1,2,...)
    // Xóa class 'active' trên tất cả thumbnails
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    // Thêm class 'active' cho thumbnail tương ứng
    if (thumbnails[newIndex]) {
      thumbnails[newIndex].classList.add('active');
    }
  });

  // 4. Bắt sự kiện click vào thumbnail
  thumbnails.forEach((thumb, idx) => {
    thumb.addEventListener('click', function () {
      // Xóa class active của các thumbnail khác
      thumbnails.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      // Bootstrap sẽ tự động chuyển slide nhờ attribute data-bs-slide-to
    });
  });
});

// ===== Countdown Timer =====
const targetTime = new Date("2025-06-30T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetTime - now; // chênh lệch tính bằng ms

  if (diff <= 0) {
    // Nếu đã vượt mốc, set tất cả về 0 và dừng interval
    document.getElementById("days").innerText = "0";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    clearInterval(intervalID);
    return;
  }

  // Các hằng số tính toán
  const msInDay = 24 * 60 * 60 * 1000;
  const msInHour = 60 * 60 * 1000;
  const msInMinute = 60 * 1000;
  const msInSecond = 1000;

  // Tính số ngày, giờ, phút, giây còn lại
  const days = Math.floor(diff / msInDay);
  const hours = Math.floor((diff % msInDay) / msInHour);
  const minutes = Math.floor((diff % msInHour) / msInMinute);
  const seconds = Math.floor((diff % msInMinute) / msInSecond);

  // Update vào DOM (nếu element tồn tại)
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
}

// Gọi lần đầu để không đợi 1s
updateCountdown();
// Chạy lại mỗi 1000ms (1s)
const intervalID = setInterval(updateCountdown, 1000);
