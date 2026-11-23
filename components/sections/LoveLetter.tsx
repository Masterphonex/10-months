"use client";

import { useRef, useState } from "react";
import { gsap } from "@/lib/animations";
import { useGSAP } from "@/hooks/useGSAPAnimation";

export default function LoveLetter() {
  const section = useRef<HTMLElement>(null);
  const [opened, setOpened] = useState(false);

  useGSAP(() => {
    gsap.from(".letter__intro > *", {
      y: 35, opacity: 0, stagger: 0.15, duration: 0.9,
      scrollTrigger: { trigger: ".letter__intro", start: "top 80%" },
    });
    gsap.from(".letter__envelope", {
      y: 45, opacity: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: ".letter__envelope", start: "top 82%" },
    });
  }, { scope: section });

  return (
    <section ref={section} className="letter" id="love-letter">
      <div className="letter__light" />
      <header className="letter__intro">
        <span className="eyebrow">CHAPTER IV · SOMETHING FROM MY HEART</span>
        <span className="script-note">written only for you</span>
        <h2>A letter for<br /><em>my Sweet Baby🥰.</em></h2>
        <p>Some things deserve more than a quick message.</p>
      </header>

      <div className={`letter__envelope ${opened ? "is-open" : ""}`}>
        <div className="letter__seal">W<span>♡</span></div>
        <div className="letter__envelope-face">
          <span className="letter__envelope-heart">♡</span>
          <p>To my favourite person</p>
          <button className="letter__open" onClick={() => setOpened(!opened)}>
            {opened ? "Fold the letter" : "Open your letter"}
            <span>✧</span>
          </button>
        </div>
        <article className="letter__paper" aria-hidden={!opened}>
          <span className="letter__paper-date">24 NOVEMBER 2026</span>
          <h3>To my sweet princess, Winnie ❤️🥹
</h3>
          <p>
          Happy 10 months to us, my love! 🥰❤️

          </p>
          <p>
        Ten whole months! Can you believe that? From us who were initially just getting to know each other to where we are today. Sometimes I sit and think about how everything started, and I can’t help but smile.

          </p>
          <p>
            You know what’s funny? I actually spent quite some time trying to get your number. 😂 There were always one or two obstructions, and even when I finally got the opportunity, all I could manage was a simple “Good morning.” 😭

          </p>
          <p>
            And you, with your calm self, had to tell me that you don’t bite. 😂😂 If only you knew how much courage I needed just to approach you.
            <br />
            
But look at us now. The same person I was once shy to approach is now the person I get to call mine. ❤️


          </p>
          <p>I love how our story is filled with little moments that might seem insignificant to other people but mean so much to me. From our conversations, the teasing, the random questions, the laughter, and even those times when we somehow manage to turn an ordinary conversation into something funny.</p>
         
         <p>
          And that “U Are God Alone” song that kept replaying in your head? 😂 I don’t know whether I should be proud that my music recommendations have that much influence or concerned that you couldn’t get the song out of your head. 🤣❤️
</p> 
<p>And of course, I cannot forget the stubborn head I have for a girlfriend. 😂❤️ You may be calm, but I know there’s another side of you. And even when I tease you about it, I hope you know that I love all those little things that make you who you are.
</p>
<p>
  I also haven’t forgotten our hug conversations. Imagine me wanting to hug you so badly that I was considering hugging my phone instead. 😭😂 What kind of relationship is this where the person you want to hold is miles away? I really do miss having you close. And no, a phone hug is not an acceptable replacement. I want the actual thing. 🌚❤️
</p>
<p>But beyond all the jokes, I want you to know something.
</p>
<p>
  I genuinely appreciate you.
<br />
I appreciate the way you care, the way you check on me, the way you remind me to eat, rest and take care of myself. I appreciate your encouragement, your honesty, your patience and the way you make room for me in your life.

</p>
<p>
            I know I have not always got everything right. There have been
            times I could have called more, listened better or made you feel
            more considered. I am sorry for those moments. I don't want to
            give you beautiful promises and leave you to carry the effort
            alone. I want to keep learning how to love you in ways you can
            actually feel 🥹❤️.
          </p>
          <p>
            I am proud of you, my baby 🥰. I see how much you put into school and
            the things you are building. I pray that God strengthens you,
            gives you wisdom and makes room for every good thing you are
            working towards. I want us to keep God at the centre of our
            relationship and to keep becoming better people, together.
          </p>
          <p>
            Thank you for choosing me, for being honest with me, for the
            laughter, the softness, the patience and the love ❤️. Thank you for
            being you. I don't need our story to look perfect neither am i expecting you to be perfect. I want it to
            be honest, intentional, peaceful and full of the kind of love we
            both keep choosing.
          </p>
          <p>
            Happy ten months, my love 🥰❤️. If I could go back to that January
            evening and ask you all over again, I would go back to december and ask you physically instead 😂❤️. And I would still
            hope for the same yes 😊.
          </p>
          <p className="letter__signoff">I love you, Baby❤️. Always choosing us,</p>
          <div className="letter__signature">Yours ❤️</div>
        </article>
      </div>
    </section>
  );
}
