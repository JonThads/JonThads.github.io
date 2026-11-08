(() => {
  'use strict';
  const key = 'portfolio:saved-posts';
  let memory = new Set();
  const load = () => {
    try {
      const value = JSON.parse(localStorage.getItem(key) || '[]');
      if (Array.isArray(value)) memory = new Set(value.filter((id) => typeof id === 'string'));
    } catch {}
    return memory;
  };
  load();
  window.portfolioReadingList = { has: (id) => memory.has(id) };
  const announce = (message) => document.querySelectorAll('[data-reading-status]').forEach((el) => { el.textContent = message; });
  const render = () => {
    document.querySelectorAll('[data-bookmark]').forEach((button) => {
      const saved = memory.has(button.dataset.bookmark);
      button.setAttribute('aria-pressed', String(saved));
      button.setAttribute('aria-label', (saved ? 'Remove ' : 'Save ') + button.dataset.postTitle + (saved ? ' from reading list' : ' to reading list'));
      button.querySelector('span').textContent = saved ? 'Saved' : 'Save';
    });
    document.querySelectorAll('[data-saved-count]').forEach((el) => { el.textContent = String(memory.size); });
    document.dispatchEvent(new Event('portfolio:saved-posts-changed'));
  };
  document.querySelectorAll('[data-bookmark]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.bookmark;
      const removing = memory.has(id);
      if (removing) memory.delete(id); else memory.add(id);
      let persistent = true;
      try { localStorage.setItem(key, JSON.stringify([...memory])); } catch { persistent = false; }
      render();
      announce(persistent ? (removing ? 'Removed from your reading list.' : 'Saved to your reading list on this device.') : 'Browser storage is unavailable. This reading list lasts for this visit.');
    });
  });
  window.addEventListener('storage', (event) => { if (event.key === key) { load(); render(); } });
  render();
  const reading = document.querySelector('article.reading');
  const progress = document.querySelector('.reader-progress');
  if (reading && progress) {
    const topProgress = document.createElement('div');
    topProgress.className = 'reading-progress-top';
    topProgress.setAttribute('aria-hidden', 'true');
    topProgress.innerHTML = '<span></span>';
    document.body.append(topProgress);
    const details = document.querySelector('.reader-toc details');
    if (details) details.open = matchMedia('(min-width:841px)').matches;
    const content = reading.querySelector('.prose');
    const update = () => {
      const start = content.getBoundingClientRect().top + scrollY - 140;
      const finish = content.getBoundingClientRect().bottom + scrollY - innerHeight + 80;
      const value = Math.round(Math.min(100, Math.max(0, ((scrollY - start) / Math.max(1, finish - start)) * 100)));
      progress.value = value;
      topProgress.firstElementChild.style.transform = 'scaleX(' + value / 100 + ')';
      document.querySelector('[data-reading-percent]').textContent = value + '%';
      const headings = [...content.querySelectorAll('h2[id]')];
      const current = [...headings].reverse().find((h) => h.getBoundingClientRect().top <= 180) || headings[0];
      document.querySelectorAll('.reader-toc nav a').forEach((a) => {
        if (a.getAttribute('href') === '#' + current?.id) a.setAttribute('aria-current', 'location');
        else a.removeAttribute('aria-current');
      });
    };
    let scheduled = false;
    addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(() => { update(); scheduled = false; }); } }, { passive: true });
    addEventListener('resize', update);
    update();
  }
  document.querySelectorAll('[data-copy-code]').forEach((button) => {
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(button.parentElement.querySelector('code').textContent);
        button.textContent = 'Copied';
        announce('Code copied to the clipboard.');
      } catch { announce('Copy is unavailable. Select the code to copy it.'); }
    });
  });
})();
