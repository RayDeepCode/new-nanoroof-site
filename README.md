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
