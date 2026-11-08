const projects=window.portfolioProjects;
const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const dialog=document.querySelector('#case-dialog');let opener;
document.querySelector('#projects').innerHTML=projects.map((p,index)=>`<article class="project-card"><button class="project-button" data-project="${index}" aria-label="${esc(p.title)} 프로젝트 보기"><div class="project-visual"><img src="${esc(p.image)}" alt="${esc(p.imageAlt)}" ${index?'loading="lazy"':'fetchpriority="high"'} width="1536" height="1024">${p.sample?'<span class="sample-label">AI 샘플 이미지</span>':''}</div></button></article>`).join('');
document.querySelector('.template-note').textContent='네 프로젝트 모두 아카데미에서 진행한 작업이며, 실제 제작 이미지와 작업 과정을 바탕으로 구성했습니다.';
function openProject(index,trigger){const p=projects[index];opener=trigger;document.querySelector('#case-content').innerHTML=window.renderProjectCase(p);dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');}
document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>openProject(Number(b.dataset.project),b)));
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');opener?.focus()});
