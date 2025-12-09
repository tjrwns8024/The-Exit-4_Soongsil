function guideScreen() {
  // 배경
  background(8, 8, 10);

  const cx = width * 0.5;
  const cy = height * 0.5;

  // 패널 크기 (비율 기반)
  const panelW = width * 1;
  const panelH = height * 1;

  // 공통 스케일 (글자 크기, 간격 등)
  const base = min(width, height);
  const padding = base * 0.08;      // 패널 안쪽 여백
  const lineGap = base * 0.05;      // 줄 간격
  const titleSize = base * 0.05;
  const sectionSize = base * 0.022;
  const textSizeN = base * 0.04;
  const textSizeSmall = base * 0.03;

  // 컬러 팔레트
  const titleColor   = color(255);                  // 제목: 흰색
  const sectionColor = color(255, 220, 140);        // 섹션 타이틀: 포인트 색
  const bodyColor    = color(255);                  // 본문
  const hintColor    = color(255);                  // 힌트
  const footerColor  = color(255);                  // 마지막 문구

  // 2열 레이아웃
  const left = cx - panelW / 2 + padding;
  const top = cy - panelH / 2 + padding;
  const colGap = base * 0.06;
  const colWidth = (panelW - padding * 2 - colGap) / 2;
  const leftColX = left;
  const rightColX = left + colWidth + colGap;

  push();
  rectMode(CENTER);

  // 반투명 패널
  noStroke();
  fill(15, 18, 22, 230);
  rect(cx, cy, panelW, panelH, base * 0.02);

  // 살짝 라인
  stroke(255, 255, 255, 30);
  noFill();
  rect(cx, cy, panelW * 0.98, panelH * 0.96, base * 0.02);

  // 텍스트 설정
  textAlign(LEFT, TOP);

  // 제목
  textStyle(BOLD);
  textSize(titleSize);
  fill(titleColor);
  text("사용 가이드", left, top);

  // 공통 시작 y
  const startY = top + lineGap * 1.8;

  // ─────────────────────────────
  // 왼쪽 열 : 조작법 + AI/p5.js 정보
  // ─────────────────────────────
  let yLeft = startY;

  // 조작법 (섹션 타이틀 → sectionColor)
  textStyle(BOLD);
  textSize(sectionSize);
  fill(sectionColor);
  text("조작법", leftColX, yLeft);
  yLeft += lineGap * 1.2;

  // 조작법 내용 → 흰색
  textStyle(NORMAL);
  textSize(textSizeN);
  fill(bodyColor);
  text("↑  : 앞으로 이동", leftColX, yLeft); yLeft += lineGap;
  text("↓  : 뒤로 이동",   leftColX, yLeft); yLeft += lineGap;
  text("←  : 왼쪽으로 회전", leftColX, yLeft); yLeft += lineGap;
  text("→  : 오른쪽으로 회전", leftColX, yLeft); yLeft += lineGap * 1.6;

  // AI 사용 비율 (제목만 sectionColor)
  textStyle(BOLD);
  textSize(sectionSize);
  fill(sectionColor);
  text("AI 사용 비율", leftColX, yLeft);
  yLeft += lineGap * 1.1;

  textStyle(NORMAL);
  textSize(textSizeSmall);
  fill(bodyColor);
  text("50% (ChatGPT, Gemini, Claude)", leftColX, yLeft); 
  yLeft += lineGap;
  text("- 레이캐스팅 엔진 전반에 활용", leftColX, yLeft);
  yLeft += lineGap * 1.4;

  // AI 생성 콘텐츠 (제목만 sectionColor)
  textStyle(BOLD);
  textSize(sectionSize);
  fill(sectionColor);
  text("AI 생성 콘텐츠", leftColX, yLeft);
  yLeft += lineGap * 1.1;

  textStyle(NORMAL);
  textSize(textSizeSmall);
  fill(bodyColor);
  text("- 이미지 : Gemini", leftColX, yLeft);
  yLeft += lineGap * 1.4;

  // 대표적으로 사용한 p5.js (제목만 sectionColor)
  textStyle(BOLD);
  textSize(sectionSize);
  fill(sectionColor);
  text("대표적으로 사용한 p5.js", leftColX, yLeft);
  yLeft += lineGap * 1.1;

  textStyle(NORMAL);
  textSize(textSizeSmall);
  fill(bodyColor);
  text("· 키보드 움직임 처리 (keyPressed())", leftColX, yLeft);
  yLeft += lineGap * 1.2;

  // ─────────────────────────────
  // 오른쪽 열 : 규칙 + 힌트
  // ─────────────────────────────
  let yRight = startY;

  // 규칙 (제목만 sectionColor)
  textStyle(BOLD);
  textSize(sectionSize);
  fill(sectionColor);
  text("규칙", rightColX, yRight);
  yRight += lineGap * 1.2;

  textStyle(NORMAL);
  textSize(textSizeN);
  fill(bodyColor);
  text("· 이상현상이 나타나면 뒤로 돌아가세요.", rightColX, yRight);
  yRight += lineGap;
  text("· 이상현상이 보이지 않으면 앞으로 나아가세요.", rightColX, yRight);
  yRight += lineGap * 1.1;

  // 힌트 (흰색)
  textSize(textSizeSmall);
  fill(hintColor);
  text("(힌트: 액자, 사람의 행동, 문을 유심히 관찰해보세요.)", rightColX, yRight);
  yRight += lineGap * 1.4;

  // ─────────────────────────────
  // 마지막 문구 (아래쪽)
  // ─────────────────────────────
  const footerY = max(yLeft, yRight) + lineGap * 0.8;
  textStyle(BOLD);
  textSize(textSizeN);
  fill(footerColor);
  text("끊임없는 이 미로에서 탈출해보세요. 🙏", leftColX, footerY);

  pop();

  // 닫기 버튼
  drawGuideCloseButton();
}

function drawGuideCloseButton() {
  const base = min(width, height);
  const margin = base * 0.03;
  const size   = base * 0.045; // 버튼 한 변

  const x = width  - margin - size / 2;
  const y = margin + size / 2;

  push();

  rectMode(CENTER);
  stroke(220);
  strokeWeight(2);
  fill(20, 20, 24, 230);
  rect(x, y, size, size, base * 0.01);

  // X 표시
  const inner = size * 0.4;
  stroke(240);
  strokeWeight(2);
  line(x - inner, y - inner, x + inner, y + inner);
  line(x - inner, y + inner, x + inner, y - inner);

  pop();
}

function isGuideCloseButtonClicked(mx, my) {
  const base = min(width, height);
  const margin = base * 0.03;
  const size   = base * 0.045;

  const x = width  - margin - size / 2;
  const y = margin + size / 2;

  // 단순 박스 히트 테스트
  return (
    mx >= x - size / 2 &&
    mx <= x + size / 2 &&
    my >= y - size / 2 &&
    my <= y + size / 2
  );
}