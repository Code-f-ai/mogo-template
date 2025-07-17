export function setupMenuToggle() {
  const toggleBtn = document.querySelector('.header-toggle');
  const menu = document.querySelector('.header-menu');
  
  if (!toggleBtn || !menu) return;

  // Toggle menu khi click nút
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Ngăn click lan ra document
    menu.classList.toggle('is-expand');
  });

  // Ngăn click bên trong menu bị đóng
  menu.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Click bên ngoài -> ẩn menu
  document.addEventListener('click', () => {
    menu.classList.remove('is-expand');
  });
  // ✅ Scroll xuống quá 3px thì ẩn menu
  window.addEventListener('scroll', () => {
    if (window.scrollY > 3) {
      menu.classList.remove('is-expand');
    }
  });
}


//Hàm hiệu ứng kiểu Accordion – tức là khi mở item này thì item trước sẽ tự động đóng lại
export function wedoToggle() {
  const items = document.querySelectorAll('.wedo-item');

  items.forEach(item => {
    const trigger = item.querySelector('.wedo-item-trigger');
    const desc = item.querySelector('.wedo-item-content');

    if (!trigger || !desc) return;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();

      // 🔴 ĐÓNG tất cả các .desc khác
      items.forEach(otherItem => {
        const otherDesc = otherItem.querySelector('.wedo-item-content');
        if (otherItem !== item && otherDesc?.classList.contains('show')) {
          otherDesc.classList.remove('show');
        }
      });

      // 🔵 MỞ/CLOSE chính cái đang click
      desc.classList.toggle('show');
    });
  });
}

//Hàm hiệu ứng kiểu Accordion – tức là khi mở item này thì item trước sẽ tự động đóng lại
export function wedoTurn() {
  const items = document.querySelectorAll('.wedo-item');

  items.forEach(item => {
    const trigger = item.querySelector('.wedo-item-trigger');
    const turn = item.querySelector('.wedo-item-icon');

    if (!trigger || !turn) return;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();

      // 🔴 ĐÓNG tất cả các .desc khác
      items.forEach(otherItem => {
        const othericon = otherItem.querySelector('.wedo-item-icon');
        if (otherItem !== item && othericon?.classList.contains('wedo-turn-icon')) {
          othericon.classList.remove('wedo-turn-icon');
        }
      });

      // 🔵 MỞ/CLOSE chính cái đang click
      turn.classList.toggle('wedo-turn-icon');
    });
  });
}