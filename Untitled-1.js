// --- 捲動淡入動畫 ---
const contents = document.querySelectorAll('.content');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
}, { threshold: 0.2 });
contents.forEach(c => observer.observe(c));

// --- 可編輯區域 ---
document.querySelectorAll('.editable').forEach(area => {
  area.setAttribute('contenteditable', 'true');
  const key = area.querySelector('h2').textContent;
  area.innerHTML = localStorage.getItem(key) || area.innerHTML;

  area.addEventListener('input', () => {
    localStorage.setItem(key, area.innerHTML);
  });
});
