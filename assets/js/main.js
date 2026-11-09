(() => {
  'use strict';
  const root = document.documentElement;
  const picker = document.querySelector('[data-theme-select]');
  const themes = new Set(['light', 'dark', 'gundam', 'claude']);
  const media = matchMedia('(prefers-color-scheme: dark)');
  const systemTheme = () => (media.matches ? 'dark' : 'light');
  const saved = () => {
    try {
      return localStorage.getItem('theme');
    } catch {
      return null;
    }
  };
  const apply = (theme) => {
    const selected = themes.has(theme) ? theme : systemTheme();
    root.dataset.theme = selected;
    if (picker) picker.value = selected;
  };
  apply(root.dataset.theme || saved());
  picker?.addEventListener('change', () => {
    apply(picker.value);
    try {
      localStorage.setItem('theme', root.dataset.theme);
    } catch {}
  });
  media.addEventListener('change', () => {
    if (!themes.has(saved())) apply(systemTheme());
  });
  window.addEventListener('storage', (event) => {
    if (event.key === 'theme' || event.key === null) apply(event.newValue);
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
      const savedOnly = scope.querySelector('[data-saved-only]')?.getAttribute('aria-pressed') === 'true';
      let count = 0;
      cards.forEach((card) => {
        const terms = card.dataset.filter || card.dataset.topics;
        const visible =
          (active === 'all' || terms.includes(active)) &&
          card.textContent.toLowerCase().includes(q) &&
          (!savedOnly || window.portfolioReadingList?.has(card.dataset.postId));
        card.hidden = !visible;
        if (visible) count++;
      });
      if (status)
        status.textContent =
          count +
          ' ' +
          (cards[0]?.hasAttribute('data-project') ? 'project' : 'post') +
          (count === 1 ? '' : 's') +
          ' shown';
      if (empty) {
        empty.hidden = count !== 0;
        const heading = empty.querySelector('[data-empty-heading]');
        const description = empty.querySelector('[data-empty-description]');
        if (heading) heading.textContent = savedOnly ? 'No saved posts in this view yet' : 'No posts on this topic yet';
        if (description) description.textContent = savedOnly ? 'Save a post or choose another topic to find it here.' : 'Choose another topic to explore the posts.';
      }
    };
    buttons.forEach((button) =>
      button.addEventListener('click', () => {
        active = button.dataset.filterValue;
        buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
        update();
      }),
    );
    search?.addEventListener('input', update);
    scope.querySelector('[data-saved-only]')?.addEventListener('click', (event) => {
      const button = event.currentTarget;
      button.setAttribute('aria-pressed', String(button.getAttribute('aria-pressed') !== 'true'));
      update();
    });
    document.addEventListener('portfolio:saved-posts-changed', update);
    update();
  }
})();
