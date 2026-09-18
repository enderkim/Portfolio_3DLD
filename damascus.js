/* Hand-plotted pixel contours. No photograph, WebGL, filters or per-frame noise. */
(() => {
 const canvas=document.querySelector('.damascus-texture');
 const toggle=document.querySelector('.motion-toggle');
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 const context=canvas.getContext('2d',{alpha:false});
 if(!context){toggle.hidden=true;return}
 const tile=document.createElement('canvas');tile.width=tile.height=256;
 const paint=tile.getContext('2d',{alpha:false});
 const pixels=paint.createImageData(256,256);
 const palette=[[17,21,24],[22,28,32],[28,35,40],[35,43,49],[44,54,61],[53,64,71]];
 const tau=Math.PI*2;
 for(let y=0;y<256;y++)for(let x=0;x<256;x++){
  const u=x/256*tau,v=y/256*tau;
  const warp=1.8*Math.sin(u+v)+.8*Math.sin(2*u-v)+.5*Math.cos(u-2*v);
  const band=(Math.sin(7*u+5*v+warp*3)+1)/2;
  const shade=Math.min(5,Math.floor(Math.pow(band,7)*5.9));
  const rgb=palette[shade],i=(y*256+x)*4;
  pixels.data[i]=rgb[0];pixels.data[i+1]=rgb[1];pixels.data[i+2]=rgb[2];pixels.data[i+3]=255;
 }
 paint.putImageData(pixels,0,0);
 let paused=reduced.matches,frame=0,idle=0,resizeTimer=0,busy=false;
 let phase=0,paintedOffset=-1,dot=4,lastTime=null;
 function draw(){
  const offset=Math.floor(phase);
  for(let y=-offset;y<canvas.height;y+=256)for(let x=-offset;x<canvas.width;x+=256)context.drawImage(tile,x,y);
  paintedOffset=offset;
 }
 function blocked(){return paused||reduced.matches||document.hidden||busy||document.querySelector('dialog[open]')}
 function stop(){cancelAnimationFrame(frame);frame=0;lastTime=null}
 function step(now){
  frame=0;if(blocked()){lastTime=null;return}
  // Advance by elapsed time, never by frame count. Clamp a stalled frame so
  // resuming a busy or sleeping browser cannot jump the pattern forward.
  if(lastTime!==null)phase=(phase+Math.min(50,Math.max(0,now-lastTime))/320)%256;
  lastTime=now;
  if(Math.floor(phase)!==paintedOffset)draw();
  // Reuse the small pixel canvas; only its subpixel placement changes each frame.
  const shift=-((phase-Math.floor(phase))*dot);
  canvas.style.transform=`translate(${shift.toFixed(3)}px,${shift.toFixed(3)}px)`;
  schedule();
 }
 function schedule(){
  if(frame||blocked())return;
  frame=requestAnimationFrame(step);
 }
 function fit(){
  // One extra logical pixel covers the fractional shift, with no large overscan.
  dot=Math.max(4,Math.ceil(window.innerWidth/480),Math.ceil(window.innerHeight/300));
  canvas.width=Math.ceil(window.innerWidth/dot)+1;canvas.height=Math.ceil(window.innerHeight/dot)+1;
  canvas.style.width=canvas.width*dot+'px';canvas.style.height=canvas.height*dot+'px';
  context.imageSmoothingEnabled=false;draw();
  const shift=-((phase-Math.floor(phase))*dot);
  canvas.style.transform=`translate(${shift.toFixed(3)}px,${shift.toFixed(3)}px)`;
 }
 function sync(){
  stop();const stopped=paused||reduced.matches;
  toggle.setAttribute('aria-pressed',String(stopped));
  toggle.setAttribute('aria-label',stopped?'배경 모션 켜기':'배경 모션 일시정지');
  toggle.title=stopped?'배경 모션 켜기':'배경 모션 일시정지';
  toggle.disabled=reduced.matches;
  if(reduced.matches){toggle.setAttribute('aria-label','기기 설정에 따라 배경 모션 꺼짐');toggle.title='기기 설정에 따라 배경 모션 꺼짐'}
  schedule();
 }
 function rest(){busy=true;stop();clearTimeout(idle);idle=setTimeout(()=>{busy=false;schedule()},220)}
 toggle.addEventListener('click',()=>{paused=!paused;sync()});
 reduced.addEventListener('change',()=>{paused=reduced.matches;sync()});
 document.addEventListener('visibilitychange',sync);
 document.addEventListener('scroll',rest,{passive:true,capture:true});
 window.addEventListener('wheel',rest,{passive:true});
 window.addEventListener('touchmove',rest,{passive:true});
 window.addEventListener('resize',()=>{rest();clearTimeout(resizeTimer);resizeTimer=setTimeout(fit,120)},{passive:true});
 const dialog=document.querySelector('dialog');
 if(dialog)new MutationObserver(sync).observe(dialog,{attributes:true,attributeFilter:['open']});
 window.addEventListener('pagehide',()=>{stop();clearTimeout(idle);clearTimeout(resizeTimer)});
 window.addEventListener('pageshow',sync);
 fit();sync();
})();
