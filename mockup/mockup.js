/* Design mockup v1. Injects the approved changes at runtime so the page source stays identical to the site. */
window.MK={"brand": "nr", "name": "NANOROOF", "phone": "1-877-643-NANO", "tel": "+18776436266", "ask": "Roof Life Assessment", "cta": "Get my free estimate", "ziplabel": "See what it costs to keep your roof", "host": "tools.nanoroof.com", "tools": {"request": ["Request a free Roof Life Assessment", "Pick a time, tell us about the roof. A Certified Dealer confirms."], "booking": ["Book a time", "Step 2 after a request: choose a slot on the calendar."], "estimator": ["Estimator", "Preserve or replace? See every option and what drives the price."], "dealer-application": ["Dealer application", "Apply to become a NANOROOF dealer, with the overview video and a call booking."], "quiz": ["Fit check", "Is your roof a candidate? 5 questions from the ground."], "photo-quote": ["Photo quote", "Send photos of your roof, get a pre-assessment."], "checklist": ["Ground checklist", "What to look for from the yard, step by step."], "comparison": ["Compare your options", "Every way to handle an aging roof, side by side."], "visualizer": ["Visualizer", "See a finish on your roof. Every image is labeled Visualization."], "care-plan": ["Care plan", "A year-round care plan for your roof."], "material-calculator": ["Material calculator", "Product quantities for a job, from the data sheet coverage rates."], "referral": ["Referral", "Know someone whose roof needs attention? Refer them."], "locator": ["Dealer locator", "Find a Certified Dealer by ZIP."], "portfolio": ["Project portfolio", "Real, dated jobs from Certified Dealers."], "training": ["Dealer training", "Certification training for signed-in dealers."]}, "img": ["booking", "care-plan", "checklist", "comparison", "dealer-application", "estimator", "locator", "material-calculator", "photo-quote", "portfolio", "quiz", "referral", "request", "training", "visualizer"], "home": ["quiz", "estimator", "photo-quote", "checklist", "comparison", "visualizer"], "pages": {"/": ["comparison"], "/assessment": ["request", "photo-quote"], "/contact": ["request", "locator"], "/preservation": ["estimator", "comparison"], "/products": ["estimator"], "/qualify": ["quiz"], "/homeowners": ["quiz"], "/roof-leaks": ["photo-quote", "checklist"], "/granule-loss": ["checklist"], "/curling-cracking": ["checklist"], "/algae-streaks": ["checklist"], "/colors": ["visualizer"], "/care-plan": ["care-plan"], "/tune-up": ["care-plan"], "/cleaning": ["care-plan"], "/technical-data": ["material-calculator"], "/contractors": ["dealer-application", "material-calculator", "training"], "/referral-partners": ["referral"], "/field-data": ["portfolio"]}};
(function () {
  var M = window.MK, nr = M.brand === "nr";
  function path() {
    var p = location.pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
    if (p.length > 1) p = p.replace(/\/$/, "");
    return p || "/";
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function toolUrl(k) { return "/mockup/tools/" + k + "/"; }
  function el(h) { var t = document.createElement("template"); t.innerHTML = h.trim(); return t.content.firstChild; }

  function flag() {
    if (document.getElementById("mk-flag")) return;
    document.body.insertBefore(el('<div class="mk-flag mk" id="mk-flag">MOCKUP of ' + esc(M.name) + ' with the approved design changes. Not the live site.</div>'), document.body.firstChild);
  }
  function bar() {
    if (document.getElementById("mk-bar")) return;
    document.body.appendChild(el('<div class="mk-bar mk" id="mk-bar"><a class="c" href="tel:' + M.tel + '">Call</a><a class="p" href="' + toolUrl("request") + '">Free ' + esc(M.ask.replace(/^\w/, function (c) { return c; })) + '</a></div>'));
    document.body.classList.add("mk-has-bar");
  }
  function hideOldBars() {
    if (nr) { var m = document.querySelector(".mbar"); if (m) m.style.display = "none"; return; }
    var all = document.querySelectorAll("a,button");
    for (var i = 0; i < all.length; i++) {
      if (all[i].textContent.trim() !== "Call us" || all[i].closest(".mk")) continue;
      var n = all[i];
      for (var j = 0; j < 4 && n; j++) { if (getComputedStyle(n).position === "fixed") { n.style.display = "none"; break; } n = n.parentElement; }
    }
  }
  function zipCard() {
    return '<div class="mk-zip mk" id="mk-zip"><b>' + esc(M.ziplabel) + '</b><form action="' + toolUrl("estimator") + '" method="get">' +
      '<input name="zip" inputmode="numeric" autocomplete="postal-code" pattern="[0-9]{5}" maxlength="5" placeholder="ZIP code" aria-label="ZIP code">' +
      '<button type="submit">' + esc(M.cta) + '</button></form><small>3 quick steps · no obligation · or call <a href="tel:' + M.tel + '">' + esc(M.phone) + '</a></small></div>';
  }
  function hero() {
    if (path() !== "/" || document.getElementById("mk-zip")) return;
    if (nr) {
      var h = document.querySelector("section.hero"); if (!h) return;
      var ps = h.querySelectorAll("p"), last = ps[ps.length - 1] || h.querySelector("h1");
      last.insertAdjacentHTML("afterend", zipCard());
    } else {
      var a = [].filter.call(document.querySelectorAll("a"), function (x) { return x.textContent.trim() === "Call to find a Certified Dealer"; })[0];
      if (!a) return;
      a.parentElement.insertAdjacentHTML("beforebegin", zipCard()); a.parentElement.style.display = "none";
    }
  }
  function sections() {
    var root = document.querySelector("main") || document.getElementById("dc-root") || document.body;
    return [].filter.call(root.querySelectorAll("section"), function (s) { return !s.closest(".mk") && !s.parentElement.closest("section") && !s.closest("header,footer,nav"); });
  }
  function homeTools() {
    if (path() !== "/" || document.getElementById("mk-tools")) return;
    var s = sections(); if (!s.length) return;
    var cards = M.home.map(function (k) { return '<a href="' + toolUrl(k) + '"><strong>' + esc(M.tools[k][0]) + ' →</strong><span>' + esc(M.tools[k][1]) + '</span></a>'; }).join("");
    var first = nr ? (document.querySelector("section.hero") || s[0]).nextElementSibling || s[0] : s[0];
    first.insertAdjacentHTML("afterend", '<section class="mk-sec mk" id="mk-tools"><div class="in"><h2>Plan it yourself, in minutes</h2><p class="l">Free tools. No contact details until you ask for an inspection.</p><div class="mk-grid">' + cards + '</div></div></section>');
  }
  function toolCard(k) {
    var t = M.tools[k], img = M.img.indexOf(k) >= 0 ? '<div class="shot"><img src="/mockup/img/' + k + '.jpg" alt="' + esc(t[0]) + ' preview" loading="lazy"></div>' : "";
    return '<div class="mk-tool">' + img + '<div class="tx"><h3>' + esc(t[0]) + '</h3><p>' + esc(t[1]) + '</p><a class="go" href="' + toolUrl(k) + '">Open ' + esc(t[0].toLowerCase()) + '</a>' +
      '<p class="mk-note">Mockup: the live tool loads here from ' + M.host + '. If it can\'t load, a "Call ' + esc(M.phone) + '" link shows instead.</p></div></div>';
  }
  function slots() {
    var list = M.pages[path()]; if (!list || document.getElementById("mk-slot")) return;
    var s = sections(); if (!s.length) return;
    var anchor = s[Math.min(1, s.length - 1)];
    if (path() === "/" && nr) anchor = document.getElementById("home-compare") || anchor;
    var head = list.length === 1 ? M.tools[list[0]][0] : "Tools for this step";
    anchor.insertAdjacentHTML("afterend", '<section class="mk-sec mk" id="mk-slot"><div class="in"><h2>' + esc(head) + '</h2><p class="l">' + esc(list.length === 1 ? M.tools[list[0]][1] : "Use these free tools right here on the page.") + '</p><div class="mk-slot' + (list.length > 1 ? " two" : "") + '">' + list.map(toolCard).join("") + '</div></div></section>');
  }
  function apply() {
    if (!document.body) return;
    try { flag(); hideOldBars(); bar(); hero(); homeTools(); slots(); } catch (e) { if (window.console) console.warn("mockup", e); }
  }
  var t; function soon() { clearTimeout(t); t = setTimeout(apply, 120); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply); else apply();
  window.addEventListener("load", apply);
  // WetBond renders parts of its pages after load; re-apply if that render replaces our blocks.
  new MutationObserver(soon).observe(document.documentElement, { childList: true, subtree: true });
  setTimeout(function () { /* stop watching after hydration settles */ }, 8000);
})();
