/* Observe section boundaries instead of measuring every section every frame. */
(() => {
 const sections=Array.from(document.querySelectorAll('[data-scroll-section]'));
 const links=Array.from(document.querySelectorAll('.site-header nav a'));
 const header=document.querySelector('.site-header');
 const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
 if(!('IntersectionObserver' in window))return;
 const ratios=new Map(sections.map(s=>[s,0]));
 let observer,active='',resizeTimer;
 function render(){
  let best=sections[0],largest=-1;
  sections.forEach(section=>{
   const ratio=ratios.get(section);
   const opacity=preference.matches?'1':ratio>=.4?'1':ratio>=.18?'.55':'0';
   if(section.style.opacity!==opacity)section.style.opacity=opacity;
   if(ratio>largest){largest=ratio;best=section}
  });
  if(active===best.id)return;
  active=best.id;
  links.forEach(link=>{if(link.getAttribute('href')==='#'+active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')});
 }
 function observe(){
  observer?.disconnect();
  observer=new IntersectionObserver(entries=>{entries.forEach(e=>ratios.set(e.target,e.intersectionRatio));render()},
   {rootMargin:`-${Math.round(header.getBoundingClientRect().height)}px 0px 0px 0px`,threshold:[0,.18,.4,.65]});
  sections.forEach(section=>observer.observe(section));
 }
 preference.addEventListener('change',render);
 window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(observe,120)},{passive:true});
 document.documentElement.classList.add('scroll-motion-ready');
 observe();
})();
