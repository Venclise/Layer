"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useHorizontalScroll = (
  containerRef: React.RefObject<HTMLElement>,
  textRef: React.RefObject<HTMLElement>
) => {
  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      const distance =
        textRef.current!.scrollWidth - window.innerWidth;

      gsap.to(textRef.current, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${distance}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);
};



type AnimatedTextProps = {
  children: React.ReactNode,
  animate: string,
  duration?: number,
  delay?: number,
}
const AnimatedText: React.FC<AnimatedTextProps > = ({
  children,
  animate,
  duration = 1,
  delay = 0,
}) => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elRef.current) return;

    let fromVars: gsap.TweenVars = { opacity: 0 };

    switch (animate) {
      case "leftToRight":
        fromVars.x = -50;
        break;
      case "rightToLeft":
        fromVars.x = 50;
        break;
      case "topToBottom":
        fromVars.y = -50;
        break;
      case "bottomToTop":
        fromVars.y = 50;
        break;
    }

    gsap.fromTo(
      elRef.current,
      { ...fromVars },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        scrollTrigger: {
          trigger: elRef.current,
          start: "top 80%",
            toggleActions: "play reverse play reverse", 
        },
      }
    );
  }, [animate, duration, delay]);

  return <div ref={elRef}>{children}</div>;
};

export default AnimatedText;
