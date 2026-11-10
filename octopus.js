(()=>{
 const octopus=document.querySelector('#floating-octopus');
 const homeSurface=document.querySelector('#home .section-content');
 const heroCopy=document.querySelector('.main-copy');
 if(!octopus||!homeSurface)return;

 const edge=22;
 const gravity=430;
 const airDrag=.996;
 const groundDrag=.86;
 const restitution=.48;
 const flingBoost=1.35;
 const maxSpeed=1400;
 const maxSpin=620;
 let x=0;
 let y=0;
 let vx=0;
 let vy=0;
 let angle=0;
 let spin=0;
 let active=false;
 let roaming=false;
 let drag=null;
 let lastFrame=performance.now();

 const measure=()=>({width:octopus.offsetWidth,height:octopus.offsetHeight});
 const clamp=(value,min,max)=>Math.min(Math.max(value,min),Math.max(min,max));
 const limits=()=>{
  const rect=measure();
  return {rect,maxX:Math.max(edge,homeSurface.clientWidth-rect.width-edge),maxY:Math.max(edge,homeSurface.clientHeight-rect.height-edge)};
 };
 const render=()=>{
  octopus.style.setProperty('--octopus-x',`${Math.round(x)}px`);
  octopus.style.setProperty('--octopus-y',`${Math.round(y)}px`);
  octopus.style.setProperty('--octopus-angle',`${angle.toFixed(2)}deg`);
 };
 const keepInside=()=>{
  const {maxX,maxY}=limits();
  x=clamp(x,edge,maxX);
  y=clamp(y,edge,maxY);
 };
 const placeOnHero=()=>{
  const rect=measure();
  roaming=false;
  octopus.classList.add('is-docked');
  octopus.classList.remove('is-roaming');
  if(heroCopy){
   if(octopus.parentElement!==heroCopy)heroCopy.append(octopus);
   x=Math.max(14,heroCopy.clientWidth-rect.width-64);
   y=-Math.round(rect.height*.5);
  }else{
   x=window.innerWidth-rect.width-24;
   y=24;
  }
  vx=0;
  vy=0;
  angle=0;
  spin=0;
  active=false;
  render();
 };
 const beginRoaming=()=>{
  if(roaming)return;
  const rect=octopus.getBoundingClientRect();
  const surfaceRect=homeSurface.getBoundingClientRect();
  x=rect.left-surfaceRect.left+homeSurface.scrollLeft;
  y=rect.top-surfaceRect.top+homeSurface.scrollTop;
  roaming=true;
  octopus.classList.remove('is-docked');
  octopus.classList.add('is-roaming');
  homeSurface.append(octopus);
  keepInside();
  render();
 };
 const cap=(value,max)=>clamp(value,-max,max);
 const animate=now=>{
  const dt=Math.min(Math.max((now-lastFrame)/1000,0),.04);
  lastFrame=now;
  if(!drag&&active){
   const dragFactor=Math.pow(airDrag,dt*60);
   vx*=dragFactor;
   vy=vy*dragFactor+gravity*dt;
   spin*=Math.pow(.985,dt*60);
   x+=vx*dt;
   y+=vy*dt;
   angle+=spin*dt;
   if(Math.abs(angle)>3600)angle%=360;

   const {rect,maxX,maxY}=limits();
   let grounded=false;
   if(x<=edge){
    x=edge;
    vx=Math.abs(vx)*restitution;
    spin*=-.72;
   }else if(x>=maxX){
    x=maxX;
    vx=-Math.abs(vx)*restitution;
    spin*=-.72;
   }
   if(y<=edge){
    y=edge;
    vy=Math.abs(vy)*restitution;
    spin*=.86;
   }else if(y>=maxY){
    y=maxY;
    if(vy>55){
     vy=-vy*restitution;
     vx*=.9;
     spin*=.82;
    }else{
     vy=0;
     grounded=true;
    }
   }

   if(grounded){
    vx*=Math.pow(groundDrag,dt*60);
    const rollingSpin=(vx/Math.max(rect.width*.5,1))*57.2958;
    spin=spin*.62+rollingSpin*.38;
    if(Math.abs(vx)<6&&Math.abs(spin)<8){
     vx=0;
     spin=0;
     active=false;
    }
   }
   render();
  }
  requestAnimationFrame(animate);
 };

 requestAnimationFrame(()=>{
  placeOnHero();
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
   startPointerX:event.clientX,
   startPointerY:event.clientY,
   lastPointerX:event.clientX,
   lastPointerY:event.clientY,
   lastTime:performance.now(),
   velocityX:0,
   velocityY:0,
   inheritedX:vx,
   inheritedY:vy,
   inheritedSpin:spin,
   inheritedActive:active,
   startedDocked:!roaming,
   moved:false
  };
  vx=0;
  vy=0;
  spin=0;
  active=false;
  octopus.setPointerCapture(event.pointerId);
  octopus.classList.add('is-dragging');
  event.preventDefault();
 });
 octopus.addEventListener('pointermove',event=>{
  if(!drag||drag.pointerId!==event.pointerId)return;
  const now=performance.now();
  const surfaceRect=homeSurface.getBoundingClientRect();
  const nextX=event.clientX-surfaceRect.left-drag.dx;
  const nextY=event.clientY-surfaceRect.top-drag.dy;
  const dt=Math.max((now-drag.lastTime)/1000,.008);
  const totalDistance=Math.hypot(event.clientX-drag.startPointerX,event.clientY-drag.startPointerY);
  if(drag.startedDocked&&!roaming){
   if(totalDistance<=3)return;
   beginRoaming();
  }
  const instantX=(event.clientX-drag.lastPointerX)/dt;
  const instantY=(event.clientY-drag.lastPointerY)/dt;
  drag.velocityX=drag.velocityX*.3+instantX*.7;
  drag.velocityY=drag.velocityY*.3+instantY*.7;
  drag.lastPointerX=event.clientX;
  drag.lastPointerY=event.clientY;
  drag.lastTime=now;
  drag.moved=drag.moved||totalDistance>3;
  angle+=(nextX-x)*.32;
  x=nextX;
  y=nextY;
  keepInside();
  render();
 });
 const finish=event=>{
  if(!drag||drag.pointerId!==event.pointerId)return;
  if(drag.moved){
   vx=cap(drag.velocityX*flingBoost,maxSpeed);
   vy=cap(drag.velocityY*flingBoost,maxSpeed);
   spin=cap(drag.velocityX*.28+drag.velocityY*.08,maxSpin);
   active=true;
  }else{
   vx=drag.inheritedX;
   vy=drag.inheritedY;
   spin=drag.inheritedSpin;
   active=drag.inheritedActive;
  }
  drag=null;
  octopus.classList.remove('is-dragging');
  lastFrame=performance.now();
 };
 octopus.addEventListener('pointerup',finish);
 octopus.addEventListener('pointercancel',finish);
 window.addEventListener('pointerup',finish);
 window.addEventListener('pointercancel',finish);
 octopus.addEventListener('dblclick',()=>{
  placeOnHero();
  lastFrame=performance.now();
 });
 octopus.addEventListener('keydown',event=>{
  const step=event.shiftKey?48:18;
  const moves={ArrowLeft:[-step,0],ArrowRight:[step,0],ArrowUp:[0,-step],ArrowDown:[0,step]};
  if(!moves[event.key])return;
  beginRoaming();
  x+=moves[event.key][0];
  y+=moves[event.key][1];
  vx=moves[event.key][0]*8;
  vy=moves[event.key][1]*8;
  spin=cap(vx*.3,maxSpin);
  active=true;
  keepInside();
  render();
  event.preventDefault();
 });
 window.addEventListener('resize',()=>{
  if(roaming){keepInside();render()}
  else placeOnHero();
 });

})();
