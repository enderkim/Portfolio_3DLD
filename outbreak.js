/* One shared case-study layout for all four portfolio projects. */
window.projectCaseStudies={
 '01':{
  claim:'소음이 바꾸는 전장',
  goalTitle:'교전 이후의 이동까지 설계',
  goal:'자원 회수부터 탈출까지, 소음으로 변하는 위협 속에서 다음 경로를 선택하게 합니다.',
  scope:'전장은 2개 구역으로 설계했으며, 프로젝트에서 실제 플레이 가능하도록 구현한 범위는 그중 1개 구역입니다. 항공모함 ‘파라다이스’는 로비이자 작전 거점으로 존재하지만, 제 담당 범위에는 포함되지 않습니다.',
  process:[['Map Planning','전체 맵 설계','전체 섬의 전장 구조와 주요 구역 관계를 설계','assets/outbreak-full-map.png','OutBreak 전체 섬과 전장 구역을 보여주는 맵 설계도','전체 맵에서 플레이 구현 구역의 위치와 주변 구역의 관계를 먼저 보여줍니다.','ob-map-plan'],['Blockout','동선 · 스케일','두 전장 구역의 구조 설계'],['Iteration','이동 QA · 수정','플레이 구현 구역의 이동과 연결 구간 확인'],['Final','폴리싱 · 최적화','플레이 구현 구역의 프랍·라이팅 정리']],
  breakdownTitle:'Level Design Breakdown',breakdownSub:'플레이 경험과 설계 판단을 증명하는 세 가지 장면',
  breakdown:[
   ['PLAYER FLOW','소음이 경로를 바꾼다','플레이 가능 구역 확대','플레이 범위는 마트에서 중앙 아파트 단지를 지나 우측 중앙 바리케이드까지입니다. 상단 주택가는 포함하고 좌측 빌딩 구역은 제외합니다.','assets/outbreak-map-planning.png','전체 맵의 상단 플레이 가능 구역을 확대해 보여주는 설계 이미지','전체 맵에서 선택한 한 구역을 실제 플레이 가능한 맵으로 확대했습니다.','ob-map-detail'],
   ['SIGHTLINE & ENCOUNTER','실외에서 실내로','출입구·층간 이동·건물 연결 구간','시야, 출입구, 우회 경로가 교전과 탐색을 어떻게 만드는지 보여줍니다.'],
   ['QA & OPTIMIZATION','플레이 흐름을 지키는 폴리싱','플레이 구현 구역의 이동 QA와 프랍 정리 전후','실제 플레이 가능한 구역에서 이동을 검증하고 프랍·라이팅·그래픽 부하를 정리한 근거를 보여줍니다.']
  ],
  evidence:['플레이어 소음','좀비 이동 · 밀집도 변화','이동 경로 재선택'],
  before:['관찰한 이동·시야 문제 입력','변경한 배치와 이유 입력','재테스트 결과 입력'],
  final:['전장 전체 전경','전장 디테일','실내 · 프랍 · 라이팅'],
  guide:'탑뷰에는 시작·목표·선택 경로·POI를 표시하고, Before / After에는 같은 시점과 실제 플레이테스트 근거를 사용하세요.'
 },
 '02':{
  claim:'게임 엔진으로 완성한 영상의 흐름',
  goalTitle:'[영상이 전달할 감정과 장면의 목표]',
  goal:'[영상의 주제, 관객에게 보여주고 싶은 경험, 실시간 엔진을 선택한 이유를 1–2문장으로 입력]',
  scope:'[직접 담당한 카메라·시퀀서·애니메이션·라이팅·편집 범위를 명확히 구분]',
  process:[['Reference','무드 · 스토리보드','톤과 장면 전개의 기준'],['Layout','장면 · 카메라','공간과 카메라 동선 배치'],['Iteration','타이밍 · 연출','컷 길이와 시선 흐름 수정'],['Final','렌더 · 편집','최종 출력과 후반 작업']],
  breakdownTitle:'Cinematic Breakdown',breakdownSub:'완성 영상 뒤에 연출 판단과 엔진 작업을 증명',
  breakdown:[
   ['CAMERA & TIMING','카메라가 정보를 전달하는 순서','스토리보드·카메라 패스·컷 타이밍','[왜 이 구도와 카메라 이동을 선택했는지 설명]'],
   ['SEQUENCER & ANIMATION','엔진 안에서 만든 움직임','시퀀서 트랙과 애니메이션 구성','[직접 구성한 트랙, 애니메이션, 이벤트 범위를 표시]'],
   ['LIGHTING & RENDER','최종 분위기와 출력','라이팅·렌더 설정·후반 작업','[실시간 화면과 최종 결과의 차이, 성능 또는 출력 조건 설명]']
  ],
  evidence:['Story Beat','Camera & Timing','Final Sequence'],
  before:['초기 카메라 또는 타이밍 문제 입력','변경한 구도와 연출 이유 입력','최종 영상에서 개선된 점 입력'],
  final:['최종 영상 · 대표 시퀀스','카메라 연출 디테일','라이팅 · 렌더 디테일'],
  guide:'첫 화면에는 20–40초 핵심 영상이나 가장 강한 프레임을 두고, 스토리보드 → 시퀀서 → 라이팅 → 최종 순서로 직접 한 일을 증명하세요.'
 },
 '03':{
  claim:'외부 공간의 스케일과 분위기',
  goalTitle:'[익스테리어에서 증명할 핵심 능력]',
  goal:'[공간의 배경, 시각 목표, 제작 제약과 이번 프로젝트에서 집중한 능력을 1–2문장으로 입력]',
  scope:'[직접 제작한 모듈·에셋·재질·식생·라이팅과 외부 에셋을 구분]',
  process:[['Reference','형태 · 분위기','건축·지형·자연환경 레퍼런스'],['Blockout','스케일 · 실루엣','큰 형태와 구도 검증'],['Iteration','모듈 · 재질','반복을 줄이고 변주 추가'],['Final','드레싱 · 라이팅','최종 분위기와 시선 정리']],
  breakdownTitle:'Environment Art Breakdown',breakdownSub:'최종 퀄리티를 만든 제작 파이프라인의 근거',
  breakdown:[
   ['MODULAR KIT','반복 가능한 건축 구조','모듈 규격·조합·와이어프레임','[어떤 규칙으로 모듈을 나누고 재사용했는지 설명]'],
   ['MATERIALS','표면의 정보와 변주','재질 그래프·텍스처·버텍스 페인트','[주요 재질과 반복감을 줄인 방법 설명]'],
   ['SET DRESSING & LIGHTING','시선과 이야기의 완성','프랍·식생·라이팅·최적화','[구도와 환경 스토리텔링을 강화한 선택 설명]']
  ],
  evidence:['Modular Kit','Material Variation','Final Composition'],
  before:['초기 실루엣·스케일 문제 입력','수정한 형태·재질·배치 입력','최종 구도에서 개선된 점 입력'],
  final:['익스테리어 전체 전경','모듈 · 재질 디테일','드레싱 · 라이팅 디테일'],
  guide:'최종 스틸을 먼저 보여주고, 모듈 키트·재질·세트 드레싱이 결과를 어떻게 만들었는지 와이어프레임과 근접 화면으로 증명하세요.'
 },
 '04':{
  claim:'대비되는 두 취향을 하나의 공간으로',
  goalTitle:'Room 1의 취향과 생활감 구현',
  goal:'무채색 가구와 체크 패턴, 영상·음악 소품으로 Room 1의 성격을 만들고 따뜻한 Room 2와 중앙 오브제로 연결했습니다.',
  scope:'Room 1 제작 전반, 중앙 오브제 최적화·재질·라이팅, 두 방 통합과 최종 리터치, Room 2 영상 Blueprint를 담당했습니다.',
  process:[['Reference','취향 · 대비','두 방의 색과 재료 방향 설정'],['Layout','기능 · 비례','휴식·작업 영역과 가구 배치'],['Craft','프랍 · 재질','직접 제작한 오브젝트와 표면 구성'],['Integration','라이팅 · 기능','공간 통합과 영상 Blueprint']],
  breakdownTitle:'Environment Art Breakdown',breakdownSub:'공간 기능과 완성도를 만든 세 가지 제작 근거',
  breakdown:[
   ['SPACE PLANNING','휴식과 작업 영역을 함께 읽히게','초기 배치·최종 배치·생활 소품','주요 가구 관계를 유지하면서 벽면과 생활 소품의 밀도를 조정했습니다.'],
   ['PROPS & MATERIALS','직접 제작한 핵심 오브젝트','프로젝터·빈백·카펫·턴테이블','형태 제작, UV, 재질과 엔진 배치까지 연결했습니다.'],
   ['LIGHTING & IMPLEMENTATION','빛과 기능으로 공간을 완성','Light Function·영상 머티리얼·Blueprint','중앙 오브제의 투영광과 영상 재생 기능을 최종 장면에 연결했습니다.']
  ],
  evidence:['Room 1 Layout','Props & Materials','Scene Integration'],
  before:['초기 가구 배치와 기본 재질','생활 소품·표면·빛의 밀도 조정','Room 1과 통합 공간의 최종 결과'],
  final:['Room 1 전체 전경','작업 공간 디테일','두 방의 통합 장면'],
  guide:'개인 담당 Room 1을 중심에 두고, Room 2는 영상 Blueprint와 협업 결과를 설명하는 범위에서만 사용합니다.'
 }
};

window.renderCaseTemplateFacts=function({role,tools,team,output}){
 const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 return `<div class="ob-facts" aria-label="프로젝트 핵심 정보"><p><span>ROLE</span>${safe(role)}</p><p><span>TOOLS</span>${safe(tools)}</p><p class="ob-team-fact"><span>TEAM</span>${safe(team)}</p><p><span>PERIOD / OUTPUT</span>${safe(output)}</p></div><nav class="ob-template-path" aria-label="공통 프로젝트 구성"><span>01 OVERVIEW</span><span>02 PLANNING</span><span>03 ITERATION</span><span>04 BREAKDOWN</span><span>05 IMPLEMENTATION</span><span>06 FINAL</span></nav>`;
};

window.renderOutbreakCase=function(p){
 const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const slot=(tag,title,note)=>`<figure class="ob-image-slot ob-proof-slot" role="img" aria-label="${safe(title)} 이미지 삽입 영역"><span class="ob-slot-tag">${safe(tag)}</span><div><strong>${safe(title)}</strong><span>${safe(note)}</span></div><span class="ob-slot-foot">실제 작업 화면으로 교체</span></figure>`;
 return `<article class="ob-case ob-case-outbreak">
  <header class="ob-hero ob-hero-outbreak">
   <div class="ob-heading"><p class="case-kicker">PROJECT 01 / LEVEL DESIGN PORTFOLIO</p><h2 id="case-title">OUTBREAK</h2><p>Level Design · Environment Design · Unreal Engine 5</p></div>
   <figure class="ob-media ob-hero-media ob-hero-map"><img src="assets/outbreak-04-final-player.jpg" alt="폐허가 된 도심 도로를 통과하는 OutBreak 최종 플레이 화면" width="2560" height="1440"><figcaption>FINAL GAMEPLAY · 플레이어 시야에서 읽히는 이동 축과 도시 랜드마크</figcaption></figure>
   <div class="ob-hero-summary"><p>3인 스쿼드 익스트랙션 서바이벌 × 좀비 PvPvE</p><strong>소음이 좀비의 이동과 밀집도를 바꾸는 전장을 설계했습니다.</strong></div>
   ${window.renderCaseTemplateFacts({role:'Level Design · Direction · Optimization · UI',tools:'Unreal Engine 5',team:'3인 팀 프로젝트',output:'Playable PvPvE Map · 기간 자료 추가 예정'})}
  </header>

  <section class="ob-section ob-goal-scope" aria-label="Goal and Role">
   <header class="ob-section-head"><div><span class="ob-index">01</span><h3>Overview + Contribution</h3></div><p>목표와 개인·팀 작업 범위</p></header>
   <div class="ob-design-goals">
    <article><span>01</span><h4>Exploration</h4><p>마트·주택가·아파트로 이어지는 플레이 구역을 탐색합니다.</p></article>
    <article><span>02</span><h4>Risk &amp; Reward</h4><p>제한 시간 안에 자원을 확보하고 탈출해야 전리품을 확정합니다.</p></article>
    <article><span>03</span><h4>PvPvE Encounter</h4><p>총성과 행동 소음이 좀비와 다른 스쿼드의 압박을 함께 키웁니다.</p></article>
   </div>
   <div class="ob-scope-grid">
    <div><p class="ob-eyebrow">MY ROLE</p><h4>World Layout · Blockout · Player Flow</h4><p>POI · Encounter · Sightline · Extraction Route · 이동 QA · 그래픽 최적화 · UI</p><p class="ob-scope-note">전장 2개 구역을 설계하고, 그중 1개 구역을 실제 플레이 가능한 공간으로 구현했습니다. Environment 작업은 레벨 설계를 실제 공간으로 구현하는 보조 역량으로 다룹니다.</p></div>
    <div><p class="ob-eyebrow">TEAM SCOPE</p><h4>시스템과 플레이 공간의 연결</h4><p>매치 흐름, 플레이어 전투, 아이템, 좀비 AI는 팀 작업입니다.</p><p class="ob-scope-note">항공모함 ‘파라다이스’는 로비이자 작전 거점으로 존재하지만 제 담당 범위에는 포함되지 않습니다.</p></div>
   </div>
  </section>

  <section class="ob-section" aria-label="Design Goals and World Map">
   <header class="ob-section-head"><div><span class="ob-index">02</span><h3>Planning + World Map</h3></div><p>전체 구조 → 플레이 구현 구역</p></header>
   <div class="ob-map-stage">
    <img src="assets/outbreak-full-map.png" alt="OutBreak 전체 섬과 플레이 구현 구역" width="2000" height="2000" loading="lazy">
    <div class="ob-playable-zone"><span>PLAYABLE AREA</span></div>
    <span class="ob-map-pin pin-mart">MART</span><span class="ob-map-pin pin-house">HOUSING</span><span class="ob-map-pin pin-apartment">APARTMENT</span><span class="ob-map-pin pin-barricade">BARRICADE</span>
   </div>
   <div class="ob-map-legend"><p><span></span>플레이 구현 범위</p><p>마트 → 상단 주택가 → 중앙 아파트 → 우측 중앙 바리케이드</p><p>좌측 빌딩 구역 제외</p></div>
  </section>

  <section class="ob-section" aria-label="Reference to Blockout">
   <header class="ob-section-head"><div><span class="ob-index">02B</span><h3>Planning + Blockout</h3></div><p>에셋보다 플레이 경험을 먼저 설계</p></header>
   <div class="ob-plan-blockout">
    <article><figure class="ob-media"><img src="assets/outbreak-map-planning.png" alt="전체 맵과 확대된 플레이 구역을 함께 보여주는 맵 설계 자료" width="1600" height="1600" loading="lazy"><figcaption>MAP PLAN · 전체 맵에서 구현 범위를 먼저 정의</figcaption></figure></article>
    <article><figure class="ob-media ob-blockout-evidence"><img src="assets/outbreak-01-blockout-overview.jpg" alt="건물 매스와 도로 구조가 보이는 OutBreak 블록아웃 전경" width="2560" height="1440" loading="lazy"><figcaption>BLOCKOUT · 건물 매스, 도로 연결, 고저차를 먼저 검증</figcaption></figure></article>
   </div>
   <p class="ob-section-note">전체 섬을 그대로 제작하지 않고, 마트부터 바리케이드까지의 한 구역을 선택해 플레이 가능한 전장으로 구체화했습니다.</p>
  </section>

  <section class="ob-section ob-iteration" aria-label="Iteration">
   <header class="ob-section-head"><div><span class="ob-index">04</span><h3>Iteration</h3></div><p>V1 → Problem → Change → V2 / Result</p></header>
   <div class="ob-iteration-media"><div><h4>V1 / Blockout</h4><figure class="ob-media ob-compare-asset"><img src="assets/outbreak-03-blockout-player.jpg" alt="플레이어 높이에서 촬영한 OutBreak 블록아웃 거리" width="2560" height="1440" loading="lazy"><figcaption>건물 매스와 도로 폭을 플레이어 시점에서 확인</figcaption></figure></div><div><h4>V2 / Result</h4><figure class="ob-media ob-compare-asset"><img src="assets/outbreak-04-final-player.jpg" alt="환경 에셋과 프랍이 적용된 OutBreak 최종 거리" width="2560" height="1440" loading="lazy"><figcaption>환경 에셋과 프랍을 적용한 최종 플레이 공간</figcaption></figure></div></div>
   <div class="ob-iteration-steps"><article><span>V1</span><p>플레이어 높이에서 블록아웃 확인</p></article><article><span>PROBLEM</span><p>전방 동선, 건물 사이 시야, 공간 스케일을 점검</p></article><article><span>CHANGE</span><p>구조를 유지하며 환경 에셋과 이동 공간을 구체화</p></article><article><span>V2 / RESULT</span><p>최종 공간에서 이동 축과 랜드마크 가독성을 확인</p></article></div>
   <p class="ob-evidence-note">실제 블록아웃과 최종 플레이 화면으로 공간이 구현된 과정을 비교합니다.</p>
  </section>

  <section class="ob-section" aria-label="Level Design Breakdown">
   <header class="ob-section-head"><div><span class="ob-index">04</span><h3>Core Breakdown</h3></div><p>Level Design · Intent → Evidence → Result</p></header>
   <div class="ob-ld-breakdown">
    <article><div class="ob-break-intent"><p class="ob-eyebrow">PLAYER FLOW</p><h4>한 구역을 플레이 가능한 밀도로 확장</h4><p>마트·주택가·중앙 아파트·바리케이드를 하나의 구현 범위로 묶었습니다.</p></div><figure class="ob-media ob-map-detail ob-flow-map"><img src="assets/outbreak-05-topdown.jpg" alt="도로와 건물 배치를 수직으로 보여주는 OutBreak 플레이 구역 탑다운" width="2560" height="1440" loading="lazy"><figcaption>RESULT · 도로와 POI가 연결된 실제 플레이 구역</figcaption></figure></article>
    <article><div class="ob-break-intent"><p class="ob-eyebrow">PVE PRESSURE</p><h4>소음이 위협 지형을 바꾼다</h4><p>행동 소음이 쌓일수록 좀비 유도 강도가 높아지고, 이동과 밀집도가 달라집니다.</p></div><div class="ob-noise-diagram"><span>PLAYER ACTION</span><b>→</b><span>NOISE LEVEL</span><b>→</b><span>ZOMBIE MOVEMENT</span><b>→</b><span>ROUTE DECISION</span></div><p class="ob-result-line"><span>RESULT</span>교전 이후에도 다음 이동 경로를 다시 판단하게 만드는 PvE 압박</p></article>
    <article><div class="ob-break-intent"><p class="ob-eyebrow">RISK &amp; REWARD · EXTRACTION</p><h4>자원 회수보다 탈출이 목표</h4><p>30분 내 자원을 확보하고 탈출해야 전리품이 확정됩니다. 세션 시작 후 8분 동안은 개인 조기 탈출구를 이용할 수 있습니다.</p></div><div class="ob-extraction-flow"><span>INFILTRATE</span><i></i><span>LOOT</span><i></i><span>RISK</span><i></i><span>EXTRACT</span></div><p class="ob-result-line"><span>RESULT</span>교전 수가 아니라 생존과 탈출을 중심으로 한 목표 구조</p></article>
   </div>
  </section>

  <section class="ob-section" aria-label="Environment and Before After">
   <header class="ob-section-head"><div><span class="ob-index">05A</span><h3>Environment Implementation</h3></div><p>Blockout → Environment → Final</p></header>
   <div class="ob-env-compare">
    <div class="ob-env-row"><article><h4>Blockout Overview</h4><figure class="ob-media ob-compare-asset"><img src="assets/outbreak-01-blockout-overview.jpg" alt="OutBreak 블록아웃 전체 전경" width="2560" height="1440" loading="lazy"></figure></article><article><h4>Final Overview</h4><figure class="ob-media ob-compare-asset"><img src="assets/outbreak-02-final-overview.jpg" alt="OutBreak 최종 환경 전체 전경" width="2560" height="1440" loading="lazy"></figure></article></div>
    <div class="ob-env-row"><article><h4>Blockout Player View</h4><figure class="ob-media ob-compare-asset"><img src="assets/outbreak-03-blockout-player.jpg" alt="OutBreak 블록아웃 플레이어 시점" width="2560" height="1440" loading="lazy"></figure></article><article><h4>Final Player View</h4><figure class="ob-media ob-compare-asset"><img src="assets/outbreak-04-final-player.jpg" alt="OutBreak 최종 플레이어 시점" width="2560" height="1440" loading="lazy"></figure></article></div>
   </div>
   <p class="ob-section-note">Environment 작업은 최종 비주얼 자체보다, 설계한 동선과 시야를 실제 플레이 공간으로 구현한 근거로 보여줍니다.</p>
  </section>

  <section class="ob-section ob-optimization" aria-label="Technical Optimization">
   <header class="ob-section-head"><div><span class="ob-index">05B</span><h3>Technical Implementation</h3></div><p>Optimization · Problem → Change → Result</p></header>
   <div class="ob-opt-intro"><div><p class="ob-eyebrow">FOLIAGE SHADER &amp; WIND</p><h4>플레이 공간의 밀도를 유지하며 렌더링 비용을 줄였습니다.</h4></div><p>Masked·Two Sided 잎 카드의 중첩과 복합 Wind/WPO를 분리해 확인하고, 외형 손상이 적은 경량 바람으로 교체했습니다.</p></div>
   <div class="ob-opt-compare">
    <figure class="ob-media"><span>BEFORE</span><img src="assets/outbreak-15-shader-before.webp" alt="최적화 전 분홍색과 흰색 고비용 영역이 넓게 나타난 수목 Shader Complexity 화면" width="2560" height="1360" loading="lazy"><figcaption>복합 Wind/WPO와 잎 카드 중첩으로 수관 전반이 높은 비용 영역으로 표시</figcaption></figure>
    <figure class="ob-media"><span>AFTER</span><img src="assets/outbreak-16-shader-after.webp" alt="최적화 후 갈색과 녹색 영역으로 비용이 낮아진 수목 Shader Complexity 화면" width="2560" height="1360" loading="lazy"><figcaption>경량 바람 적용 후 고비용 분홍·흰색 영역을 줄여 변화 확인</figcaption></figure>
   </div>
   <div class="ob-opt-result" aria-label="Vertex Shader instruction result"><p><span>VERTEX SHADER INSTRUCTIONS</span><strong>236</strong><i>→</i><strong>184</strong></p><em>약 22% 감소</em></div>
   <div class="ob-opt-detail">
    <figure class="ob-media ob-opt-graph"><img src="assets/outbreak-17-simple-wind.png" alt="Time과 Sine 노드로 구성한 OutBreak 저비용 Foliage Wind WPO 머티리얼 그래프" width="1303" height="582" loading="lazy"><figcaption><strong>CHANGE</strong><span>Time → Sine → Amount로 구성한 저비용 WPO</span></figcaption></figure>
    <figure class="ob-media"><img src="assets/outbreak-18-quality.jpg" alt="최적화된 소나무와 가문비나무가 배치된 OutBreak 숲의 최종 Lit 화면" width="2560" height="1362" loading="lazy"><figcaption><strong>QUALITY CHECK</strong><span>잎의 실루엣과 투과 표현, 근거리 움직임을 유지</span></figcaption></figure>
   </div>
   <div class="ob-opt-notes"><p><span>ANALYSIS</span>Wetness와 SSS Mask를 각각 시험해 효과와 외형 손상을 분리했습니다.</p><p><span>DECISION</span>SSS는 유지하고, 실제 비용이 감소한 바람 연산만 단순화했습니다.</p><p><span>LIMIT</span>남은 근거리 비용은 잎 카드 중첩에서 발생하는 것으로 확인했습니다.</p></div>
  </section>

  <section class="ob-section" aria-label="Final">
   <header class="ob-section-head"><div><span class="ob-index">06</span><h3>Final Results</h3></div><p>Gameplay · POI · Exterior · Interior</p></header>
   <div class="ob-final-gallery">
    <figure class="ob-media ob-gallery-feature"><img src="assets/outbreak-07-factory-aerial.jpg" alt="배관과 설비, 수직 이동 구조가 보이는 OutBreak 공장 항공 전경" width="1740" height="979" loading="lazy"><figcaption><strong>FACTORY AERIAL</strong><span>설비와 수직 구조가 만든 공장 POI 전경</span></figcaption></figure>
    <div class="ob-gallery-pair"><figure class="ob-media"><img src="assets/outbreak-12-mart-exterior.jpg" alt="주차장과 입구가 보이는 OutBreak 마트 외부" width="2560" height="1440" loading="lazy"><figcaption><strong>MART EXTERIOR</strong><span>주차장을 거쳐 입구로 이어지는 외부 접근 공간</span></figcaption></figure><figure class="ob-media"><img src="assets/outbreak-06-barricade.jpg" alt="플레이 구역의 도로와 콘크리트 구조물이 보이는 OutBreak 바리케이드" width="1734" height="975" loading="lazy"><figcaption><strong>BARRICADE</strong><span>플레이 구역의 경계를 형성하는 도로 구조</span></figcaption></figure></div>
    <div class="ob-gallery-pair"><figure class="ob-media"><img src="assets/outbreak-13-mart-interior-01.jpg" alt="에스컬레이터와 중앙 홀이 보이는 OutBreak 마트 내부 첫 번째 장면" width="1920" height="1080" loading="lazy"><figcaption><strong>MART INTERIOR 01</strong><span>중앙 홀과 층간 이동 구조</span></figcaption></figure><figure class="ob-media"><img src="assets/outbreak-14-mart-interior-02.jpg" alt="상층 난간에서 중앙 홀을 내려다보는 OutBreak 마트 내부 두 번째 장면" width="1920" height="1080" loading="lazy"><figcaption><strong>MART INTERIOR 02</strong><span>상층 시야와 에스컬레이터 연결</span></figcaption></figure></div>
    <div class="ob-gallery-interiors"><figure class="ob-media"><img src="assets/outbreak-08-building-a-interior.jpg" alt="출입구와 책상 배치가 보이는 OutBreak 건물 A 내부" width="1920" height="1080" loading="lazy"><figcaption><strong>BUILDING A</strong><span>출입구와 내부 이동 공간</span></figcaption></figure><figure class="ob-media"><img src="assets/outbreak-09-building-b-interior-01.jpg" alt="좌석과 창가가 보이는 OutBreak 건물 B 내부 첫 번째 장면" width="1920" height="1080" loading="lazy"><figcaption><strong>BUILDING B · 01</strong><span>좌석 배치 사이의 탐색 공간</span></figcaption></figure><figure class="ob-media"><img src="assets/outbreak-10-building-b-interior-02.jpg" alt="진열대와 카운터가 보이는 OutBreak 건물 B 내부 두 번째 장면" width="1920" height="1080" loading="lazy"><figcaption><strong>BUILDING B · 02</strong><span>진열대와 카운터가 나누는 이동 공간</span></figcaption></figure><figure class="ob-media"><img src="assets/outbreak-11-building-c-interior.jpg" alt="계단과 유리 외벽이 보이는 OutBreak 건물 C 내부" width="2560" height="1440" loading="lazy"><figcaption><strong>BUILDING C</strong><span>계단과 개방된 시야가 만나는 내부 공간</span></figcaption></figure></div>
   </div>
   <p class="ob-section-note">영상 대신 실제 플레이 공간의 외부·내부 스냅샷을 연결해, POI별 공간 규모와 이동 구조를 빠르게 확인할 수 있도록 구성했습니다.</p>
  </section>
 </article>`;
};

window.renderBackroomsCase=function(){
 return `<article class="ob-case ob-case-backrooms">
  <header class="ob-hero ob-hero-outbreak br-hero">
   <div class="ob-heading"><p class="case-kicker">PROJECT 02 / REAL-TIME CINEMATIC</p><h2 id="case-title">THE BACKROOMS</h2><p>Found Footage Short Film · Unreal Engine</p></div>
   <figure class="ob-media ob-hero-media br-hero-media"><img src="assets/backrooms-01-hero.jpg" alt="노란 복도와 The Backrooms 타이틀이 보이는 최종 영상 프레임" width="1280" height="722"><figcaption>FINAL FILM · 반복되는 공간과 1인칭 카메라로 만든 파운드 푸티지</figcaption></figure>
   <div class="ob-hero-summary"><p>실시간 엔진 기반 1인칭 단편 공포 영상</p><strong>시간의 뒤틀림과 ‘또 다른 나’를 백룸의 공간·카메라·화면 왜곡으로 연결했습니다.</strong></div>
   ${window.renderCaseTemplateFacts({role:'Direction · Level Design · Camera · Edit',tools:'Unreal Engine · DaVinci Resolve 20',team:'1인 개인 프로젝트',output:'Found Footage Film · 101.47 sec'})}
  </header>

  <section class="ob-section ob-goal-scope" aria-label="Direction and Role">
   <header class="ob-section-head"><div><span class="ob-index">01</span><h3>Overview + Contribution</h3></div><p>연출 목표와 개인 제작 범위</p></header>
   <div class="ob-design-goals">
    <article><span>01</span><h4>Narrative Loop</h4><p>공간뿐 아니라 시간도 뒤틀린 백룸과 ‘또 다른 나’를 중심 갈등으로 설정했습니다.</p></article>
    <article><span>02</span><h4>Camera Anxiety</h4><p>핸드헬드 카메라와 편집되지 않은 듯한 화면으로 촬영자의 불안을 전달했습니다.</p></article>
    <article><span>03</span><h4>Visual Escalation</h4><p>탐색이 진행될수록 노이즈·색수차·글리치와 사운드 강도를 높였습니다.</p></article>
   </div>
   <div class="ob-scope-grid">
    <div><p class="ob-eyebrow">MY ROLE</p><h4>Concept · Sequence Planning · Modular Environment</h4><p>Character Setup · Camera · Take Recorder · Sequencer · Post-process Tuning · Editing</p><p class="ob-scope-note">기획부터 레벨 제작, 카메라 녹화와 키프레임 보정, 렌더와 후반 편집까지 하나의 영상 파이프라인으로 구성했습니다.</p></div>
    <div><p class="ob-eyebrow">PRODUCTION SCOPE</p><h4>엔진 제작과 후반 작업의 연결</h4><p>Unreal Engine에서 공간·카메라·화면 효과를 만들고 DaVinci Resolve 20에서 컷, 텍스트, 전환과 사운드를 조정했습니다.</p><p class="ob-scope-note">오디오와 일부 머티리얼은 외부 자료를 사용하고, 직접 제작·조정한 범위는 아래 과정과 크레딧에서 구분했습니다.</p></div>
   </div>
  </section>

  <section class="ob-section" aria-label="Sequence Plan">
   <header class="ob-section-head"><div><span class="ob-index">02</span><h3>Planning + Sequence</h3></div><p>공간 설정 → 장면 전환 → 시각적 긴장</p></header>
   <div class="br-story-core">
    <figure class="ob-media"><img src="assets/backrooms-02-banner.jpg" alt="반복되는 노란 벽과 기둥으로 구성된 백룸 공간" width="1280" height="722" loading="lazy"><figcaption>WORLD · 반복되는 공간 속에서 시간이 어긋나기 시작한다.</figcaption></figure>
    <div class="br-world-copy"><span>WORLD PREMISE</span><h4>공간과 시간축이 함께 뒤틀린 백룸</h4><p>촬영자는 버려진 스마트폰에서 자신과 같은 외형의 인물을 발견하고, 그 존재에게 쫓기기 시작합니다.</p><dl><div><dt>01</dt><dd><strong>촬영자</strong><small>루프의 시작점이자 끝점</small></dd></div><div><dt>02</dt><dd><strong>의문의 그림자</strong><small>다른 시간선의 자신</small></dd></div></dl></div>
   </div>
   <div class="br-beats" aria-label="스토리 진행 순서"><span>ENTER</span><i>→</i><span>EXPLORE</span><i>→</i><span>PHONE</span><i>→</i><span>SHADOW</span><i>→</i><span>CHASE</span><i>→</i><span>FALL</span></div>
   <div class="br-shot-grid br-shot-plan-grid">
    <figure class="ob-media"><img src="assets/backrooms-shot-s1.webp" alt="문을 열고 백룸에 진입하는 장면" width="577" height="270" loading="lazy"><figcaption><strong>S1 · ENTER</strong><span>문을 열며 낯선 공간으로 진입</span></figcaption></figure>
    <figure class="ob-media"><img src="assets/backrooms-shot-s3.webp" alt="바닥의 스마트폰을 발견하는 장면" width="577" height="270" loading="lazy"><figcaption><strong>S3–S5 · REVEAL</strong><span>스마트폰 발견에서 그림자 조우로 전환</span></figcaption></figure>
    <figure class="ob-media"><img src="assets/backrooms-shot-s6.webp" alt="카메라가 떨어지며 천장을 향하는 장면" width="577" height="263" loading="lazy"><figcaption><strong>S6 · FALL</strong><span>추락 후 천장 시점으로 종료</span></figcaption></figure>
   </div>
  </section>

  <section class="ob-section" aria-label="Environment Setup">
   <header class="ob-section-head"><div><span class="ob-index">04</span><h3>Core Breakdown</h3></div><p>Environment · Module → Scale → Light Control</p></header>
   <div class="br-process-grid">
    <article><figure class="ob-media"><img src="assets/backrooms-build-modules.webp" alt="서로 다른 크기의 백룸 박스 모듈" width="462" height="361" loading="lazy"><figcaption>01 · MODULAR KIT</figcaption></figure><h4>공간 단위 제작</h4><p>2×2, 3×3, 8×3 박스와 기둥을 조합할 수 있는 모듈로 제작했습니다.</p></article>
    <article><figure class="ob-media"><img src="assets/backrooms-build-scale.webp" alt="캐릭터를 기준으로 공간 크기를 확인하는 장면" width="468" height="349" loading="lazy"><figcaption>02 · HUMAN SCALE</figcaption></figure><h4>플레이어 스케일 확인</h4><p>1.8m 캐릭터를 기준으로 기둥과 공간 높이를 약 4m로 맞췄습니다.</p></article>
    <article><figure class="ob-media"><img src="assets/backrooms-build-shell.webp" alt="외부광을 차단하는 백룸 외곽 구조" width="556" height="361" loading="lazy"><figcaption>03 · LIGHT CONTROL</figcaption></figure><h4>외부광 차단</h4><p>레벨 외곽을 플레인으로 감싸 의도하지 않은 외부광을 차단했습니다.</p></article>
    <article><figure class="ob-media"><img src="assets/backrooms-build-light.webp" alt="천장 조명이 반복되는 완성된 백룸 레벨" width="556" height="349" loading="lazy"><figcaption>04 · RECT LIGHT</figcaption></figure><h4>반복 조명 구성</h4><p>Rect Light를 상하로 배치해 균일하면서 불안한 백룸의 조도를 만들었습니다.</p></article>
   </div>
  </section>

  <section class="ob-section br-camera" aria-label="Previs and Camera Iteration">
   <header class="ob-section-head"><div><span class="ob-index">03</span><h3>Iteration</h3></div><p>Previs + Camera · Record → Block → Adjust → Final</p></header>
   <div class="br-previs-row br-previs-primary">
    <figure class="ob-media br-record-card"><img src="assets/backrooms-previs-record.gif" alt="Unreal Engine Take Recorder에서 카메라 녹화를 시작하는 프리비즈 화면" width="417" height="307" loading="lazy"><figcaption><strong>01 / RECORD SETUP</strong><span>Take Recorder로 캐릭터와 카메라 데이터를 기록</span></figcaption></figure>
    <figure class="ob-media br-motion-card"><video class="br-motion-video" autoplay muted loop playsinline preload="metadata" poster="assets/backrooms-previs-fall-poster.jpg" aria-label="Sequencer 상단 뷰에서 캐릭터 낙하 궤적을 확인하는 프리비즈 영상"><source src="assets/backrooms-previs-fall.mp4" type="video/mp4"></video><figcaption><strong>02 / FALL BLOCKING</strong><span>상단 뷰에서 낙하 궤적·착지 위치·동작 타이밍 점검</span></figcaption></figure>
   </div>
   <div class="br-previs-row br-previs-secondary">
    <figure class="ob-media br-motion-card"><video class="br-motion-video" autoplay muted loop playsinline preload="metadata" poster="assets/backrooms-curve-poster.jpg" aria-label="Sequencer Curve Editor에서 카메라 키프레임 곡선을 보정하는 화면"><source src="assets/backrooms-curve-adjustment.mp4" type="video/mp4"></video><figcaption><strong>03 / CURVE ADJUSTMENT</strong><span>낙하 이후 회전과 카메라 반동을 키프레임 곡선으로 보정</span></figcaption></figure>
    <figure class="ob-media br-final-fall"><img src="assets/backrooms-04-ceiling.jpg" alt="낙하 후 밝은 천장 조명을 향해 쓰러진 최종 영상 프레임" width="1280" height="722" loading="lazy"><figcaption><strong>04 / FINAL SHOT</strong><span>낙하 충격 이후 천장 시점으로 전환해 방향 감각을 단절</span></figcaption></figure>
   </div>
   <figure class="ob-media br-wide-evidence"><img src="assets/backrooms-sequencer-work.webp" alt="Take Recorder, 키프레임 곡선, Camera Cuts와 Movie Render Queue 작업 화면" width="1438" height="256" loading="lazy"><figcaption>ENGINE EVIDENCE · Take Recorder → Sequencer Curves → Camera Cuts → Movie Render Queue</figcaption></figure>
   <p class="ob-section-note">완성 프레임보다 먼저 기록·낙하 배치·곡선 보정 과정을 보여주어 카메라 움직임을 설계한 범위를 구분했습니다.</p>
  </section>

  <section class="ob-section" aria-label="Look Development">
   <header class="ob-section-head"><div><span class="ob-index">05</span><h3>Technical Implementation</h3></div><p>Look Development · Base Render → Final Camera Look</p></header>
   <div class="br-look-grid">
    <figure class="ob-media"><img src="assets/backrooms-look-base.webp" alt="후처리 전의 기본 백룸 레벨" width="415" height="263" loading="lazy"><figcaption><strong>BASE RENDER</strong><span>환경과 기본 조명</span></figcaption></figure>
    <figure class="ob-media"><img src="assets/backrooms-look-eye.webp" alt="노출과 안개, 대비를 조정한 1인칭 백룸 화면" width="415" height="248" loading="lazy"><figcaption><strong>LOOK TUNING</strong><span>노출 · 안개 · 대비</span></figcaption></figure>
    <figure class="ob-media"><img src="assets/backrooms-look-camera.webp" alt="외부 VHS 머티리얼을 적용하고 강도를 조정한 스마트폰 카메라 화면" width="805" height="490" loading="lazy"><figcaption><strong>FINAL CAMERA LOOK</strong><span>VHS 강도 · 적용 타이밍</span></figcaption></figure>
   </div>
   <div class="br-look-notes"><article><span>00:00–00:39</span><h4>First-person Eye</h4><p>1인칭 구간의 노출과 안개를 조정해 공간 형태가 먼저 읽히도록 했습니다.</p></article><article><span>00:40+</span><h4>Camera View</h4><p>스마트폰 발견 이후 노이즈·스캔라인·색수차·글리치 강도를 높였습니다.</p></article><article><span>FINAL EDIT</span><h4>Sound Distance</h4><p>발소리가 가까워지고 멀어지는 감각을 사운드 키프레임으로 조정했습니다.</p></article></div>
   <p class="br-source-note"><span>THIRD-PARTY MATERIAL</span>VHS Handicam Material · <a href="https://www.unrealforvfx.com/vhs" target="_blank" rel="noreferrer">Unreal for VFX / Josh Toonen ↗</a><br>외부 머티리얼을 기반으로 장면별 강도와 적용 타이밍을 조정했으며, 머티리얼 자체 제작 항목으로 포함하지 않습니다.</p>
  </section>

  <section class="ob-section" aria-label="Final Sequence">
   <header class="ob-section-head"><div><span class="ob-index">06</span><h3>Final Results</h3></div><p>101.47 sec · Representative Frames</p></header>
   <div class="br-final-grid">
    <figure class="ob-media"><img src="assets/backrooms-shot-s1.webp" alt="문을 열고 백룸에 진입하는 최종 영상 프레임" width="577" height="270" loading="lazy"><figcaption><strong>00:05</strong><span>공간 진입</span></figcaption></figure>
    <figure class="ob-media"><img src="assets/backrooms-02-banner.jpg" alt="반복되는 노란 벽과 기둥 사이를 탐색하는 최종 영상 프레임" width="1280" height="722" loading="lazy"><figcaption><strong>00:15</strong><span>반복 공간 탐색</span></figcaption></figure>
    <figure class="ob-media"><img src="assets/backrooms-03-phone.jpg" alt="바닥의 스마트폰을 발견하는 최종 영상 프레임" width="1280" height="722" loading="lazy"><figcaption><strong>00:30</strong><span>스마트폰 발견</span></figcaption></figure>
    <figure class="ob-media"><img src="assets/backrooms-06-entity.png" alt="완성 영상에서 백룸의 기둥 사이로 엔티티를 마주하는 프레임" width="852" height="480" loading="lazy"><figcaption><strong>01:02</strong><span>엔티티 조우와 추격 시작</span></figcaption></figure>
    <figure class="ob-media"><img src="assets/backrooms-04-ceiling.jpg" alt="밝은 천장 조명을 향해 쓰러지는 최종 영상 프레임" width="1280" height="722" loading="lazy"><figcaption><strong>01:22</strong><span>추락과 천장 시점</span></figcaption></figure>
    <figure class="ob-media"><img src="assets/backrooms-05-noise.jpg" alt="강한 노이즈가 적용된 최종 영상 후반 프레임" width="1280" height="722" loading="lazy"><figcaption><strong>01:35</strong><span>화면 왜곡의 정점</span></figcaption></figure>
   </div>
   <p class="ob-section-note">동일한 크기의 대표 프레임으로 공간 진입, 발견, 추격, 추락과 화면 왜곡의 흐름을 빠르게 확인할 수 있도록 구성했습니다.</p>
   <p class="br-credits"><span>CREDITS</span>Audio · Pixabay / KMY / KWJ &nbsp;·&nbsp; VHS Handicam Material · Unreal for VFX / Josh Toonen &nbsp;·&nbsp; Ceiling Material · Poly Haven</p>
  </section>
 </article>`;
};

window.renderHallgrimCase=function(){
 return `<article class="ob-case ob-case-hallgrim">
  <header class="ob-hero ob-hero-outbreak hg-hero">
   <div class="ob-heading"><p class="case-kicker">PROJECT 03 / ENVIRONMENT DESIGN</p><h2 id="case-title">HALLGRIMSKIRKJA</h2><p>Environment Design · 3D Modeling · Technical Implementation</p></div>
   <figure class="ob-media ob-hero-media hg-hero-media"><img src="assets/hallgrim-01-hero.png" alt="설산과 용암 사이에 할그림스키르캬 교회가 놓인 Scene B 전경" width="1280" height="720"><figcaption>FINAL SCENE B · 교회를 기준점으로 설산과 용암 지형을 구성</figcaption></figure>
   <div class="ob-hero-summary"><p>2인 팀 환경 제작 프로젝트</p><strong>Scene A의 도시 블록아웃·건물 배치와 교회 정면 제작부터 Scene B 환경, A→B 전환 로직까지 연결했습니다.</strong></div>
   ${window.renderCaseTemplateFacts({role:'Environment Design · 3D Modeling · Technical Implementation',tools:'Blender · InstaMAT · Unreal Engine',team:'2인 팀 프로젝트',output:'Scene A → Scene B Playable Demo'})}
  </header>

  <section class="ob-section" aria-label="Direction and Contribution">
   <header class="ob-section-head"><div><span class="ob-index">01</span><h3>Overview + Contribution</h3></div><p>환경의 대비와 개인·팀 작업 범위</p></header>
   <div class="ob-design-goals">
    <article><span>01</span><h4>Landmark</h4><p>낮은 건물군 사이에서 교회의 수직 실루엣이 공간의 기준점이 되도록 구성했습니다.</p></article>
    <article><span>02</span><h4>Environment Contrast</h4><p>평온한 도시와 설산·용암 지형의 대비로 장면 변화가 즉시 읽히게 했습니다.</p></article>
    <article><span>03</span><h4>Playable Transition</h4><p>환경 상태와 화면 연출을 연결해 두 장면을 하나의 플레이 흐름으로 전환했습니다.</p></article>
   </div>
   <div class="ob-scope-grid">
    <div><p class="ob-eyebrow">MY CONTRIBUTION</p><h4>Scene A 블록아웃부터 Scene B 전체까지</h4><p>교회 앞면 모델링·텍스처, Scene A 블록아웃과 주변 건물 배치, Scene B 지형·경로·텍스처링, A→B 전환 로직을 담당했습니다.</p></div>
    <div><p class="ob-eyebrow">TEAM BOUNDARY</p><h4>협업 결과와 개인 기여를 분리</h4><p>교회 후면·동상·Scene A의 세부 지형, 식생, 프롭과 데칼은 팀 제작 맥락이며 개인 작업으로 포함하지 않았습니다.</p></div>
   </div>
  </section>

  <section class="ob-section" aria-label="Scene A Planning and Blockout">
   <header class="ob-section-head"><div><span class="ob-index">02</span><h3>Planning + Blockout</h3></div><p>Scene A · 실제 도시 관계 → 블록아웃 → 건물 배치</p></header>
   <div class="hg-reference-grid">
    <figure class="ob-media hg-desktop-planning"><img src="assets/hallgrim-03-reference-layout.png" alt="Google Maps 위성 사진, Blender 평면 구성, Unreal Scene A 배치를 나란히 비교한 자료" width="1563" height="506" loading="lazy"><figcaption><strong>SCENE A · SITE PLANNING</strong><span>Google Maps → Blender 평면 → Unreal 배치</span></figcaption></figure>
    <div class="hg-mobile-planning" aria-label="Scene A 계획 자료">
     <figure class="ob-media"><img src="assets/hallgrim-a-map.png" alt="Hallgrimskirkja와 광장, 도로 관계를 보여주는 Google Maps 위성 사진" width="418" height="461" loading="lazy"><figcaption><strong>01 / REFERENCE</strong><span>실제 도시 관계</span></figcaption></figure>
     <figure class="ob-media"><img src="assets/hallgrim-a-plan.png" alt="교회와 광장 형태를 정리한 Blender 평면 구성" width="318" height="461" loading="lazy"><figcaption><strong>02 / PLAN</strong><span>평면과 비례 정리</span></figcaption></figure>
     <figure class="ob-media"><img src="assets/hallgrim-a-unreal.png" alt="교회와 광장, 주변 도시를 배치한 Unreal Scene A 탑뷰" width="783" height="461" loading="lazy"><figcaption><strong>03 / UNREAL</strong><span>도시 블록아웃과 건물 배치</span></figcaption></figure>
    </div>
    <figure class="ob-media"><img src="assets/hallgrim-02-blockout.png" alt="Scene A의 교회와 광장, 도로, 주변 건물 매스를 배치한 초기 블록아웃" width="958" height="493" loading="lazy"><figcaption><strong>SCENE A · BLOCKOUT</strong><span>교회·광장·도로·주변 건물의 관계 검증</span></figcaption></figure>
   </div>
   <div class="ob-iteration-steps hg-scene-a-steps">
    <article><span>01 / WORLD LAYOUT</span><p>위성 지도의 도로·교회·광장 관계를 제작 가능한 평면으로 정리했습니다.</p></article>
    <article><span>02 / BLOCKOUT</span><p>교회와 광장, 도로 폭을 기준으로 Scene A의 공간 비례를 구성했습니다.</p></article>
    <article><span>03 / BUILDING PLACEMENT</span><p>기존 건물 에셋을 배치해 주변 도시의 스케일과 실루엣을 만들었습니다.</p></article>
   </div>
   <p class="ob-section-note">Scene A의 블록아웃과 건물 배치는 개인 담당입니다. 건물 에셋 자체를 직접 모델링한 것으로 표기하지 않았으며, 세부 지형·식생·프롭·데칼은 팀 제작 범위로 구분했습니다.</p>
  </section>

  <section class="ob-section" aria-label="Architecture and Materials">
   <header class="ob-section-head"><div><span class="ob-index">03</span><h3>Iteration</h3></div><p>Architecture + Materials · 형태 → 비율 보정 → 표면 통일</p></header>
   <div class="hg-architecture-grid">
    <figure class="ob-media hg-model-sheet"><img src="assets/hallgrim-04-church-front.png" alt="Blender에서 제작한 할그림스키르캬 교회 정면과 평면 구조" width="933" height="659" loading="lazy"><figcaption><strong>CHURCH FRONT</strong><span>기둥 배열·첨탑·시계·출입부로 정면 실루엣 구성</span></figcaption></figure>
    <div class="hg-material-stack">
     <figure class="ob-media"><img src="assets/hallgrim-05-materials.png" alt="교회 첨탑의 UV 확인과 벽, 창 주변, 정면 재질 비교" width="814" height="376" loading="lazy"><figcaption><strong>MATERIAL</strong><span>분할 모델에 공통 베이스 질감을 적용</span></figcaption></figure>
     <figure class="ob-media hg-gif-card"><img src="assets/hallgrim-uv.gif" alt="테스트 패턴을 적용한 교회 첨탑을 여러 시점에서 확인하는 UV 테스트" width="836" height="920" loading="lazy"><figcaption><strong>UV CHECK</strong><span>형태 왜곡과 표면 연결을 회전 화면으로 확인</span></figcaption></figure>
    </div>
   </div>
   <div class="ob-iteration-steps"><article><span>OBSERVE</span><p>반복 기둥과 정면 비율 분석</p></article><article><span>PROBLEM</span><p>베이스 비율 차이로 형태 왜곡 확인</p></article><article><span>CHANGE</span><p>정면 형태와 지붕 모델링 보정</p></article><article><span>RESULT</span><p>도시 전경에서 읽히는 랜드마크 실루엣</p></article></div>
  </section>

  <section class="ob-section" aria-label="Scene B Environment">
   <header class="ob-section-head"><div><span class="ob-index">04</span><h3>Core Breakdown</h3></div><p>Scene B Environment · Sculpt → Route → Snow / Lava Material</p></header>
   <figure class="ob-media hg-wide"><img src="assets/hallgrim-06-scene-b-aerial.png" alt="교회 주변에 설산과 용암 경로가 이어지는 Scene B 항공 전경" width="1280" height="720" loading="lazy"><figcaption><strong>ENVIRONMENT OVERVIEW</strong><span>교회를 기준점으로 산맥과 용암 경로를 연결</span></figcaption></figure>
   <div class="hg-scene-grid">
    <figure class="ob-media"><img src="assets/hallgrim-07-scene-b-player.png" alt="눈 덮인 경로에서 용암과 교회를 바라보는 플레이어 시점" width="1280" height="720" loading="lazy"><figcaption><strong>PLAYER ROUTE</strong><span>보행 시점에서 이동 공간과 위험 지형 확인</span></figcaption></figure>
    <figure class="ob-media hg-gif-card"><img src="assets/hallgrim-smoke.gif" alt="Scene B 산 정상 위 연기의 크기와 움직임을 확인하는 테스트" width="852" height="774" loading="lazy"><figcaption><strong>ATMOSPHERE TEST</strong><span>연기의 크기·색감·높이를 장면 안에서 조정</span></figcaption></figure>
   </div>
   <div class="br-look-notes"><article><span>LANDSCAPE</span><h4>Mountain Sculpt</h4><p>교회 주변 랜드스케이프를 Sculpt해 산맥과 높이 변화를 만들었습니다.</p></article><article><span>PLAYER FLOW</span><h4>Route Design</h4><p>플레이어 이동 경로와 시각적으로 읽히는 용암 경로를 함께 설계했습니다.</p></article><article><span>SURFACE</span><h4>Snow + Lava</h4><p>높이 기반 설산 표현에 용암을 추가해 지형 형태와 표면을 연결했습니다.</p></article></div>
  </section>

  <section class="ob-section" aria-label="Scene Transition">
   <header class="ob-section-head"><div><span class="ob-index">05</span><h3>Technical Implementation</h3></div><p>A → B Transition · Trigger → State Change → Fade</p></header>
   <div class="hg-transition-grid">
    <figure class="ob-media hg-motion"><img src="assets/hallgrim-scene-change.gif" alt="블록아웃 단계에서 주변 환경과 하늘이 바뀌는 초기 전환 테스트" width="910" height="428" loading="lazy"><figcaption><strong>EARLY TEST</strong><span>블록아웃에서 환경 상태 변경 검증</span></figcaption></figure>
    <figure class="ob-media hg-motion"><img src="assets/hallgrim-fade.gif" alt="하늘이 어두워지고 산악 요소가 나타나는 환경 전환 연출" width="626" height="682" loading="lazy"><figcaption><strong>TRANSITION LOOK</strong><span>환경 변화와 화면 암전을 연결</span></figcaption></figure>
   </div>
   <div class="ob-iteration-steps"><article><span>01 / NORMAL</span><p>도시 상태에서 트리거 진입</p></article><article><span>02 / TAG</span><p>NORMAL 건물 하강 · HELL 지형 상승</p></article><article><span>03 / FADE</span><p>Data Layers와 화면 전환 연결</p></article><article><span>04 / RESULT</span><p>Scene B에서 플레이 흐름 재개</p></article></div>
   <figure class="ob-media hg-sequence-strip hg-desktop-sequence"><img src="assets/hallgrim-09-transition-sequence.png" alt="전환 전 도시, 환경 변화, 암전, 전환 후 Scene B를 시간 순서로 보여주는 시퀀스" width="1774" height="286" loading="lazy"><span class="hg-blackout-badge" aria-hidden="true">FADE / BLACKOUT</span><figcaption>FINAL SEQUENCE · 도시 상태 → 환경 변화 → 암전 → Scene B</figcaption></figure>
   <div class="hg-mobile-sequence" aria-label="A에서 B로 전환되는 네 단계">
    <figure class="ob-media"><img src="assets/hallgrim-seq-01.png" alt="전환 전 도시 상태" width="427" height="241" loading="lazy"><figcaption><strong>51 SEC</strong><span>전환 전</span></figcaption></figure>
    <figure class="ob-media"><img src="assets/hallgrim-seq-02.png" alt="환경이 어두워지며 변화하는 상태" width="427" height="241" loading="lazy"><figcaption><strong>54 SEC</strong><span>환경 변화</span></figcaption></figure>
    <figure class="ob-media hg-seq-blackout"><img src="assets/hallgrim-seq-03.png" alt="화면 전환을 위한 암전 상태" width="427" height="241" loading="lazy"><span aria-hidden="true">FADE / BLACKOUT</span><figcaption><strong>55 SEC</strong><span>암전</span></figcaption></figure>
    <figure class="ob-media"><img src="assets/hallgrim-seq-04.png" alt="Scene B로 전환된 이후의 환경" width="427" height="241" loading="lazy"><figcaption><strong>60 SEC</strong><span>Scene B</span></figcaption></figure>
   </div>
   <p class="ob-section-note">전환 로직은 Data Layers와 태그를 이용해 환경 그룹을 구분하고, 활성 상태·이동·페이드·레벨 불러오기를 연결했습니다.</p>
  </section>

  <section class="ob-section" aria-label="Final Frames">
   <header class="ob-section-head"><div><span class="ob-index">06</span><h3>Final Results</h3></div><p>Scene A + Scene B · Final Environment</p></header>
   <div class="br-final-grid hg-final-grid">
    <figure class="ob-media"><img src="assets/hallgrim-10-scene-a-final.png" alt="교회와 주변 도시 건물 배치가 함께 보이는 Scene A 최종 전경" width="775" height="436" loading="lazy"><figcaption><strong>SCENE A · MY SCOPE</strong><span>개인: 블록아웃·건물 배치 / 팀: 세부 지형·식생·프롭</span></figcaption></figure>
    <figure class="ob-media"><img src="assets/hallgrim-11-scene-b-lava-detail.png" alt="설산 사이로 용암 경로가 흐르는 Scene B 환경 디테일" width="696" height="391" loading="lazy"><figcaption><strong>LAVA ROUTE</strong><span>설산 사이의 용암 이동 경로</span></figcaption></figure>
    <figure class="ob-media"><img src="assets/hallgrim-06-scene-b-aerial.png" alt="교회 측면과 용암 계곡이 보이는 Scene B 전경" width="1280" height="720" loading="lazy"><figcaption><strong>TERRAIN</strong><span>설산과 용암 경로</span></figcaption></figure>
    <figure class="ob-media"><img src="assets/hallgrim-07-scene-b-player.png" alt="눈 덮인 길에서 교회와 용암을 바라보는 최종 플레이 시점" width="1280" height="720" loading="lazy"><figcaption><strong>GAMEPLAY VIEW</strong><span>플레이어 이동 공간</span></figcaption></figure>
   </div>
   <p class="br-source-note"><span>COLLABORATION SCOPE</span>개인 작업: 교회 정면·텍스처·Scene A 블록아웃·건물 배치·Scene B 전체·A→B 전환 로직. 팀 제작 맥락: 교회 후면·동상·Scene A 세부 지형·식생·프롭·데칼.</p>
  </section>
 </article>`;
};

window.renderMyHomeCase=function(){
 return `<article class="ob-case ob-case-myhome">
  <header class="ob-hero ob-hero-outbreak mh-hero">
   <div class="ob-heading"><p class="case-kicker">PROJECT 04 / INTERIOR ENVIRONMENT ART</p><h2 id="case-title">MY HOME</h2><p>Environment Design · Prop &amp; Material · Unreal Engine</p></div>
   <figure class="ob-media ob-hero-media mh-hero-media"><img src="assets/myhome-05-hero-room1.png" alt="침대와 빈백, 체크 카펫이 함께 보이는 My Home Room 1 최종 장면" width="1127" height="747"><figcaption><strong>FINAL ROOM 1 · MY SCOPE</strong><span>공간 구성·프랍·재질·라이팅 전반</span></figcaption></figure>
   <div class="ob-hero-summary"><p>Team Project · 04.15–05.11</p><strong>대비되는 두 취향을 하나의 공간으로 연결하고, Room 1 제작부터 공간 통합과 영상 기능까지 구현했습니다.</strong></div>
   ${window.renderCaseTemplateFacts({role:'Room 1 Environment · Prop & Material · Lighting',tools:'Blender · InstaMAT · Unreal Engine',team:'2인 팀 프로젝트',output:'04.15–05.11 · Interior Environment'})}
  </header>

  <section class="ob-section" aria-label="Direction and Contribution">
   <header class="ob-section-head"><div><span class="ob-index">01</span><h3>Overview + Contribution</h3></div><p>공간의 대비와 개인·팀 작업 범위</p></header>
   <div class="ob-design-goals">
    <article><span>01</span><h4>Contrast</h4><p>무채색 Room 1과 따뜻한 Room 2의 색·재료 대비를 분명하게 구성했습니다.</p></article>
    <article><span>02</span><h4>Lived-in Space</h4><p>휴식·작업 영역과 생활 소품을 함께 배치해 사용자의 취향이 읽히게 했습니다.</p></article>
    <article><span>03</span><h4>Engine Integration</h4><p>머티리얼, 투영광, 영상 재생 기능을 최종 공간 안에서 작동하도록 연결했습니다.</p></article>
   </div>
   <div class="ob-scope-grid">
    <div><p class="ob-eyebrow">MY CONTRIBUTION</p><h4>Room 1 제작부터 최종 통합까지</h4><p>Room 1의 공간 구성·제작·배치·재질·라이팅, 중앙 오브제 최적화와 빛, 두 방 통합·문 작업·최종 리터치를 담당했습니다.</p></div>
    <div><p class="ob-eyebrow">TEAM BOUNDARY</p><h4>Room 2 제작과 개인 기능 구현을 분리</h4><p>Room 2의 공간과 주요 오브젝트는 팀원 작업입니다. 해당 공간에서는 모니터와 빔 프로젝터의 영상 재생 Blueprint만 담당했습니다.</p></div>
   </div>
   <div class="mh-scope-matrix" aria-label="영역별 기여 범위">
    <article><span>ROOM 1</span><strong>Environment · Props · Materials · Lighting</strong><small>개인 제작 전반 · 일부 외부 가구 에셋 활용</small></article>
    <article><span>CENTER OBJECT</span><strong>Optimization · Material · Light</strong><small>원형 제작: 팀원 / 후반 구현: 개인</small></article>
    <article><span>INTEGRATION</span><strong>Merge · Door · Final Retouch</strong><small>두 방을 하나의 최종 공간으로 연결</small></article>
    <article><span>ROOM 2</span><strong>Video Playback Blueprint</strong><small>공간·오브젝트 제작은 팀 작업</small></article>
   </div>
  </section>

  <section class="ob-section" aria-label="Concept and Layout">
   <header class="ob-section-head"><div><span class="ob-index">02</span><h3>Planning + Layout</h3></div><p>Reference → Initial Layout → Final Layout</p></header>
   <div class="mh-concept-grid">
    <figure class="ob-media mh-reference"><img src="assets/myhome-02-reference.jpg" alt="무채색 Room 1과 따뜻한 Room 2의 색과 소품 방향을 정리한 공동 기획 레퍼런스" width="1440" height="810" loading="lazy"><figcaption><strong>REFERENCE</strong><span>두 방의 취향·색·재료 대비</span></figcaption></figure>
    <div class="mh-layout-pair">
     <figure class="ob-media"><img src="assets/myhome-03-layout-before.jpg" alt="침대와 책상, 빈백, 체크 카펫을 배치한 Room 1 초기 단계" width="1140" height="603" loading="lazy"><figcaption><strong>INITIAL LAYOUT</strong><span>주요 가구와 공간 비례 설정</span></figcaption></figure>
     <figure class="ob-media"><img src="assets/myhome-04-layout-after.png" alt="벽면 소품과 재질, 조명이 추가된 Room 1 최종 배치" width="1007" height="786" loading="lazy"><figcaption><strong>FINAL LAYOUT</strong><span>표면·소품·라이팅 밀도 정리</span></figcaption></figure>
    </div>
   </div>
   <div class="ob-iteration-steps mh-layout-steps"><article><span>01 / ZONING</span><p>침대·빈백의 휴식 영역과 책상 중심의 작업 영역을 나눴습니다.</p></article><article><span>02 / HIERARCHY</span><p>체크 카펫과 포스터를 반복해 Room 1의 무채색 콘셉트를 고정했습니다.</p></article><article><span>03 / DENSITY</span><p>레코드·책·생활 소품으로 사용감과 취향을 보강했습니다.</p></article></div>
  </section>

  <section class="ob-section" aria-label="Iteration">
   <header class="ob-section-head"><div><span class="ob-index">03</span><h3>Iteration</h3></div><p>Alpha → Surface / Lighting Pass → Beta</p></header>
   <div class="mh-stage-compare">
    <figure class="ob-media"><img src="assets/myhome-23-alpha.png" alt="기본 재질과 조명 아래의 Room 1 Alpha 단계" width="1094" height="718" loading="lazy"><figcaption><strong>ALPHA</strong><span>가구 비례와 영역 관계 확인</span></figcaption></figure>
    <figure class="ob-media"><img src="assets/myhome-05-hero-room1.png" alt="벽과 바닥, 가구 재질과 조명을 정리한 Room 1 Beta 단계" width="1127" height="747" loading="lazy"><figcaption><strong>BETA</strong><span>재질·소품·빛을 최종 밀도로 조정</span></figcaption></figure>
   </div>
   <div class="ob-iteration-steps"><article><span>OBSERVE</span><p>공간 관계는 읽히지만 표면과 생활감이 부족했습니다.</p></article><article><span>CHANGE</span><p>벽·바닥·가구 재질과 소품 밀도, 블라인드 주변의 빛을 정리했습니다.</p></article><article><span>RESULT</span><p>휴식·작업 영역과 무채색 취향이 한 장면에서 함께 읽히게 했습니다.</p></article></div>
   <p class="ob-section-note">두 이미지는 제작 단계의 변화를 보여주는 자료이며, 동일한 카메라·조명 조건의 성능 비교는 아닙니다.</p>
  </section>

  <section class="ob-section" aria-label="Prop and Material Breakdown">
   <header class="ob-section-head"><div><span class="ob-index">04</span><h3>Core Breakdown</h3></div><p>Props + Materials · Intent → Process → Engine Result</p></header>
   <div class="mh-craft-grid">
    <article class="mh-craft-card">
     <div class="mh-craft-title"><span>01 / PROJECTOR</span><h4>영상 기능을 가진 핵심 프랍</h4><p>형태 제작과 UV·표면 작업 뒤, 영상 가장자리 블러와 깜빡임 머티리얼을 연결했습니다.</p></div>
     <figure class="ob-media mh-craft-main"><img src="assets/myhome-09-projector-final.jpg" alt="Room 1 선반에 배치된 빔 프로젝터 최종 결과" width="792" height="629" loading="lazy"><figcaption><strong>ENGINE RESULT</strong><span>모델링·텍스처·배치</span></figcaption></figure>
     <div class="mh-process-strip mh-process-projector"><img src="assets/myhome-07-projector-uv.jpg" alt="빔 프로젝터 UV 구성" width="725" height="743" style="--media-ratio:725/743" loading="lazy"><img src="assets/myhome-08-projector-texture.jpg" alt="빔 프로젝터 렌즈와 본체 텍스처" width="1053" height="507" style="--media-ratio:1053/507" loading="lazy"><img src="assets/myhome-10-projector-material.jpg" alt="프로젝터 영상 머티리얼 노드" width="1419" height="799" style="--media-ratio:1419/799" loading="lazy"></div>
    </article>
    <article class="mh-craft-card">
     <div class="mh-craft-title"><span>02 / BEANBAG</span><h4>무게감과 비율을 함께 조정</h4><p>레퍼런스 비율을 기준으로 Sculpt와 Cloth로 형태를 만들고 Quad Remesh로 최적화했습니다.</p></div>
     <figure class="ob-media mh-craft-main"><img src="assets/myhome-17-beanbag-final.png" alt="Room 1 침대 옆에 배치된 빈백 최종 결과" width="728" height="701" loading="lazy"><figcaption><strong>ENGINE RESULT</strong><span>형태·최적화·표면</span></figcaption></figure>
     <div class="mh-process-strip mh-process-two"><img src="assets/myhome-15-beanbag-reference.jpg" alt="빈백 제품 크기와 형태 레퍼런스" width="607" height="615" style="--media-ratio:607/615" loading="lazy"><img src="assets/myhome-16-beanbag-uv.jpg" alt="빈백의 리메시와 UV 구성" width="820" height="817" style="--media-ratio:820/817" loading="lazy"></div>
    </article>
    <article class="mh-craft-card">
     <div class="mh-craft-title"><span>03 / CHECK CARPET</span><h4>패턴과 섬유 높이를 하나의 표면으로</h4><p>텍스처 기반 초기 구성에서 절차적 패턴과 Bump·Displacement를 결합한 구조로 수정했습니다.</p></div>
     <div class="mh-carpet-compare">
      <div class="mh-carpet-column" aria-label="카펫 그래프 전후 비교">
       <figure class="ob-media"><img src="assets/myhome-carpet-before-graph.png" alt="텍스처 맵으로 구성한 체크카펫 수정 전 머티리얼 그래프" width="354" height="339" style="--media-ratio:354/339" loading="lazy"><figcaption><strong>BEFORE · GRAPH</strong><span>Texture-map setup</span></figcaption></figure>
       <figure class="ob-media"><img src="assets/myhome-carpet-after-graph.png" alt="절차적 패턴과 범프를 추가한 체크카펫 수정 후 머티리얼 그래프" width="555" height="401" style="--media-ratio:555/401" loading="lazy"><figcaption><strong>AFTER · GRAPH</strong><span>Pattern · Bump · Displacement</span></figcaption></figure>
      </div>
      <div class="mh-carpet-column" aria-label="카펫 결과 전후 비교">
       <figure class="ob-media"><img src="assets/myhome-carpet-before-result.png" alt="평평한 두 면으로 구성된 체크카펫 수정 전 결과" width="529" height="421" style="--media-ratio:529/421" loading="lazy"><figcaption><strong>BEFORE · RESULT</strong><span>Flat base surface</span></figcaption></figure>
       <figure class="ob-media"><img src="assets/myhome-carpet-after-result.png" alt="체크 패턴과 섬유 높이가 적용된 체크카펫 수정 후 결과" width="544" height="363" style="--media-ratio:544/363" loading="lazy"><figcaption><strong>AFTER · RESULT</strong><span>Check pattern · Fiber height</span></figcaption></figure>
      </div>
     </div>
    </article>
    <article class="mh-craft-card">
     <div class="mh-craft-title"><span>04 / TURNTABLE</span><h4>나무 본체와 레코드의 표면 차이</h4><p>UV와 텍스처를 구성하고 엔진에서 빛에 따른 표면 반응을 확인했습니다.</p></div>
     <figure class="ob-media mh-craft-main mh-turntable-main"><img src="assets/myhome-13-turntable-result.jpg" alt="나무 본체와 레코드 텍스처가 적용된 턴테이블 최종 결과" width="1386" height="694" loading="lazy"><figcaption><strong>TEXTURE RESULT</strong><span>나무 본체·레코드 표면 구성</span></figcaption></figure>
     <div class="mh-process-strip mh-process-two"><img src="assets/myhome-12-turntable-uv.jpg" alt="턴테이블 UV 구성" width="469" height="445" style="--media-ratio:469/445" loading="lazy"><img src="assets/myhome-14-turntable-engine.gif" alt="Unreal Engine에서 표면 반응을 확인하는 턴테이블 애니메이션" width="508" height="462" style="--media-ratio:508/462" loading="lazy"></div>
    </article>
   </div>
  </section>

  <section class="ob-section" aria-label="Lighting and Technical Implementation">
   <header class="ob-section-head"><div><span class="ob-index">05A</span><h3>Technical Implementation</h3></div><p>Lighting · Light Function · Video Material · Blueprint</p></header>
   <div class="mh-tech-grid">
    <div class="mh-center-object">
     <figure class="ob-media mh-tech-feature"><img src="assets/myhome-26-center-light.png" alt="중앙 오브제의 색과 패턴이 바닥으로 이어지는 투영광 결과" width="870" height="733" loading="lazy"><figcaption><strong>CENTER OBJECT LIGHT</strong><span>오브제의 색과 패턴을 바닥까지 연결</span></figcaption></figure>
     <div class="mh-tech-pair"><figure class="ob-media"><img src="assets/myhome-24-center-model.jpg" alt="중앙 오브제의 원형 구조 확인 화면" width="894" height="655" style="--media-ratio:894/655" loading="lazy"><figcaption><strong>INPUT</strong><span>팀원 제작 원형</span></figcaption></figure><figure class="ob-media"><img src="assets/myhome-27-light-function.jpg" alt="중앙 오브제 투영광의 Light Function 설정" width="557" height="373" style="--media-ratio:557/373" loading="lazy"><figcaption><strong>IMPLEMENTATION</strong><span>최적화·재질·Light Function</span></figcaption></figure></div>
    </div>
    <div class="mh-blueprint-stack">
     <figure class="ob-media"><img src="assets/myhome-30-video-blueprint.jpg" alt="BeginPlay에서 두 영상 소스를 여는 Room 2 영상 재생 Blueprint" width="674" height="338" style="--media-ratio:674/338" loading="lazy"><figcaption><strong>VIDEO BLUEPRINT</strong><span>BeginPlay → Sequence → Open Source</span></figcaption></figure>
     <figure class="ob-media"><img src="assets/myhome-31-video-test.gif" alt="Room 2 모니터와 빔 프로젝터에서 영상이 재생되는 테스트" width="1456" height="788" style="--media-ratio:1456/788" loading="lazy"><figcaption><strong>PLAYBACK TEST</strong><span>두 출력 장치의 영상 재생 확인</span></figcaption></figure>
     <p class="ob-section-note">중앙 오브제의 원형은 팀원이 제작했습니다. 개인 기여는 전달받은 오브제의 최적화·재질 변경·라이팅과 Room 2 영상 재생 기능입니다.</p>
    </div>
   </div>
  </section>

  <section class="ob-section" aria-label="Scene Integration">
   <header class="ob-section-head"><div><span class="ob-index">05B</span><h3>Environment Implementation</h3></div><p>Scene Integration · Room 1 + Room 2 · Final Retouch</p></header>
   <div class="mh-integration-grid">
    <div class="mh-integration-main">
     <figure class="ob-media"><img src="assets/myhome-28-integration-top.jpg" alt="Room 1과 Room 2의 배치와 출입문 위치가 보이는 통합 공간 상부 시점" width="2037" height="1095" loading="lazy"><figcaption><strong>MERGED LAYOUT</strong><span>두 방의 배치·경계·출입문 정리</span></figcaption></figure>
     <figure class="ob-media"><img src="assets/myhome-29-integration-final.png" alt="Room 2에서 Room 1과 중앙 오브제를 바라본 최종 통합 장면" width="2160" height="1108" loading="lazy"><figcaption><strong>FINAL INTEGRATION</strong><span>문 작업·공간 통합·최종 리터치</span></figcaption></figure>
    </div>
    <div class="mh-team-context">
     <p class="ob-eyebrow">TEAM CONTEXT</p><h4>Room 2는 협업 결과로만 표시</h4><p>Room 2의 공간 구성과 주요 오브젝트는 팀원 작업입니다. 아래 이미지는 영상 재생 기능이 적용된 공간 맥락을 보여줍니다.</p>
     <figure class="ob-media"><img src="assets/myhome-32-room2-monitor.jpg" alt="레트로 모니터와 캐릭터 소품이 놓인 Room 2 팀 작업 장면" width="862" height="821" loading="lazy"><figcaption><strong>ROOM 2</strong><span>개인 담당: 영상 재생 기능</span></figcaption></figure>
     <figure class="ob-media"><img src="assets/myhome-33-room2-bunk.jpg" alt="목재 벙커 침대와 패턴 침구가 보이는 Room 2 팀 작업 장면" width="1169" height="836" loading="lazy"><figcaption><strong>TEAM ENVIRONMENT</strong><span>공간·오브젝트 제작: 팀원</span></figcaption></figure>
    </div>
   </div>
  </section>

  <section class="ob-section" aria-label="Final Frames">
   <header class="ob-section-head"><div><span class="ob-index">06</span><h3>Final Results</h3></div><p>Room 1 · Integration · Final Environment</p></header>
   <div class="br-final-grid mh-final-grid">
    <figure class="ob-media"><img src="assets/myhome-04-layout-after.png" alt="침대와 책상, 빈백이 함께 보이는 Room 1 최종 전경" width="1007" height="786" loading="lazy"><figcaption><strong>ROOM 1 · WIDE</strong><span>휴식과 작업 영역의 관계</span></figcaption></figure>
    <figure class="ob-media"><img src="assets/myhome-05-hero-room1.png" alt="침대와 빈백, 체크 카펫이 보이는 Room 1 최종 장면" width="1127" height="747" loading="lazy"><figcaption><strong>REST AREA</strong><span>프랍·재질·라이팅 최종 결과</span></figcaption></figure>
    <figure class="ob-media"><img src="assets/myhome-06-workspace.jpg" alt="모니터와 책상, 선반이 보이는 Room 1 작업 공간" width="1054" height="1013" loading="lazy"><figcaption><strong>WORKSPACE</strong><span>책상과 벽면 소품 구성</span></figcaption></figure>
    <figure class="ob-media"><img src="assets/myhome-29-integration-final.png" alt="Room 1과 Room 2, 중앙 오브제가 함께 보이는 최종 통합 공간" width="2160" height="1108" loading="lazy"><figcaption><strong>TEAM FINAL</strong><span>개인: 통합·문·리터치 / 팀: Room 2 제작</span></figcaption></figure>
   </div>
   <p class="br-source-note"><span>ASSET + AI DISCLOSURE</span>Room 1의 일부 가구는 외부 에셋을 선정해 배치·재질 변경·최적화했습니다. 프로젝터와 턴테이블 일부 텍스처에는 AI 생성 이미지를 활용했으며, 외부 모델의 원형 제작은 개인 작업에 포함하지 않았습니다.</p>
  </section>
 </article>`;
};

window.renderProjectCase=function(p){
 if(p.id==='01') return window.renderOutbreakCase(p);
 if(p.id==='02') return window.renderBackroomsCase(p);
 if(p.id==='03') return window.renderHallgrimCase(p);
 if(p.id==='04') return window.renderMyHomeCase(p);
 const data=window.projectCaseStudies[p.id];
 const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const media=(id,label,note='',extra='',src='',alt='',caption='')=>`<figure class="ob-media ${extra}">${src?`<img src="${safe(src)}" alt="${safe(alt||p.imageAlt)}" width="1600" height="900"${id==='hero'?'':' loading="lazy"'}>${caption?`<figcaption>${safe(caption)}</figcaption>`:`<figcaption class="sample-label">AI 샘플 · 실제 작업 이미지 교체용</figcaption>`}`:`<div class="ob-image-slot" role="img" aria-label="${safe(label)} — 이미지 삽입 예정"><span class="ob-slot-tag">IMAGE ${safe(id.toUpperCase())}</span><div><strong>${safe(label)}</strong><span>${safe(note)}</span></div><span class="ob-slot-foot">실제 작업 이미지 삽입 영역 · 16:9</span></div>`}</figure>`;
 const heading=(number,title,sub)=>`<header class="ob-section-head"><div><span class="ob-index">${number}</span><h3>${safe(title)}</h3></div><p>${safe(sub)}</p></header>`;
 const process=data.process.map(([title,label,note,src='',alt='',caption='',extra=''],i)=>`<article>${media(`process-${i+1}`,label,note,extra,src,alt,caption)}<div class="ob-step"><span>0${i+1}</span><h4>${safe(title)}</h4></div><p>${safe(note)}</p></article>`).join('');
 const breakdown=data.breakdown.map(([kicker,title,label,copy,src='',alt='',caption='',extra=''],i)=>`<div class="ob-break-row">${media(`breakdown-${i+1}`,label,copy,extra,src,alt,caption)}<div class="ob-break-copy"><p class="ob-eyebrow">0${i+1} / ${safe(kicker)}</p><h4>${safe(title)}</h4><p>${safe(copy)}</p><p class="ob-small">${safe(label)}</p></div></div>${i===0?`<div class="ob-noise" aria-label="프로젝트 핵심 판단 흐름"><span>${safe(data.evidence[0])}</span><span aria-hidden="true">→</span><span>${safe(data.evidence[1])}</span><span aria-hidden="true">→</span><span>${safe(data.evidence[2])}</span><small>핵심 증거</small></div>`:''}`).join('');
 return `<article class="ob-case">
  <header class="ob-hero"><div class="ob-heading"><p class="case-kicker">PROJECT ${safe(p.id)} / ${safe(p.category)}</p><h2 id="case-title">${safe(p.title)}</h2><p>${safe(p.subtitle)}</p></div>${media('hero',data.claim,'가장 강한 결과를 먼저 보여주는 대표 화면','ob-hero-media',p.image)}<p class="ob-hero-line">${safe(data.claim)}</p></header>
  <section class="ob-goal-role" aria-label="Goal and Role"><div><p class="ob-eyebrow">GOAL</p><h3>${safe(data.goalTitle)}</h3><p>${safe(data.goal)}</p></div><div><p class="ob-eyebrow">MY ROLE</p><p class="ob-role">${safe(p.role)}</p><p class="ob-small">${safe(p.tools)} · ${safe(p.period)} · ${safe(p.team)}</p><p class="ob-scope-note">${safe(data.scope)}</p></div></section>
  <div class="ob-facts" aria-label="프로젝트 핵심 정보"><p><span>ROLE</span>${safe(p.role)}</p><p><span>TOOLS</span>${safe(p.tools)}</p><p><span>DURATION</span>${safe(p.period)}</p><p><span>TEAM</span>${safe(p.team)}</p></div>
  <section class="ob-section" aria-label="Process">${heading('01','Process',data.process.map(item=>item[0]).join(' → '))}<div class="ob-process">${process}</div></section>
  <section class="ob-section" aria-label="Core Breakdown">${heading('02',data.breakdownTitle,data.breakdownSub)}<div class="ob-breakdown">${breakdown}</div></section>
  <section class="ob-section" aria-label="Before and After">${heading('03','Before / After','문제 → 수정 → 확인을 같은 시점으로 비교')}<div class="ob-compare"><div><h4>Before</h4>${media('before','수정 전','문제가 보이는 초기 화면')}</div><div><h4>After</h4>${media('after','수정 후','변경 사항이 보이는 최종 화면')}</div></div><div class="ob-observation"><p><span>문제</span>${safe(data.before[0])}</p><p><span>수정</span>${safe(data.before[1])}</p><p><span>확인</span>${safe(data.before[2])}</p></div></section>
  <section class="ob-section" aria-label="Final Shots">${heading('04','Final Shots','가장 강한 결과와 디테일 3–5장')}${media('shot-1',data.final[0],'프로젝트의 전체 결과가 읽히는 와이드 샷','ob-final-wide')}<div class="ob-final-pair">${media('shot-2',data.final[1],'핵심 제작 근거가 보이는 디테일')}${media('shot-3',data.final[2],'마무리 퀄리티가 보이는 디테일')}</div></section>
  <details class="writing-guide ob-guide"><summary>이미지 교체 · 작성 안내</summary><div class="guide-content"><p>네 프로젝트 모두 같은 구조를 사용합니다. 결과 → 목표와 역할 → 과정 → 핵심 증거 → 수정 전후 → 최종 순서로 읽힙니다.</p><p>${safe(data.guide)}</p><p>설명은 이미지당 1–2문장으로 유지하고, 공동 작업·외부 에셋·본인 제작 범위를 캡션에서 구분하세요.</p></div></details><p class="ob-template-note">공통 Case Study 초안 · 이미지와 대괄호 문구 교체 전</p>
 </article>`;
};
