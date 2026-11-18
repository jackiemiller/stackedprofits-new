// Vercel Serverless Function — DOUBLE OPT-IN, step 2 of 2.
// Catches the click on the confirmation link. Validates the token, flips the
// lead to CONFIRMED in Supabase, notifies John, and serves an HTML page that
// hands over the calculator. Unconfirmed leads never reach this point.
//
// Required Vercel env vars: RESEND_API_KEY, SUPABASE_URL,
// SUPABASE_SERVICE_ROLE_KEY, SITE_URL, LEAD_TO (where your notification goes),
// LEAD_MAGNET_URL (the gated tool's real URL).

export default async function handler(req, res) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const SUPABASE_URL   = process.env.SUPABASE_URL;
  const SUPABASE_KEY   = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const SITE_URL       = process.env.SITE_URL || 'https://stackedprofits.com';
  const LEAD_TO        = process.env.LEAD_TO || 'bostondorch@gmail.com';
  const LEAD_MAGNET_URL = process.env.LEAD_MAGNET_URL || `${SITE_URL}/calculator.html`;
  const LEAD_FROM      = 'Stacked Profits <leads@stackedprofits.com>';

  const token = String((req.query && req.query.token) || '').trim();

  // Helper: full-page HTML response
  const page = (title, bodyHtml) => `<!doctype html><html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<style>
  :root{--brass:#C9A24B;--ink:#0e100f;--panel:#14201a;--text:#eef2ee}
  body{margin:0;background:var(--ink);color:var(--text);
       font-family:Arial,Helvetica,sans-serif;display:flex;min-height:100vh;
       align-items:center;justify-content:center;padding:24px}
  .card{background:var(--panel);border-radius:16px;padding:40px;max-width:520px;
        text-align:center;box-shadow:0 10px 40px rgba(0,0,0,.4)}
  h1{color:var(--brass);font-size:24px;margin:0 0 12px}
  p{font-size:16px;line-height:1.5;color:#cdd6cd}
  a.btn{display:inline-block;margin-top:22px;background:var(--brass);color:#111;
        text-decoration:none;font-weight:bold;padding:14px 26px;border-radius:8px}
  .foot{margin-top:26px;font-size:13px;color:#8a968a}
</style></head><body><div class="card">${bodyHtml}</div></body></html>`;

  if (!token) {
    return res.status(400).setHeader('Content-Type', 'text/html').send(
      page('Invalid link', `<h1>Hmm — link looks incomplete</h1>
        <p>That confirmation link is missing its code. Try clicking the button in the email again,
        or paste the full link into your browser.</p>`)
    );
  }

  if (!RESEND_API_KEY || !SUPABASE_URL || !SUPABASE_KEY) {
    console.error('confirm: missing env');
    return res.status(500).setHeader('Content-Type', 'text/html').send(
      page('Something went wrong', `<h1>Something went wrong</h1>
        <p>We couldn't confirm you right now. Please try again in a few minutes.</p>`)
    );
  }

  // 1) Look up the pending lead by token
  let lead;
  try {
    const q = await fetch(
      `${SUPABASE_URL}/rest/v1/leads?token=eq.${encodeURIComponent(token)}&select=*`,
      { headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` } }
    );
    const rows = await q.json();
    lead = Array.isArray(rows) ? rows[0] : null;
  } catch (e) {
    console.error('confirm: supabase lookup error', e);
    return res.status(502).setHeader('Content-Type', 'text/html').send(
      page('Something went wrong', `<h1>Something went wrong</h1>
        <p>We couldn't confirm you right now. Please try again in a few minutes.</p>`)
    );
  }

  if (!lead) {
    return res.status(404).setHeader('Content-Type', 'text/html').send(
      page('Link not found', `<h1>This link isn't valid</h1>
        <p>It may have already been used, or it expired. You can request access again
        from <a href="${SITE_URL}" style="color:var(--brass)">stackedprofits.com</a>.</p>`)
    );
  }

  // Already confirmed? Just hand over the calculator again — no double notify.
  if (lead.status === 'confirmed') {
    return res.status(200).setHeader('Content-Type', 'text/html').send(
      page('You are confirmed', `<h1>You're all set</h1>
        <p>Your email is already confirmed. Here's your calculator:</p>
        <a class="btn" href="${LEAD_MAGNET_URL}">Open the calculator &rarr;</a>`)
    );
  }

  // 2) Flip to confirmed
  try {
    const upd = await fetch(
      `${SUPABASE_URL}/rest/v1/leads?token=eq.${encodeURIComponent(token)}`,
      {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json', 'Prefer': 'return=minimal'
        },
        body: JSON.stringify({ status: 'confirmed', confirmed_at: new Date().toISOString() })
      }
    );
    if (!upd.ok) {
      const t = await upd.text();
      console.error('confirm: supabase update failed', upd.status, t);
    }
  } catch (e) {
    console.error('confirm: supabase update error', e);
    // Non-fatal — we still hand over the calculator so the visitor isn't stuck.
  }

  // 3) Notify John (best-effort — never block the visitor's access on this)
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: LEAD_FROM,
        to: [LEAD_TO],
        reply_to: lead.email,
        subject: `New CONFIRMED lead: ${lead.email} (${lead.source || 'calculator-optin'})`,
        html: `<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#111">
          <h2 style="margin:0 0 12px">New confirmed Stacked Profits lead</h2>
          <p><b>${lead.email}</b><br>Source: ${lead.source || 'calculator-optin'}<br>
          Confirmed: ${new Date().toISOString()}</p></div>`
      })
    });
  } catch (e) {
    console.error('confirm: notify error', e);
  }

  // 4) Hand over the calculator
  return res.status(200).setHeader('Content-Type', 'text/html').send(
    page('You are confirmed', `<h1>You're confirmed — here's your calculator</h1>
      <p>Thanks for confirming. Price any commercial cleaning job the right way:</p>
      <a class="btn" href="${LEAD_MAGNET_URL}">Open the calculator &rarr;</a>
      <div class="foot">Stacked Profits &middot; Know your numbers. Keep more profit.</div>`)
  );
}
