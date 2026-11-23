import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const recipient = "masterphonexpeboss@gmail.com";

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "Email delivery is not configured yet. Please try again later." },
        { status: 503 },
      );
    }

    const body: unknown = await request.json();
    if (!body || typeof body !== "object") {
      return Response.json({ error: "Invalid submission." }, { status: 400 });
    }

    const { wish, message, website } = body as {
      wish?: unknown;
      message?: unknown;
      website?: unknown;
    };

    // Quiet spam trap. Real visitors never see or fill this field.
    if (typeof website === "string" && website.trim()) {
      return Response.json({ success: true });
    }

    if (typeof wish !== "string" || typeof message !== "string") {
      return Response.json({ error: "Please complete the form correctly." }, { status: 400 });
    }

    const cleanWish = wish.trim().slice(0, 1000);
    const cleanMessage = message.trim().slice(0, 1500);

    if (!cleanWish && !cleanMessage) {
      return Response.json({ error: "Please write a wish or a message first." }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Ten Months Together <onboarding@resend.dev>",
      to: [recipient],
      subject: "Winnie's anniversary wish and message ❤️",
      text: [
        "Winnie has left you something on the anniversary website.",
        "",
        "HER WISH",
        cleanWish || "(She left this blank.)",
        "",
        "SOMETHING SHE WANTS TO SAY",
        cleanMessage || "(She left this blank.)",
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#34232b;line-height:1.7">
          <h1 style="color:#8b3d55">A little message from Winnie ❤️</h1>
          <p>She has left you something on your anniversary website.</p>
          <h2 style="color:#8b3d55">Her wish</h2>
          <p style="white-space:pre-wrap">${escapeHtml(cleanWish || "(She left this blank.)")}</p>
          <h2 style="color:#8b3d55">Something she wants to say</h2>
          <p style="white-space:pre-wrap">${escapeHtml(cleanMessage || "(She left this blank.)")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend email error:", error);
      return Response.json(
        { error: "We couldn't send your words just now. Please try again in a moment." },
        { status: 502 },
      );
    }

    return Response.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Wish submission error:", error);
    return Response.json(
      { error: "Something went wrong while sending. Please try again." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}
