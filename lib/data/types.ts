export type Genre = "edm" | "hiphop" | "indie" | "kpop" | "jazz";
export type Vibe = "energetic" | "free" | "heal" | "emotion";
export type Axis = Genre | Vibe;

export type Scores = Record<Axis, number>;

export const GENRES: Genre[] = ["edm", "hiphop", "indie", "kpop", "jazz"];
export const VIBES: Vibe[] = ["energetic", "free", "heal", "emotion"];

export const emptyScores = (): Scores => ({
  edm: 0,
  hiphop: 0,
  indie: 0,
  kpop: 0,
  jazz: 0,
  energetic: 0,
  free: 0,
  heal: 0,
  emotion: 0,
});

export const GENRE_LABEL: Record<Genre, string> = {
  edm: "EDM·일렉트로닉",
  hiphop: "힙합·R&B",
  indie: "인디·밴드·록",
  kpop: "K-pop",
  jazz: "재즈·어쿠스틱",
};

export const VIBE_LABEL: Record<Vibe, string> = {
  energetic: "열광",
  free: "자유",
  heal: "힐링",
  emotion: "감성",
};

export interface Festival {
  id: string;
  name: string;
  date: string;
  month: number;
  loc: string;
  region: "수도권" | "지방";
  price: string;
  tag: string;
  lineup: string;
  outfitTip: string;
  url: string;
  color: string;
  /** 장르·바이브 가중치 (0~3) — 사용자 점수와 내적해 궁합 계산 */
  weights: Partial<Record<Axis, number>>;
}

export interface Option {
  label: string;
  sub?: string;
  effects: Partial<Record<Axis, number>>;
}

export interface Question {
  id: string;
  q: string;
  options: Option[];
}

export interface Persona {
  key: string;
  title: string;
  tagline: string;
  desc: string;
  festivalIds: string[];
}
