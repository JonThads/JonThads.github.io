(() => {
  'use strict';
  const root = document.documentElement,
    toggle = document.querySelector('.theme-toggle');
  const media = matchMedia('(prefers-color-scheme: dark)');
  const saved = () => {
    try {
      return localStorage.getItem('theme');
    } catch {
      return null;
    }
  };
  const apply = (theme) => {
    root.dataset.theme = theme;
    const next = theme === 'dark' ? 'light' : 'dark';
    toggle?.setAttribute('aria-label', 'Switch to ' + next + ' mode');
    if (toggle)
      toggle.querySelector('span').textContent = next === 'light' ? 'Light mode' : 'Dark mode';
  };
  apply(root.dataset.theme || (media.matches ? 'dark' : 'light'));
  toggle?.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    apply(theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  });
  media.addEventListener('change', (e) => {
    if (!['light', 'dark'].includes(saved())) apply(e.matches ? 'dark' : 'light');
  });
  window.addEventListener('storage', (e) => {
    if (e.key === 'theme')
      apply(['light', 'dark'].includes(e.newValue) ? e.newValue : media.matches ? 'dark' : 'light');
  });
  const menu = document.querySelector('.menu-toggle'),
    nav = document.querySelector('.site-nav');
  const setMenu = (open) => {
    nav?.classList.toggle('is-open', open);
    menu?.setAttribute('aria-expanded', String(open));
    menu?.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    if (menu) menu.textContent = open ? 'Close' : 'Menu';
  };
  menu?.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  nav?.addEventListener('click', (e) => {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menu.focus();
    }
  });
  matchMedia('(min-width:961px)').addEventListener('change', () => setMenu(false));
  const scope = document.querySelector('[data-filter-scope]');
  if (scope) {
    const buttons = [...scope.querySelectorAll('[data-filter-value]')],
      cards = [...document.querySelectorAll('[data-project], [data-post]')],
      search = scope.querySelector('input'),
      status = document.querySelector('.results-status'),
      empty = document.querySelector('.empty-state');
    let active = 'all';
    const update = () => {
      const q = (search?.value || '').toLowerCase().trim();
      let count = 0;
      cards.forEach((card) => {
        const terms = card.dataset.filter || card.dataset.topics;
        const visible =
          (active === 'all' || terms.includes(active)) &&
          card.textContent.toLowerCase().includes(q);
        card.hidden = !visible;
        if (visible) count++;
      });
      if (status)
        status.textContent =
          count +
          ' ' +
          (cards[0]?.hasAttribute('data-project') ? 'project' : 'sample post') +
          (count === 1 ? '' : 's') +
          ' shown';
      if (empty) empty.hidden = count !== 0;
    };
    buttons.forEach((button) =>
      button.addEventListener('click', () => {
        active = button.dataset.filterValue;
        buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
        update();
      }),
    );
    search?.addEventListener('input', update);
    update();
  }
})();
