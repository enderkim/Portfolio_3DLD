(()=>{
 const octopus=document.querySelector('#floating-octopus');
 const dialog=document.querySelector('#case-dialog');
 if(!octopus)return;

 const storageKey='peta-octopus-position';
 const edge=8;
 let x=0;
 let y=0;
 let drag=null;

 const size=()=>octopus.getBoundingClientRect();
 const clamp=(value,min,max)=>Math.min(Math.max(value,min),Math.max(min,max));
 const apply=()=>{
  const rect=size();
  x=clamp(x,edge,window.innerWidth-rect.width-edge);
  y=clamp(y,edge,window.innerHeight-rect.height-edge);
  octopus.style.setProperty('--octopus-x',`${Math.round(x)}px`);
  octopus.style.setProperty('--octopus-y',`${Math.round(y)}px`);
 };
 const save=()=>{
  try{localStorage.setItem(storageKey,JSON.stringify({x,y}))}catch{}
 };
 const reset=()=>{
  const rect=size();
  x=window.innerWidth-rect.width-24;
  y=window.innerHeight-rect.height-24;
  apply();
  save();
 };

 try{
  const stored=JSON.parse(localStorage.getItem(storageKey));
  if(Number.isFinite(stored?.x)&&Number.isFinite(stored?.y)){x=stored.x;y=stored.y}else{reset()}
 }catch{reset()}
 requestAnimationFrame(apply);

 octopus.addEventListener('pointerdown',event=>{
  if(event.pointerType==='mouse'&&event.button!==0)return;
  const rect=octopus.getBoundingClientRect();
  drag={pointerId:event.pointerId,dx:event.clientX-rect.left,dy:event.clientY-rect.top};
  octopus.setPointerCapture(event.pointerId);
  octopus.classList.add('is-dragging');
  event.preventDefault();
 });
 octopus.addEventListener('pointermove',event=>{
  if(!drag||drag.pointerId!==event.pointerId)return;
  x=event.clientX-drag.dx;
  y=event.clientY-drag.dy;
  apply();
 });
 const finish=event=>{
  if(!drag||drag.pointerId!==event.pointerId)return;
  drag=null;
  octopus.classList.remove('is-dragging');
  save();
 };
 octopus.addEventListener('pointerup',finish);
 octopus.addEventListener('pointercancel',finish);
 octopus.addEventListener('dblclick',reset);
 octopus.addEventListener('keydown',event=>{
  const step=event.shiftKey?36:12;
  const moves={ArrowLeft:[-step,0],ArrowRight:[step,0],ArrowUp:[0,-step],ArrowDown:[0,step]};
  if(!moves[event.key])return;
  x+=moves[event.key][0];
  y+=moves[event.key][1];
  apply();
  save();
  event.preventDefault();
 });
 window.addEventListener('resize',()=>{apply();save()});

 if(dialog){
  new MutationObserver(()=>{
   const parent=dialog.open?dialog:document.body;
   if(octopus.parentElement!==parent)parent.append(octopus);
   requestAnimationFrame(apply);
  }).observe(dialog,{attributes:true,attributeFilter:['open']});
 }
})();
