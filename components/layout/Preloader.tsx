"use client";

import { useRef } from "react";
import { gsap } from "@/lib/animations";
import { useGSAP } from "@/hooks/useGSAPAnimation";

export default function Preloader() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const preloader = container.current;

      if (!preloader) return;

      const text = preloader.querySelector(".preloader__text");

      const tl = gsap.timeline();

      tl.to(text, {
        opacity: 0,
        y: -20,
        duration: 0.5,
      }).to(preloader, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="preloader">
      <div className="preloader__content">
        <span className="preloader__number">10</span>
        <p className="preloader__text">
          A story written in two hearts.
        </p>
      </div>
    </div>
  );
}