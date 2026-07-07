import { Persona } from "./types";

/**
 * 페르소나 키 = `${주장르}_${대표무드}`
 *  - 주장르: edm | hiphop | indie | kpop | jazz
 *  - 대표무드: energetic | free | heal | emotion
 */
export const PERSONAS: Record<string, Persona> = {
  edm_energetic: {
    key: "edm_energetic",
    title: "네온 드랍 헌터",
    tagline: "심장이 먼저 드랍을 알아채요",
    desc: "큰 사운드, 강한 조명, 폭죽 같은 순간에 완전히 살아나는 타입. 타임테이블의 피크 타임을 놓치지 않고 밤까지 에너지를 밀어붙입니다.",
    festivalIds: ["edc", "waterbomb"],
  },
  edm_free: {
    key: "edm_free",
    title: "레이브 노마드",
    tagline: "정해진 동선보다 끌리는 비트",
    desc: "무대와 무대 사이를 유연하게 옮겨 다니며 자기만의 흐름을 찾는 타입. 낯선 DJ 셋도 편견 없이 즐기는 탐험형 리스너입니다.",
    festivalIds: ["edc", "pentaport"],
  },
  edm_heal: {
    key: "edm_heal",
    title: "선셋 하우스러",
    tagline: "노을 아래 느슨한 킥",
    desc: "강한 비트도 좋지만 오래 머물 수 있는 멜로디와 공간감을 더 좋아합니다. 시원한 바람, 여유로운 하우스, 편한 동선이 잘 맞아요.",
    festivalIds: ["edc", "jarasum"],
  },
  edm_emotion: {
    key: "edm_emotion",
    title: "멜로딕 별빛러",
    tagline: "빌드업 끝의 벅참을 기다려요",
    desc: "터지는 순간보다 그 직전의 고조감에 더 크게 반응하는 타입. 감정선이 또렷한 일렉트로닉 무대에서 오래 기억될 장면을 만납니다.",
    festivalIds: ["edc", "gmf"],
  },
  hiphop_energetic: {
    key: "hiphop_energetic",
    title: "훅 떼창 스프린터",
    tagline: "벌스가 오면 발끝이 먼저 튀어요",
    desc: "강한 비트와 관객 호응이 쌓일수록 존재감이 커지는 타입. 래퍼가 마이크를 넘기는 순간 가장 크게 받아치는 사람입니다.",
    festivalIds: ["waterbomb", "edc"],
  },
  hiphop_free: {
    key: "hiphop_free",
    title: "그루브 플로터",
    tagline: "박자 사이로 느슨하게 흘러요",
    desc: "정답 같은 관람법보다 몸이 가는 대로 리듬을 타는 편. 힙합, R&B, 댄스홀 사이를 자유롭게 넘나드는 바이브 중심형입니다.",
    festivalIds: ["waterbomb", "pentaport"],
  },
  hiphop_heal: {
    key: "hiphop_heal",
    title: "로파이 피크닉러",
    tagline: "낮은 베이스와 편한 자리면 충분",
    desc: "요란한 경쟁보다 좋은 소리와 편한 분위기를 선호합니다. 여유로운 R&B 훅과 친구들과의 느린 대화가 페스티벌의 핵심이에요.",
    festivalIds: ["gmf", "jarasum"],
  },
  hiphop_emotion: {
    key: "hiphop_emotion",
    title: "알앤비 새벽파",
    tagline: "한 소절에 하루가 정리돼요",
    desc: "가사, 톤, 공기감에 민감한 감상형. 화려한 무대보다 마음에 오래 남는 보컬과 그루브를 찾아 움직입니다.",
    festivalIds: ["waterbomb", "gmf"],
  },
  indie_energetic: {
    key: "indie_energetic",
    title: "기타 리프 점퍼",
    tagline: "첫 코드가 울리면 이미 앞으로",
    desc: "라이브의 거친 질감과 관객의 열기에 약한 타입. 밴드 사운드가 터지는 순간 몸으로 먼저 반응합니다.",
    festivalIds: ["pentaport", "busanrock"],
  },
  indie_free: {
    key: "indie_free",
    title: "스테이지 방랑자",
    tagline: "숨은 무대를 발견하는 게 취미",
    desc: "메인 헤드라이너만큼 작은 무대의 발견을 좋아합니다. 즉흥적인 동선과 새로운 밴드가 주는 재미에 강합니다.",
    festivalIds: ["pentaport", "busanrock"],
  },
  indie_heal: {
    key: "indie_heal",
    title: "잔디밭 밴드러",
    tagline: "돗자리 위에서도 라이브는 진심",
    desc: "큰 소리보다 오래 듣고 싶은 사운드를 찾는 타입. 선선한 바람, 담요, 잔잔한 기타 톤이 잘 어울립니다.",
    festivalIds: ["gmf", "pentaport"],
  },
  indie_emotion: {
    key: "indie_emotion",
    title: "노을 떼창 수집가",
    tagline: "후렴 한 줄이 계절이 돼요",
    desc: "밴드 음악의 서사와 떼창에 마음이 크게 움직입니다. 노을 무대에서 모르는 사람들과 같은 가사를 부르는 순간을 사랑해요.",
    festivalIds: ["gmf", "pentaport"],
  },
  kpop_energetic: {
    key: "kpop_energetic",
    title: "펜스 앞 화력단",
    tagline: "최애 등장 3초 전부터 풀충전",
    desc: "퍼포먼스, 함성, 물대포, 직캠까지 모두 챙기는 타입. 가까운 거리와 압도적인 현장감에서 만족도가 크게 올라갑니다.",
    festivalIds: ["waterbomb", "edc"],
  },
  kpop_free: {
    key: "kpop_free",
    title: "직캠 루트메이커",
    tagline: "동선도 콘텐츠처럼 짜요",
    desc: "좋아하는 아티스트를 중심으로 움직이되, 중간중간 새로운 무대도 즐깁니다. 실시간 분위기를 읽고 빠르게 자리를 잡는 감각이 좋아요.",
    festivalIds: ["waterbomb", "gmf"],
  },
  kpop_heal: {
    key: "kpop_heal",
    title: "팬심 피크닉러",
    tagline: "응원도 편안하게 오래",
    desc: "무리해서 앞에 붙기보다 좋은 자리에서 오래 즐기는 타입. 좋아하는 곡이 나오면 조용히 벅차오르는 팬심이 있습니다.",
    festivalIds: ["gmf", "jarasum"],
  },
  kpop_emotion: {
    key: "kpop_emotion",
    title: "엔딩요정 감성파",
    tagline: "마지막 멘트에 마음이 흔들려요",
    desc: "화려한 퍼포먼스 뒤에 남는 이야기와 감정에 강합니다. 발라드, 팬송, 엔딩 무대에서 만족도가 높아요.",
    festivalIds: ["gmf", "waterbomb"],
  },
  jazz_energetic: {
    key: "jazz_energetic",
    title: "스윙 풋워커",
    tagline: "잔잔해 보여도 발끝은 바빠요",
    desc: "재즈의 여유에 리듬감 있는 흥을 얹어 즐기는 타입. 브라스가 치고 들어오는 순간 자연스럽게 몸이 움직입니다.",
    festivalIds: ["jarasum", "gmf"],
  },
  jazz_free: {
    key: "jazz_free",
    title: "즉흥 솔로 산책자",
    tagline: "예상 밖 전개가 제일 좋아요",
    desc: "정돈된 셋리스트보다 즉흥 연주와 우연한 발견을 좋아합니다. 무대를 옮겨 다니며 그날의 공기를 수집하는 편이에요.",
    festivalIds: ["jarasum", "busanrock"],
  },
  jazz_heal: {
    key: "jazz_heal",
    title: "담요 위 힐링러",
    tagline: "좋은 날씨와 좋은 음이면 충분",
    desc: "복잡한 동선보다 편한 자리와 좋은 사운드를 우선합니다. 피크닉처럼 오래 머물 수 있는 페스티벌에서 가장 빛나요.",
    festivalIds: ["jarasum", "gmf"],
  },
  jazz_emotion: {
    key: "jazz_emotion",
    title: "문라이트 리스너",
    tagline: "한 음이 오래 남는 밤",
    desc: "연주의 결, 보컬의 숨, 공간의 울림을 섬세하게 듣는 타입. 조용히 몰입할 수 있는 무대에서 깊게 충전됩니다.",
    festivalIds: ["jarasum", "gmf"],
  },
};

export const fallbackPersona: Persona = PERSONAS.indie_emotion;
