import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const body = await request.json()

    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      subject,
      message,
    } = body

    if (!firstName || !lastName || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
      })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const htmlToTeam = `
      <div style="background-color:#111827;padding:32px;border-radius:10px;color:#ffffff;font-family:Segoe UI, sans-serif;max-width:600px;margin:auto;">
        <h2 style="color:rgb(0,192,241);text-align:center;margin-bottom:24px;">📬 New Contact Request</h2>
        <hr style="border:1px solid #1f2937;margin-bottom:24px"/>
        <table style="width:100%;line-height:1.8;">
          <tr><td><strong>Full Name:</strong></td><td>${firstName} ${lastName}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${phoneNumber || "N/A"}</td></tr>
          <tr><td><strong>Service Requested:</strong></td><td>${subject}</td></tr>
        </table>
        <div style="margin-top:30px;">
          <strong>Message:</strong>
          <div style="margin-top:10px;background:#1f2937;padding:16px;border-radius:8px;line-height:1.6;">
            ${message}
          </div>
        </div>
      </div>
    `

    const htmlToCustomer = `
      <div style="background-color:#111827;padding:32px;border-radius:10px;color:#ffffff;font-family:Segoe UI, sans-serif;max-width:600px;margin:auto;">
        <h2 style="color:#ef4444;text-align:center;margin-bottom:24px;">Thank You for Contacting Us!</h2>
        <hr style="border:1px solid #1f2937;margin-bottom:24px"/>
        <p style="text-align:center;font-size:16px;line-height:1.6;">
          Hi <strong>${firstName}</strong>,<br/>
          We’ve received your message regarding <strong>${subject}</strong>.
          Our team at <strong>Dan MOT & Services</strong> will get back to you within 24 hours.
        </p>
        <div style="margin:30px 0;">
          <strong>Your Message:</strong>
          <div style="margin-top:10px;background:#1f2937;padding:16px;border-radius:8px;line-height:1.6;">
            ${message}
          </div>
        </div>
        <p style="text-align:center;margin-top:24px;">
          📞 For urgent matters, call us directly at <strong style="color:#ef4444;">07440398538</strong>.
        </p>
        <p style="text-align:center;margin-top:32px;font-style:italic;">We look forward to helping you!</p>
        <p style="text-align:center;margin-top:12px;">– Dan MOT & Services Team</p>
      </div>
    `

    const mailToTeam = {
      from: `"Dan MOT Website" <${process.env.EMAIL_USER}>`,
      to: "mfawaz182@gmail.com",
      subject: `📥 New Contact Form: ${subject}`,
      html: htmlToTeam,
    }

    const mailToCustomer = {
      from: `"Dan MOT & Services" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ We've Received Your Message",
      html: htmlToCustomer,
    }

    await transporter.sendMail(mailToTeam)
    await transporter.sendMail(mailToCustomer)

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    })
  } catch (error) {
    console.error("Email error:", error)
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    })
  }
}
