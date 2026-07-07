"use client";

import { useMemo, useState } from "react";
import { Option, Question, Vibe, emptyScores } from "@/lib/data/types";
import { QUIZ_LEN } from "@/lib/data/questions";
import {
  applyEffects,
  computeResult,
  pickQuestions,
  Result,
} from "@/lib/logic";

type Stage = "cover" | "quiz" | "result";

const MASCOT = "/images/melo-mascot.png";
const PERSONA_MASCOTS: Record<
  Vibe,
  { src: string; label: string; caption: string; color: string }
> = {
  energetic: {
    src: "/images/melo-energetic.png",
    label: "점프하는 Melo",
    caption: "피크 타임을 향해 바로 뛰어드는 타입",
    color: "#d96f63",
  },
  free: {
    src: "/images/melo-free.png",
    label: "탐험하는 Melo",
    caption: "타임테이블보다 끌리는 무대를 따라가는 타입",
    color: "#2f8f9b",
  },
  heal: {
    src: "/images/melo-heal.png",
    label: "쉬어가는 Melo",
    caption: "좋은 자리와 편한 공기를 오래 즐기는 타입",
    color: "#8a8450",
  },
  emotion: {
    src: "/images/melo-emotion.png",
    label: "몰입하는 Melo",
    caption: "한 곡의 여운을 오래 간직하는 타입",
    color: "#b8758b",
  },
};

function personaVibe(key: string): Vibe {
  const vibe = key.split("_").pop();
  if (
    vibe === "energetic" ||
    vibe === "free" ||
    vibe === "heal" ||
    vibe === "emotion"
  ) {
    return vibe;
  }
  return "emotion";
}

export default function Page() {
  const [stage, setStage] = useState<Stage>("cover");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [idx, setIdx] = useState(0);
  const [scores, setScores] = useState(emptyScores());
  const [result, setResult] = useState<Result | null>(null);

  function start() {
    setQuestions(pickQuestions());
    setIdx(0);
    setScores(emptyScores());
    setResult(null);
    setStage("quiz");
  }

  function choose(opt: Option) {
    const next = applyEffects(scores, opt);
    setScores(next);
    if (idx + 1 < questions.length) {
      setIdx(idx + 1);
    } else {
      setResult(computeResult(next));
      setStage("result");
    }
  }

  return (
    <main className="app">
      <div className="shell">
        {stage === "cover" && <Cover onStart={start} />}
        {stage === "quiz" && questions[idx] && (
          <Quiz
            q={questions[idx]}
            index={idx}
            total={questions.length}
            onChoose={choose}
          />
        )}
        {stage === "result" && result && (
          <ResultView result={result} onRestart={start} />
        )}
      </div>
      <footer className="foot">
        2026 하반기 국내 페스티벌 기준 · 라인업/일정은 변경될 수 있어요
      </footer>
    </main>
  );
}

function Cover({ onStart }: { onStart: () => void }) {
  return (
    <section className="cover">
      <div className="brand-row">
        <span className="brand-mark">FM</span>
        <span>Festival Match</span>
      </div>

      <div className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Melo가 찾아주는 오늘의 페스티벌 취향</span>
          <h1>
            내 취향이 뛰어놀
            <br />
            페스티벌은 어디?
          </h1>
          <p>
            음악 취향, 체력, 동선, 현장 무드까지 {QUIZ_LEN}개의 질문으로
            나의 페스티벌 페르소나와 궁합 1순위를 찾아드려요.
          </p>
        </div>
        <div className="mascot-stage" aria-hidden="true">
          <img src={MASCOT} alt="" />
          <span className="spark spark-a" />
          <span className="spark spark-b" />
        </div>
      </div>

      <button className="cta" onClick={onStart}>
        테스트 시작하기
      </button>

      <div className="cover-tags">
        <span>EDM</span>
        <span>힙합·R&B</span>
        <span>인디·밴드·록</span>
        <span>K-pop</span>
        <span>재즈</span>
      </div>
    </section>
  );
}

function Quiz({
  q,
  index,
  total,
  onChoose,
}: {
  q: Question;
  index: number;
  total: number;
  onChoose: (o: Option) => void;
}) {
  const pct = Math.round(((index + 1) / total) * 100);
  return (
    <section className="quiz" key={q.id}>
      <div className="quiz-top">
        <div>
          <div className="q-count">
            Q{index + 1} <span>/ {total}</span>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: `${pct}%` }} />
          </div>
        </div>
        <img className="quiz-mascot" src={MASCOT} alt="" />
      </div>

      <h2 className="q-title">{q.q}</h2>
      <div className="options">
        {q.options.map((o, i) => (
          <button key={i} className="option" onClick={() => onChoose(o)}>
            <span className="option-index">{String(i + 1).padStart(2, "0")}</span>
            <span className="option-copy">
              <span className="option-label">{o.label}</span>
              {o.sub && <span className="option-sub">{o.sub}</span>}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function ResultView({
  result,
  onRestart,
}: {
  result: Result;
  onRestart: () => void;
}) {
  const top = result.ranked[0];
  const alts = result.ranked.slice(1, 6);
  const persona = result.persona;
  const mascot = PERSONA_MASCOTS[personaVibe(persona.key)];
  const shareText = useMemo(
    () =>
      `내 페스티벌 페르소나는 '${persona.title}' — 궁합 1순위 ${top.festival.name} (${top.pct}%)`,
    [persona, top]
  );

  function share() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(shareText).catch(() => undefined);
    }
  }

  return (
    <section className="result">
      <div className="result-hero" style={{ borderColor: mascot.color }}>
        <img src={mascot.src} alt="" />
        <div>
          <span className="eyebrow">Melo의 매칭 결과</span>
          <h1>{persona.title}</h1>
          <p>“{persona.tagline}”</p>
          <div className="mascot-note">
            <span>{mascot.label}</span>
            {mascot.caption}
          </div>
        </div>
      </div>

      <div className="persona" style={{ borderColor: top.festival.color }}>
        <div className="persona-tag">나의 페스티벌 페르소나</div>
        <p className="persona-desc">{persona.desc}</p>
      </div>

      <div className="match-head">궁합 1순위</div>
      <div className="pick" style={{ borderColor: top.festival.color }}>
        <div className="pick-top">
          <div>
            <h2>{top.festival.name}</h2>
            <div className="pick-meta">
              {top.festival.date} · {top.festival.loc}
            </div>
          </div>
          <div className="pick-score" style={{ color: top.festival.color }}>
            <strong>{top.pct}%</strong>
            <span>궁합</span>
          </div>
        </div>
        <div
          className="pick-badge"
          style={{
            background: `${top.festival.color}1a`,
            color: top.festival.color,
          }}
        >
          {top.festival.tag}
        </div>
        <div className="pick-row">
          <b>라인업</b> {top.festival.lineup}
        </div>
        <div className="pick-row">
          <b>추천 복장</b> {top.festival.outfitTip}
        </div>
        <div className="pick-row muted">{top.festival.price}</div>
        <div className="reasons">
          <span className="reasons-label">잘 맞는 이유</span>
          {result.reasons.map((r) => (
            <span key={r} className="reason-chip">
              {r}
            </span>
          ))}
        </div>
        <a
          className="pick-link"
          href={top.festival.url}
          target="_blank"
          rel="noreferrer"
        >
          예매·공식 정보 보기
        </a>
      </div>

      <div className="match-head sub">이런 것도 잘 맞아요</div>
      <div className="alts">
        {alts.map((a) => (
          <div className="alt" key={a.festival.id}>
            <div className="alt-top">
              <span className="alt-name">{a.festival.name}</span>
              <span className="alt-pct" style={{ color: a.festival.color }}>
                {a.pct}%
              </span>
            </div>
            <div className="alt-meta">
              {a.festival.date} · {a.festival.loc}
            </div>
            <div className="alt-bar">
              <div
                className="alt-bar-fill"
                style={{ width: `${a.pct}%`, background: a.festival.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="result-actions">
        <button className="ghost" onClick={onRestart}>
          다시 테스트
        </button>
        <button className="ghost strong" onClick={share}>
          결과 복사하기
        </button>
      </div>
    </section>
  );
}
