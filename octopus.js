(()=>{
 const octopus=document.querySelector('#floating-octopus');
 const dialog=document.querySelector('#case-dialog');
 const heroCopy=document.querySelector('.main-copy');
 if(!octopus)return;

 const edge=8;
 const flingBoost=1.7;
 const maxSpeed=1500;
 const minSpeed=115;
 const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
 let x=0;
 let y=0;
 let vx=135;
 let vy=96;
 let drag=null;
 let lastFrame=performance.now();

 const measure=()=>octopus.getBoundingClientRect();
 const clamp=(value,min,max)=>Math.min(Math.max(value,min),Math.max(min,max));
 const limits=()=>{
  const rect=measure();
  return {maxX:Math.max(edge,window.innerWidth-rect.width-edge),maxY:Math.max(edge,window.innerHeight-rect.height-edge)};
 };
 const render=()=>{
  octopus.style.setProperty('--octopus-x',`${Math.round(x)}px`);
  octopus.style.setProperty('--octopus-y',`${Math.round(y)}px`);
 };
 const keepInside=()=>{
  const {maxX,maxY}=limits();
  x=clamp(x,edge,maxX);
  y=clamp(y,edge,maxY);
 };
 const bounce=()=>{
  const {maxX,maxY}=limits();
  if(x<=edge){x=edge;vx=Math.abs(vx)}
  else if(x>=maxX){x=maxX;vx=-Math.abs(vx)}
  if(y<=edge){y=edge;vy=Math.abs(vy)}
  else if(y>=maxY){y=maxY;vy=-Math.abs(vy)}
 };
 const placeAboveHero=()=>{
  const rect=measure();
  const heroRect=heroCopy?.getBoundingClientRect();
  if(heroRect){
   x=heroRect.right-rect.width-28;
   y=heroRect.top-rect.height-14;
  }else{
   x=window.innerWidth-rect.width-24;
   y=24;
  }
  keepInside();
  vx=135;
  vy=96;
  render();
 };
 const capSpeed=value=>clamp(value,-maxSpeed,maxSpeed);
 const ensureMotion=(fallbackX=135,fallbackY=96)=>{
  const speed=Math.hypot(vx,vy);
  if(speed>=minSpeed)return;
  if(speed<1){vx=fallbackX;vy=fallbackY;return}
  const scale=minSpeed/speed;
  vx*=scale;
  vy*=scale;
 };
 const animate=now=>{
  const dt=Math.min(Math.max((now-lastFrame)/1000,0),.04);
  lastFrame=now;
  if(!drag&&!reducedMotion.matches){
   x+=vx*dt;
   y+=vy*dt;
   bounce();
   render();
  }
  requestAnimationFrame(animate);
 };

 requestAnimationFrame(()=>{
  placeAboveHero();
  lastFrame=performance.now();
  requestAnimationFrame(animate);
 });

 octopus.addEventListener('pointerdown',event=>{
  if(event.pointerType==='mouse'&&event.button!==0)return;
  const rect=octopus.getBoundingClientRect();
  drag={
   pointerId:event.pointerId,
   dx:event.clientX-rect.left,
   dy:event.clientY-rect.top,
   lastX:x,
   lastY:y,
   lastTime:performance.now(),
   velocityX:0,
   velocityY:0,
   inheritedX:vx,
   inheritedY:vy,
   moved:false
  };
  vx=0;
  vy=0;
  octopus.setPointerCapture(event.pointerId);
  octopus.classList.add('is-dragging');
  event.preventDefault();
 });
 octopus.addEventListener('pointermove',event=>{
  if(!drag||drag.pointerId!==event.pointerId)return;
  const now=performance.now();
  const nextX=event.clientX-drag.dx;
  const nextY=event.clientY-drag.dy;
  const dt=Math.max((now-drag.lastTime)/1000,.008);
  const instantX=(nextX-drag.lastX)/dt;
  const instantY=(nextY-drag.lastY)/dt;
  drag.velocityX=drag.velocityX*.35+instantX*.65;
  drag.velocityY=drag.velocityY*.35+instantY*.65;
  drag.lastX=nextX;
  drag.lastY=nextY;
  drag.lastTime=now;
  drag.moved=drag.moved||Math.hypot(nextX-x,nextY-y)>2;
  x=nextX;
  y=nextY;
  keepInside();
  render();
 });
 const finish=event=>{
  if(!drag||drag.pointerId!==event.pointerId)return;
  if(drag.moved){
   vx=capSpeed(drag.velocityX*flingBoost);
   vy=capSpeed(drag.velocityY*flingBoost);
   ensureMotion(drag.inheritedX,drag.inheritedY);
  }else{
   vx=drag.inheritedX;
   vy=drag.inheritedY;
  }
  drag=null;
  octopus.classList.remove('is-dragging');
  lastFrame=performance.now();
 };
 octopus.addEventListener('pointerup',finish);
 octopus.addEventListener('pointercancel',finish);
 octopus.addEventListener('dblclick',()=>{
  placeAboveHero();
  lastFrame=performance.now();
 });
 octopus.addEventListener('keydown',event=>{
  const step=event.shiftKey?48:18;
  const moves={ArrowLeft:[-step,0],ArrowRight:[step,0],ArrowUp:[0,-step],ArrowDown:[0,step]};
  if(!moves[event.key])return;
  x+=moves[event.key][0];
  y+=moves[event.key][1];
  vx=moves[event.key][0]*9||vx;
  vy=moves[event.key][1]*9||vy;
  keepInside();
  render();
  event.preventDefault();
 });
 window.addEventListener('resize',()=>{keepInside();render()});

 if(dialog){
  new MutationObserver(()=>{
   const parent=dialog.open?dialog:document.body;
   if(octopus.parentElement!==parent)parent.append(octopus);
   requestAnimationFrame(()=>{keepInside();render()});
  }).observe(dialog,{attributes:true,attributeFilter:['open']});
 }
})();
