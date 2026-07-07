import {
  Axis,
  Festival,
  GENRES,
  GENRE_LABEL,
  Genre,
  Option,
  Persona,
  Question,
  Scores,
  VIBES,
  VIBE_LABEL,
  emptyScores,
} from "./data/types";
import { FESTIVALS } from "./data/festivals";
import { QUESTIONS, QUIZ_LEN } from "./data/questions";
import { PERSONAS, fallbackPersona } from "./data/personas";

const ALL_AXES: Axis[] = [
  "edm",
  "hiphop",
  "indie",
  "kpop",
  "jazz",
  "energetic",
  "free",
  "heal",
  "emotion",
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** 매 판 랜덤 출제. 대표 문항(genre/vibe/outfit)은 항상 포함해 판정 안정성 확보 */
export function pickQuestions(): Question[] {
  const anchors = ["genre", "vibe", "outfit"];
  const anchored = QUESTIONS.filter((q) => anchors.includes(q.id));
  const rest = shuffle(QUESTIONS.filter((q) => !anchors.includes(q.id)));
  const need = Math.max(0, QUIZ_LEN - anchored.length);
  return shuffle([...anchored, ...rest.slice(0, need)]);
}

export function applyEffects(scores: Scores, option: Option): Scores {
  const next = { ...scores };
  (Object.keys(option.effects) as Axis[]).forEach((ax) => {
    next[ax] += option.effects[ax] ?? 0;
  });
  return next;
}

export function scoreFrom(options: Option[]): Scores {
  return options.reduce(applyEffects, emptyScores());
}

function cosine(u: Scores, w: Partial<Record<Axis, number>>): number {
  let dot = 0;
  let un = 0;
  let wn = 0;
  ALL_AXES.forEach((ax) => {
    const uv = u[ax];
    const wv = w[ax] ?? 0;
    dot += uv * wv;
    un += uv * uv;
    wn += wv * wv;
  });
  if (un === 0 || wn === 0) return 0;
  return dot / (Math.sqrt(un) * Math.sqrt(wn));
}

export interface Ranked {
  festival: Festival;
  pct: number;
}

export interface Result {
  persona: Persona;
  ranked: Ranked[];
  topGenre: Genre;
  reasons: string[];
}

export function computeResult(scores: Scores): Result {
  const topGenre = GENRES.reduce((best, g) =>
    scores[g] > scores[best] ? g : best
  );

  const topVibe = VIBES.reduce((best, vibe) =>
    scores[vibe] > scores[best] ? vibe : best
  );
  const persona = PERSONAS[`${topGenre}_${topVibe}`] ?? fallbackPersona;

  const ranked: Ranked[] = FESTIVALS.map((festival) => ({
    festival,
    pct: Math.round(cosine(scores, festival.weights) * 100),
  })).sort((a, b) => b.pct - a.pct);

  const top = ranked[0].festival;
  const reasons = ALL_AXES.map((ax) => ({
    ax,
    v: scores[ax] * (top.weights[ax] ?? 0),
  }))
    .filter((r) => r.v > 0)
    .sort((a, b) => b.v - a.v)
    .slice(0, 3)
    .map((r) => labelFor(r.ax));

  return { persona, ranked, topGenre, reasons };
}

function labelFor(ax: Axis): string {
  if (ax in GENRE_LABEL) return GENRE_LABEL[ax as Genre];
  return VIBE_LABEL[ax as keyof typeof VIBE_LABEL];
}
