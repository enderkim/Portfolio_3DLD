# 포트폴리오 직접 수정 가이드

이 폴더가 현재 포트폴리오의 원본입니다.

`C:\Users\user\Documents\Codex\2026-09-14\new-chat\work\site`

## 가장 적은 크레딧으로 수정하는 방법

1. 아래 파일을 VS Code나 메모장으로 직접 수정합니다.
2. `preview-site.cmd`를 더블클릭합니다.
3. 브라우저에서 `http://127.0.0.1:4191/#work`를 확인합니다.
4. 수정이 모두 끝났을 때만 Codex에 다음 한 문장을 보냅니다.

> `C:\Users\user\Documents\Codex\2026-09-14\new-chat\work\site 변경분을 검수하고 배포만 해줘.`

중간 수정마다 배포를 요청하지 않고 여러 변경을 한 번에 모으면 크레딧을 가장 적게 사용합니다.

## 무엇을 어디서 수정하나요?

### 프로젝트 카드의 제목·기간·배너

파일: `dist/content.js`

- `id: "01"` — OutBreak
- `id: "02"` — THE BACKROOMS
- `id: "03"` — Hallgrimskirkja
- `id: "04"` — MY HOME
- `title`, `subtitle`, `image`, `period`, `role`, `tools`, `lead` 값을 수정합니다.

### 프로젝트 상세 페이지의 글과 이미지 순서

파일: `dist/outbreak.js`

찾기 기능(`Ctrl+F`)으로 아래 제목을 검색하면 해당 위치로 바로 이동합니다.

- `renderOutbreakCase` — OutBreak 상세
- `renderBackroomsCase` — THE BACKROOMS 상세
- `renderHallgrimCase` — Hallgrimskirkja 상세
- `renderMyHomeCase` — MY HOME 상세
- `CHECK CARPET` — 체크카펫 전후 비교
- `TURNTABLE` — 턴테이블 이미지
- `FINAL FRAMES` 또는 `Final Frames` — 마지막 갤러리

이미지를 바꾸려면 `<img src="assets/파일명.png" ...>`의 파일명만 바꾸면 됩니다.

### 이미지 파일 넣기

폴더: `dist/assets`

1. 새 이미지를 이 폴더에 복사합니다.
2. 영문 소문자와 하이픈으로 파일명을 정합니다. 예: `myhome-carpet-after.png`
3. `dist/outbreak.js` 또는 `dist/content.js`에서 같은 파일명을 사용합니다.

기존 파일을 덮어쓸 때 브라우저 캐시가 남을 수 있으므로 가능하면 새 파일명을 사용하세요.

### 크기·간격·배치 수정

파일: `dist/outbreak.css`

MY HOME 관련 스타일은 `.mh-`로 시작합니다.

- `.mh-craft-grid` — 프랍 카드 전체 배열
- `.mh-process-strip` — 작은 과정 이미지 배열
- `.mh-process-projector` — 빔프로젝터 3장 배열
- `.mh-carpet-compare` — 체크카펫 전후 비교
- `.mh-final-grid` — 마지막 갤러리

CSS가 익숙하지 않으면 이 파일은 직접 수정하지 않고, 원하는 배치 변경을 한 번에 모아서 Codex에 요청하는 편이 안전합니다.

## 이미지 순서만 바꾸는 예시

아래처럼 `<img>` 태그의 순서를 바꾸면 화면 순서도 바뀝니다.

```html
<img src="assets/photo-01.png" alt="첫 번째 이미지">
<img src="assets/photo-02.png" alt="두 번째 이미지">
```

`photo-02.png`를 먼저 보이게 하려면 두 줄의 위치를 서로 바꿉니다.

## 수정할 때 지켜야 할 것

- 따옴표(`"`)와 꺾쇠(`< >`)를 지우지 않습니다.
- 이미지 경로는 항상 `assets/파일명` 형식을 유지합니다.
- 파일 수정 전 복사본을 만들어두면 안전합니다.
- 라이브 사이트 주소는 직접 수정되지 않습니다. 로컬 확인 후 마지막에 배포가 필요합니다.
- `dist/index.html`의 `?v=숫자`는 배포할 때 Codex가 갱신하므로 직접 건드리지 않아도 됩니다.

## 추천 작업 흐름

1. 이미지와 문구를 한 폴더에 모읍니다.
2. `content.js`와 `outbreak.js`를 한 번에 수정합니다.
3. `preview-site.cmd`로 여러 번 무료 확인합니다.
4. 이상이 없을 때 배포만 한 번 요청합니다.

