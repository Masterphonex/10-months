"use client";

import { useRef } from "react";
import { gsap } from "@/lib/animations";
import { useGSAP } from "@/hooks/useGSAPAnimation";

const memories = [
  {
    date: "24.01.26",
    label: "THE QUESTION",
    title: "“So, will you be my girlfriend?”",
    text: "I remember how happy I was when you said yes. I called us a team, and I meant it. That evening became a date I will always hold close.",
    mark: "01",
  },
  {
    date: "01.04.26",
    label: "THE FORD STORY",
    title: "You were curious too.",
    text: "You told me that after we went to Ford, you got home curious about me and asked Uyi. Finding out that I had caught your attention made me smile all over again.",
    mark: "02",
  },
  {
    date: "17.04.26",
    label: "The first Hug",
    title: "The hug you reminded me about.",
    text: "You said you hugged me first. I remember the eye contact, the shyness and how much I wanted to see you again. Some moments stay small in the world and huge in the heart.",
    mark: "03",
  },
  {
    date: "03.05.26",
    label: "The Video Calls",
    title: "All Our Video Calls.",
    text: "Me seeing you cute face, The way you always blush, shy baby😂😂😂 ",
    mark: "04",
  },
  {
    date: "24.05.26",
    label: "YOUR WORDS",
    title: "“Peace brought me Peace.”",
    text: "You called me your peace and thanked me for making love feel easy, for prioritising you and for showing up. I hope my actions keep deserving those words.",
    mark: "05",
  },
  {
    date: "24.09.26",
    label: "THE LETTERS",
    title: "You noticed every little effort.",
    text: "You told me you loved my consistency in writing letters and appreciated the website. That made me want to keep finding thoughtful ways to remind you that you matter.",
    mark: "06",
  },
];

export default function Memories() {
  const section = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".memories__intro > *", {
      y: 35, opacity: 0, stagger: 0.15, duration: 0.9,
      scrollTrigger: { trigger: ".memories__intro", start: "top 80%" },
    });
    gsap.from(".memory-card", {
      y: 45, opacity: 0, scale: 0.97, stagger: 0.13, duration: 0.85,
      ease: "power3.out",
      scrollTrigger: { trigger: ".memories__grid", start: "top 82%" },
    });
  }, { scope: section });

  return (
    <section ref={section} className="memories" id="memories">
      <div className="memories__glow" />
      <header className="memories__intro">
        <span className="eyebrow">CHAPTER III · LITTLE THINGS, FOREVER</span>
        <span className="script-note">moments I keep replaying</span>
        <h2>Some moments<br />deserve <em>their own place.</em></h2>
        {/* <p>No photographs needed. The memories are already written somewhere deeper.</p> */}
      </header>

      <div className="memories__grid">
        {memories.map((memory) => (
          <article className="memory-card" key={memory.mark}>
            <div className="memory-card__ornament">♡</div>
            <div className="memory-card__meta">
              <span>{memory.label}</span>
              <b>{memory.date}</b>
            </div>
            <span className="memory-card__number">{memory.mark}</span>
            <h3>{memory.title}</h3>
            <p>{memory.text}</p>
            <span className="memory-card__bottom">A MOMENT WITH YOU <i>✧</i></span>
          </article>
        ))}
      </div>
      <div className="memories__end">
        <span>♡</span>
        <p>The best memories are not behind us.</p>
        <em>We still have so many to make.</em>
      </div>
    </section>
  );
}
