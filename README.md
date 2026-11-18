# Stacked Profits — House Cleaners funnel (double opt-in)

Gated lead funnel for the **House Cleaners** vertical. A visitor gives their
email to unlock a free lead magnet (the Commercial Cleaning Bid Calculator),
confirms via email (true double opt-in), and only then reaches the magnet —
while a confirmed-lead notification fires to John. Static pages + two
serverless functions + a Supabase table. Deploys to **stackedprofits.com** on
Vercel, no build step.

## The flow
1. All traffic (comment-trigger replies **and** cold web) lands on the root
   opt-in page (`index.html`) — bookkeeping hero + a gated "get the free
   calculator" form. The calculator is **never linked directly** on this page.
2. Submit email → `api/submit.js` writes a **pending** row to Supabase with a
   unique token and emails the visitor a one-click confirmation link.
3. Visitor clicks the link → `api/confirm.js` validates the token, flips the
   row to **confirmed**, notifies John, and serves the calculator.
4. Unconfirmed = never reaches the list, never gets the magnet.

## Files
- `index.html` .................. root opt-in landing page (bookkeeping hero + gated magnet form)
- `calculator.html` ............. the lead magnet (Commercial Cleaning Bid Calculator). Present but never linked publicly — only reached after confirmation.
- `api/submit.js` .............. serverless: writes pending lead to Supabase, sends the confirmation email (Resend)
- `api/confirm.js` ............. serverless: validates token, confirms lead, notifies John, serves the magnet
- `commercial-cleaning-proposal-template.docx` ... parked for a later, separate proposal opt-in build (not used by the current page)
- `vercel.json` ................ clean URLs

## Environment variables (Vercel → Settings → Environment Variables)
Scope each to Production + Preview.
- `RESEND_API_KEY` ............. Resend key (sending). Sender = leads@stackedprofits.com (verified).
- `SUPABASE_URL` .............. e.g. https://xxxx.supabase.co  (no trailing slash)
- `SUPABASE_SERVICE_ROLE_KEY` .. Supabase service_role (secret) key — bypasses RLS, server-only. Never in browser/GitHub.
- `SITE_URL` .................. https://stackedprofits.com (used to build the confirm link)
- `LEAD_TO` ................... where the confirmed-lead notification goes (bostondorch@gmail.com)
- `LEAD_MAGNET_URL` ........... the gated magnet's URL (https://stackedprofits.com/calculator.html)

**NOTE (11/17/2026):** the .pro → .com migration is complete. `SITE_URL` and
`LEAD_MAGNET_URL` are updated and redeployed on Vercel, `stackedprofits.com` is
verified in Resend (SPF/DKIM/DMARC), and `leads@stackedprofits.com` is the live
sender address in `api/submit.js`/`api/confirm.js`. `stackedprofits.pro` was
deleted from Resend to free a domain slot on the free plan — it is no longer a
verified sender. A 301 redirect from `.pro` to `.com` (and retiring
`hello@stackedprofits.pro` in favor of `hello@stackedprofits.com`) is still
outstanding.

After adding/changing env vars, **redeploy** (Vercel bakes them at build time).

## Data (Supabase)
Table `public.leads` (RLS ON — only the service_role key writes to it):
`id, email, source, status (pending|confirmed), token, created_at, confirmed_at, ip, user_agent`.
`source` tags which entry path a lead came from (`calculator-optin`), so multiple
verticals can share one table and stay segmented.

## Magnet-agnostic by design (for future verticals)
The plumbing has nothing cleaning-specific except copy and one URL. To stand up a
new vertical (pest control, septic, etc.):
- point `LEAD_MAGNET_URL` at that vertical's magnet (calculator, checklist, worksheet — whatever fits),
- swap the landing-page copy,
- tag its leads with a new `source`.
The magnet is the variable; the gate + stacked services are the constant.

## Notes
- Fails loud, never silent: if Supabase or Resend is unavailable, the visitor
  sees a clear "try again" and nothing is lost quietly (matters because a paused
  free-tier Supabase project would otherwise drop leads).
- Proposal-template double opt-in is a separate, later build.
