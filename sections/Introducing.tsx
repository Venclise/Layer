"use client";

import { useRef } from "react";
import { useHorizontalScroll } from "@/lib/gsap";

export default function Introducing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useHorizontalScroll(containerRef as any, textRef as any);

  return (
    <section
      ref={containerRef}
      className="h-screen overflow-hidden flex items-center"
    >
      <p
        ref={textRef}
        className="whitespace-nowrap text-4xl lg:text-7xl text-gray-400 will-change-transform"
      >
        Your creative process <strong className="text-gray-200"> deserves better. </strong> You’re racing to create
      <strong className="text-gray-200">  exceptional work </strong> — but  <strong className="text-gray-200"> traditional  </strong>tools slow you down.
        <span className="text-lime-500 ml-4">
          That’s why we built Layers.
        </span>
      </p>
    </section>
  );
}
