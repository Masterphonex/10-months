"use client";

import { useRef } from "react";
import { gsap } from "@/lib/animations";
import { useGSAP } from "@/hooks/useGSAPAnimation";

const reasons = [
  {
    title: "You feel like peace.",
    detail: "You once said you wanted peace, and that I brought you peace. I hope I keep becoming a safe, gentle place for your heart.",
  },
  {
    title: "Your heart knows how to care.",
    detail: "You remind me to eat, rest, take care of myself and be safe. You notice the little things.",
  },
  {
    title: "You make ordinary days brighter.",
    detail: "A random message, your emojis, your laugh, or one of your playful replies can turn an ordinary moment into one I want to remember.",
  },
  {
    title: "You are beautifully Stubborn.",
    detail: "It must be one of the reason by force 😂😂",
  },
  {
    title: "You have a soft side you let me see.",
    detail: "You can be a hard girl to the world, but you once told me you aren't like that with your baby. I love that softness😍, You're still an hard puzzle sha 🥱😂",
  },
  {
    title: "You inspire me.",
    detail: "You noticed my keyboard playing and wanted to know how I learnt and you said you admired it. Knowing that you admired something I worked for means more than you know. Also i practice more in keyboard than bass 🌚",
  },
  {
    title: "You make me laugh.",
    detail: "From the food banter to the stubborn-head teasing, there is always some little thing that makes our conversations unmistakably ours.",
  },
  {
    title: "Your faith matters to you.",
    detail: "I love that you want God at the centre of what we build, and that we can pray for each other and ask Him to guide our future. This is number 1 sef",
  },
  {
    title: "You appreciate the little efforts.",
    detail: "You noticed the letters, the websites, the thought behind them. You make me want to keep creating meaningful things for you.",
  },
  {
    title: "You keep choosing us.",
    detail: "Even when things have not been easy, you have been willing to speak honestly, work through things and keep growing with me.",
  },
];

export default function TenReasons() {
  const section = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".reasons__intro > *", {
      y: 35, opacity: 0, duration: 0.9, stagger: 0.15,
      scrollTrigger: { trigger: ".reasons__intro", start: "top 80%" },
    });
    gsap.from(".reason-note", {
      y: 55, opacity: 0, rotate: (i) => (i % 2 ? 2 : -2),
      duration: 0.8, stagger: 0.1, ease: "power3.out",
      scrollTrigger: { trigger: ".reasons__grid", start: "top 82%" },
    });
  }, { scope: section });

  return (
    <section ref={section} className="reasons" id="ten-reasons">
      <div className="reasons__ambient" />
      <header className="reasons__intro">
        <span className="eyebrow">CHAPTER II · TEN LITTLE REASONS</span>
        <span className="script-note">if you ever wonder why</span>
        <h2>Ten reasons.<br /><em>And a thousand more.</em></h2>
        <p>
          I could fill a whole library, But today, let me put ten
          reasons into words.
        </p>
      </header>

      <div className="reasons__grid">
        {reasons.map((reason, index) => (
          <article className="reason-note" key={reason.title}>
            <div className="reason-note__top">
              <span className="reason-note__number">{String(index + 1).padStart(2, "0")}</span>
              <span className="reason-note__heart">♡</span>
            </div>
            <h3>{reason.title}</h3>
            <p>{reason.detail}</p>
            <span className="reason-note__line" />
          </article>
        ))}
      </div>
      <p className="reasons__footnote">And these are only the ten I could fit on this page. ♡</p>
    </section>
  );
}
