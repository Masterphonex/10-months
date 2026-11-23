"use client";

import { useRef, useState } from "react";
import { gsap } from "@/lib/animations";
import { useGSAP } from "@/hooks/useGSAPAnimation";

export default function FinalSurprise() {
  const section = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useGSAP(() => {
    gsap.from(".final__content > *", {
      y: 35,
      opacity: 0,
      stagger: 0.18,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".final__content", start: "top 78%" },
    });
  }, { scope: section });

  return (
    <section ref={section} className="final" id="final-surprise">
      <div className="final__glow final__glow--one" />
      <div className="final__glow final__glow--two" />
      <div className="final__content">
        <span className="eyebrow">ONE LAST THING, MY LOVE</span>
        <span className="final__heart">♡</span>
        <p className="script-note">for my sweet princess</p>
        <h2>Happy Anniversary<br /><em>baby.</em></h2>
        <p className="final__lead">Ten months of us. And I still feel lucky that I get to love you.</p>

        <button
          type="button"
          className="final__button"
          onClick={() => setRevealed((value) => !value)}
          aria-expanded={revealed}
          aria-controls="final-love-message"
        >
          {revealed ? "Close my little message" : "There's one more thing"}
          <span>♡</span>
        </button>

        {revealed && (
          <div
            id="final-love-message"
            className="final__reveal is-visible"
            role="status"
          >
            <div className="final__reveal-inner">
            <span className="final__reveal-star">✧</span>
            <p>
              If I could return to January 24, knowing everything we would
              experience — the laughter, the distance, the beautiful moments,
              the hard conversations and all the growing — I would still want
              to meet you there.
            </p>
            <p>I would still ask you to be my girlfriend. I would still hope for the same yes.</p>
            <h3>Happy ten months, my love.</h3>
            <span className="final__forever">I love you soo much, Second baby. 😂❤️</span>
            </div>
          </div>
        )}

        <div className="final__footer">
          <span>24 JANUARY 2026</span>
          <i>✧</i>
          <span>24 NOVEMBER 2026</span>
        </div>
      </div>
    </section>
  );
}
