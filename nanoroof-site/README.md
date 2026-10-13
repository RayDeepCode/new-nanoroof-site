# nanoroof.com site bundle

## What's inside
- `deploy/` — the production site: 46 pages, each with its own URL, plus shared assets, sitemap.xml and robots.txt. Upload this folder to your host. See `deploy/README.md` for Netlify, Vercel and other hosts.
- `prototype/nanoroof-site.html` — the whole site in one self-contained file. Double-click to open it in any browser, offline. Good for reviews and sharing.

## Before launch
- Placeholders are highlighted in yellow on the pages (videos, dealer testimonials, starter option, calendar embed, Master Dealer threshold, dealer platform name, playbook PDF, insurer source).
- Social links: set the URLs in the `SOCIAL` map in `deploy/assets/site.js`.
- Forms: connect submissions to the CRM webhook.
- Analytics: add a Google Tag Manager container; events are already pushed to `window.dataLayer`.
