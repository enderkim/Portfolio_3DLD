/* One wheel gesture = one section. Touch, scrollbars and dialog scrolling stay native. */
(() => {
  const sections = Array.from(document.querySelectorAll('[data-scroll-section]'));
  const header = document.querySelector('.site-header');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  let lastWheel = -Infinity;
  let lockedUntil = 0;
  const quietTime = 240;
  const duration = 620;

  function currentIndex() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY >= maxScroll - 3) return sections.length - 1;
    const line = header.getBoundingClientRect().bottom + 40;
    let index = 0;
    sections.forEach((section, i) => {
      if (section.getBoundingClientRect().top <= line) index = i;
    });
    return index;
  }

  function cancel() {
    if (frame) window.cancelAnimationFrame(frame);
    frame = 0;
  }

  function moveTo(index) {
    cancel();
    const section = sections[index];
    const offset = header.getBoundingClientRect().height;
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const target = Math.max(0, Math.min(maxScroll, window.scrollY + section.getBoundingClientRect().top - offset));
    const start = window.scrollY;
    const began = performance.now();
    lockedUntil = began + (reducedMotion.matches ? 260 : duration + 100);
    const finish = () => {
      frame = 0;
      window.history.replaceState(window.history.state, '', '#' + section.id);
    };
    if (reducedMotion.matches) {
      window.scrollTo({top:target, behavior:'instant'});
      finish();
      return;
    }
    const step = now => {
      const progress = Math.min(1, Math.max(0, (now - began) / duration));
      const eased = progress < .5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
      window.scrollTo({top:start + (target - start) * eased, behavior:'instant'});
      if (progress < 1) frame = window.requestAnimationFrame(step);
      else finish();
    };
    frame = window.requestAnimationFrame(step);
  }

  window.addEventListener('wheel', event => {
    if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey ||
        Math.abs(event.deltaX) >= Math.abs(event.deltaY) || !event.deltaY ||
        document.querySelector('dialog[open]') ||
        event.target.closest('input, textarea, select, [contenteditable="true"]')) return;
    if (!event.cancelable) return;
    const now = performance.now();
    const separateGesture = now - lastWheel > quietTime;
    lastWheel = now;
    const inner = event.target.closest('[data-inner-scroll]');
    const overflows = inner && inner.scrollHeight > inner.clientHeight + 2;
    const canReadFurther = overflows && (event.deltaY > 0
      ? inner.scrollTop + inner.clientHeight < inner.scrollHeight - 2
      : inner.scrollTop > 2);
    // A long section is read inside its viewport before moving to the next one.
    if (!frame && now >= lockedUntil && canReadFurther) return;
    // Consume momentum even if an animation has reached its destination.
    if (frame || now < lockedUntil || !separateGesture) {
      event.preventDefault();
      return;
    }
    const next = currentIndex() + Math.sign(event.deltaY);
    // Preserve access to the top edge and the footer.
    if (next < 0 || next >= sections.length) return;
    event.preventDefault();
    moveTo(next);
  }, {passive:false});

  // Let intentional direct navigation interrupt the animated movement.
  window.addEventListener('pointerdown', cancel, {passive:true});
  window.addEventListener('touchstart', cancel, {passive:true});
  window.addEventListener('resize', cancel, {passive:true});
  window.addEventListener('keydown', event => {
    if (['Tab','Escape','ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '].includes(event.key)) cancel();
  });
  reducedMotion.addEventListener('change', cancel);
})();
