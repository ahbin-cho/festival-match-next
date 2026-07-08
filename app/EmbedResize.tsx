"use client";

import { useEffect } from "react";

/**
 * iframe 임베드 대응.
 * - iframe 안에서 실행되면 <html data-embed> 를 붙여 강제 100vh 높이를 해제한다
 *   (부모 페이지 스크롤과 iframe 내부 스크롤이 겹치는 "이중 스크롤"의 주범 제거).
 * - 콘텐츠 높이를 부모로 postMessage 로 계속 전달한다. 부모가 이 값을 받아
 *   iframe height 를 맞추면 내부 스크롤이 완전히 사라진다(선택적 강화 임베드).
 */
export default function EmbedResize() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.self === window.top) return; // iframe 이 아니면 아무것도 하지 않음

    const html = document.documentElement;
    html.setAttribute("data-embed", "");

    const post = () => {
      const height = Math.ceil(
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
      // 우리 부모 스니펫이 받는 형식 + 일반적인 resizer 호환 형식
      window.parent.postMessage(
        { type: "melo-embed:height", height },
        "*"
      );
      window.parent.postMessage({ type: "resize", height }, "*");
    };

    post();

    const ro = new ResizeObserver(() => post());
    ro.observe(document.body);
    window.addEventListener("load", post);

    return () => {
      ro.disconnect();
      window.removeEventListener("load", post);
    };
  }, []);

  return null;
}
