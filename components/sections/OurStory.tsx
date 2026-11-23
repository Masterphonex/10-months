"use client";

import { useRef } from "react";
import { gsap } from "@/lib/animations";
import { useGSAP } from "@/hooks/useGSAPAnimation";

const chapters = [
  {
    date: "24 JANUARY 2026",
    number: "01",
    title: "The yes that started everything.",
    text: "That evening, after all the talking and wondering, I finally asked you to be my girlfriend. You said yes. I remember being so happy that I could hardly contain it. 'We were officially a team' 😂😂😂",
    quote: "“Yess I will be your girlfriend.”",
  },
  {
    date: "01 APRIL 2026",
    number: "02",
    title: "The little story behind the beginning.",
    text: "You told me that after we first went to Ford then, you got home curious about me and asked Uyi about me. Hmmmmm😂, let me tell you something, i was curious and asked about you too, wont tell you the person i asked😂",
    quote: "“After I got home I was curious about you.”",
  },
  {
    date: "17 APRIL 2026",
    number: "03",
    title: "A hug I still remember.",
    text: "This actually happened before you went to Enugu but i remember we talked about this , i said i'll hug you before you go and i did😌 , Although you hugged me first according to a certain someone😂👇",
    quote: "“I rem I hugged u first.”",
  },
  {
    date: "24 MAY 2026",
    number: "04",
    title: "You called me your peace.",
    text: "Your anniversary message stayed with me. You thanked me for showing you what easy love feels like, for choosing you, and for showing up through the struggles. Then you said something sweet: peace brought you peace. Later you will say that you can sweet talk🥱",
    quote: "“And you are Peace. Peace brought me Peace.”",
  },
  {
    date: "24 SEPTEMBER 2026",
    number: "05",
    title: "The letters became part of us.",
    text: "You told me you loved my consistency in writing you letters. It reminded me that the little things I create for you can become memories too. Although i didn't create last month😫 ",
    quote: "“I Love your consistency in writing me letters also.”",
  },
  {
    date: "24 OCTOBER 2026",
    number: "06",
    title: "Choosing each other, honestly.",
    text: "This month asked more of us. We talked about what hurt, what we missed, and what we needed to do better. I don't want us to ignore the difficult parts. I want us to keep learning how to love each other well.",
    quote: "“I’ll continue to choose you.”",
  },
  {
    date: "24 NOVEMBER 2026",
    number: "07",
    title: "Ten months. Still our story.",
    text: "Here we are. Not a perfect story, but a real one: full of laughter, faith, distance, food conversations, calls, letters, growing pains and reasons to keep building something beautiful.",
    quote: "“And this is only the beginning.”",
  },
];

export default function OurStory() {
  const section = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".journey__intro > *", {
      y: 35,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: ".journey__intro", start: "top 78%" },
    });

    gsap.from(".journey__rail-fill", {
      scaleY: 0,
      transformOrigin: "top",
      ease: "none",
      scrollTrigger: {
        trigger: ".journey__timeline",
        start: "top 72%",
        end: "bottom 72%",
        scrub: 1,
      },
    });

    gsap.from(".journey__chapter", {
      y: 55,
      opacity: 0,
      duration: 0.85,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: ".journey__timeline", start: "top 78%" },
    });
  }, { scope: section });

  return (
    <section ref={section} className="journey" id="our-story">
      <div className="journey__glow" />
      <header className="journey__intro">
        <span className="eyebrow">CHAPTER I · THE WAY WE BECAME US</span>
        <span className="script-note">a little walk through our story</span>
        <h2>From one big <em>yes</em><br />to ten beautiful months.</h2>
        <p>
          I went back through our conversations and found some interesting talks, By the way those quotes at the end of each can be used to search for the message on whatsapp😊
        </p>
      </header>

      <div className="journey__timeline">
        <div className="journey__rail"><span className="journey__rail-fill" /></div>
        {chapters.map((chapter, index) => (
          <article className={`journey__chapter ${index % 2 ? "is-right" : "is-left"}`} key={chapter.number}>
            <span className="journey__node"><i /></span>
            <div className="journey__card">
              <div className="journey__card-top">
                <span>{chapter.date}</span>
                <b>{chapter.number}</b>
              </div>
              <h3>{chapter.title}</h3>
              <p>{chapter.text}</p>
              <blockquote>{chapter.quote}</blockquote>
            </div>
          </article>
        ))}
      </div>
      <div className="journey__closing">
        <span className="ornament">✧</span>
        <p>Seven little chapters. Ten months. A story still being written.</p>
        <span className="script-note">with so much more ahead</span>
      </div>
    </section>
  );
}
