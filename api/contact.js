export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <contact@pheedev.online>",
        to: ["lemuelemmanuel29@gmail.com"],
        reply_to: email,
        subject: `New message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Resend error:", errorBody);
      return res.status(502).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
