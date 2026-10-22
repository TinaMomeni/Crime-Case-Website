/* Shared by every page: helpers, music, magnifier cursor, reveal on scroll, glass spotlight */
function $(i){return document.getElementById(i)}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
var UNK='';
function sil(i){return'<svg viewBox="0 0 200 219" preserveAspectRatio="xMidYMid meet" fill="#07030d">'+UNK+'</svg>'}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
function observe(){document.querySelectorAll('section:not(.rv),.strip>.shadow:not(.rv)').forEach(function(e){e.classList.add('rv')});document.querySelectorAll('.rv:not(.in)').forEach(function(e){io.observe(e)})}
document.querySelectorAll('section h2').forEach(function(e){if(!e.closest('.gate'))e.insertAdjacentHTML('afterbegin','<svg class="fpi h2i"><use href="#fp"/></svg>')});
observe();
window.addEventListener('scroll',function(){var d=document.documentElement;$('prog').style.width=(d.scrollTop/((d.scrollHeight-d.clientHeight)||1)*100)+'%'});
var IC={u:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-3.6 3.6-6 8-6s8 2.4 8 6"/></svg>',l:'<svg viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',c:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 7.5V12l3 2"/></svg>'};
function toast(m){var e=$('toast');e.textContent=m;e.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){e.classList.remove('on')},2200)}
function decrypt(el,txt){var ch='ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#%&',n=0,iv=setInterval(function(){el.textContent=txt.split('').map(function(c,i){return c===' '||i<n?c:ch[Math.random()*ch.length|0]}).join('');n+=.9;if(n>=txt.length){el.textContent=txt;clearInterval(iv)}},28)}
(function(){if(!matchMedia('(hover:hover) and (pointer:fine)').matches||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
 var dot=document.createElement('div'),ring=document.createElement('div');dot.className='cdot';ring.className='cring';
 ring.innerHTML='<svg viewBox="0 0 56 56"><path class="hd" d="M34 34L49 49" fill="none" stroke-width="7.5" stroke-linecap="round"/><path d="M36 36L47 47" fill="none" stroke="rgba(255,255,255,.28)" stroke-width="2" stroke-linecap="round"/><path class="hd" d="M30.5 30.5L35.5 35.5" fill="none" stroke-width="9" stroke-linecap="round"/><circle cx="21" cy="21" r="15" fill="rgba(255,255,255,.3)" stroke="currentColor" stroke-width="3.6"/><circle cx="21" cy="21" r="11.5" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="1"/><path d="M12.5 17.5A9.5 9.5 0 0 1 19 11.2" fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="2.6" stroke-linecap="round"/></svg>';document.body.appendChild(dot);document.body.appendChild(ring);document.body.classList.add('cur');
 var x=-100,y=-100,rx=-100,ry=-100,lx=0,ly=0,shown=false,side=1;
 function print(px,py,a){if(document.querySelectorAll('.cprint').length>7)return;var p=document.createElement('div');p.className='cprint';side=-side;p.style.left=(px+Math.cos(a+1.57)*9*side)+'px';p.style.top=(py+Math.sin(a+1.57)*9*side)+'px';p.style.setProperty('--r',(a*57.3+90+side*14)+'deg');p.innerHTML='<svg><use href="#fp"/></svg>';document.body.appendChild(p);setTimeout(function(){p.remove()},1300)}
 document.addEventListener('mousemove',function(e){x=e.clientX;y=e.clientY;if(!shown){shown=true;rx=lx=x;ry=ly=y;dot.classList.add('on');ring.classList.add('on')}
  var dx=x-lx,dy=y-ly;if(dx*dx+dy*dy>3600){print(x,y,Math.atan2(dy,dx));lx=x;ly=y}
  ring.classList.toggle('h',!!(e.target.closest&&e.target.closest('a,button,.sw,input,select,textarea,label,.pi,.gc,.chip2')))});
 document.addEventListener('mouseleave',function(){dot.classList.remove('on');ring.classList.remove('on');shown=false});
 (function loop(){rx=x;ry=y;dot.style.transform='translate('+x+'px,'+y+'px)';ring.style.transform='translate('+rx+'px,'+ry+'px)';requestAnimationFrame(loop)})()})();
var AC=null,SND=false,MU={},MU_BEAT=.62;
var MU_CH={Am:[57,60,64],Dm:[50,53,57],E:[52,56,59],F:[53,57,60]};
var MU_SEQ=['Am','Dm','E','Am','F','E','Am','Am','Am','Dm','E','Am','Am','Dm','E','Am'];
var MU_MEL=[[[69,1],[72,1],[76,1]],[[74,1.5],[72,.5],[71,1]],[[68,1],[71,1],[74,1]],[[72,2],[0,1]],
 [[76,1],[77,1],[76,1]],[[75,1],[76,1],[71,1]],[[72,1],[74,1],[76,1]],[[81,2],[76,1]],
 [[81,1],[80,1],[76,1]],[[77,1.5],[74,.5],[71,1]],[[72,1],[74,.5],[72,.5],[71,1]],[[69,3]],
 [[81,1],[84,1],[88,1]],[[86,1.5],[84,.5],[83,1]],[[80,1],[83,1],[86,1]],[[84,2],[81,1]]];
function mf(m){return 440*Math.pow(2,(m-69)/12)}
function muBell(f,t,len,vel){var d=Math.max(.9,len*1.7)+.6;[[1,1,1],[2,.3,.6],[3.01,.14,.4],[5.4,.07,.25]].forEach(function(p){var o=AC.createOscillator(),g=AC.createGain();o.type='sine';o.frequency.value=f*p[0];g.gain.setValueAtTime(0.0001,t);g.gain.linearRampToValueAtTime(vel*p[1],t+.006);g.gain.exponentialRampToValueAtTime(.0001,t+d*p[2]);o.connect(g);g.connect(MU.bus);o.start(t);o.stop(t+d*p[2]+.1)})}
function muPad(ns,t,len){ns.forEach(function(m){[0,.006].forEach(function(dt){var o=AC.createOscillator(),g=AC.createGain(),lp=AC.createBiquadFilter();o.type='triangle';o.frequency.value=mf(m)*(1+dt);lp.type='lowpass';lp.frequency.value=900;g.gain.setValueAtTime(0.0001,t);g.gain.linearRampToValueAtTime(.02,t+.5);g.gain.linearRampToValueAtTime(.014,t+len*.7);g.gain.linearRampToValueAtTime(0.0001,t+len+.4);o.connect(lp);lp.connect(g);g.connect(MU.bus);o.start(t);o.stop(t+len+.5)})})}
function muBass(m,t,len){var o=AC.createOscillator(),g=AC.createGain();o.type='sine';o.frequency.value=mf(m);g.gain.setValueAtTime(0.0001,t);g.gain.linearRampToValueAtTime(.07,t+.05);g.gain.exponentialRampToValueAtTime(.0001,t+len*.95);o.connect(g);g.connect(MU.bus);o.start(t);o.stop(t+len)}
function muBar(b,t){var ch=MU_CH[MU_SEQ[b]],len=MU_BEAT*3,x=t;muPad(ch,t,len);muBass(ch[0]-12,t,len);
 [1,2].forEach(function(k){muBell(mf(ch[1]+12),t+k*MU_BEAT,.3,.03);muBell(mf(ch[2]+12),t+k*MU_BEAT,.3,.03)});
 MU_MEL[b].forEach(function(n){if(n[0])muBell(mf(n[0]),x,n[1]*MU_BEAT,.15);x+=n[1]*MU_BEAT});
 if(b%4===3)[93,96,100].forEach(function(m,i){muBell(mf(m),t+len*.55+i*.2,.4,.045)})}
function muTick(){if(!SND)return;while(MU.next<AC.currentTime+.7){muBar(MU.bar%16,MU.next);MU.next+=MU_BEAT*3;MU.bar++}}
function muInit(){var C=window.AudioContext||window.webkitAudioContext;if(!C)return false;AC=new C();MU.master=AC.createGain();MU.master.gain.value=0;MU.master.connect(AC.destination);
 MU.bus=AC.createGain();var dry=AC.createGain();dry.gain.value=.75;MU.bus.connect(dry);dry.connect(MU.master);
 var len=Math.floor(AC.sampleRate*2.8),buf=AC.createBuffer(2,len,AC.sampleRate);for(var c=0;c<2;c++){var d=buf.getChannelData(c);for(var i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,2.6)}
 var cv=AC.createConvolver();cv.buffer=buf;var wet=AC.createGain();wet.gain.value=.5;MU.bus.connect(cv);cv.connect(wet);wet.connect(MU.master);MU.bar=0;return true}
function sndOn(){if(!AC&&!muInit())return;AC.resume();SND=true;MU.next=AC.currentTime+.2;clearInterval(MU.timer);MU.timer=setInterval(muTick,120);muTick();MU.master.gain.cancelScheduledValues(AC.currentTime);MU.master.gain.setTargetAtTime(.55,AC.currentTime,.6);$('snd').classList.add('on');$('sndT').textContent='Music on'}
function sndOff(){if(!AC)return;SND=false;clearInterval(MU.timer);MU.master.gain.cancelScheduledValues(AC.currentTime);MU.master.gain.setTargetAtTime(0,AC.currentTime,.35);$('snd').classList.remove('on');$('sndT').textContent='Music off'}
function toggleSnd(){SND?sndOff():sndOn()}
/* glass spotlight: one small element per section, moved with transform (cheap), at most once per frame */
(function(){document.querySelectorAll('section').forEach(function(s){var w=document.createElement('div');w.className='spotwrap';w.innerHTML='<i class="spot"></i>';s.appendChild(w)});
 var cur=null,x=0,y=0,raf=0;
 function paint(){raf=0;if(!cur)return;var r=cur.getBoundingClientRect(),sp=cur.querySelector('.spot');if(sp)sp.style.transform='translate('+(x-r.left-260).toFixed(0)+'px,'+(y-r.top-260).toFixed(0)+'px)'}
 document.addEventListener('mousemove',function(e){cur=e.target.closest&&e.target.closest('section');if(!cur)return;x=e.clientX;y=e.clientY;if(!raf)raf=requestAnimationFrame(paint)},{passive:true})})();
