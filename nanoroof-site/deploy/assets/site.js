
(function(){
var $=function(id){return document.getElementById(id);};
var qa=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s));};
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- FAQ content ---------- */
var FAQ={
 cost:['How much does it cost?','It depends on your roof\u2019s size, pitch, condition and local labor. Your dealer confirms the price after the free assessment. Repairs found at the assessment are priced separately.'],
 leak:['Will it stop my roof from leaking?','No. Most roof leaks come from flashings around chimneys, skylights and walls, not from the shingles. Your dealer repairs those first during the tune-up, and the assessment will point them out.'],
 new:["Can I treat a new roof?", "A dealer can check your roof and tell you when it makes sense."],
 old:['My roof is over 20 years old. Is it too late?','Not always. It depends on condition rather than age: granule loss, brittleness and the decking underneath. The assessment answers it for your roof.'],
 'qualify-who':['Who decides whether my roof qualifies?','The certified dealer, at the roof-life assessment, based on the shingles, the decking and the flashings. You get the reason in writing either way.'],






 color:["Can NANOROOF restore roof color?", "Ask your dealer for approved color options and a sample on your roof."],
 colorhoa:['Do I need HOA approval for a roof color?','Often, yes. Many communities approve roof colors, so check your HOA rules before choosing. A shade close to your current roof is usually the easiest to get approved.'],
 trap:["What is the SPS System?", "A water-based silicone that penetrates and bonds inside asphalt shingles and adds a surface layer."],
 rejuv:['How is this different from a rejuvenator or other soak-in treatment?','Rejuvenators and other penetrating treatments, including nano-silica products, soak into the asphalt but leave no protective layer on top of the granules. NANOROOF penetrates and bonds inside the shingle and also forms a bonded layer on top, encapsulating it.'],
 sealer:["How is it different from a roof coating or a rejuvenator?", "NANOROOF penetrates and bonds inside asphalt shingles and adds a surface layer."],
 how:['What is NANOROOF made of?','NANOROOF is a water-based silicone elastomer made with proprietary nano-chemistry, designed for asphalt shingles. It\u2019s applied by spray.'],
 w1:["What does the warranty cover?", "10-year warranty standard; 15 and 20 available on qualifying roofs; 5-year on Level-5 roofs."],
 w2:['What does \u201cuseful life\u201d mean?','The period during which the shingles can reasonably be expected to protect the roof structure underneath.'],
 w3:['Does my shingle manufacturer\u2019s warranty matter?','The NANOROOF warranty stays valid even if your shingle manufacturer\u2019s warranty has expired or can\u2019t be transferred.'],
 w4:['What isn\u2019t covered?','Acts of God and natural disasters, roof leaks, structural failures, failures of earlier coatings, unforeseen environmental conditions, and damage from faulty application or inadequate repairs.'],
 insure:['Will my insurance company accept a preserved roof?','Each insurer sets its own rules on roof age and condition, so we can\u2019t promise how yours will treat it. Your Roof Record gives an inspector the photos, readings and warranty from the job.'],
 day:['What happens on the day?','The crew washes and preps the roof, checks shingle moisture, sprays the treatment, leaves a test sample and records the readings. No tear-off.'],
 temp:["Can NANOROOF be applied in winter?", "Spray-applied; it isn’t applied in cold weather."],
 buy:['Can I buy NANOROOF and apply it myself?','No. NANOROOF products are professional-grade and sold only to trained, certified NANOROOF Certified Dealers, not to homeowners or at retail. The result depends on the whole protocol: the assessment, repairs, soft wash, baseline readings, metered application and registration. Only a certified dealer can register the job, and the warranty depends on that registration.'],
 tune1:['What does a tune-up include?','Flashings inspected and repaired, gutters cleared, damaged shingles replaced, loose shingles secured, penetrations repaired, attic ventilation checked, valleys cleared, eaves and soffits inspected, branches trimmed and drainage checked.'],
 tune2:['How often should I get a tune-up?','At least once a year, after severe weather, and before selling your home.'],
 tune3:['Can a tune-up prevent leaks?','It reduces the risk by repairing flashings, securing loose shingles and fixing weak spots before water finds them.']
};
qa('[data-faq]').forEach(function(box){
  box.innerHTML=box.getAttribute('data-faq').split(',').map(function(k){var f=FAQ[k];return f?'<details><summary>'+f[0]+'</summary><p>'+f[1]+'</p></details>':'';}).join('');
});

function initCycle(S){ if(!document.getElementById('ring'+S)) return;
/* ---------- failure cycle ---------- */
  var STAGES = [
    {t:['UV'], title:'UV exposure', cut:true,
     body:'Sunlight hits the asphalt wherever the granule layer has thinned. Granules are the shingle\u2019s sunscreen; every one lost lets more UV through.',
     fix:'The silicone layer on top shields the shingle surface from UV, and it covers the spots where granules have already thinned.'},
    {t:['Photo-oxidation','+ volatilization'], title:'Photo-oxidation and volatilization', cut:true,
     body:'UV oxidizes the asphalt binder, and heat drives off its lighter oils. The asphalt slowly loses the compounds that keep it supple.',
     fix:'SPS encapsulates: a water-based silicone that penetrates and bonds inside asphalt shingles and adds a surface layer.'},
    {t:['Brittleness'], title:'Brittleness', cut:false,
     body:'With its oils gone and its binder oxidized, the asphalt hardens. A brittle shingle can\u2019t flex the way a new one does.',
     fix:'Not reversed directly. NANOROOF slows it by working on the stages that feed it: UV, oxidation and moisture.'},
    {t:['Thermal-cycling','cracks'], title:'Thermal-cycling cracks', cut:false,
     body:'A roof heats and cools every day. Brittle asphalt can\u2019t keep up with that movement, so it develops surface cracks.',
     fix:'Slowed rather than stopped: fewer stages feeding brittleness means less cracking. The silicone layer is flexible, so it isn\u2019t a rigid film that cracks with the shingle.'},
    {t:['Moisture','entry'], title:'Moisture entry', cut:true,
     body:'Water gets into the cracks and the open surface. In cold climates, freeze-thaw widens the cracks each winter.',
     fix:'The bonded silicone layer on top adds water protection over the shingle and its surface cracks.'},
    {t:['Biological','growth'], title:'Biological growth', cut:true,
     body:'Algae, moss and lichen take hold where the surface stays damp. They hold water against the shingle and work granules loose.',
     fix:'The roof is washed clean first, then NANOROOF protects against organic growth coming back.'},
    {t:['Granule','loss'], title:'Granule loss', cut:true,
     body:'Granules loosen and wash into the gutters. Bare asphalt is now open to the sun, and the loop starts again, faster.',
     fix:'Encapsulating the shingle holds the remaining granules in place, which is what keeps the next turn of the loop from starting.'}
  ];
  var cx=280, cy=280, R=200, NR=58, n=STAGES.length, cur=0;
  var NS='http://www.w3.org/2000/svg';
  var ang=function(i){ return -Math.PI/2 + i*2*Math.PI/n; };
  var pos=function(i){ return [cx+R*Math.cos(ang(i)), cy+R*Math.sin(ang(i))]; };
  var arcs=$('arcs'+S), nodes=$('nodes'+S);
  for (var i=0;i<n;i++){
    var off=(NR+8)/R, a1=ang(i)+off, a2=ang(i+1)-off-0.02;
    var p1=[cx+R*Math.cos(a1),cy+R*Math.sin(a1)], p2=[cx+R*Math.cos(a2),cy+R*Math.sin(a2)];
    var path=document.createElementNS(NS,'path');
    path.setAttribute('d','M'+p1[0]+' '+p1[1]+' A'+R+' '+R+' 0 0 1 '+p2[0]+' '+p2[1]);
    path.setAttribute('class','arc'); path.setAttribute('marker-end','url(#ah'+S+')');
    arcs.appendChild(path);
  }
  STAGES.forEach(function(s,i){
    var p=pos(i), g=document.createElementNS(NS,'g');
    g.setAttribute('class','node'+(s.cut?' cut':'')); g.setAttribute('tabindex','0'); g.setAttribute('role','button');
    g.setAttribute('aria-label','Stage '+(i+1)+': '+s.title+(s.cut?'. NANOROOF works against this stage.':''));
    var c=document.createElementNS(NS,'circle'); c.setAttribute('cx',p[0]); c.setAttribute('cy',p[1]); c.setAttribute('r',NR); g.appendChild(c);
    var num=document.createElementNS(NS,'text'); num.setAttribute('class','num'); num.setAttribute('x',p[0]); num.setAttribute('text-anchor','middle');
    num.setAttribute('y', p[1] - (s.t.length>1?16:8)); num.textContent=(i+1); g.appendChild(num);
    s.t.forEach(function(line,k){
      var t=document.createElementNS(NS,'text'); t.setAttribute('class','t'); t.setAttribute('x',p[0]); t.setAttribute('text-anchor','middle');
      t.setAttribute('y', p[1] + (s.t.length>1? (k===0?4:20) : 12)); t.textContent=line; g.appendChild(t);
    });
    g.addEventListener('click',function(){ show(i); });
    g.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); show(i);} });
    nodes.appendChild(g);
  });
  function show(i){
    cur=(i+n)%n; var s=STAGES[cur];
    Array.prototype.forEach.call(nodes.children,function(g,k){ g.classList.toggle('on',k===cur); g.setAttribute('aria-pressed',k===cur?'true':'false'); });
    $('dStep'+S).textContent='Stage '+(cur+1)+' of '+n+(cur===n-1?' \u2192 back to stage 1':'');
    $('dTitle'+S).textContent=s.title; var di=$('dImg'+S); di.className='dimg gi-'+(4+cur); di.setAttribute('aria-label','Illustration: '+s.title.toLowerCase()+' on an asphalt shingle roof');
    $('dBody'+S).textContent=s.body;
    $('dFixHead'+S).textContent= s.cut ? 'Where NANOROOF interrupts it' : 'What NANOROOF does here';
    $('dFix'+S).textContent=s.fix;
  }
  $('prev'+S).addEventListener('click',function(){ show(cur-1); });
  $('next'+S).addEventListener('click',function(){ show(cur+1); });
  show(0);

  
}
initCycle('-home'); initCycle('-how');

/* ---------- next-step blocks ---------- */
var NEXT={
 'how-it-works':['See if your roof qualifies','A free assessment tells you in writing.','#/estimate','Get my estimate','#/qualify','Does my roof qualify?'],
 qualify:['Find out for your roof','Start with a rough estimate, then book the free assessment.','#/estimate','Get my estimate','#/assessment','What the assessment checks'],
 products:['Get NANOROOF on your roof','Products are applied by certified dealers.','#/find-a-dealer','Find a dealer','#/estimate','Get my estimate'],
 assessment:['Book your free assessment','A certified dealer inspects the roof and gives you a written answer.','#/find-a-dealer','Find a dealer','#/estimate','Get an estimate first'],
 'tune-up':['Book a tune-up','Every preservation job starts with one.','#/find-a-dealer','Find a dealer','#/care-plan','About the Care Plan'],
 cleaning:['Clean, then preserve','Washing is included in every preservation job.','#/estimate','Get my estimate','#/preservation','How preservation works'],
 preservation:['See what your roof would cost','A certified dealer assesses whether your roof qualifies.','#/estimate','Get my estimate','#/warranty','See the warranty'],
 'care-plan':['Keep your roof on the record','Ask your dealer about the Care Plan.','#/find-a-dealer','Find a dealer','#/warranty','See the warranty'],
 warranty:['Start with an estimate','Then book the free assessment.','#/estimate','Get my estimate','#/faq','Read the FAQ'],
 'property-owners':['Talk about your portfolio','We\u2019ll come back within two business days.','#/property-owners/request','Request a savings report','#/contact','Contact us'],
 faq:['Still have a question?','Call or send us a message.','#/contact','Contact us','#/estimate','Get my estimate'],
 learn:['Ready to look at your roof?','A rough estimate takes about a minute.','#/estimate','Get my estimate','#/faq','Read the FAQ'],
 about:['See what NANOROOF would do for your roof','Start with an estimate.','#/estimate','Get my estimate','#/contractors','Become a dealer'],
 sustainability:['Keep your roof','Start with an estimate.','#/estimate','Get my estimate','#/how-it-works','How it works'],
 'find-a-dealer':['Not sure yet?','See a rough estimate first.','#/estimate','Get my estimate','#/faq','Read the FAQ'],
 'repair-products':['Have the small problems sealed','Every NANOROOF job starts with a 10-point tune-up.','#/tune-up','See the tune-up','#/find-a-dealer','Find a dealer'],
 'cleaning-products':['See what a soft wash can do','Cleaning is part of every preservation job.','#/cleaning','How roof cleaning works','#/estimate','Get my estimate'],
 'technical-data':['Need the full data sheets?','Technical and safety data sheets on request.','#/technical-data/request','Request data sheets','#/architects','For architects'],
 science:['See the science on your roof','A free assessment tells you which system fits.','#/assessment','Book an assessment','#/estimate','Get my estimate'],

 'roof-check':['Ready for a real answer?','A free assessment confirms it in writing.','#/assessment','Book a free assessment','#/estimate','Get my estimate'],
 'granule-loss':['Find out how much granule is left','A free assessment measures it slope by slope.','#/assessment','Book an assessment','#/roof-check','Check a photo'],
 'algae-streaks':['Get the streaks off safely','Soft wash, then preserve.','#/cleaning','How roof cleaning works','#/estimate','Get my estimate'],
 'curling-cracking':['Is it too late?','A dealer checks flexibility and tells you honestly.','#/assessment','Book an assessment','#/roof-check','Check a photo'],
 'roof-leaks':['Fix the leak first','The tune-up finds and seals it.','#/tune-up','See the tune-up','#/find-a-dealer','Find a dealer'],
 sps:['See what the SPS System would cost on your roof','A certified dealer assesses whether your roof qualifies.','#/estimate','Get my estimate','#/find-a-dealer','Find a dealer'],
 silicone:['Put silicone to work on your roof','Ask a certified dealer about preservation.','#/estimate','Get my estimate','#/products','See the SPS System'],
 'roof-system':['Have your roof checked as a system','A free assessment covers the shingles, structure, flashings, ventilation and workmanship.','#/assessment','Book an assessment','#/estimate','Get my estimate'],
 colors:['See what your roof would cost','Ask your dealer for approved color options and a sample on your roof.','#/estimate','Get my estimate','#/find-a-dealer','Find a dealer'],
 moisture:['See how NANOROOF compares','Coatings, penetrants and NANOROOF, side by side.','#/how-it-works/compare','See the comparison','#/estimate','Get my estimate'],
 'field-data':['Start your roof\u2019s record','Every registered roof gets a Roof Record from day one.','#/estimate','Get my estimate','#/find-a-dealer','Find a dealer'],
 homeowners:['See what your roof would cost','A certified dealer assesses whether your roof qualifies.','#/estimate','Get my estimate','#/faq','Read the FAQ'],
 architects:['Need documents for a project?','Technical and safety data, protocol and sample warranties.','#/architects/project','Discuss a project','#/products','See the product line'],
 'referral-partners':['Become a referral partner','Tell us about your business.','#/contact','Talk to us','#/contractors','Become a dealer']
};
Object.keys(NEXT).forEach(function(k){
  var pg=document.querySelector('[data-page="'+k+'"]'); if(!pg) return; var n=NEXT[k];
  var s=document.createElement('section'); s.className='next';
  s.innerHTML='<div class="wrap"><div class="ctapanel nextpanel"><div><h2>'+n[0]+'</h2><p>'+n[1]+'</p></div><div class="acts"><a class="btn btn-green" href="'+n[2]+'">'+n[3]+'</a><a class="btn btn-line" href="'+n[4]+'">'+n[5]+'</a></div></div></div>';
  pg.appendChild(s);
});

/* ---------- demo forms + zip ---------- */
qa('form[data-demo-form]').forEach(function(f){
  f.addEventListener('submit',function(e){e.preventDefault();var o=f.querySelector('.find-out');o.textContent='Prototype: this form connects to the CRM at launch. For now, call 1-877-643-NANO or email info@nanoroof.com.';});
});
qa('form.zipform').forEach(function(f){
  f.addEventListener('submit',function(e){e.preventDefault();var i=f.querySelector('input'),z=i.value.trim(),o=f.parentNode.querySelector('.find-out');
    if(!/^\d{5}$/.test(z)){o.textContent='Enter a 5-digit ZIP code.';i.focus();return;}
    o.textContent='Dealer lookup connects at launch. For now, call 1-877-643-NANO and we will route ZIP '+z+' to the nearest certified dealer.';});
});

/* ---------- mega menu ---------- */
var trigs=qa('.mtrig'), panels=qa('.mpanel');
function closeMenus(){trigs.forEach(function(t){t.setAttribute('aria-expanded','false');});panels.forEach(function(p){p.classList.remove('open');});}
trigs.forEach(function(t){
  t.addEventListener('click',function(e){e.stopPropagation();var open=t.getAttribute('aria-expanded')==='true';closeMenus();
    if(!open){t.setAttribute('aria-expanded','true');$(t.getAttribute('aria-controls')).classList.add('open');}});
});
document.addEventListener('click',function(e){if(!e.target.closest('.mpanel')) closeMenus();});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeMenus();closeDrawer();}});

/* ---------- drawer ---------- */
var drawer=$('drawer'), burger=$('burger');
function openDrawer(){drawer.classList.add('open');drawer.setAttribute('aria-hidden','false');burger.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';drawer.querySelector('.x').focus();}
function closeDrawer(){if(!drawer.classList.contains('open'))return;drawer.classList.remove('open');drawer.setAttribute('aria-hidden','true');burger.setAttribute('aria-expanded','false');document.body.style.overflow='';}
burger.addEventListener('click',openDrawer);
qa('[data-close]',drawer).forEach(function(b){b.addEventListener('click',closeDrawer);});
qa('.dgroup>button',drawer).forEach(function(b){b.addEventListener('click',function(){var ul=b.nextElementSibling,o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',o?'false':'true');ul.classList.toggle('open',!o);});});


/* ---------- homepage address bar -> estimate page ---------- */
var af=document.getElementById('addrForm');
if(af){ af.addEventListener('submit',function(e){ e.preventDefault();
  var v=document.getElementById('addr').value.trim(), er=document.getElementById('addrErr');
  if(v.length<6||!/\d/.test(v)){ er.textContent='Enter your street address, for example 120 Oak Street, Springfield.'; document.getElementById('addr').focus(); return; }
  er.textContent=''; try{sessionStorage.setItem('nr_estimate_address',v);}catch(e){} window.__roofAddr=v; location.href='/estimate/'; }); }
function showAddr(){ var host=document.querySelector('[data-address-handoff]'); if(!host) return;
  var box=document.getElementById('estAddr');
  if(!box){ box=document.createElement('div'); box.id='estAddr'; box.className='est-addr'; host.parentNode.insertBefore(box,host); }
  try{window.__roofAddr=window.__roofAddr||sessionStorage.getItem('nr_estimate_address');}catch(e){}
  if(window.__roofAddr){ box.innerHTML='<b>Address:</b> '+window.__roofAddr.replace(/[<>&]/g,'')+'<br><span style="font-size:.9rem">No roof measurement or price calculation is connected in this preview.</span>'; box.classList.add('on'); }
}
showAddr();


/* ---------- sustainability calculator ---------- */
var sq=document.getElementById('susSq');
if(sq){ var upd=function(){ var s=parseFloat(sq.value); if(!s||s<500) s=500; if(s>20000) s=20000;
  var lo=s*2/2000, hi=s*5/2000, f=0.19+0.04;
  var r1=function(x){return x.toFixed(1)};
  document.getElementById('susT').textContent=r1(lo)+' to '+r1(hi)+' tons';
  document.getElementById('susC').textContent=r1(lo*f)+' to '+r1(hi*f)+' t'; };
  sq.addEventListener('input',upd); upd(); }


/* ---------- audience bar ---------- */
var AUD={homeowners:'Homeowner',contractors:'Contractor','dealer-application':'Contractor','dealer-schedule':'Contractor','dealer-confirmed':'Contractor','referral-partners':'Contractor',architects:'Architect or engineer','property-owners':'Property manager',commercial:'Commercial owner'};
function setAud(slug){ var lab=document.getElementById('audLabel'); if(!lab) return;
  var a=AUD[slug]; if(a){ window.__aud=a; } lab.textContent=window.__aud||'Homeowner';
  qa('.aud-panel a').forEach(function(x){ x.setAttribute('aria-current', x.getAttribute('data-aud')===slug?'true':'false'); });
  var d=document.getElementById('audMenu'); if(d) d.removeAttribute('open'); }
document.addEventListener('click',function(e){ var d=document.getElementById('audMenu'); if(d&&d.open&&!e.target.closest('#audMenu')) d.removeAttribute('open'); });
qa('form.verifyform').forEach(function(f){ f.addEventListener('submit',function(e){ e.preventDefault(); var i=f.querySelector('input'),v=i.value.trim(),o=f.parentNode.querySelector('.find-out');
  if(v.length<3){o.textContent='Enter a company name or certification number.';i.focus();return;}
  o.textContent='Prototype: the certified-dealer lookup connects at launch. To verify "'+v.replace(/[<>&]/g,'')+'" now, call 1-877-643-NANO.'; }); });


/* ---------- walk your roof ---------- */
var wd=document.getElementById('walkData');
if(wd){ var W=JSON.parse(wd.textContent), pins=qa('#home-check .pin'), wc=0;
  var VL={good:'good',fix:'fix',no:'no'};
  function wshow(i){ wc=(i+W.length)%W.length; var s=W[wc];
    pins.forEach(function(p,k){ p.classList.toggle('on',k===wc); p.setAttribute('aria-pressed',k===wc?'true':'false'); });
    $('wkStep').textContent='Point '+(wc+1)+' of '+W.length; $('wkTitle').textContent=s.t; $('wkBody').textContent=s.b;
    var v=$('wkVerdict'); v.textContent=s.v; v.className='walk-verdict '+(VL[s.k]||'fix'); }
  pins.forEach(function(p,k){ p.addEventListener('click',function(){ wshow(k); }); });
  $('wkPrev').addEventListener('click',function(){ wshow(wc-1); }); $('wkNext').addEventListener('click',function(){ wshow(wc+1); });
  wshow(0); }


/* ---------- autoplay muted loops when visible ---------- */
(function(){ var vids=qa('#home-ways video'); if(!vids.length) return;
  vids.forEach(function(v){ v.muted=true; v.setAttribute('muted',''); });
  var play=function(v){ var p=v.play(); if(p&&p.catch) p.catch(function(){}); };
  if('IntersectionObserver' in window){ var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting) play(e.target); else e.target.pause(); }); },{threshold:.25}); vids.forEach(function(v){ io.observe(v); }); }
  else vids.forEach(play);
  if(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches){ vids.forEach(function(v){ v.removeAttribute('autoplay'); v.pause(); v.controls=true; }); }
})();


/* ---------- roof color visualizer ---------- */
qa('[data-viz]').forEach(function(v){
  var imgs=v.querySelectorAll('.viz-img'), btns=v.querySelectorAll('.viz-sw button'), lab=v.querySelector('.vl');
  btns.forEach(function(b){ b.addEventListener('click',function(){
    var k=b.getAttribute('data-k');
    btns.forEach(function(x){ x.setAttribute('aria-checked', x===b?'true':'false'); });
    imgs.forEach(function(im){ im.classList.toggle('on', im.getAttribute('data-k')===k); });
    lab.textContent = k==='faded' ? 'Faded roof, before' : b.getAttribute('data-name')+', restored';
  }); });
});


/* ---------- roof system diagram ---------- */
var rsd=document.getElementById('rsData');
if(rsd){ var RS=JSON.parse(rsd.textContent), rpins=qa('.rs-pin'), rc=0;
  function rshow(i){ rc=(i+RS.length)%RS.length; var s=RS[rc];
    rpins.forEach(function(p,k){ p.classList.toggle('on',k===rc); p.setAttribute('aria-pressed',k===rc?'true':'false'); });
    $('rsStep').textContent='Point '+(rc+1)+' of '+RS.length+' \u00b7 '+s.tag; $('rsTitle').textContent=s.t;
    $('rsRole').innerHTML=s.r; $('rsCheck').innerHTML=s.c; var v=$('rsVerdict'); v.innerHTML=s.v; v.className='rs-verdict '+s.k; }
  rpins.forEach(function(p,k){ p.addEventListener('click',function(){ rshow(k); }); p.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); rshow(k);} }); });
  $('rsPrev').addEventListener('click',function(){ rshow(rc-1); }); $('rsNext').addEventListener('click',function(){ rshow(rc+1); });
  rshow(0); }

/* ---------- router ---------- */
var pages=qa('.page');
var GROUP={qualify:'app',colors:'app',cleaning:'app','tune-up':'app',commercial:'app','property-owners':'app',sps:'prod',products:'prod',architects:'pro',contractors:'pro','dealer-application':'pro','dealer-schedule':'pro','dealer-confirmed':'pro','referral-partners':'pro','repair-products':'prod','cleaning-products':'prod','technical-data':'prod',silicone:'how',polyurea:'how',science:'how','how-it-works':'how','roof-system':'how',assessment:'how',preservation:'how','care-plan':'how',moisture:'cmp','field-data':'cmp',faq:'cmp',estimate:'cmp'};
function route(){
  var slug=window.__SLUG||'home', sub=(location.hash||'').replace(/^#/,'')||null;
  var target=document.querySelector('[data-page="'+slug+'"]')||document.querySelector('[data-page="404"]');
  if(!target){closeMenus();closeDrawer();return;}
  pages.forEach(function(p){p.classList.toggle('on',p===target);});
  document.title=target.getAttribute('data-title')||'NANOROOF';
  closeMenus(); closeDrawer(); setAud(slug);
  qa('.mlink').forEach(function(a){a.toggleAttribute('aria-current',a.getAttribute('data-route')===slug);if(a.getAttribute('data-route')===slug)a.setAttribute('aria-current','page');});
  trigs.forEach(function(t){t.classList.toggle('cur',GROUP[slug]===t.getAttribute('data-group'));});
  var el=sub?document.getElementById(slug+'-'+sub):null;
  if(el){setTimeout(function(){el.scrollIntoView({behavior:reduce?'auto':'smooth'});},30);}
  else{window.scrollTo({top:0,left:0,behavior:'instant'}); var h1=target.querySelector('h1'); if(h1){h1.setAttribute('tabindex','-1');h1.focus({preventScroll:true});}}
}
window.addEventListener('hashchange',route);
route();
})();

var qa=function(s,r){return [].slice.call((r||document).querySelectorAll(s));};
/* ---------- internal page system: facts, hero images, on-this-page, related ---------- */
(function(){
var T={ 'how-it-works':['Why shingles fail','The seven-stage aging loop'],'silicone':['Why silicone','The chemistry behind the SPS System'],'repair-products':['Roof repair products','Caulk and liquid flashing'],'cleaning-products':['Cleaning products','Roof cleaner'],'technical-data':['Technical data','Properties and data sheets'],'science':['The science','Silicone for shingles'],'granule-loss':['Granule loss','Granules in the gutters'],'algae-streaks':['Algae and moss','Dark streaks and green growth'],'curling-cracking':['Curling and cracking','Dried-out shingles'],'roof-leaks':['Roof leaks','A repair problem first'],'roof-check':['Photo roof check','Screen your roof from a photo'],'roof-system':['The roof as a system','Why every job checks the whole roof'],
 'qualify':['Does my roof qualify?','Who it\u2019s for, and who it isn\u2019t'],'products':['Products','The SPS System and repair products'],'assessment':['Roof-life assessment','Free, written, with photos'],
 'tune-up':['10-point tune-up','Small problems, fixed early'],'cleaning':['Roof cleaning','Low-pressure soft wash'],'preservation':['NANOROOF preservation','The application protocol, step by step'],
 'care-plan':['Care Plan','Check-ups and your Roof Record'],'sps':['The SPS System','What the letters mean'],'colors':['Roof colors','Ask for approved color options'],
 'warranty':['Warranty','10-year standard; 15 and 20 on qualifying roofs; 5-year on Level-5 roofs'],'property-owners':['Portfolios and HOAs','Portfolios, HOAs and multifamily'],'estimate':['Roof assessment','Dealer assessment and pricing'],
 'faq':['FAQ','Straight answers'],'learn':['Guides','Plain answers for homeowners'],'moisture':['The moisture myth','The SPS System'],'field-data':['Field Data','Condition, measured'],
 'find-a-dealer':['Find a dealer','Certified dealers near you'],'about':['About NANOROOF','Who we are and what we believe'],'sustainability':['Sustainability','A roof kept is a roof not landfilled'],
 'contact':['Contact','Reach the right person'],'contractors':['Become a dealer','Become a NANOROOF Certified Dealer'],
 'referral-partners':['Referral partners','For agents and inspectors'],'homeowners':['For homeowners','Preservation, explained'],'architects':['For architects','Spec-ready documentation'] };
var F={ 'how-it-works':['7-stage aging loop','Bonds inside, encapsulates','Targets 5 of the 7 stages'],'silicone':['Named in 1904','UV can\u2019t break its backbone','Water-based and recoatable'],
 'repair-products':['Professional-grade','Used in every tune-up','Damp and cold tolerant caulk'],'cleaning-products':['Professional-grade','Roof cleaning','Clean before every treatment'],'technical-data':['Professional-grade','Repair and cleaning products','Data sheets on request'],'science':['Silicone for shingles','Residential asphalt shingles','One chemistry per roof'],'granule-loss':['UV loosens granules','Early loss is treatable','Free assessment'],'algae-streaks':['Soft wash, not pressure','Granules stay on','Encapsulated against regrowth'],'curling-cracking':['Catch it early','Secured in the tune-up','Checked for flexibility'],'roof-leaks':['Most start at flashings','Repaired first','Then decide'],'roof-check':['Takes about a minute','Screening, not an assessment','Free'],'roof-system':['8 parts of the roof checked','Repairs before treatment','An honest no when it won\u2019t work'],'qualify':['Free assessment','A written yes or no','Repairs priced separately'],
 'products':['Professional-grade','Sold only to certified dealers','The SPS System'],'assessment':['Free','25-point inspection scored out of 250','Written report with photos'],
 'tune-up':['10 points','Before every treatment','Recoat timing is set at the Care-Plan inspection'],'cleaning':['Low-pressure soft wash','roof cleaner','Landscaping protected'],
 'preservation':['6 steps','Applied to the existing roof','Every step on record'],'care-plan':['Scheduled check-ups','Readings compared to day one','The Care-Plan only adds coverage'],
 'sps':['Professional-grade','Dealer-applied','Registered warranty'],'colors':['Ask for approved color options','Restores faded roofs','See a sample on your roof'],
 'warranty':['10-year standard','15 and 20 on qualifying roofs','5-year on Level-5 roofs'],'property-owners':['Multifamily, HOAs, portfolios','Roof Cost Savings Report','One program, many buildings'],
 'moisture':['The SPS System','Water-based silicone','Dealer-applied'],'field-data':['Recorded on every job','Measured: being built','Underwritable: the goal'],
 'find-a-dealer':['Independent dealers','Trained and certified','Verify before you sign'],'about':['NANO Products, LLC dba NANOROOF','West Palm Beach, Florida','Independent dealer network'],
 'sustainability':['Preserve what still works','Shingles kept out of landfill','Residential asphalt shingles'],
 'contractors':['Certification program','Residential asphalt shingles','Colors to offer'],'referral-partners':['Agents, inspectors, adjusters','Free assessment for clients','Simple referrals'],
 'homeowners':['Plain answers','Questions to ask any roofer','Free assessment'],'architects':['Spec-ready material data','Submittals on request','Quality control you can specify'] };
var R={ 'how-it-works':['roof-system','silicone','qualify'],'silicone':['science','sps'],'repair-products':['tune-up','technical-data','roof-system'],'cleaning-products':['cleaning','technical-data','sps'],'technical-data':['products','architects','sps'],'science':['silicone','how-it-works'],'granule-loss':['roof-check','how-it-works','assessment'],'algae-streaks':['cleaning','cleaning-products','roof-check'],'curling-cracking':['tune-up','roof-system','roof-check'],'roof-leaks':['tune-up','repair-products','roof-system'],'roof-check':['qualify','assessment','estimate'],'roof-system':['assessment','tune-up','qualify'],'qualify':['assessment','roof-system','estimate'],
 'products':['technical-data','repair-products','cleaning-products'],'assessment':['roof-system','tune-up','estimate'],'tune-up':['assessment','cleaning','care-plan'],'cleaning':['tune-up','preservation','colors'],
 'preservation':['cleaning','care-plan','warranty'],'care-plan':['warranty','field-data','tune-up'],'sps':['silicone','products','preservation'],'colors':['preservation','estimate','cleaning'],
 'warranty':['care-plan','field-data','faq'],'property-owners':['field-data','estimate'],'estimate':['qualify','assessment','find-a-dealer'],'faq':['learn','moisture','warranty'],
 'learn':['how-it-works','moisture','roof-system'],'moisture':['silicone','roof-system','how-it-works'],'field-data':['care-plan','warranty','roof-system'],'find-a-dealer':['assessment','estimate','contractors'],
 'about':['sustainability','field-data','contractors'],'sustainability':['about','how-it-works','field-data'],'contact':['find-a-dealer','faq','estimate'],
 'referral-partners':['contractors','homeowners','find-a-dealer'],'homeowners':['qualify','faq','estimate'],'architects':['products','field-data'] };
var IMG={'roof-check':'gi-phone','science':'gi-drop','contact':'gi-15','about':'gi-17', 'roof-system':'gi-rs','products':'gi-mac','faq':'gi-c0','learn':'gi-mac','moisture':'gi-mac','field-data':'gi-mm','contact':'gi-nb','find-a-dealer':'gi-nb','cleaning':'gi-cb' };
function build(){
  qa('.page[data-page]').forEach(function(pg){
    var k=pg.getAttribute('data-page'); if(k==='home'||!T[k]) return;
    var ph=pg.querySelector('.phero');
    if(ph&&IMG[k]){ var old=ph.querySelector('.phimg');
      if(old){ old.className=old.className.replace(/gi-[a-z0-9]+/,IMG[k]); }
      else{ var w=ph.querySelector('.wrap'); if(w&&!w.classList.contains('phgrid')){ var t=document.createElement('div'); t.className='phtext'; while(w.firstChild) t.appendChild(w.firstChild); w.appendChild(t); w.classList.add('phgrid'); var im=document.createElement('div'); im.className='phimg '+IMG[k]; im.setAttribute('role','img'); im.setAttribute('aria-label','Illustration'); im.innerHTML='<span class="gen-tag">Illustration</span>'; w.appendChild(im);} } }
    if(ph&&F[k]&&!ph.querySelector('.phfacts')){ var lead=ph.querySelector('.lead'); var f=document.createElement('ul'); f.className='phfacts'; f.innerHTML=F[k].map(function(x){return '<li>'+x+'</li>';}).join(''); if(lead) lead.insertAdjacentElement('afterend',f); }
    // on-this-page
    var secs=[].slice.call(pg.querySelectorAll(':scope > section:not(.phero)')).filter(function(s){return s.querySelector('h2')&&!s.classList.contains('next');});
    if(secs.length>=4&&!pg.querySelector('.otp')&&!pg.querySelector('.subnav')){
      var nav=document.createElement('nav'); nav.className='otp'; nav.setAttribute('aria-label','On this page'); var inner='<div class="wrap"><span class="otp-k">On this page</span>';
      secs.forEach(function(s,i){ if(!s.id) s.id=k+'-s'+i; var h=s.querySelector('h2').textContent.replace(/\s+/g,' ').trim(); if(h.length>34) h=h.slice(0,32).replace(/\s+\S*$/,'')+'\u2026'; inner+='<a href="#/'+k+'" data-t="'+s.id+'">'+h+'</a>'; });
      nav.innerHTML=inner+'</div>'; if(ph) ph.insertAdjacentElement('afterend',nav);
      nav.addEventListener('click',function(e){ var a=e.target.closest('a[data-t]'); if(!a) return; e.preventDefault(); var t=document.getElementById(a.getAttribute('data-t')); if(t){ var y=t.getBoundingClientRect().top+scrollY-130; scrollTo({top:y,behavior:'smooth'});} });
    }
    // related
    if(R[k]&&!pg.querySelector('.related')){
      var rel=document.createElement('section'); var nx0=pg.querySelector(':scope > section.next, :scope > .next'); var prev=nx0?nx0.previousElementSibling:pg.lastElementChild; rel.className='section related '+(prev&&prev.classList.contains('m-lab')?'m-steel':'m-lab');
      rel.innerHTML='<div class="wrap"><div class="section-head"><h2>Keep exploring</h2></div><div class="rel-grid">'+R[k].map(function(s){ var t=T[s]||[s,'']; return '<a class="rel-card" href="#/'+s+'"><b>'+t[0]+'</b><span>'+t[1]+'</span><i aria-hidden="true">\u2192</i></a>'; }).join('')+'</div></div>';
      var nx=pg.querySelector(':scope > section.next, :scope > .next'); if(nx) nx.insertAdjacentElement('beforebegin',rel); else pg.appendChild(rel);
    }
  });
}
build();
/* active state for on-this-page */
window.addEventListener('scroll',function(){ var pg=document.querySelector('.page.on'); if(!pg) return; var nav=pg.querySelector('.otp'); if(!nav) return; var cur=null;
  nav.querySelectorAll('a[data-t]').forEach(function(a){ var t=document.getElementById(a.getAttribute('data-t')); if(t&&t.getBoundingClientRect().top<180) cur=a; });
  nav.querySelectorAll('a').forEach(function(a){ a.classList.toggle('on',a===cur); }); },{passive:true});
})();
/* before/after slider */
qa('[data-ba]').forEach(function(b){ var r=b.querySelector('input'),top=b.querySelector('.ba-top'),ln=b.querySelector('.ba-line');
  function u(){ var v=r.value; top.style.clipPath='inset(0 0 0 '+v+'%)'; ln.style.left=v+'%'; } r.addEventListener('input',u); u(); });
/* FAQ search */
(function(){ var q=document.getElementById('faqq'); if(!q) return; var pg=q.closest('.page');
  function run(){ var s=q.value.trim().toLowerCase(), n=0, tot=0;
    pg.querySelectorAll('.faq details').forEach(function(d){ tot++; var hit=!s||d.textContent.toLowerCase().indexOf(s)>-1; d.hidden=!hit; if(hit) n++; if(s&&hit) d.open=true; if(!s) d.open=false; });
    pg.querySelectorAll('.faq').forEach(function(f){ var sec=f.closest('section'); var any=[].some.call(f.querySelectorAll('details'),function(d){return !d.hidden;}); if(sec&&!sec.classList.contains('faq-search-wrap')){ var h=f.previousElementSibling; } f.style.display=any?'':'none'; var h2=f.parentElement.querySelector('h2'); });
    pg.querySelector('.faq-count').textContent=s?(n+' of '+tot+' questions match'):''; }
  q.addEventListener('input',run); })();
/* Learn filters */
(function(){ var box=document.querySelector('.learn-filter'); if(!box) return; var pg=box.closest('.page'); var arts=[].slice.call(pg.querySelectorAll('.article'));
  var cats=[]; arts.forEach(function(a){ var p=a.querySelector('.pill'); var c=p?p.textContent.trim():'Other'; a.setAttribute('data-c',c); if(cats.indexOf(c)<0) cats.push(c); });
  cats.forEach(function(c){ var b=document.createElement('button'); b.type='button'; b.textContent=c; b.setAttribute('data-f',c); box.appendChild(b); });
  box.addEventListener('click',function(e){ var b=e.target.closest('button'); if(!b) return; box.querySelectorAll('button').forEach(function(x){ x.classList.toggle('on',x===b); x.setAttribute('aria-pressed',x===b?'true':'false'); });
    var f=b.getAttribute('data-f'); arts.forEach(function(a){ a.hidden=!(f==='all'||a.getAttribute('data-c')===f); }); }); })();
/* qualify self-check */
qa('[data-qcheck]').forEach(function(q){ var out=q.querySelector('.qresult');
  q.addEventListener('change',function(){ var v={}; ['q1','q2','q3','q4','q5'].forEach(function(n){ var c=q.querySelector('input[name='+n+']:checked'); if(c) v[n]=c.value; });
    var n=Object.keys(v).length; if(n<5){ out.innerHTML='<p>'+(5-n)+' question'+(5-n>1?'s':'')+' to go.</p>'; return; }
    var r;
    if(v.q1==='no') r=['no','Preservation is for asphalt shingles','The SPS System is made for asphalt shingle roofs. '];
    else if(v.q2==='no') r=['no','A soft or sagging roof needs a closer look','That usually means decking damage, which rules preservation out until it&rsquo;s repaired. An assessment will confirm it.'];
    else if(v.q3==='fix'||v.q4==='fix') r=['fix','Likely a fit after repairs','Leaks and damaged shingles are fixed first, then the roof can be preserved. The assessment lists and prices the repairs.'];
    else r=['ok','Sounds like a good candidate','Aging but sound is exactly what preservation is for. A free assessment will confirm it in writing.'];
    out.className='qresult '+r[0]; out.innerHTML='<b>'+r[1]+'</b><p>'+r[2]+'</p><a class="btn btn-green" href="#/assessment">Book a free assessment</a>'; }); });
/* ---------- conversion tracking (dataLayer; connect GA4/GTM later) ---------- */
window.dataLayer=window.dataLayer||[];
function track(ev,p){ try{ window.dataLayer.push(Object.assign({event:ev,page:(window.__SLUG||'home')},p||{})); }catch(e){} }
window.nrTrack=track;
track('page_view');
document.addEventListener('click',function(e){ var a=e.target.closest('a,button'); if(!a) return; var h=a.getAttribute('href')||'';
  if(h.indexOf('tel:')===0) track('call_click');
  else if(h.indexOf('mailto:')===0) track('email_click');
  else if(a.classList.contains('btn')) track('cta_click',{label:(a.textContent||'').trim().slice(0,60),target:h});
},true);
document.addEventListener('submit',function(e){ var f=e.target; if(f.hasAttribute('data-dapp')) return; track(f.closest('[data-estimator]')?'estimate_submit':'form_submit',{form:(f.closest('.page')||{}).getAttribute?f.closest('.page').getAttribute('data-page'):''}); },true);
(function(){ var q=document.getElementById('faqq'); if(q){ var t; q.addEventListener('input',function(){ clearTimeout(t); t=setTimeout(function(){ if(q.value.trim()) track('faq_search'); },900); }); } })();

/* ---------- photo roof check (Claude via the artifact sample capability) ---------- */
(function(){ var box=document.querySelector('[data-roofcheck]'); if(!box) return;
  var inp=box.querySelector('#rcfile'), prev=box.querySelector('.rc-prev'), go=box.querySelector('.rc-go'), st=box.querySelector('.rc-status'), out=box.querySelector('.rc-out'), blob=null, sample=null;
  function avail(ok){ if(!ok){ box.classList.add('rc-off'); st.innerHTML='The photo check runs on the published NANOROOF site. Meanwhile, <a href="#/qualify">take the 5-question check</a> or <a href="#/assessment">book a free assessment</a>.'; go.disabled=true; } }
  if(window.claude&&claude.use){ claude.use('sample').then(function(s){ sample=s; if(!s) avail(false); }); } else avail(false);
  inp.addEventListener('change',function(){ var f=inp.files&&inp.files[0]; if(!f) return;
    var img=new Image(); img.onload=function(){ var m=1400,w=img.width,h=img.height,r=Math.min(1,m/Math.max(w,h)); var c=document.createElement('canvas'); c.width=Math.round(w*r); c.height=Math.round(h*r); c.getContext('2d').drawImage(img,0,0,c.width,c.height);
      c.toBlob(function(b){ blob=b; prev.src=c.toDataURL('image/jpeg',.8); prev.hidden=false; box.classList.add('has'); if(sample) { go.disabled=false; st.textContent='Ready. Press "Check my roof".'; } },'image/jpeg',.85); };
    img.src=URL.createObjectURL(f); });
  var LV={none:'None seen',mild:'Mild',moderate:'Moderate',severe:'Severe',unclear:'Can\u2019t tell'};
  var VD={good_candidate:['ok','Looks like a good candidate','Aging but sound is what preservation is for. A free assessment confirms it in writing.','#/assessment','Book a free assessment'],
    repairs_first:['fix','Likely a fit after repairs','Some problems should be fixed first. The tune-up handles them, then the roof can be preserved.','#/assessment','Book a free assessment'],
    closer_look:['no','Needs a closer look','What the photo shows could mean the roof is past preserving. A dealer can check the decking and structure.','#/assessment','Have a dealer look'],
    not_applicable:['no','This doesn\u2019t look like an asphalt shingle roof','The SPS System is for residential asphalt shingles.','#/find-a-dealer','Find a dealer'],
    unclear:['fix','The photo isn\u2019t clear enough','Try a daylight photo that shows more of the roof, or take the 5-question check.','#/qualify','Take the 5-question check']};
  go.addEventListener('click',function(){ if(!sample||!blob) return; go.disabled=true; out.hidden=true; st.textContent='Looking at your roof\u2026 this can take up to a minute.'; track('roof_check_run');
    var prompt='You are screening a homeowner\u2019s photo of their roof for NANOROOF, a roof preservation treatment for ASPHALT SHINGLE roofs that are aging but still sound. It is not for failed roofs (soft decking, widespread missing or brittle shingles) and leaks must be repaired first. Look only at what is visible in the photo. Do not guess about things you cannot see, such as decking or the attic. Reply with JSON only, no other text, in exactly this shape: {"is_roof_photo": true|false, "roof_type": "asphalt shingle"|"metal"|"tile"|"flat"|"wood"|"other"|"unclear", "findings": [{"sign": "Fading or discoloration", "level": "none"|"mild"|"moderate"|"severe"|"unclear", "note": "under 18 words"}, {"sign": "Granule loss"...}, {"sign": "Algae, moss or lichen"...}, {"sign": "Curling or cracking"...}, {"sign": "Missing or damaged shingles"...}, {"sign": "Flashing or penetration problems"...}], "verdict": "good_candidate"|"repairs_first"|"closer_look"|"not_applicable"|"unclear", "summary": "two plain-language sentences for a homeowner, no jargon", "photo_tip": "one short suggestion for a better photo, or empty string"}. Use "not_applicable" if it is not an asphalt shingle roof, and "unclear" if the image is not a roof or is too unclear to judge.';
    sample.json(prompt,{images:[blob],modelTier:'default'}).then(function(r){
      var v=VD[r&&r.verdict]||VD.unclear; track('roof_check_result',{verdict:(r&&r.verdict)||'unclear'});
      var f=(r&&r.findings||[]).map(function(x){ var l=(x.level||'unclear').toLowerCase(); return '<li class="lv-'+l+'"><span class="lv">'+(LV[l]||l)+'</span><b></b><span class="nt"></span></li>'; }).join('');
      out.innerHTML='<div class="qresult '+v[0]+'"><b>'+v[1]+'</b><p class="rc-sum"></p><p>'+v[2]+'</p><a class="btn btn-green" href="'+v[3]+'">'+v[4]+'</a></div>'+(f?'<ul class="rc-find">'+f+'</ul>':'')+'<p class="note rc-tip"></p>';
      out.querySelector('.rc-sum').textContent=(r&&r.summary)||'';
      out.querySelectorAll('.rc-find li').forEach(function(li,i){ li.querySelector('b').textContent=r.findings[i].sign||''; li.querySelector('.nt').textContent=r.findings[i].note||''; });
      if(r&&r.photo_tip) out.querySelector('.rc-tip').textContent='Tip: '+r.photo_tip;
      out.hidden=false; st.textContent='Done. You can try another photo.'; go.disabled=false;
    }).catch(function(e){ go.disabled=false; var c=e&&e.code;
      if(c==='not_granted'||c==='images_unavailable') avail(false);
      else if(c==='rate_limited') st.textContent='Too many checks at once. Please wait a minute and try again.';
      else st.textContent='Something went wrong reading the photo. Please try again, or take the 5-question check.'; });
  });
})();
/* ---------- social profiles: fill in the URLs; empty = icon shown, no link ---------- */
(function(){ var SOCIAL={facebook:'',linkedin:'',instagram:'',youtube:''};
  qa('a[data-social]').forEach(function(a){ var u=SOCIAL[a.getAttribute('data-social')];
    if(u){ a.href=u; a.target='_blank'; a.rel='noopener'; } else { a.hidden=true; } }); })();
/* ---------- dealer application page ---------- */
qa('[data-vsl]').forEach(function(v){ var b=v.querySelector('.vsl-play'), msg=v.querySelector('.vsl-msg'); b.addEventListener('click',function(){ msg.hidden=false; v.classList.add('tried'); track('vsl_play_click'); }); });
qa('[data-amap]').forEach(function(a){ var imgs=a.querySelectorAll('.amap-img'), btns=a.querySelectorAll('button[data-z]');
  function show(z){ imgs.forEach(function(i){ i.classList.toggle('on',i.getAttribute('data-z')===String(z)); }); btns.forEach(function(b){ var on=b.getAttribute('data-z')===String(z); b.classList.toggle('on',on); b.setAttribute('aria-pressed',on?'true':'false'); }); }
  btns.forEach(function(b){ b.addEventListener('click',function(){ var z=b.getAttribute('data-z'); show(b.classList.contains('on')?0:z); }); }); });
qa('form[data-apply]').forEach(function(f){ f.addEventListener('submit',function(e){ e.preventDefault();
  var bad=[].filter.call(f.querySelectorAll('[required]'),function(i){ return !i.value.trim(); }); f.querySelectorAll('[required]').forEach(function(i){ i.toggleAttribute('aria-invalid',!i.value.trim()); });
  if(bad.length){ bad[0].focus(); return; }
  var inv=f.querySelector('input[name="ap-op"]:checked').value==='inv'; var card=f.closest('.apply-card');
  f.hidden=true; card.querySelector(inv?'.apply-inv':'.apply-done').hidden=false; track(inv?'dealer_apply_noninvestor':'dealer_apply',{trade:f.querySelector('#ap-trade').value,crews:f.querySelector('#ap-crew').value}); }); });
/* deadline countdown helper (unused unless a .cd[data-deadline] block is added) */
qa('.cd[data-deadline]').forEach(function(cd){ var dl=cd.getAttribute('data-deadline'); if(!dl) return; var t=Date.parse(dl); if(isNaN(t)) return;
  function tick(){ var s=Math.max(0,Math.floor((t-Date.now())/1000)); var set=function(k,v){ var el=cd.querySelector('[data-cd="'+k+'"]'); if(el) el.textContent=v; }; set('d',Math.floor(s/86400)); set('h',Math.floor(s%86400/3600)); set('m',Math.floor(s%3600/60)); }
  tick(); setInterval(tick,30000); });
/* mobile bottom bar: Check my market on the dealer page */
(function(){ var bar=document.querySelector('.mbar .btn'); if(!bar) return; var oh=bar.getAttribute('href'), ot=bar.textContent;
  function sw(){ var on=(location.hash||'').indexOf('#/contractors')===0 || window.__SLUG==='apply'; bar.setAttribute('href',on?'#/dealer-application':oh); bar.textContent=on?'Check my market':ot; }
  sw(); window.addEventListener('hashchange',sw); })();
/* ---------- dealer application funnel ---------- */
(function(){
var SS={get:function(k){try{return JSON.parse(sessionStorage.getItem('nrdl_'+k)||'null');}catch(e){return null;}},set:function(k,v){try{sessionStorage.setItem('nrdl_'+k,JSON.stringify(v));}catch(e){}}};
var FUN=['dealer-application','dealer-schedule','dealer-confirmed'];
function slug(){ return window.__SLUG || ((location.hash||'#/').replace(/^#\/?/,'').split('/')[0]||'home'); }
function fmode(){ document.body.classList.toggle('funnel-mode',FUN.indexOf(slug())>=0); }
fmode(); window.addEventListener('hashchange',fmode);
var TR=[
 {label:'Roof replacement',t:'Your roofing work',q1:'How many roofs do you replace in a typical month?',o1:['1 to 4','5 to 10','11 to 25','More than 25'],q2:'What happens today when a roof still has years left?',o2:['We tell them to call back later','We sell a repair','We try to sell a replacement anyway','We have nothing to offer'],line:'You already walk aging roofs every week. NANOROOF gives you a job for the ones that aren&rsquo;t ready to replace.'},
 {label:'Roof repair and maintenance',t:'Your repair work',q1:'How many repair or maintenance jobs do you complete in a typical month?',o1:['1 to 5','6 to 15','16 to 30','More than 30'],q2:'How often do you see roofs that are aging but sound?',o2:['Almost every job','Often','Sometimes','Rarely'],line:'You&rsquo;re already on the roofs that fit. Preservation turns a repair into the bigger job.'},
 {label:'Exterior cleaning and soft wash',t:'Your cleaning work',q1:'How many roof washes do you complete in a typical month?',o1:['None yet','1 to 5','6 to 15','More than 15'],q2:'What do you offer after a roof is clean?',o2:['Nothing yet','A roof coating or rejuvenator','We refer it out','A maintenance plan'],line:'The soft wash is already step three of every NANOROOF job. You&rsquo;d add what comes next.'},
 {label:'Gutters',t:'Your gutter work',q1:'How many gutter jobs do you complete in a typical month?',o1:['1 to 10','11 to 30','31 to 60','More than 60'],q2:'Do you work on the roof itself today?',o2:['Yes, regularly','Occasionally','Not yet'],line:'You&rsquo;re at the roof edge on every job. NANOROOF lets you go up and offer the rest.'},
 {label:'Solar installation',t:'Your solar work',q1:'How many solar installs do you complete in a typical month?',o1:['1 to 4','5 to 10','11 to 25','More than 25'],q2:'What happens when the roof under the panels is aging?',o2:['We refer a roofer','We decline the job','The customer replaces first','We go ahead anyway'],line:'An aging roof stalls a solar sale. Preservation lets you confirm the roof has life left first.'},
 {label:'Something else',t:'Your business',q1:'How many jobs does your company complete in a typical month?',o1:['1 to 5','6 to 15','16 to 30','More than 30'],q2:'Do you work on roofs today?',o2:['Yes, regularly','Occasionally','Not yet'],line:'We&rsquo;ll look at how NANOROOF fits the work you already do.'}];
var JOBS=[['Shingle preservation','The SPS System on aging asphalt roofs'],['10-point tune-ups and repairs','Flashings, nail heads and loose shingles'],['Soft wash','Algae and moss off, granules on'],['Color restoration','Ask your dealer for approved options'],['Care Plan check-ups','Scheduled visits on roofs you&rsquo;ve treated']];
var Q={crew:['Just me','2 to 5','6 to 15','16 or more'],volume:['0','1–2','3–5','6–10','10+'],time:['Within 30 days','In 1 to 3 months','Just researching for now'],ack:['Yes','Yes, but I’d want to talk through payment options','I’d rather start smaller','Not right now']};
qa('form[data-dapp]').forEach(function(f){
  try{sessionStorage.removeItem('nrdl_a');sessionStorage.removeItem('nrdl_jobs');sessionStorage.removeItem('nrdl_contact');sessionStorage.removeItem('nrdl_when');}catch(e){}
  var st=1, a=SS.get('answers_v2')||{}, jobs=SS.get('jobs_v2')||[];
  if(!a||typeof a!=='object'||Array.isArray(a)||!Number.isInteger(a.trade)||a.trade<0||a.trade>=TR.length)a={};
  if(!Array.isArray(jobs))jobs=[];
  function choice(key,list){return Number.isInteger(a[key])&&a[key]>=0&&a[key]<list.length;}
  function outcome(){return a.ack===2?'smaller':a.ack===3?'later':a.volume===0?'review':'continue';}
  var prog=f.parentElement.querySelectorAll('.fn-prog i'), back=f.querySelector('.fn-back'), next=f.querySelector('.fn-next');
  function opts(box,list,key){ box.innerHTML=list.map(function(l,i){ return '<button type="button" class="fn-opt'+(a[key]===i?' sel':'')+'" data-i="'+i+'"><span class="rd"></span>'+l+'</button>'; }).join('');
    box.querySelectorAll('.fn-opt').forEach(function(b){ b.onclick=function(){ a[key]=+b.getAttribute('data-i'); if(key==='trade'){ delete a.a1; delete a.a2; } SS.set('answers_v2',a); render(); }; }); }
  function multi(box){ box.innerHTML=JOBS.map(function(j,i){ var on=jobs.indexOf(i)>=0; return '<button type="button" class="fn-opt m'+(on?' sel':'')+'" data-i="'+i+'"><span class="tk">'+(on?'&#10003;':'')+'</span><span><b>'+j[0]+'</b><em>'+j[1]+'</em></span></button>'; }).join('');
    box.querySelectorAll('.fn-opt').forEach(function(b){ b.onclick=function(){ var i=+b.getAttribute('data-i'); var k=jobs.indexOf(i); if(k>=0) jobs.splice(k,1); else jobs.push(i); SS.set('jobs_v2',jobs); render(); }; }); }
  function contactOk(){ return ['dp-fn','dp-ln','dp-co','dp-em','dp-ph','dp-cty'].every(function(id){ var v=f.querySelector('#'+id).value.trim(); return id==='dp-em'?/.+@.+\..+/.test(v):v.length>0; }); }
  function ok(){ return {1:choice('trade',TR),2:choice('a1',TR[a.trade==null?0:a.trade].o1)&&choice('a2',TR[a.trade==null?0:a.trade].o2),3:jobs.length>0&&jobs.every(function(i){return Number.isInteger(i)&&i>=0&&i<JOBS.length;}),4:choice('crew',Q.crew)&&choice('volume',Q.volume),5:choice('time',Q.time)&&choice('ack',Q.ack),6:contactOk()}[st]; }
  function render(){
    var tr=TR[a.trade==null?0:a.trade];
    f.querySelectorAll('.fn-step').forEach(function(s){ s.hidden=(+s.getAttribute('data-s')!==st); });
    opts(f.querySelector('[data-q=trade]'),TR.map(function(x){return x.label;}),'trade');
    f.querySelector('[data-t=title]').innerHTML=tr.t; f.querySelector('[data-t=q1]').innerHTML=tr.q1; f.querySelector('[data-t=q2]').innerHTML=tr.q2;
    opts(f.querySelector('[data-q=a1]'),tr.o1,'a1'); opts(f.querySelector('[data-q=a2]'),tr.o2,'a2'); multi(f.querySelector('[data-q=jobs]'));
    opts(f.querySelector('[data-q=crew]'),Q.crew,'crew'); opts(f.querySelector('[data-q=volume]'),Q.volume,'volume'); opts(f.querySelector('[data-q=time]'),Q.time,'time'); opts(f.querySelector('[data-q=ack]'),Q.ack,'ack');
    prog.forEach(function(p){ p.classList.toggle('on',+p.getAttribute('data-b')<=Math.min(st,6)); });
    var res=st===7; f.querySelector('.fn-nav').hidden=res; back.hidden=(st===1);
    next.textContent=st===6?'See my result':'Continue'; next.disabled=!ok();
    var result=outcome(),qual=result==='continue'||result==='review';
    f.querySelector('.fn-res.ok').hidden=!(res&&qual); f.querySelector('.fn-res.nf').hidden=!(res&&!qual);
    if(res){ var names=jobs.slice().sort().map(function(i){return JOBS[i][0].toLowerCase();}); var pk=names.length===1?names[0]:names.slice(0,-1).join(', ')+' and '+names[names.length-1];
      f.querySelector('[data-t=okline]').innerHTML=tr.line+(pk?' You picked '+pk+'.':'');
      f.querySelector('[data-t=nfline]').textContent=result==='smaller'?'You would rather start smaller. Discuss available options with the dealer team.':'Not right now. Contact the dealer team when you want to revisit the opening order.';
      if(result==='review') f.querySelector('[data-t=okline]').textContent='Zero monthly asphalt shingle jobs: setter review required. This is not an automatic rejection.';
      f.querySelector('.fn-res.ok').setAttribute('data-outcome',result);f.querySelector('.fn-res.nf').setAttribute('data-outcome',result); }
  }
  f.addEventListener('input',function(){ if(st===6) next.disabled=!ok(); });
  back.onclick=function(){ if(st>1){ st--; render(); scrollTo({top:0}); } };
  f.addEventListener('submit',function(e){ e.preventDefault(); if(!ok()) return; if(st<6){ st++; render(); scrollTo({top:0}); return; }
    st=7; var result=outcome(),qual=result==='continue'||result==='review';
    SS.set('contact',{fn:f.querySelector('#dp-fn').value.trim(),co:f.querySelector('#dp-co').value.trim()});
    track(qual?'dealer_app_fit':'dealer_app_nofit',{trade:TR[a.trade].label,crew:Q.crew[a.crew],time:Q.time[a.time],outcome:result,jobs:jobs.length,sms_consent:f.querySelector('#dp-cons').checked});
    render(); scrollTo({top:0}); });
  render();
});
qa('[data-dsched]').forEach(function(c){
  var D=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'], M=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], T=['9:00 AM','10:30 AM','12:00 PM','1:30 PM','3:00 PM','4:30 PM'];
  var days=[], dt=new Date(); dt.setHours(12,0,0,0); while(days.length<10){ dt.setDate(dt.getDate()+1); var w=dt.getDay(); if(w>0&&w<6) days.push(new Date(dt)); }
  var sd=0, ts=null, dbox=c.querySelector('.fn-days'), sbox=c.querySelector('.fn-slots'), btn=c.querySelector('.fn-confirm');
  function lab(){ var x=days[sd]; return D[x.getDay()]+', '+M[x.getMonth()]+' '+x.getDate()+' at '+T[ts]+' ET'; }
  function render(){
    dbox.innerHTML=days.map(function(x,i){ return '<button type="button" class="fn-day'+(i===sd?' sel':'')+'" data-i="'+i+'"><b>'+D[x.getDay()]+'</b><span>'+M[x.getMonth()]+' '+x.getDate()+'</span></button>'; }).join('');
    sbox.innerHTML=T.map(function(t,i){ return '<button type="button" class="fn-slot'+(i===ts?' sel':'')+'" data-i="'+i+'">'+t+'</button>'; }).join('');
    dbox.querySelectorAll('button').forEach(function(b){ b.onclick=function(){ sd=+b.getAttribute('data-i'); ts=null; render(); }; });
    sbox.querySelectorAll('button').forEach(function(b){ b.onclick=function(){ ts=+b.getAttribute('data-i'); render(); }; });
    btn.disabled=(ts===null); btn.textContent=ts===null?'Choose a time':'Confirm '+lab(); }
  btn.onclick=function(){ if(ts===null) return; SS.set('when',lab()); track('dealer_call_booked',{when:lab()}); location.hash='#/dealer-confirmed'; if(window.__SLUG) location.href='/dealer-confirmed/'; };
  render();
});
function showWhen(){ var w=SS.get('when'), c=SS.get('contact'); qa('[data-t=when]').forEach(function(el){ el.textContent=w?((c&&c.fn?c.fn+', your':'Your')+' call: '+w+'.'):''; }); }
showWhen(); window.addEventListener('hashchange',showWhen);
})();
/* roof material calculator (dealer page) */
qa('[data-rcalc]').forEach(function(c){ var sec=c.closest('section'), r=c.querySelector('input'), o=function(k){return sec.querySelector('[data-o="'+k+'"]');}, fmt=function(n){return n.toLocaleString('en-US');};
  function upd(){ var sq=+r.value, area=sq*100, gal=area/160*1.10; o('sq').textContent=sq; o('area').textContent=fmt(area)+' sq ft'; o('gal').textContent='\u2248 '+Math.round(gal)+' gal'; }
  r.addEventListener('input',upd); r.addEventListener('change',function(){ track('dealer_calc',{squares:+r.value}); }); upd(); });
;

(function(){
  var SKIP={SCRIPT:1,STYLE:1,TEXTAREA:1,OPTION:1,TITLE:1,SELECT:1,INPUT:1,NOSCRIPT:1};
  var RE=/NANOROOF(?:\u2122)?/g;
  function make(){var s=document.createElement('span');s.className='nr';s.setAttribute('aria-label','NANOROOF');
    s.innerHTML='<span class="nn" aria-hidden="true">NANO</span><span aria-hidden="true">ROOF</span><sup aria-hidden="true">\u2122</sup>';return s;}
  function brandify(root){
    if(!root) return;
    if(root.nodeType===3){ fix(root); return; }
    if(root.nodeType!==1 || SKIP[root.tagName] || root.closest && root.closest('svg,.nr')) return;
    var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(n){
      var p=n.parentNode; if(!p||SKIP[p.nodeName]) return NodeFilter.FILTER_REJECT;
      if(p.closest && p.closest('svg,.nr')) return NodeFilter.FILTER_REJECT;
      return n.nodeValue.indexOf('NANOROOF')>-1?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP;}});
    var list=[],n; while((n=w.nextNode())) list.push(n);
    list.forEach(fix);
  }
  function fix(t){
    var p=t.parentNode; if(!p||SKIP[p.nodeName]||(p.closest&&p.closest('svg,.nr'))) return;
    var v=t.nodeValue; if(v.indexOf('NANOROOF')<0) return;
    var frag=document.createDocumentFragment(),last=0; RE.lastIndex=0; var m;
    while((m=RE.exec(v))){ if(m.index>last) frag.appendChild(document.createTextNode(v.slice(last,m.index))); frag.appendChild(make()); last=m.index+m[0].length; }
    if(last<v.length) frag.appendChild(document.createTextNode(v.slice(last)));
    p.replaceChild(frag,t);
  }
  brandify(document.body);
  new MutationObserver(function(muts){ muts.forEach(function(mu){
    if(mu.type==='characterData') brandify(mu.target);
    else mu.addedNodes.forEach(function(nd){ brandify(nd); });
  }); }).observe(document.body,{childList:true,subtree:true,characterData:true});
})();

;/* ---- multi-page: real URLs for any remaining #/ links ---- */
(function(){function to(h){var p=h.replace(/^#\/?/,'').split('/');var s=p[0];if(!s)return'/';return'/'+s+'/'+(p[1]?'#'+p[1]:'');}
function fix(root){[].forEach.call((root||document).querySelectorAll('a[href^="#/"]'),function(a){a.setAttribute('href',to(a.getAttribute('href')));});}
fix();document.addEventListener('click',function(e){if(e.defaultPrevented)return;var a=e.target.closest&&e.target.closest('a[href^="#/"]');if(!a)return;e.preventDefault();location.href=to(a.getAttribute('href'));});
new MutationObserver(function(m){m.forEach(function(r){[].forEach.call(r.addedNodes,function(n){if(n.nodeType===1)fix(n);});});}).observe(document.body,{childList:true,subtree:true});})();
