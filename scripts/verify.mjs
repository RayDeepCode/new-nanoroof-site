import assert from 'node:assert/strict';
import {readFile,writeFile,mkdir,stat,readdir} from 'node:fs/promises';
import {createServer} from 'node:http';import path from 'node:path';import {chromium} from 'playwright';
const root=path.resolve('nanoroof-site/deploy'),errors=[],outcomes=[];let routes=0;
const service=createServer(async(req,res)=>{try{let file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));assert(file.startsWith(root+'/')||file===root);if((await stat(file)).isDirectory())file+='/index.html';const data=await readFile(file);res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.html')?'text/html':'application/octet-stream');res.end(data);}catch{res.statusCode=404;res.end('Not found');}});
await new Promise(r=>service.listen(0,'127.0.0.1',r));const base='http://127.0.0.1:'+service.address().port,b=await chromium.launch();
try{
 // SITES-PUBLIC-HOTFIX (Maat c40f4a8e items 1, 4, 5, 6): no sitemap; every remaining page directory serves 200 and the removed routes 404.
 const pageDirs=(await readdir(root,{withFileTypes:true})).filter(e=>e.isDirectory()&&e.name!=='assets').map(e=>e.name);
 const removedRoutes=['dealer-application','dealer-schedule','dealer-confirmed','find-a-dealer','estimate','roof-check','warranty'];
 const paths=['/',...pageDirs.filter(d=>!['commercial','polyurea'].includes(d)).map(d=>'/'+d+'/')];
 for(const p of paths){assert.equal((await fetch(base+p)).status,200,p);routes++;}assert.equal(routes,36);
 for(const gone of removedRoutes){assert(!pageDirs.includes(gone),gone);assert.equal((await fetch(base+'/'+gone+'/')).status,404,gone);}
 assert.equal((await fetch(base+'/sitemap.xml')).status,404);
 assert.equal(await readFile(root+'/robots.txt','utf8'),'User-agent: *\nDisallow: /\n');
 assert.equal(await readFile(root+'/_headers','utf8'),'/*\n  X-Robots-Tag: noindex\n');
 assert.equal(await readFile(root+'/_redirects','utf8'),'/*  /404.html  404\n');
 assert.deepEqual(JSON.parse(await readFile(root+'/vercel.json','utf8')).headers,[{source:'/(.*)',headers:[{key:'X-Robots-Tag',value:'noindex'}]}]);
 // No intake: no forms, no personal-data or file inputs, no network or storage calls, no links to removed routes, no struck claims.
 const struck=[/<form\b|<select\b|<textarea\b/,/sessionStorage|localStorage|claude\.|fetch\(|XMLHttpRequest|sendBeacon|addEventListener\(\s*['"]submit/,/kJ\/mol|kilojoule/i,/10-year (?:warranty )?standard|Level-5 roofs|15 and 20 (?:available )?on qualifying/,/available now/i,/UV protection|shingle surface from UV|UV can|stronger than ultraviolet|resists? (?:algae|regrowth)|protects against organic growth|algae and mold/i,/not a franchise or a business opportunity/i,/href="[^"]*\/(?:dealer-application|dealer-schedule|dealer-confirmed|find-a-dealer|estimate|roof-check|warranty)\//];
 const survivors=[];
 async function hotfixScan(dir){for(const entry of await readdir(dir,{withFileTypes:true})){const file=path.join(dir,entry.name);if(entry.isDirectory()){await hotfixScan(file);continue;}if(!/\.(html|js)$/.test(entry.name))continue;const text=await readFile(file,'utf8');
  for(const re of struck)assert(!re.test(text),file+' still has '+re);
  for(const m of text.matchAll(/<input\b[^>]*>/g)){assert(/type="(?:range|search)"/.test(m[0]),file+' has a collecting input: '+m[0]);assert(!/autocomplete="(?!off")/.test(m[0]),file+': '+m[0]);survivors.push(path.relative(root,file)+':'+(text.slice(0,m.index).split('\n').length)+' '+m[0].match(/type="(\w+)"/)[1]);}}}
 await hotfixScan(root);assert.equal(survivors.length,5,survivors.join('; '));
 const forbidden=/26,290|\*96|nanodealers|450\s*psi|Exclusiv|\bPPS\b|250,000|annual revenue|data-q="(?:rev|cap)"/i;
 async function scan(dir){for(const entry of await readdir(dir,{withFileTypes:true})){const file=path.join(dir,entry.name);if(entry.isDirectory())await scan(file);else if(/\.(html|js|xml)$/.test(entry.name))assert(!forbidden.test(await readFile(file,'utf8')),file+' has prohibited content');}}await scan(root);
 const copyChecks={
  'contractors/index.html':/all-in|14 average|40°F|1 per 250K|no other fee|Commercial flat roofs|color and commercial/,
  'technical-data/index.html':/40°F|10-year labor and material; 15 and 20-year terms/,
  'silicone/index.html':/Lets vapor out/,
  'index.html':/liquid water and water vapor|four colors|capital/,
  'assets/site.js':/presLow|replLow|placeholder rates|Color: Charcoal|commercial:\[/
 };
 for(const [file,pattern] of Object.entries(copyChecks))assert(!pattern.test(await readFile(root+'/'+file,'utf8')),file+' retains reviewed claim');
 const contractor=await readFile(root+'/contractors/index.html','utf8');assert.equal((contractor.match(/<summary>What is the opening product order\?<\/summary>/g)||[]).length,1);assert.match(contractor,/<strong>Assess<\/strong>/);assert.match(contractor,/<strong>Spray application<\/strong>/);
 async function durationScan(dir){for(const entry of await readdir(dir,{withFileTypes:true})){const file=path.join(dir,entry.name);if(entry.isDirectory())await durationScan(file);else if(/\.(html|js)$/.test(entry.name))assert(!/one[- ]day|one visit|\b1 visit\b|single visit|single day|both prices/i.test(await readFile(file,'utf8')),file+' retains timing or comparator promise');}}await durationScan(root);
 async function structuredScan(dir){for(const entry of await readdir(dir,{withFileTypes:true})){
  const file=path.join(dir,entry.name);if(entry.isDirectory()){await structuredScan(file);continue;}if(!file.endsWith('.html'))continue;
  const html=await readFile(file,'utf8');
  for(const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){
   const data=JSON.parse(block[1]);const check=node=>{if(!node||typeof node!=='object')return;if(node['@type']==='Answer')assert(typeof node.text==='string'&&node.text.trim(),file+' has empty Answer');if(node['@type']==='Question'&&node.name==='What does the warranty cover?')assert.equal(node.acceptedAnswer.text,'10-year standard; 15 and 20 on qualifying roofs; 5-year on Level-5 roofs.');for(const value of Object.values(node))if(Array.isArray(value))value.forEach(check);else check(value);};check(data);
  }
  for(const text of html.replace(/<script[\s\S]*?<\/script>|<svg[\s\S]*?<\/svg>/g,'').matchAll(/>([^<>]+)</g))assert(!/\b([\w-]+)\s+\1\b/i.test(text[1]),file+' has duplicate words: '+text[1]);
  for(const detail of html.matchAll(/<details>([\s\S]*?)<\/details>/g))if(detail[1].includes('a tote covers about 43,000 sq ft'))assert(/<summary>(?:How far does one tote go\?|What is the opening product order\?)<\/summary>/.test(detail[1]),file+' has misplaced coverage answer');
 }}await structuredScan(root);
 const context=await b.newContext({viewport:{width:390,height:844}});await context.route('**/*',r=>new URL(r.request().url()).origin===base?r.continue():r.abort());
 const page=await context.newPage();page.on('pageerror',e=>errors.push({url:page.url(),message:e.message,stack:e.stack}));
 for(const route of ['commercial','polyurea']){await page.goto(base+'/'+route+'/');const text=await page.locator('main').innerText();assert.match(text,/unavailable/i);assert(!/PPS|450|VOC|waterproof/i.test(text));}
 // SITES-PUBLIC-HOTFIX: the address handoff and /estimate/ are removed; the home page has no address field.
 await page.goto(base+'/');assert.equal(await page.locator('#addr, #addrForm, .zipform').count(),0);
 await page.goto(base+'/faq/');await page.locator('#faqq').fill('PRIVATE-TEST-STRING');await page.waitForTimeout(1100);assert(!JSON.stringify(await page.evaluate(()=>window.dataLayer)).includes('PRIVATE-TEST-STRING'));
 for(const p of paths){await page.goto(base+p);await page.waitForTimeout(30);}
 assert.deepEqual(errors,[]);
 await mkdir('reports',{recursive:true});await writeFile('reports/VERIFICATION.json',JSON.stringify({routes,removedRoutes,survivingInputs:survivors,errors,trackingPrivacy:'pass',fences:'neutral 200 pages'},null,2)+'\n');console.log({routes,removedRoutes:removedRoutes.length,survivingInputs:survivors,errors});
}finally{await b.close();await new Promise(r=>service.close(r));}
