// import { NextResponse } from "next/server";
// import { contact } from "@/data/siteConfig";

// interface InquiryPayload {
//   name?: string;
//   organization?: string;
//   email?: string;
//   service?: string;
//   message?: string;
// }

// export async function POST(req: Request) {
//   let payload: InquiryPayload;

//   try {
//     payload = await req.json();
//   } catch {
//     return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
//   }

//   const { name, organization, email, service, message } = payload;

//   if (!name || !email || !message) {
//     return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
//   }

//   const resendKey = process.env.RESEND_API_KEY;

//   // If RESEND_API_KEY is set, send a real email via Resend.
//   // Otherwise, log the inquiry so nothing is silently lost during setup.
//   if (resendKey) {
//     try {
//       // src/app/api/contact/route.ts — only the fetch call changes
//       const res = await fetch("https://api.resend.com/emails", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${resendKey}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           from: "NEW Advisory Group Website <onboarding@resend.dev>",
//           to: contact.recipients, // ← array of addresses, one email, both inboxes
//           reply_to: email,
//           subject: `New inquiry from ${name}${organization ? ` (${organization})` : ""}`,
//           text: [
//             `Name: ${name}`,
//             `Organization: ${organization || "—"}`,
//             `Email: ${email}`,
//             `Service: ${service || "—"}`,
//             "",
//             "Message:",
//             message,
//           ].join("\n"),
//         }),
//       });

//       if (!res.ok) {
//         console.error("[contact] Resend error", await res.text());
//         return NextResponse.json({ error: "Failed to send" }, { status: 502 });
//       }
//     } catch (err) {
//       console.error("[contact] Resend exception", err);
//       return NextResponse.json({ error: "Failed to send" }, { status: 502 });
//     }
//   } else {
//     console.log("[contact] New inquiry (RESEND_API_KEY not set, logging only):", {
//       name,
//       organization,
//       email,
//       service,
//       message,
//       destination: contact.email,
//     });
//   }

//   return NextResponse.json({ ok: true });
// }


import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contact } from "@/data/siteConfig";

interface InquiryPayload {
  name?: string;
  organization?: string;
  email?: string;
  service?: string;
  message?: string;
}

export async function POST(req: Request) {
  let payload: InquiryPayload;

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const { name, organization, email, service, message } = payload;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (gmailUser && gmailPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: gmailUser, pass: gmailPass },
      });

      await transporter.sendMail({
        from: `"NEW Advisory Group Website" <${gmailUser}>`,
        to: [...contact.recipients],
        replyTo: email,
        subject: `New inquiry from ${name}${organization ? ` (${organization})` : ""}`,
        text: [
          `Name: ${name}`,
          `Organization: ${organization || "—"}`,
          `Email: ${email}`,
          `Service: ${service || "—"}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      });
    } catch (err) {
      console.error("[contact] Gmail send error", err);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }
  } else {
    console.log("[contact] New inquiry (GMAIL_USER/GMAIL_APP_PASSWORD not set, logging only):", {
      name, organization, email, service, message, destination: contact.recipients,
    });
  }

  return NextResponse.json({ ok: true });
}