"use client";

import { useRef } from "react";
import { gsap } from "@/lib/animations";
import { useGSAP } from "@/hooks/useGSAPAnimation";

const promises = [
  {
    number: "01",
    title: "More ordinary days together.",
    text: "More meals at the same table, more unhurried conversations, more walks, more laughter and fewer goodbyes at the end of a call.",
  },
  {
    number: "02",
    title: "Keep showing up.",
    text: "Not only on anniversaries. In the busy weeks, the tired evenings, the difficult conversations and the small moments when one of us simply needs the other.",
  },
  {
    number: "03",
    title: "Grow into our dreams.",
    text: "I want to cheer you on through your studies and goals, and I want us both to keep becoming people we are proud of.",
  },
  {
    number: "04",
    title: "Keep God at the centre.",
    text: "Let's keep praying for each other, seeking wisdom and asking God to guide the relationship and the future we hope to build.",
  },
];

export default function OurFuture() {
  const section = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".future__intro > *", {
      y: 35, opacity: 0, stagger: 0.15, duration: 0.9,
      scrollTrigger: { trigger: ".future__intro", start: "top 80%" },
    });
    gsap.from(".future__promise", {
      x: (i) => (i % 2 ? 35 : -35),
      opacity: 0, stagger: 0.16, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: ".future__list", start: "top 82%" },
    });
  }, { scope: section });

  return (
    <section ref={section} className="future" id="our-future">
      <div className="future__stars">✧　·　♡　·　✧</div>
      <header className="future__intro">
        <span className="eyebrow">CHAPTER V · WHAT I HOPE FOR US</span>
        <span className="script-note">the pages we haven't written yet</span>
        <h2>There is so much<br /><em>life ahead of us.</em></h2>
        <p>
          I don't know every detail of tomorrow. But I know the kind of
          relationship I want us to keep building.
        </p>
      </header>

      <div className="future__list">
        {promises.map((promise) => (
          <article className="future__promise" key={promise.number}>
            <span className="future__number">{promise.number}</span>
            <div>
              <h3>{promise.title}</h3>
              <p>{promise.text}</p>
            </div>
            <span className="future__heart">♡</span>
          </article>
        ))}
      </div>

      <div className="future__prayer">
        <span>MY PRAYER FOR US</span>
        <p>
          May God teach us to love with patience, speak with kindness,
          forgive sincerely and never stop growing. May the future bring
          us closer to Him and closer to the life we are building.
        </p>
        <b>Amen. ♡</b>
      </div>
    </section>
  );
}
