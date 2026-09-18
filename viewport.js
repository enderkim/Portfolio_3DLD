(() => {
  const header = document.querySelector('.site-header');
  function fit() {
    document.documentElement.style.setProperty('--header-height', header.getBoundingClientRect().height + 'px');
  }
  fit();
  window.addEventListener('resize', fit, {passive:true});
  window.addEventListener('pageshow', fit);
  if ('ResizeObserver' in window) new ResizeObserver(fit).observe(header);
})();
