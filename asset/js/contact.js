// open faq
const helpFaqs = document.querySelector(".help-faqs");
const btnHelpFaqs = document.querySelector(".btn-helpfaqs");
btnHelpFaqs.addEventListener("click", function () {
  helpFaqs.classList.remove("d-none");
});
// Chờ DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const emailInput = document.getElementById('contactEmail');
  const msgInput   = document.getElementById('contactMessage');
  const emailErr   = document.getElementById('emailError');

  // Hàm kiểm tra định dạng email
  function isValidEmail(email) {
    // regex đơn giản: xxx@yyy.zzz
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const msg   = msgInput.value.trim();

    // 1. Validate email
    if (!isValidEmail(email)) {
      emailErr.classList.remove('d-none');
      emailInput.classList.add('is-invalid');
      return;
    } else {
      emailErr.classList.add('d-none');
      emailInput.classList.remove('is-invalid');
    }

    // 2. Gửi mail: dùng mailto để mở client mail
    const to      = '4duamenh@gmail.com';
    const subject = encodeURIComponent('Phản hồi từ khách: ' + email);
    const body    = encodeURIComponent(msg + "\n\n— Gởi từ: " + email);
    const mailto  = `mailto:${to}?subject=${subject}&body=${body}`;

    // Chuyển hướng sang mailto
    window.location.href = mailto;
  });
});

