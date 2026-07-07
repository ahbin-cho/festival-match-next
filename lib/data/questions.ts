import { Question } from "./types";

/** 매 판 이 풀에서 QUIZ_LEN 개를 랜덤으로 뽑아 출제 */
export const QUIZ_LEN = 13;

export const QUESTIONS: Question[] = [
  {
    id: "genre",
    q: "지금 플레이리스트 첫 곡으로 가장 끌리는 건?",
    options: [
      { label: "심장을 때리는 EDM 드랍", sub: "크게, 빠르게, 번쩍이게", effects: { edm: 3, energetic: 2 } },
      { label: "그루브 좋은 힙합·R&B", sub: "비트 위에 느슨하게", effects: { hiphop: 3, free: 1 } },
      { label: "기타 사운드 가득한 밴드곡", sub: "라이브 질감이 중요해", effects: { indie: 3, free: 2 } },
      { label: "화력 좋은 K-pop 타이틀", sub: "퍼포먼스와 떼창까지", effects: { kpop: 3, energetic: 1 } },
      { label: "여유로운 재즈·어쿠스틱", sub: "공기감까지 듣는 편", effects: { jazz: 3, heal: 2 } },
    ],
  },
  {
    id: "vibe",
    q: "페스티벌에서 내가 원하는 장면은?",
    options: [
      { label: "조명 터지고 다 같이 점프", effects: { energetic: 3, edm: 1 } },
      { label: "정해진 계획 없이 무대 탐험", effects: { free: 3, indie: 1 } },
      { label: "잔디밭에서 길게 쉬며 감상", effects: { heal: 3, jazz: 1 } },
      { label: "노래 한 곡에 마음이 찡", effects: { emotion: 3, kpop: 1 } },
    ],
  },
  {
    id: "outfit",
    q: "페스티벌 룩은 어떤 쪽에 가까워?",
    options: [
      { label: "방수 가능, 물놀이 준비 완료", effects: { kpop: 2, hiphop: 1, energetic: 2 } },
      { label: "네온·실버 포인트로 존재감", effects: { edm: 3, energetic: 1 } },
      { label: "밴드티와 편한 운동화", effects: { indie: 3, free: 2 } },
      { label: "니트·가디건 가을 감성", effects: { emotion: 3, heal: 1 } },
      { label: "피크닉 캐주얼에 담요 한 장", effects: { jazz: 2, heal: 3 } },
    ],
  },
  {
    id: "energy",
    q: "체력 게이지를 솔직하게 고르면?",
    options: [
      { label: "새벽까지 논스톱 풀파워", effects: { edm: 2, energetic: 3 } },
      { label: "뛰다가 쉬다가 리듬 있게", effects: { hiphop: 1, indie: 1, free: 2 } },
      { label: "앉아서 오래 듣는 게 최고", effects: { jazz: 2, heal: 3 } },
      { label: "피크 타임에만 몰아서 집중", effects: { kpop: 1, emotion: 2 } },
    ],
  },
  {
    id: "crowd",
    q: "사람 많은 현장은 나에게?",
    options: [
      { label: "인파 속 열기가 곧 축제", effects: { kpop: 1, energetic: 3 } },
      { label: "북적임 속에서도 내 리듬대로", effects: { hiphop: 1, free: 3 } },
      { label: "적당한 거리감이 있어야 편해", effects: { jazz: 1, heal: 3 } },
      { label: "좋아하는 무대라면 감수 가능", effects: { indie: 1, emotion: 2 } },
    ],
  },
  {
    id: "route",
    q: "타임테이블을 받으면 제일 먼저 하는 일은?",
    options: [
      { label: "헤드라이너 피크 타임부터 표시", effects: { edm: 1, kpop: 1, energetic: 2 } },
      { label: "겹치는 무대 사이 최적 동선 설계", effects: { free: 3, hiphop: 1 } },
      { label: "쉴 곳, 먹을 곳, 화장실 체크", effects: { heal: 3, jazz: 1 } },
      { label: "꼭 듣고 싶은 곡 나올 무대 저장", effects: { emotion: 3, indie: 1 } },
    ],
  },
  {
    id: "discovery",
    q: "모르는 아티스트 무대가 시작됐다면?",
    options: [
      { label: "소리 좋으면 바로 앞까지 간다", effects: { indie: 2, free: 2 } },
      { label: "비트가 세면 일단 몸부터 맡긴다", effects: { edm: 2, energetic: 2 } },
      { label: "한 곡만 듣고 취향이면 머문다", effects: { jazz: 1, heal: 1, free: 1 } },
      { label: "가사나 보컬이 꽂히면 저장한다", effects: { hiphop: 1, emotion: 2 } },
    ],
  },
  {
    id: "food",
    q: "페스티벌 푸드존에서는?",
    options: [
      { label: "빨리 먹고 다시 무대 앞으로", effects: { energetic: 2, kpop: 1 } },
      { label: "새로운 메뉴를 하나씩 탐험", effects: { free: 2, hiphop: 1 } },
      { label: "돗자리 펴고 천천히 나눠 먹기", effects: { heal: 3, jazz: 1 } },
      { label: "좋은 노래 들으며 디저트까지", effects: { emotion: 2, indie: 1 } },
    ],
  },
  {
    id: "photo",
    q: "사진을 찍는다면 어떤 컷이 좋아?",
    options: [
      { label: "조명과 폭죽이 터지는 순간", effects: { edm: 2, energetic: 2 } },
      { label: "친구들과 자유롭게 웃는 컷", effects: { hiphop: 1, free: 2 } },
      { label: "잔디와 하늘이 넓게 보이는 컷", effects: { jazz: 2, heal: 2 } },
      { label: "무대 위 아티스트의 표정", effects: { kpop: 1, emotion: 2 } },
    ],
  },
  {
    id: "weather",
    q: "야외에서 갑자기 비가 온다면?",
    options: [
      { label: "우비 입고 더 신나게 뛴다", effects: { indie: 2, energetic: 2, free: 1 } },
      { label: "물놀이라 생각하고 즐긴다", effects: { kpop: 2, energetic: 1 } },
      { label: "지붕 아래서 여유롭게 기다린다", effects: { jazz: 1, heal: 2 } },
      { label: "비 오는 노래가 더 오래 남는다", effects: { emotion: 3 } },
    ],
  },
  {
    id: "companion",
    q: "누구와 가는 그림이 가장 좋아?",
    options: [
      { label: "텐션 높은 친구들과 우르르", effects: { kpop: 1, energetic: 2 } },
      { label: "취향 맞는 소수 정예", effects: { indie: 2, free: 1 } },
      { label: "연인이나 절친과 감성 데이트", effects: { emotion: 3, heal: 1 } },
      { label: "혼자서도 충분히 즐긴다", effects: { jazz: 1, free: 2 } },
    ],
  },
  {
    id: "region",
    q: "페스티벌을 위해 어디까지 갈 수 있어?",
    options: [
      { label: "수도권 안에서 가볍게", effects: { kpop: 1, edm: 1, heal: 1 } },
      { label: "여행 겸 지방 원정도 OK", effects: { indie: 2, jazz: 1, free: 1 } },
      { label: "라인업이 좋으면 어디든", effects: { edm: 1, indie: 1, energetic: 1 } },
      { label: "숙소까지 예쁜 곳이면 더 좋아", effects: { emotion: 1, heal: 2 } },
    ],
  },
  {
    id: "budget",
    q: "티켓 예산은 어느 쪽에 가까워?",
    options: [
      { label: "무료거나 최대한 가볍게", effects: { indie: 2, free: 1 } },
      { label: "10만 원 안팎이면 적당", effects: { hiphop: 1, kpop: 1, emotion: 1 } },
      { label: "제대로면 프리미엄도 투자", effects: { edm: 2, kpop: 1, energetic: 1 } },
      { label: "가격보다 오래 머물 만족감", effects: { jazz: 1, heal: 2 } },
    ],
  },
  {
    id: "season",
    q: "더 끌리는 계절 무드는?",
    options: [
      { label: "한여름, 물과 땀과 에너지", effects: { kpop: 2, energetic: 2 } },
      { label: "초가을, 노을과 선선한 바람", effects: { emotion: 3, heal: 2 } },
      { label: "밤공기 차가운 레이브", effects: { edm: 2, free: 1 } },
      { label: "강변이나 숲의 낮 공연", effects: { jazz: 2, heal: 2 } },
    ],
  },
  {
    id: "stage",
    q: "무대 앞 내 자리는 주로 어디?",
    options: [
      { label: "맨 앞 펜스, 아티스트와 눈맞춤", effects: { kpop: 2, energetic: 2 } },
      { label: "스탠딩 한복판에서 함께 점프", effects: { edm: 2, indie: 1, free: 2 } },
      { label: "사이드에서 동선 챙기며 보기", effects: { hiphop: 1, free: 2 } },
      { label: "뒤쪽 잔디밭, 소리에 몸을 맡기기", effects: { jazz: 2, heal: 3 } },
    ],
  },
  {
    id: "sound",
    q: "좋은 무대를 판단하는 기준은?",
    options: [
      { label: "베이스와 음압이 온몸에 오는지", effects: { edm: 2, energetic: 2 } },
      { label: "연주가 얼마나 날것으로 살아있는지", effects: { indie: 3, free: 1 } },
      { label: "보컬과 가사가 마음에 남는지", effects: { kpop: 1, emotion: 3 } },
      { label: "소리가 편하고 오래 들어지는지", effects: { jazz: 2, heal: 3 } },
    ],
  },
  {
    id: "goods",
    q: "굿즈 소비 스타일은?",
    options: [
      { label: "야광봉·타월 같은 현장템 필수", effects: { edm: 2, kpop: 1, energetic: 1 } },
      { label: "밴드 티셔츠나 LP는 사야 제맛", effects: { indie: 3 } },
      { label: "스티커·키링처럼 작은 기념품", effects: { hiphop: 1, free: 1 } },
      { label: "굿즈보다 순간을 눈에 담기", effects: { jazz: 1, heal: 2, emotion: 2 } },
    ],
  },
  {
    id: "moment",
    q: "가장 짜릿할 것 같은 순간은?",
    options: [
      { label: "드랍 터지고 폭죽 올라갈 때", effects: { edm: 3, energetic: 2 } },
      { label: "관객 떼창이 무대를 덮을 때", effects: { kpop: 2, emotion: 2 } },
      { label: "기타 솔로가 길게 터질 때", effects: { indie: 3, free: 1 } },
      { label: "노을 지며 선율이 퍼질 때", effects: { jazz: 2, heal: 3 } },
    ],
  },
  {
    id: "afterparty",
    q: "공연이 끝나고 나면?",
    options: [
      { label: "2차로 더 놀러 간다", effects: { edm: 2, energetic: 2 } },
      { label: "근처에서 오늘의 무대 복기", effects: { hiphop: 1, indie: 1, free: 1 } },
      { label: "숙소에서 사진 정리하며 쉬기", effects: { emotion: 2, heal: 2 } },
      { label: "밤 산책으로 귀를 식힌다", effects: { jazz: 1, heal: 2 } },
    ],
  },
  {
    id: "planning",
    q: "나는 페스티벌을 준비할 때?",
    options: [
      { label: "준비물 체크리스트까지 완벽히", effects: { heal: 2, kpop: 1 } },
      { label: "핵심 무대만 찍고 나머진 즉흥", effects: { free: 3, indie: 1 } },
      { label: "셋리스트 예습으로 감정선 준비", effects: { emotion: 3 } },
      { label: "체력 관리보다 현장 텐션 믿기", effects: { energetic: 3, edm: 1 } },
    ],
  },
  {
    id: "arrival",
    q: "입장 시간은 어떤 편이 좋아?",
    options: [
      { label: "오픈런해서 앞자리부터 잡기", effects: { energetic: 2, kpop: 2 } },
      { label: "여유롭게 들어가서 분위기 보기", effects: { heal: 2, jazz: 1 } },
      { label: "보고 싶은 무대 시간에 맞춰 입장", effects: { emotion: 2, indie: 1 } },
      { label: "일단 가서 현장 흐름대로 움직이기", effects: { free: 3, hiphop: 1 } },
    ],
  },
  {
    id: "phone",
    q: "휴대폰은 공연 중에 어떻게 써?",
    options: [
      { label: "직캠과 사진을 제대로 남긴다", effects: { kpop: 2, emotion: 1 } },
      { label: "필요한 순간만 찍고 바로 즐긴다", effects: { energetic: 2, hiphop: 1 } },
      { label: "지도와 타임테이블 확인용", effects: { free: 2, indie: 1 } },
      { label: "가방에 넣고 소리에 집중한다", effects: { jazz: 2, heal: 2 } },
    ],
  },
  {
    id: "waiting",
    q: "기다리는 시간이 길어지면?",
    options: [
      { label: "주변 사람들과 금방 친해진다", effects: { free: 2, hiphop: 1 } },
      { label: "응원법이나 떼창을 예습한다", effects: { kpop: 2, emotion: 1 } },
      { label: "간식 먹고 체력을 아껴둔다", effects: { heal: 3, jazz: 1 } },
      { label: "기다림도 텐션으로 버틴다", effects: { energetic: 3, edm: 1 } },
    ],
  },
  {
    id: "stage-switch",
    q: "두 무대가 겹치면 나는?",
    options: [
      { label: "후회 없는 헤드라이너 한 방", effects: { energetic: 2, edm: 1, kpop: 1 } },
      { label: "절반씩 쪼개서 둘 다 본다", effects: { free: 3 } },
      { label: "더 편하게 들을 수 있는 쪽", effects: { heal: 2, jazz: 1 } },
      { label: "요즘 마음에 박힌 곡이 있는 쪽", effects: { emotion: 3, indie: 1 } },
    ],
  },
  {
    id: "crew-role",
    q: "친구들과 가면 내 역할은?",
    options: [
      { label: "분위기 올리는 텐션 담당", effects: { energetic: 3, kpop: 1 } },
      { label: "동선 바꾸는 즉흥 담당", effects: { free: 3, indie: 1 } },
      { label: "돗자리와 물 챙기는 케어 담당", effects: { heal: 3, jazz: 1 } },
      { label: "좋은 무대 추천하는 감상 담당", effects: { emotion: 2, hiphop: 1 } },
    ],
  },
  {
    id: "rest",
    q: "쉬는 시간에 제일 하고 싶은 건?",
    options: [
      { label: "다음 무대 앞쪽 자리 잡기", effects: { energetic: 2, kpop: 1 } },
      { label: "굿즈 부스나 작은 무대 구경", effects: { free: 2, indie: 1 } },
      { label: "그늘에서 물 마시며 충전", effects: { heal: 3 } },
      { label: "방금 본 무대 플레이리스트 저장", effects: { emotion: 2, hiphop: 1 } },
    ],
  },
  {
    id: "lighting",
    q: "무대 연출 중 제일 끌리는 건?",
    options: [
      { label: "레이저와 스트로브가 쏟아지는 밤", effects: { edm: 3, energetic: 2 } },
      { label: "아티스트와 관객이 가까운 작은 무대", effects: { indie: 2, free: 2 } },
      { label: "해 질 무렵 따뜻한 자연광", effects: { jazz: 2, heal: 2 } },
      { label: "엔딩 조명 아래 마지막 멘트", effects: { kpop: 1, emotion: 3 } },
    ],
  },
  {
    id: "memory",
    q: "집에 돌아와 가장 오래 남는 건?",
    options: [
      { label: "아직도 몸에 남은 베이스", effects: { edm: 2, energetic: 2 } },
      { label: "우연히 발견한 새 아티스트", effects: { indie: 2, free: 2 } },
      { label: "편안했던 공기와 풍경", effects: { jazz: 2, heal: 2 } },
      { label: "같이 부른 한 줄의 가사", effects: { kpop: 1, emotion: 3 } },
    ],
  },
  {
    id: "pastlife",
    q: "전생에 나는 페스티벌에서...",
    options: [
      { label: "무대를 뒤집던 DJ", effects: { edm: 3 } },
      { label: "마이크를 넘기던 래퍼", effects: { hiphop: 3 } },
      { label: "기타를 멘 밴드 프론트", effects: { indie: 3 } },
      { label: "떼창을 이끌던 아이돌", effects: { kpop: 3 } },
      { label: "노을 아래 색소포니스트", effects: { jazz: 3 } },
    ],
  },
];
