# NANOROOF private-review fixes

NR-2 and NR-3 are combined on `theo/nr-fixes`, based on `c54b6510879990f66d64972c6a507ea0cb3bc3de`. Serve only `nanoroof-site/deploy/`; the original single-file prototype remains historical input and is not the preview artifact.

Governing review: workspace `RESEARCH/NR_3_AUDIT_2026_10_13.md`, SHA256 `a0439e9b6abd015af85fc73316c4060a1110d7bcd32d4a36acb87af05c8e5452`. Apply its corrected Fix and Ship instructions; held claims are omitted. This is not launch approval.

The deploy artifact removes the blocked PPS/commercial promotion, navigation, runtime FAQs/facts and sitemap entries. `/commercial/` and `/polyurea/` remain neutral unavailable pages (200), with no redirect. There are 43 remaining sitemap URLs. Source history is preserved.

The application now asks monthly job volume and opening-order acknowledgment. Revenue/capital selectors, state and telemetry are removed; legacy saved answers are discarded. Zero volume requires setter review. Start-smaller and not-now have distinct outcomes. The browser demo sends no application or booking to a backend. Existing unrelated export stubs remain stubs.

The home address CTA navigates to `/estimate/` and carries the address in tab-local sessionStorage. Tracking uses the actual page slug and emits no FAQ free text. Blank social links are hidden. The calculator exposes gallons with the 10% planning allowance, without a dollar calculation. Dealer contact/entity, warranty/care-plan, inspection and held claims follow the audited instructions. General homeowner contacts remain unresolved as directed by the audit; they are not silently mapped to the warranty desk.

## Verify

```bash
npm ci --ignore-scripts
npx playwright install chromium
npm test
```

The suite starts and stops an ephemeral loopback server. It verifies sitemap responses, prohibited strings across served HTML/JS/XML, neutral route fences, address transfer, telemetry privacy, all 20 volume × acknowledgment outcomes, stale-state migration, each remaining trade prompt and JavaScript errors across the sitemap. Reports are local, ignored artifacts. It uses fictional contact fields and sends no submissions.

Kaya reviews the exact head and Maat re-audits the claims diff before Simone can serve that approved commit privately on :3410. No public deployment, real form integration or cloud resources are included.

## SITES-PUBLIC-HOTFIX: public-release strip

This applies items 1, 4, 5 and 6 of Maat's public release check (`RESEARCH/MAAT_PUBLIC_RELEASE_CHECK_2026_10_22.md`), using Melan's defaults and Nova's rulings. Every change is a counted, exact row in `nanoroof-site/NR_PUBLIC_HOTFIX_DELTAS.json`.

- **Routes removed:** `/dealer-application/`, `/dealer-schedule/`, `/dealer-confirmed/`, `/find-a-dealer/`, `/estimate/`, `/roof-check/` and `/warranty/`. `_redirects` serves each of them as a true 404. The `/warranty/` text is unchanged in source history; NR-C09 still needs Ray.
- **Intake removed:**
  - On the home page: the address bar, its sessionStorage handoff, and the ZIP lookup.
  - The request forms on Architects, Field Data, Property owners and Technical data.
  - The contact form. Phone, email and mail address stay.
  - The Qualify self-check.
  - The photo check that sent a photo to Claude.
  - The dealer application, booking and confirmation funnel.
  - Their `site.js` handlers, the next-step CTA panels, and every link to the removed routes.
- **Claims removed (item 5):**
  - The bond-energy (kJ/mol) comparison and the UV-stability inference drawn from it.
  - UV, algae/mold and regrowth protection claims.
  - The 10/15/20/5-year warranty-term strings, in body copy, JSON-LD and `site.js`.
  - The "available now" colours wording.
  - The "warranty terms are in the written warranty" disclosures and Ray's overrides stay.
- **No indexing:** `robots.txt` is `Allow: /` with no sitemap line, so crawlers can fetch pages and see their noindex meta (a Disallow would hide it). `sitemap.xml` is removed. `_headers` sets `X-Robots-Tag: noindex` on `/*`, and `vercel.json` sets the same header for every path. GitHub Pages ignores both files, so every HTML page (including `404.html`) also carries `<meta name="robots" content="noindex">`; on Pages, assets get no noindex header.
- **Kept, collecting no data (Nova b05a6d7c):** three before/after `range` sliders, the Contractors material calculator `range`, and the FAQ `search` box. `npm test` lists them by file and line and asserts there are no forms, no other inputs, and no network, storage or submit handlers.

## Approved v7.6 source port (2026-11-06)

`site-source/` is the maintained static authoring tree from the approved full v7.6 archive (SHA256 `66bfd3c62109fa43d197ff226b68fb0cb0a9b765d3fc2eb7e76c1248faa374da`). It supersedes the historical renderer/prototype described above. Edit these HTML, CSS and runtime files for subsequent work; editing only the deploy output will be lost on rebuild. The earlier sources and verification remain available for historical comparison (`npm run test:legacy`; WetBond also has `npm run build:legacy`). They target the prior layout and do not validate v7.6.

Run `npm run build`, `npm test`, and `npm run preview`. Build settings and media input location are in `scripts/v76-config.json`; only the configured output directory is replaced. Existing media bytes are copied before the approved text/CSS/runtime overlay. NANOROOF media are now explicit inputs under `nanoroof-site/media/`. Serve only the configured output directory; source and docs are not public content.

The standing spec holds WB `/city-pittsburgh` and NR `/commercial` and `/polyurea` as real 404s. Those files remain in the unmodified archive source for traceability but are excluded from output; build removes any links to them and records changes. Preview verifies extensionless, slash and `.html` held-route variants. The archive has no links requiring removal. Host settings and noindex remain; no deployment is authorized.

`docs/V76_MANIFEST.sha256` records the full upstream manifest. `reports/v76-manifest.json` lists each byte match, each held-route omission and every extra media/config/icon file with SHA256. `reports/v76-browser.json` covers every served content page at 390 and 1440, local failed responses, JavaScript exceptions, decoded images, noindex, JSON-LD parsing and horizontal overflow. Kaya's requested audit snippet and comparison to v7.5 remain separate review gates; this script does not replace them. The unchanged legacy suites fail on the deliberately omitted WB city route and NR's new flat HTML layout.
