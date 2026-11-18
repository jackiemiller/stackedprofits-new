// Vercel Serverless Function — DOUBLE OPT-IN, step 1 of 2.
// Takes a lead's email, writes a PENDING row to Supabase, emails them a
// confirmation link. The lead is NOT notified to you and gets NO calculator
// access until they click that link (handled by /api/confirm.js).
//
// Required Vercel env vars:
//   RESEND_API_KEY               (already set)
//   SUPABASE_URL                 e.g. https://xxxx.supabase.co   (no trailing slash)
//   SUPABASE_SERVICE_ROLE_KEY    the secret service_role key (bypasses RLS)
//   SITE_URL                     e.g. https://stackedprofits.com (used to build the confirm link)

import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const SUPABASE_URL   = process.env.SUPABASE_URL;
  const SUPABASE_KEY   = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const SITE_URL       = process.env.SITE_URL || 'https://stackedprofits.com';

  const LEAD_FROM = 'Stacked Profits <leads@stackedprofits.com>';

  // Fail loud in logs if anything's missing — never fail silently.
  if (!RESEND_API_KEY || !SUPABASE_URL || !SUPABASE_KEY) {
    console.error('submit: missing env', {
      hasResend: !!RESEND_API_KEY, hasUrl: !!SUPABASE_URL, hasKey: !!SUPABASE_KEY
    });
    return res.status(500).json({ ok: false, error: 'Service not configured' });
  }

  // Parse body
  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
  body = body || {};

  const email  = String(body.email || '').trim().toLowerCase();
  const source = String(body.source || 'calculator-optin').trim().slice(0, 60);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return res.status(400).json({ ok: false, error: 'Please enter a valid email address.' });
  }

  // Unique, unguessable confirmation token
  const token = crypto.randomBytes(24).toString('hex');

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim().slice(0, 60);
  const ua = String(req.headers['user-agent'] || '').slice(0, 300);

  // 1) Write PENDING lead to Supabase (service_role key bypasses RLS)
  try {
    const dbRes = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        email, source, status: 'pending', token, ip, user_agent: ua
      })
    });
    if (!dbRes.ok) {
      const t = await dbRes.text();
      console.error('submit: supabase insert failed', dbRes.status, t);
      return res.status(502).json({ ok: false, error: 'Could not save right now. Please try again.' });
    }
  } catch (e) {
    console.error('submit: supabase error', e);
    return res.status(502).json({ ok: false, error: 'Could not save right now. Please try again.' });
  }

  // 2) Send the confirmation email
  const confirmUrl = `${SITE_URL}/api/confirm?token=${token}`;
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#111;line-height:1.5">
      <p>Thanks for requesting the <b>Commercial Cleaning Bid Calculator</b>.</p>
      <p>Click below to confirm your email and get instant access:</p>
      <p style="margin:24px 0">
        <a href="${confirmUrl}"
           style="background:#C9A24B;color:#111;text-decoration:none;font-weight:bold;
                  padding:12px 22px;border-radius:6px;display:inline-block">
          Confirm &amp; get the calculator &rarr;
        </a>
      </p>
      <p style="font-size:13px;color:#666">
        If the button doesn't work, paste this link into your browser:<br>
        <span style="word-break:break-all">${confirmUrl}</span>
      </p>
      <p style="font-size:13px;color:#666">If you didn't request this, you can ignore this email.</p>
    </div>`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: LEAD_FROM,
        to: [email],
        subject: 'Confirm your email to get the calculator',
        html
      })
    });
    if (!r.ok) {
      const t = await r.text();
      console.error('submit: resend failed', r.status, t);
      return res.status(502).json({ ok: false, error: 'Could not send the confirmation. Please try again.' });
    }
  } catch (e) {
    console.error('submit: resend error', e);
    return res.status(500).json({ ok: false, error: 'Something went wrong. Please try again.' });
  }

  return res.status(200).json({ ok: true });
}
