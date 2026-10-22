/* Main page (index.html): suspects, login, investigator tools, search, menu, intro */
/* safety: if something fails, never leave the intro screen stuck */
setTimeout(function(){var p=document.getElementById('pre');if(p&&!p.dataset.done){p.style.display='none';document.body.classList.remove('lock');var h=document.querySelector('.hero');if(h)h.classList.add('go')}},7000);

/* EDIT HERE: the video shown in the Video section. Put the file in the videos folder and write its path, for example 'videos/case.mp4'. Leave it empty to show the empty frame. */
var CASE_VIDEO='';
/* EDIT HERE: the 5 suspects and the login accounts */
var SUSPECTS=[
 {n:'Liam',r:'نامزد مقتول',img:'images/Liam.jpg',thumb:'images/thumbs/Liam.jpg',pos:'58% 30%'},
 {n:'Evan',r:'برادر مقتول',img:'images/Evan.jpg',thumb:'images/thumbs/Evan.jpg',pos:'50% 20%'},
 {n:'Lily',r:'دوست مقتول',img:'images/Lily.jpg',thumb:'images/thumbs/Lily.jpg',pos:'50% 25%'},
 {n:'Tyler',r:'دوست مقتول',img:'images/Tyler.jpg',thumb:'images/thumbs/Tyler.jpg',pos:'50% 20%'},
 {n:'Mia',r:'دوست مقتول',img:'images/Mia.jpg',thumb:'images/thumbs/Mia.jpg',pos:'50% 20%'}
];
var ACCOUNTS=[{name:'detective1',pass:'1234'},{name:'detective2',pass:'1234'},{name:'Liam',pass:'Liam1997',page:'liam'},{name:'Evan',pass:'Evan2001',page:'evan'},{name:'Lily',pass:'Lily1998',page:'lily'},{name:'Tyler',pass:'Tyler1997',page:'tyler'},{name:'Mia',pass:'Mia1998',page:'mia'},{name:'Tina',pass:'Tina2002',page:'tina'}];
var HINTS=['Hint 1 goes here','Hint 2 goes here','Hint 3 goes here'];
var HINT_WAIT=60;
function newS(){return{clues:[],votes:{},nb:'',grid:{},tl:[],hu:0,ha:0}}
var S=newS();
try{var d=localStorage.getItem('sotp2');if(d)S=Object.assign(S,JSON.parse(d))}catch(e){}
function save(){try{localStorage.setItem('sotp2',JSON.stringify(S))}catch(e){}stamp();dash()}
var BODY='M0 240 L0 205 C0 178 30 168 68 158 C78 154 82 148 82 136 L118 136 C118 148 122 154 132 158 C170 168 200 178 200 205 L200 240Z',HEAD='M100 40 C128 40 142 62 142 88 C142 114 128 142 100 146 C72 142 58 114 58 88 C58 62 72 40 100 40Z',EARS='<ellipse cx="57" cy="94" rx="6" ry="11"/><ellipse cx="143" cy="94" rx="6" ry="11"/>',HS='M54 92 C48 50 70 26 100 26 C130 26 152 50 146 92 C144 70 134 56 100 54 C66 56 56 70 54 92Z';
function P(d){return'<path d="'+d+'"/>'}
var BASE=P(BODY)+P(HEAD)+EARS;
var SIL=[BASE+P(HS),
 P('M52 90 C46 40 70 22 100 22 C130 22 154 40 148 90 C152 130 158 172 172 210 L28 210 C42 172 48 130 52 90Z')+BASE,
 P('M50 96 C40 40 68 20 100 20 C132 20 160 40 150 96 C158 114 150 130 136 128 L64 128 C50 130 42 114 50 96Z')+'<circle cx="48" cy="128" r="11"/><circle cx="152" cy="128" r="11"/>'+BASE,
 BASE+P(HS)+P('M60 100 C60 142 78 160 100 162 C122 160 140 142 140 100 C134 126 120 136 100 136 C80 136 66 126 60 100Z'),
 P('M0 240 L0 200 C0 182 24 172 66 160 L82 148 L100 192 L118 148 L134 160 C176 172 200 182 200 200 L200 240Z')+'<rect x="82" y="128" width="36" height="30"/><path d="M82 148 L100 192 L118 148Z" fill="#b4869f"/>'+P('M95 162 L105 162 L109 206 L100 218 L91 206Z')+P(HEAD)+EARS+P(HS)];
var FA=['۱','۲','۳','۴','۵'];
$('sGrid').innerHTML=SUSPECTS.map(function(s,i){return'<div class="sw rv" data-i="'+i+'" style="transition-delay:'+(i*90)+'ms"><div class="sus"><div class="ph" style="background-image:url('+s.thumb+');background-position:center"><span class="no">0'+(i+1)+'</span></div><b class="nm">'+esc(s.n)+'</b><span class="rl">'+esc(s.r)+'</span></div></div>'}).join('');
observe(); /* the cards are created here, after common.js already looked for things to reveal */
function togglePw(b){var i=$('p'),s=i.type==='password';i.type=s?'text':'password';b.classList.toggle('on',s);b.setAttribute('aria-label',s?'Hide password':'Show password')}
function caps(e){$('caps').classList.toggle('on',!!(e.getModifierState&&e.getModifierState('CapsLock')))}
document.querySelectorAll('.fld input').forEach(function(i){i.addEventListener('input',function(){document.querySelectorAll('.fld.bad').forEach(function(f){f.classList.remove('bad')})})});
function login(){var u=$('u').value.trim().toLowerCase(),p=$('p').value,b=$('go');
 var ok=ACCOUNTS.filter(function(a){return a.name.toLowerCase()===u&&a.pass===p})[0];
 b.textContent='Verifying...';b.disabled=true;
 setTimeout(function(){b.disabled=false;b.textContent='Enter';
  if(!ok){$('err').textContent='Access denied. Wrong name or password.';document.querySelectorAll('.fld').forEach(function(f){f.classList.add('bad')});var g=document.querySelector('.gate');g.classList.remove('shake');void g.offsetWidth;g.classList.add('shake');return}
  $('err').textContent='';if(ok.page){try{sessionStorage.setItem('tof_user',ok.page)}catch(e){}location.href=ok.page+'.html#access';return}$('gate').style.display='none';$('locked').style.display='block';
  UNLOCKED=true;decrypt($('hello'),'Access granted. Welcome, '+ok.name+'.');drawAll();setTimeout(function(){window.dispatchEvent(new Event('scroll'))},900);$('locked').scrollIntoView({behavior:'smooth'});observe()},650)}
var CATS=[['w','Witness statement'],['s','Suspect profile'],['c','Crime scene'],['f','Forensic']],CF='all';
function catName(k){var r=CATS.filter(function(c){return c[0]===k})[0];return r?r[1]:''}
function addClue(){var t=$('cTitle').value.trim();if(!t)return;S.clues.push({t:t,w:$('cWhere').value,d:$('cDesc').value,g:$('cCat').value,k:false,at:new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})});$('cTitle').value=$('cWhere').value=$('cDesc').value='';save();drawC();toast('Clue added')}
function starClue(i){S.clues[i].k=!S.clues[i].k;save();drawC()}
function delClue(i){S.clues.splice(i,1);save();drawC()}
function drawC(){
 var q=($('cSearch').value||'').toLowerCase();
 $('cFilter').innerHTML=[['all','All'],['key','\u2605 Key']].concat(CATS).map(function(c){return'<button class="chip2'+(CF===c[0]?' on':'')+'" onclick="CF=\''+c[0]+'\';drawC()">'+c[1]+'</button>'}).join('');
 var rows=S.clues.map(function(c,i){return{c:c,i:i}}).filter(function(o){var c=o.c;if(CF==='key'&&!c.k)return false;if(CF!=='all'&&CF!=='key'&&c.g!==CF)return false;return!q||(c.t+' '+c.w+' '+c.d).toLowerCase().indexOf(q)>-1});
 $('cList').innerHTML=rows.length?rows.map(function(o){var c=o.c,i=o.i;return'<div class="item" id="clue-'+i+'"><b><svg class="fpi"><use href="#fp"/></svg>#'+(i+1)+' '+esc(c.t)+(c.k?' <span class="star">\u2605</span>':'')+'</b><small>'+esc(c.w)+(c.at?' \u00b7 '+esc(c.at):'')+'</small>'+(c.g?'<span class="tag2">'+catName(c.g)+'</span>':'')+(c.d?'<p style="margin:8px 0 0;font-size:14px">'+esc(c.d)+'</p>':'')+'<div class="acts"><button onclick="starClue('+i+')">'+(c.k?'Unmark key':'Mark key')+'</button><button onclick="delClue('+i+')">Delete</button></div></div>'}).join(''):'<div class="empty">'+(S.clues.length?'No clues match.':'No clues yet.')+'</div>'}
var left=300,total=300,tm=null;
function fmt(){var m=Math.floor(left/60),s=left%60;$('clock').textContent=(m<10?'0':'')+m+':'+(s<10?'0':'')+s;$('rg').style.strokeDashoffset=565.5*(1-left/total)}
function setT(){pauseT();left=Math.max(1,parseInt($('mins').value)||5)*60;total=left;fmt()}
function startT(){if(tm)return;tm=setInterval(function(){left--;fmt();if(left<=0){pauseT();beep();try{navigator.vibrate&&navigator.vibrate(500)}catch(e){}}},1000)}
function pauseT(){clearInterval(tm);tm=null}
function drawV(){var tot=0;SUSPECTS.forEach(function(s){tot+=S.votes[s.n]||0});
 $('vBtns').innerHTML=SUSPECTS.map(function(s,i){return'<button class="btn alt" onclick="vote('+i+')">+ '+esc(s.n)+'</button>'}).join('');
 $('vRes').innerHTML=SUSPECTS.map(function(s){var v=S.votes[s.n]||0;return'<div style="margin-bottom:10px"><b>'+esc(s.n)+'</b> — '+v+'<div class="bar"><i style="width:'+(tot?v/tot*100:0)+'%"></i></div></div>'}).join('')}
function vote(i){var n=SUSPECTS[i].n;S.votes[n]=(S.votes[n]||0)+1;save();drawV()}
function beep(){try{var a=new(window.AudioContext||window.webkitAudioContext)(),o=a.createOscillator();o.connect(a.destination);o.frequency.value=660;o.start();setTimeout(function(){o.stop()},500)}catch(e){}}
var dosI=0;
function suspStat(i){var y=0,n=0;COLS.forEach(function(c){var v=S.grid[i+c[0]]||'';if(v==='y')y++;if(v==='n')n++});return y===3?['Prime suspect','hot']:(n>=2?['Cleared','ok']:(n===1?['Doubtful','mid']:(y?['Leaning','lean']:['Open','open'])))}
function dosDed(i){var el=$('dosDed');if(!el)return;
 if(!UNLOCKED){el.innerHTML='<div class="lockc"><svg viewBox="0 0 24 24"><rect x="4.5" y="10.5" width="15" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/></svg><div><b>Investigator tools are locked</b><span>Log in to mark motive, means and opportunity for this suspect.</span></div><button onclick="closeDos();go(\'gate\')">Log in</button></div>';return}
 var st=suspStat(i),ev=S.tl.filter(function(e){return e.w===String(i)}).length;
 el.innerHTML='<div class="dh"><b>Your deductions</b><span class="st '+st[1]+'">'+st[0]+'</span></div><div class="dr">'+COLS.map(function(c){var v=S.grid[i+c[0]]||'';return'<button class="dd '+v+'" onclick="dosCyc('+i+',\''+c[0]+'\')"><i>'+(v==='y'?'\u2713':v==='n'?'\u2715':'')+'</i><span>'+c[1]+'</span></button>'}).join('')+'</div><small>'+ev+' timeline event'+(ev===1?'':'s')+' for this suspect</small>'}
function dosCyc(i,k){cyc(i,k);dosDed(i)}
function openDos(i,d){var s=SUSPECTS[i];dosI=i;var dl=$('dos');dl.className='dos dos2';dl.dataset.d=d||0;
 dl.innerHTML='<button class="x" onclick="closeDos()" aria-label="Close">&times;</button>'+
 '<div class="pt" style="background-image:url('+s.img+');background-size:cover;background-position:'+s.pos+'"><div class="gridbg"></div><i class="cnr a"></i><i class="cnr b"></i><i class="cnr c"></i><i class="cnr d"></i><span class="tg l">File SUS-0'+(i+1)+'</span><span class="tg r"><u></u>Under review</span><i class="scanl"></i><div class="ptf"><span class="bc"></span><em>'+esc(s.n)+'</em></div></div>'+
 '<div class="pi2"><div class="hd"><span class="kk">Suspect file</span><h3>مظنون شماره '+FA[i]+'</h3><b class="big">0'+(i+1)+'</b></div>'+
 '<dl class="info"><div><span class="ico">'+IC.u+'</span><div class="ft"><dt>نام</dt><dd>'+esc(s.n)+'</dd></div></div><div><span class="ico">'+IC.l+'</span><div class="ft"><dt>نسبت با مقتول</dt><dd>'+esc(s.r)+'</dd></div></div></dl>'+
 '<div class="ded" id="dosDed"></div>'+
 '<div class="nav"><button onclick="dosGo(-1)">&larr; Previous</button><div class="dots">'+SUSPECTS.map(function(x,k){return'<i'+(k===i?' class="on"':'')+'></i>'}).join('')+'</div><button onclick="dosGo(1)">Next &rarr;</button></div></div>';
 dosDed(i);$('modal').classList.add('on')}
function dosGo(d){openDos((dosI+d+SUSPECTS.length)%SUSPECTS.length,d)}
document.addEventListener('keydown',function(e){if(!$('modal').classList.contains('on'))return;if(e.key==='ArrowRight')dosGo(1);else if(e.key==='ArrowLeft')dosGo(-1)});
function closeDos(){$('modal').classList.remove('on')}
$('sGrid').addEventListener('click',function(e){var c=e.target.closest('.sw');if(c)openDos(+c.dataset.i)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeDos()});
var UNLOCKED=false,TF='all',rs=0,tt=null;
var COLS=[['m','Motive'],['e','Means'],['o','Opportunity']];
function stamp(){var e=$('savedAt');if(e)e.textContent='Saved on this device \u00b7 '+new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',second:'2-digit'})}
function words(s){var m=(s||'').trim().match(/\S+/g);return m?m.length:0}
function dash(){var el=$('dashGrid');if(!el)return;var g=Object.keys(S.grid).length,w=words(S.nb),k=S.clues.filter(function(c){return c.k}).length;
 var p=Math.round((Math.min(S.clues.length/6,1)+Math.min(S.tl.length/4,1)+Math.min(g/9,1)+Math.min(w/100,1))/4*100);
 var T=[['Clues',S.clues.length,k+' key'],['Timeline events',S.tl.length,''],['Grid marks',g+'/15',''],['Notebook words',w,''],['Hints used',S.hu+'/'+HINTS.length,'']];
 el.innerHTML='<div class="dprog"><svg viewBox="0 0 120 120"><circle class="rb" cx="60" cy="60" r="52"/><circle class="rf" cx="60" cy="60" r="52" style="stroke-dasharray:326.7;stroke-dashoffset:'+(326.7*(1-p/100)).toFixed(1)+'"/></svg><div><b>'+p+'%</b><span>Investigation progress</span></div></div>'+T.map(function(x){return'<div class="dtile"><b>'+x[1]+'</b><span>'+x[0]+'</span>'+(x[2]?'<small>'+x[2]+'</small>':'')+'</div>'}).join('')}
function cyc(i,k){var key=i+k,v=S.grid[key]||'';v=v===''?'y':(v==='y'?'n':'');if(v)S.grid[key]=v;else delete S.grid[key];save();drawGrid()}
function drawGrid(){var h='<thead><tr><th>Suspect</th>'+COLS.map(function(c){return'<th>'+c[1]+'</th>'}).join('')+'<th>Status</th></tr></thead><tbody>';
 SUSPECTS.forEach(function(s,i){var y=0,n=0,cells=COLS.map(function(c){var v=S.grid[i+c[0]]||'';if(v==='y')y++;if(v==='n')n++;return'<td><button class="gc '+v+'" onclick="cyc('+i+',\''+c[0]+'\')" aria-label="'+c[1]+'">'+(v==='y'?'\u2713':v==='n'?'\u2715':'')+'</button></td>'}).join('');
  var st=y===3?['Prime suspect','hot']:(n>=2?['Cleared','ok']:(n===1?['Doubtful','mid']:(y?['Leaning','lean']:['Open','open'])));
  h+='<tr><td class="who" dir="auto">'+esc(s.n)+'</td>'+cells+'<td><span class="st '+st[1]+'">'+st[0]+'</span></td></tr>'});
 $('dgT').innerHTML=h+'</tbody>'}
function addTL(){var x=$('tText').value.trim();if(!x)return;S.tl.push({t:$('tTime').value,w:$('tWho').value,x:x});$('tText').value='';save();drawTL();toast('Event added')}
function delTL(i){S.tl.splice(i,1);save();drawTL()}
function whoName(w){return w==='any'?'Anyone':(SUSPECTS[+w]?SUSPECTS[+w].n:'')}
function drawTL(){var w=$('tWho');if(!w.options.length)w.innerHTML='<option value="any">Anyone</option>'+SUSPECTS.map(function(s,i){return'<option value="'+i+'">'+esc(s.n)+'</option>'}).join('');
 $('tFilter').innerHTML=[['all','All']].concat(SUSPECTS.map(function(s,i){return[String(i),s.n]})).map(function(c){return'<button class="chip2'+(TF===c[0]?' on':'')+'" onclick="TF=\''+c[0]+'\';drawTL()">'+esc(c[1])+'</button>'}).join('');
 var list=S.tl.map(function(e,i){return{e:e,i:i}}).filter(function(o){return TF==='all'||o.e.w===TF}).sort(function(a,b){return(a.e.t||'99:99').localeCompare(b.e.t||'99:99')});
 $('tList').innerHTML=list.length?list.map(function(o){var e=o.e,c=e.t&&e.w!=='any'&&S.tl.some(function(f,j){return j!==o.i&&f.t===e.t&&f.w===e.w});
  return'<div class="ev'+(c?' bad':'')+'" id="tl-'+o.i+'"><time>'+(e.t||'--:--')+'</time><div><b dir="auto">'+esc(whoName(e.w))+'</b><span>'+esc(e.x)+'</span>'+(c?'<em>Same time, same suspect. Check this.</em>':'')+'<button onclick="delTL('+o.i+')">Delete</button></div></div>'}).join(''):'<div class="empty">No events yet.</div>'}
function drawHints(){$('hList').innerHTML=S.hu?HINTS.slice(0,S.hu).map(function(h,i){return'<div class="item"><b>Hint '+(i+1)+'</b><p style="margin:6px 0 0;font-size:14px">'+esc(h)+'</p></div>'}).join(''):'<div class="empty">No hints used yet.</div>';hintTick()}
function hintTick(){var b=$('hBtn');if(!b)return;var left=Math.max(0,Math.ceil(((S.ha||0)+HINT_WAIT*1000-Date.now())/1000)),done=S.hu>=HINTS.length;b.disabled=done||left>0;b.textContent=done?'No more hints':(left>0?'Next hint in '+left+'s':'Request hint');$('hWait').textContent=S.hu+' of '+HINTS.length+' hints used'}
function askHint(){if(S.hu>=HINTS.length)return;S.hu++;S.ha=Date.now();save();drawHints();toast('Hint '+S.hu+' revealed')}
setInterval(hintTick,1000);
function buildSum(){var L=['THE OTHER FACE \u2014 CASE 001',''];
 L.push('EVIDENCE ('+S.clues.length+')');S.clues.forEach(function(c,i){L.push((i+1)+'. '+(c.k?'[KEY] ':'')+c.t+(c.g?' ['+catName(c.g)+']':'')+(c.w?' \u2014 '+c.w:'')+(c.d?': '+c.d:''))});
 L.push('','DEDUCTION GRID');SUSPECTS.forEach(function(s,i){L.push(s.n+': '+COLS.map(function(c){var v=S.grid[i+c[0]]||'';return c[1]+' '+(v==='y'?'(likely)':v==='n'?'(cleared)':'(?)')}).join(', '))});
 L.push('','TIMELINE');S.tl.slice().sort(function(a,b){return(a.t||'99:99').localeCompare(b.t||'99:99')}).forEach(function(e){L.push((e.t||'--:--')+'  '+whoName(e.w)+': '+e.x)});
 L.push('','NOTES',S.nb||'-');$('sumT').value=L.join('\n')}
function copySum(){buildSum();var t=$('sumT'),ok=false;t.select();try{ok=document.execCommand('copy')}catch(e){}
 if(!ok&&navigator.clipboard){navigator.clipboard.writeText(t.value).then(function(){toast('Copied')},function(){toast('Select the text and copy it')});return}toast(ok?'Copied':'Select the text and copy it')}
function resetAll(){var b=$('rsBtn');if(!rs){rs=1;b.textContent='Click again to erase everything';setTimeout(function(){rs=0;b.textContent='Reset all data'},3500);return}
 S=newS();save();$('nb').value='';$('sumT').value='';drawAll();drawV();rs=0;b.textContent='Reset all data';toast('All data cleared')}
function drawAll(){drawC();drawGrid();drawTL();drawHints();dash();stamp()}
function go(id){var e=$(id);if(e)e.scrollIntoView({behavior:'smooth',block:'start'})}
function goEl(id){var e=$(id);if(!e)return;e.scrollIntoView({behavior:'smooth',block:'center'});e.classList.add('flash');setTimeout(function(){e.classList.remove('flash')},1600)}
var PI=[],pa=0;
function palItems(q){var I=[],tools=[['Dashboard','sec-dash'],['Evidence Log','sec-ev'],['Deduction Grid','sec-grid'],['Timeline & Alibis','sec-tl'],["Inspector's Hints",'sec-hint'],['Round Timer','sec-timer'],['Final Vote','sec-vote'],['Detective Notebook','sec-nb'],['Case File Summary','sec-sum']];
 I.push({k:'Go to',l:'Crime Scene',s:'Case briefing',r:function(){go('scenario')}});I.push({k:'Go to',l:'Video',s:'Case video',r:function(){go('sec-video')}});I.push({k:'Go to',l:'The Suspects',s:'All five files',r:function(){go('suspects')}});
 if(UNLOCKED)tools.forEach(function(x){I.push({k:'Tool',l:x[0],s:'Jump to this tool',r:function(){go(x[1])}})});else I.push({k:'Go to',l:'Investigator Access',s:'Log in to open the tools',r:function(){go('gate')}});
 SUSPECTS.forEach(function(s,i){I.push({k:'Suspect',l:s.n,s:s.r,r:function(){go('suspects');setTimeout(function(){openDos(i)},350)}})});
 if(UNLOCKED){S.clues.forEach(function(c,i){I.push({k:'Clue',l:c.t,s:((c.w||'')+' '+(c.d||'')).trim(),r:function(){CF='all';$('cSearch').value='';drawC();goEl('clue-'+i)}})});
  S.tl.forEach(function(e,i){I.push({k:'Event',l:(e.t||'--:--')+'  '+e.x,s:whoName(e.w),r:function(){TF='all';drawTL();goEl('tl-'+i)}})})}
 q=(q||'').toLowerCase();return I.filter(function(x){return!q||(x.l+' '+x.s+' '+x.k).toLowerCase().indexOf(q)>-1}).slice(0,40)}
function renderPal(){PI=palItems($('palQ').value);pa=0;drawPal()}
function drawPal(){$('palL').innerHTML=PI.length?PI.map(function(x,i){return'<div class="pi'+(i===pa?' on':'')+'" data-i="'+i+'"><i>'+x.k+'</i><b dir="auto">'+esc(x.l)+'</b><span dir="auto">'+esc(x.s)+'</span></div>'}).join(''):'<div class="empty" style="margin:8px">Nothing found.</div>'}
function openPal(){closeDos();$('pal').classList.add('on');$('palQ').value='';renderPal();setTimeout(function(){$('palQ').focus()},30)}
function closePal(){$('pal').classList.remove('on')}
function runPal(i){var x=PI[i];if(!x)return;closePal();x.r()}
function palKey(e){if(e.key==='ArrowDown'){pa=Math.min(PI.length-1,pa+1);drawPal();scrollPal();e.preventDefault()}else if(e.key==='ArrowUp'){pa=Math.max(0,pa-1);drawPal();scrollPal();e.preventDefault()}else if(e.key==='Enter'){runPal(pa)}}
function scrollPal(){var e=document.querySelector('#palL .pi.on');if(e)e.scrollIntoView({block:'nearest'})}
$('palL').addEventListener('click',function(e){var r=e.target.closest('.pi');if(r)runPal(+r.dataset.i)});
$('palL').addEventListener('mousemove',function(e){var r=e.target.closest('.pi');if(r&&+r.dataset.i!==pa){pa=+r.dataset.i;drawPal()}});
document.addEventListener('keydown',function(e){if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'&&!document.body.classList.contains('pp')){e.preventDefault();$('pal').classList.contains('on')?closePal():openPal()}else if(e.key==='Escape')closePal()});
window.addEventListener('scroll',function(){$('dock').classList.toggle('show',UNLOCKED&&window.scrollY>240);var best=null,bv=0,bs=document.querySelectorAll('#dock [data-t]');bs.forEach(function(b){var s=$(b.dataset.t);if(!s)return;var r=s.getBoundingClientRect(),v=Math.min(r.bottom,innerHeight)-Math.max(r.top,0);if(v>bv){bv=v;best=b}});bs.forEach(function(b){b.classList.toggle('on',b===best)})},{passive:true});
function ctaGo(){go(UNLOCKED?'sec-vote':'gate')}
(function(){var pre=$('pre'),N=$('preN'),B=$('preB'),hero=document.querySelector('.hero');
 function done(){pre.dataset.done=1;pre.classList.add('out');document.body.classList.remove('lock');hero.classList.add('go');setTimeout(function(){pre.style.display='none'},1200)}
 if(matchMedia('(prefers-reduced-motion:reduce)').matches){pre.style.display='none';document.body.classList.remove('lock');hero.classList.add('go');return}
 var t0=performance.now(),dur=1900;(function tick(now){var p=Math.min(1,(now-t0)/dur),e=1-Math.pow(1-p,3);N.textContent=Math.round(e*100);B.style.transform='scaleX('+e+')';if(p<1)requestAnimationFrame(tick);else setTimeout(done,260)})(t0)})();
(function(){var h=document.querySelector('.hero h1');if(!h)return;var n=0;
 function wrap(node,into){node.childNodes.forEach(function(c){if(c.nodeType===3){c.textContent.split(/(\s+)/).forEach(function(tok){if(!tok)return;if(/^\s+$/.test(tok)){into.appendChild(document.createTextNode(' '));return}var w=document.createElement('span');w.className='wd';tok.split('').forEach(function(ch){var s=document.createElement('span');s.className='ch';var i=document.createElement('i');i.textContent=ch;i.style.setProperty('--i',n++);s.appendChild(i);w.appendChild(s)});into.appendChild(w)})}else if(c.nodeType===1){var el=c.cloneNode(false);wrap(c,el);into.appendChild(el)}})}
 var tmp=document.createElement('div');wrap(h,tmp);h.innerHTML='';while(tmp.firstChild)h.appendChild(tmp.firstChild)})();
(function(){var el=$('stmtT');if(!el)return;var words=el.textContent.trim().split(/\s+/);el.innerHTML=words.map(function(w){return'<span>'+w+'</span>'}).join(' ');var sp=el.querySelectorAll('span');
 function upd(){var r=el.getBoundingClientRect(),p=(innerHeight*.85-r.top)/(r.height+innerHeight*.3);p=Math.max(0,Math.min(1,p));var n=Math.round(p*sp.length);sp.forEach(function(s,i){s.classList.toggle('lit',i<n)})}
 addEventListener('scroll',upd,{passive:true});upd()})();
function openMenu(){var L=[['Crime Scene','scenario'],['Video','sec-video'],['The Suspects','suspects']];
 if(UNLOCKED)L=L.concat([['Dashboard','sec-dash'],['Evidence Log','sec-ev'],['Deduction Grid','sec-grid'],['Timeline','sec-tl'],['Hints','sec-hint'],['Notebook','sec-nb'],['Final Vote','sec-vote']]);else L.push(['Investigator Access','gate']);
 $('menuL').innerHTML=L.map(function(x,i){return'<a style="--d:'+(i*55)+'ms" onclick="menuGo(\''+x[1]+'\')"><em>'+('0'+(i+1)).slice(-2)+'</em><span>'+x[0]+'</span></a>'}).join('');
 $('menu').classList.add('on');document.body.classList.add('lock')}
function closeMenu(){$('menu').classList.remove('on');document.body.classList.remove('lock')}
function menuGo(id){closeMenu();setTimeout(function(){go(id)},300)}
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu()});
(function(){if(!matchMedia('(hover:hover) and (pointer:fine)').matches)return;
 var hero=document.querySelector('.hero'),tx=0,ty=0,cx=0,cy=0,vis=true,run=false;
 /* hero parallax: runs only while the hero is on screen and the mouse is moving */
 function loop(){if(!vis){run=false;return}cx+=(tx-cx)*.06;cy+=(ty-cy)*.06;hero.style.setProperty('--mx',cx.toFixed(3));hero.style.setProperty('--my',cy.toFixed(3));if(Math.abs(tx-cx)<.002&&Math.abs(ty-cy)<.002){run=false;return}requestAnimationFrame(loop)}
 function kick(){if(!run){run=true;requestAnimationFrame(loop)}}
 if(window.IntersectionObserver)new IntersectionObserver(function(en){vis=en[0].isIntersecting;if(vis)kick()}).observe(hero);
 document.addEventListener('mousemove',function(e){tx=(e.clientX/innerWidth-.5)*2;ty=(e.clientY/innerHeight-.5)*2;if(vis)kick()},{passive:true});
 /* suspect card tilt: only a transform, at most once per frame */
 var cur=null,px=0,py=0,raf=0,S0=$('suspects');
 function paint(){raf=0;if(!cur)return;var r=cur.getBoundingClientRect(),x=(px-r.left)/r.width,y=(py-r.top)/r.height;cur.querySelector('.sus').style.transform='perspective(800px) rotateX('+((.5-y)*8).toFixed(2)+'deg) rotateY('+((x-.5)*10).toFixed(2)+'deg)'}
 S0.addEventListener('mouseover',function(e){var c=e.target.closest('.sw');if(c===cur)return;if(cur)cur.querySelector('.sus').style.transform='';cur=c});
 S0.addEventListener('mousemove',function(e){if(!cur)return;px=e.clientX;py=e.clientY;if(!raf)raf=requestAnimationFrame(paint)},{passive:true});
 S0.addEventListener('mouseleave',function(){if(cur){cur.querySelector('.sus').style.transform='';cur=null}})})();
function initVideo(){var b=$('vidBox');if(b&&CASE_VIDEO){b.classList.add('has');b.innerHTML='<video controls playsinline preload="metadata" src="'+CASE_VIDEO+'"></video>'}}
initVideo();
$('nb').value=S.nb;
drawAll();
drawV();
fmt();
/* closing heading animation */
(function(){var h=document.querySelector('.cta-h'),cta=document.getElementById('cta');if(!h||!cta)return;var n=0;
 function split(el,from,to){var txt=el.textContent,tot=txt.replace(/\s/g,'').length,k=0;el.textContent='';txt.split(/(\s+)/).forEach(function(tok){if(!tok)return;if(/^\s+$/.test(tok)){el.appendChild(document.createTextNode(' '));return}var w=document.createElement('span');w.className='wd';tok.split('').forEach(function(c){var s=document.createElement('span');s.className='ch';var i=document.createElement('i');i.textContent=c;i.style.setProperty('--i',n++);if(from){var q=tot>1?k/(tot-1):0;i.style.color='rgb('+Math.round(from[0]+(to[0]-from[0])*q)+','+Math.round(from[1]+(to[1]-from[1])*q)+','+Math.round(from[2]+(to[2]-from[2])*q)+')'}k++;s.appendChild(i);w.appendChild(s)});el.appendChild(w)})}
 split(h.querySelector('.o'));split(h.querySelector('em'),[93,35,80],[181,86,143]);
 if(window.IntersectionObserver){new IntersectionObserver(function(en,ob){if(en[0].isIntersecting){cta.classList.add('in');ob.disconnect()}},{threshold:.35}).observe(cta)}else cta.classList.add('in')})();
