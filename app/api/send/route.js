// app/api/send/route.js
"use server"
import nodemailer from "nodemailer"

export async function POST(request) {
  const { from, to, paragraph } = await request.json()

  if (!from || !to || !Array.isArray(to) || !paragraph) {
    return new Response(JSON.stringify({ message: "Invalid request" }), { status: 400 })
  }

  
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_PASSWORD, 
    },
  })

  const mailOptions = {
    from: `"Noteboi" <${from}>`,
    to: to.join(", "),
    subject: "📩 You've got a new note",
    html: `<div>
             <p>${paragraph}</p>
             <hr/>
             <small>Sent from Noteboi by ${from}</small>
           </div>`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return new Response(JSON.stringify({ message: "Email sent" }), { status: 200 })
  } catch (err) {
    console.error("EMAIL ERROR:", err)
    return new Response(JSON.stringify({ message: "Failed to send email" }), { status: 500 })
  }
}
