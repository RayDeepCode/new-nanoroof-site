# Dealer pages: tracking, avatars and A/B

## Go-live config (top of <head> on index.html and confirmed.html)
metaPixelId, ga4Id, capiEndpoint, leadEndpoint, bookingUrl (+ bookingPrefill param names), vslSrc, hostPhoto.
Confirmation page: confirmVideo (7 min), faqVideos [...], deepDiveUrl.
Set the booking tool's post-booking redirect to confirmed.html?booked=1.

## Events (Pixel + dataLayer + optional CAPI, every event carries brand, avatar, ab_variant, event_id)
PageView ............ page load
ChapterView ......... chapter 1–4 reached
SectionView ......... section in view (section = who, boom, problem, stewardship/how, compare, paper, warranty, jobs, gallery,
                      labor, calculator, leads, platform, start, offer, financing, seats, why-us, faq, next, proof_strip, case_studies)
ViewContent ......... startup_investment (#offer), warranty, financing
ReadDepth ........... 25/50/75/100
EngagedVisit ........ 60s, 180s
VSLOpen / VSLPlay / VSLProgress (25/50/75)
CalcUse / CalcPriceEntered
FAQOpen ............. question
DealerCTA ........... placement
MarketCheckStart .... step 1 (city)
AppStep ............. steps 2–4 with answer (avatar, timeline, readiness)
Lead ................ contact submitted (standard; em/ph/fn sent to CAPI endpoint for hashing server-side)
QualifiedLead ....... Lead where timeline != research and readiness != not_yet  -> optimize ads on this
BookingView ......... calendar shown
Schedule ............ booking confirmed (calendar postMessage, or confirmed.html, deduped)
ExitIntentShown / CompleteRegistration (deep_dive opt-in)
ConfirmVideoPlay / ConfirmVideoProgress (confirmation page)

## Avatars
?a=new | roofer | exterior | solar          (NANOROOF)
?a=new | waterproofer | concrete | remodel  (WetBond)
Or put the key in utm_content, e.g. utm_content=roofer_hook2. Last avatar is remembered per visitor.
Swaps: hero kicker/headline/dek/chips, "for you" story block, a note under each of the 4 chapter headers,
fit card order, the trade tab in Part 1, FAQ order, the closing line, and the form's step-2 preselect.
Copy lives in <script id="avcfg"> on each page.

## A/B
One hero-headline test per avatar (arms A/B, 50/50, sticky per visitor). Force with ?ab=A or ?ab=B.
Read results by ab_variant + avatar on Lead / QualifiedLead / Schedule (Meta custom conversions or GA4).

## Site mount (2026-11-20)
- Live paths: `/contractors/briefing/` (index) and `/contractors/briefing/confirmed/`
- Gate remains `/contractors/` and links into the briefing.
- Set `confirmUrl` to `/contractors/briefing/confirmed/` (already set in index.html).
- Leave Meta/GA/booking/vsl IDs empty until go-live values are provided.
