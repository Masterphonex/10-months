"use client";

import { useRef } from "react";
import { gsap } from "@/lib/animations";
import { useGSAP } from "@/hooks/useGSAPAnimation";

export default function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 1.5 });

    tl.from(".hero__eyebrow", { opacity: 0, y: 20, duration: 1 })
      .from(".hero__title", {
        opacity: 0,
        scale: 0.72,
        y: 55,
        duration: 1.45,
        ease: "power4.out",
      }, "-=0.5")
      .from(".hero__subtitle", {
        opacity: 0,
        y: 25,
        duration: 1,
        ease: "power3.out",
      }, "-=0.65")
      .from(".hero__date", { opacity: 0, duration: 1 }, "-=0.4")
      .from(".hero__scroll", { opacity: 0, y: 15, duration: 1 }, "-=0.3");
  }, { scope: container });

  return (
    <section ref={container} className="hero">
      <div className="hero__orb" />
      <div className="hero__content">
        <span className="hero__eyebrow">24 JANUARY 2026 — 24 NOVEMBER 2026</span>
        <h1 className="hero__title">10<span>.</span></h1>
        <p className="hero__subtitle">Happy Anniversary<br />my sweet princess</p>
        <div className="hero__date">
          <span>TEN MONTHS</span>
          <span className="hero__divider">✦</span>
          <span>ONE BEAUTIFUL STORY</span>
        </div>
      </div>
      <span className="hero__decoration">01 / 09</span>
    </section>
  );
}
