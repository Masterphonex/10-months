"use client";

import { FormEvent, useState } from "react";

export default function WishAndMessage() {
  const [wish, setWish] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!wish.trim() && !message.trim()) return;

    setStatus("sending");
    setStatusMessage("Sending your words...");

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 12000);

    try {
      const response = await fetch("/api/send-wish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({ wish: wish.trim(), message: message.trim(), website: "" }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Your words couldn't be sent. Please try again.");
      }

      setStatus("sent");
      setStatusMessage("Your words have been sent. Thank you for sharing your heart. ♡");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof DOMException && error.name === "AbortError"
          ? "The email service is taking too long to respond. Please try again."
          : error instanceof Error
            ? error.message
            : "Something went wrong. Please try again in a moment.",
      );
    } finally {
      window.clearTimeout(timeoutId);
    }
  }

  return (
    <section className="wish" id="make-a-wish">
      <div className="wish__glow" />
      <header className="wish__intro">
        <span className="eyebrow">A LITTLE SPACE THAT BELONGS TO YOU</span>
        <span className="script-note">my turn to listen</span>
        <h2>Now, tell me<br /><em>what's in your heart.</em></h2>
        <p>
          I have filled these pages with my thoughts. I want to leave a little
          space for yours, too.
        </p>
      </header>

      <form className="wish__form" onSubmit={handleSave}>
        <label className="wish__field">
          <span className="wish__field-icon">✧</span>
          <span className="wish__label">MAKE A WISH</span>
          <span className="wish__question">Make your wish although its not your birthday 😂</span>
          <textarea
            value={wish}
            onChange={(event) => { setWish(event.target.value); setStatus("idle"); setStatusMessage(""); }}
            placeholder="My wish for us is..."
            rows={4}
            maxLength={1000}
          />
        </label>

        <label className="wish__field">
          <span className="wish__field-icon">♡</span>
          <span className="wish__label">SOMETHING YOU WANT TO SAY</span>
          <span className="wish__question">Anything you've been wanting to tell me. I'm listening.</span>
          <textarea
            value={message}
            onChange={(event) => { setMessage(event.target.value); setStatus("idle"); setStatusMessage(""); }}
            placeholder="There's something I want you to know..."
            rows={5}
            maxLength={1500}
          />
        </label>

        <button
          className="wish__submit"
          type="submit"
          disabled={(!wish.trim() && !message.trim()) || status === "sending"}
        >
          {status === "sending" ? "Sending..." : status === "sent" ? "Sent with love" : "Send my words to you"} <span>♡</span>
        </button>

        {statusMessage && (
          <p className="wish__saved" role="status" aria-live="polite">
            {statusMessage}
          </p>
        )}
     
      </form>
    </section>
  );
}
