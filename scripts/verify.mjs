import assert from 'node:assert/strict';
import {readFile,writeFile,mkdir,stat,readdir} from 'node:fs/promises';
import {createServer} from 'node:http';import path from 'node:path';import {chromium} from 'playwright';
const root=path.resolve('nanoroof-site/deploy'),errors=[],outcomes=[];let routes=0;
const service=createServer(async(req,res)=>{try{let file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));assert(file.startsWith(root+'/')||file===root);if((await stat(file)).isDirectory())file+='/index.html';const data=await readFile(file);res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.html')?'text/html':'application/octet-stream');res.end(data);}catch{res.statusCode=404;res.end('Not found');}});
await new Promise(r=>service.listen(0,'127.0.0.1',r));const base='http://127.0.0.1:'+service.address().port,b=await chromium.launch();
try{
 const sitemap=await readFile(root+'/sitemap.xml','utf8');assert(!/\/(commercial|polyurea)\//.test(sitemap));
 for(const match of sitemap.matchAll(/<loc>(.*?)<\/loc>/g)){const url=new URL(match[1]);assert.equal((await fetch(base+url.pathname)).status,200);routes++;}assert.equal(routes,43);
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
 await page.goto(base+'/');await page.locator('#addr').fill('120 Oak Street, Springfield');await page.locator('#addrForm').evaluate(f=>f.requestSubmit());await page.waitForURL('**/estimate/');assert.match(await page.locator('#estAddr').innerText(),/120 Oak Street/);assert.equal(await page.locator('.bar-row, [data-estimator], .est form').count(),0);
 assert.equal(await page.evaluate(()=>window.dataLayer.filter(x=>x.event==='page_view').at(-1).page),'estimate');
 await page.goto(base+'/faq/');await page.locator('#faqq').fill('PRIVATE-TEST-STRING');await page.waitForTimeout(1100);assert(!JSON.stringify(await page.evaluate(()=>window.dataLayer)).includes('PRIVATE-TEST-STRING'));
 // Exercise every new acknowledgment × monthly-volume combination, with fresh state.
 for(let volume=0;volume<5;volume++)for(let ack=0;ack<4;ack++){
  await page.goto(base+'/dealer-application/');await page.evaluate(()=>{sessionStorage.clear();sessionStorage.setItem('nrdl_a',JSON.stringify({rev:0,cap:2}));sessionStorage.setItem('nrdl_jobs','[5]');});await page.reload();
  assert.equal(await page.evaluate(()=>sessionStorage.getItem('nrdl_a')),null);assert.equal(await page.locator('.fn-next').isDisabled(),true);
  const choose=async(key,i)=>page.locator('[data-q="'+key+'"] button').nth(i).click();const next=()=>page.locator('.fn-next').click();
  await choose('trade',0);await next();await choose('a1',0);await choose('a2',0);await next();await choose('jobs',0);await next();await choose('crew',0);await choose('volume',volume);await next();await choose('time',2);await choose('ack',ack);await next();
  for(const [id,value] of [['dp-fn','Demo'],['dp-ln','Tester'],['dp-co','Fictional company'],['dp-em','demo@example.test'],['dp-ph','5550100000'],['dp-cty','Demo County']])await page.locator('#'+id).fill(value);
  await next();const expected=ack===2?'smaller':ack===3?'later':volume===0?'review':'continue';const result=page.locator('.fn-res:not([hidden])');assert.equal(await result.getAttribute('data-outcome'),expected);
  const state=await page.evaluate(()=>JSON.stringify({storage:{...sessionStorage},telemetry:window.dataLayer}));assert(!/"rev"|"cap"|Under \$250K/.test(state));outcomes.push({volume,ack,outcome:expected});
 }
 for(const match of sitemap.matchAll(/<loc>(.*?)<\/loc>/g)){await page.goto(base+new URL(match[1]).pathname);await page.waitForTimeout(30);}
 // All remaining trade selections reach their tailored questions.
 for(let trade=1;trade<6;trade++){await page.goto(base+'/dealer-application/');await page.evaluate(()=>sessionStorage.clear());await page.reload();await page.locator('[data-q="trade"] button').nth(trade).click();await page.locator('.fn-next').click();assert(await page.locator('[data-q="a1"] button').count()>0);}
 assert.deepEqual(errors,[]);
 await mkdir('reports',{recursive:true});await writeFile('reports/VERIFICATION.json',JSON.stringify({routes,outcomes,errors,addressHandoff:'pass',trackingPrivacy:'pass',fences:'neutral 200 pages'},null,2)+'\n');console.log({routes,formCases:outcomes.length,errors});
}finally{await b.close();await new Promise(r=>service.close(r));}
