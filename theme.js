(() => {
  const STORAGE_KEY = 'theme';
  const $root = document.documentElement;        // ставим класс на <html>, надежнее
  const isDark = () => $root.classList.contains('dark-mode');

  function setIcon() {
    document.querySelectorAll('#themeToggle').forEach(btn => {
      btn.textContent = isDark() ? '☀️' : '🌙';
      // Немного контраста на тёмной теме
      if (isDark()) {
        btn.classList.remove('btn-outline-light');
        btn.classList.add('btn-outline-warning');
      } else {
        btn.classList.add('btn-outline-light');
        btn.classList.remove('btn-outline-warning');
      }
    });
  }

  function apply(theme) {
    if (theme === 'dark') $root.classList.add('dark-mode');
    else $root.classList.remove('dark-mode');
    setIcon();
  }

  document.addEventListener('DOMContentLoaded', () => {
    // начальная тема из localStorage
    apply(localStorage.getItem(STORAGE_KEY) || 'light');

    // обработчик на всех страницах (если кнопка есть)
    document.querySelectorAll('#themeToggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const next = isDark() ? 'light' : 'dark';
        apply(next);
        localStorage.setItem(STORAGE_KEY, next);
      });
    });
  });
})();
