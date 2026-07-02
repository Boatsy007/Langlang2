import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const TO = 'info@langrestorations.com.au'

// Sending domain must be verified in Resend dashboard.
// Before verification, use onboarding@resend.dev for testing.
const FROM = process.env.RESEND_FROM_EMAIL ?? 'enquiries@langrestorations.com.au'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, motorcycle, message } = req.body ?? {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' })
  }

  const subject = motorcycle
    ? `Enquiry — ${motorcycle} from ${name}`
    : `Enquiry from ${name}`

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #09090b; color: #d4d4d8; margin: 0; padding: 0; }
  .wrap { max-width: 560px; margin: 0 auto; padding: 40px 24px; }
  .header { border-bottom: 1px solid #27272a; padding-bottom: 24px; margin-bottom: 28px; }
  .logo { font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #71717a; }
  h1 { font-size: 22px; font-weight: 700; color: #ffffff; margin: 8px 0 0; }
  .field { margin-bottom: 20px; }
  .label { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #71717a; margin-bottom: 4px; }
  .value { font-size: 15px; color: #e4e4e7; line-height: 1.6; }
  .message-box { background: #18181b; border: 1px solid #27272a; border-radius: 10px; padding: 16px; margin-top: 4px; }
  .footer { margin-top: 36px; padding-top: 20px; border-top: 1px solid #27272a; font-size: 12px; color: #52525b; }
  a { color: #ef4444; text-decoration: none; }
</style></head>
<body>
<div class="wrap">
  <div class="header">
    <div class="logo">Lang Restorations</div>
    <h1>New Website Enquiry</h1>
  </div>

  <div class="field">
    <div class="label">Name</div>
    <div class="value">${escapeHtml(name)}</div>
  </div>

  <div class="field">
    <div class="label">Email</div>
    <div class="value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></div>
  </div>

  ${phone ? `
  <div class="field">
    <div class="label">Phone</div>
    <div class="value"><a href="tel:${escapeHtml(phone.replace(/\s/g, ''))}">${escapeHtml(phone)}</a></div>
  </div>` : ''}

  ${motorcycle ? `
  <div class="field">
    <div class="label">Motorcycle</div>
    <div class="value">${escapeHtml(motorcycle)}</div>
  </div>` : ''}

  <div class="field">
    <div class="label">Message</div>
    <div class="message-box value">${escapeHtml(message).replace(/\n/g, '<br>')}</div>
  </div>

  <div class="footer">
    Sent from the enquiry form at <a href="https://langrestorations.com.au/contact">langrestorations.com.au/contact</a>
    &nbsp;·&nbsp; Reply directly to this email to respond to ${escapeHtml(name)}.
  </div>
</div>
</body>
</html>`

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(500).json({ error: 'Failed to send. Please call or email us directly.' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Unexpected error:', err)
    return res.status(500).json({ error: 'Failed to send. Please call or email us directly.' })
  }
}

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
