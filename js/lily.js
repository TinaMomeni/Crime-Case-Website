/* Lily's personal page (lily.html) */
/* EDIT HERE: his details (shown next to the photo) and the texts shown one by one with the Next button */
var PERSONAL={name:'Lily',
 info:[['Name','Lily'],['Age','28'],['Occupation','صاحب گلخانه و گلفروشی'],['Relationship to the victim','دوست مقتول'],['Personality traits','خوش‌اخلاق و مهربونه.\nشخصیت سخت‌کوش و مستقلی داره.\nکلا شخصیت آرومیه.']],
 texts:[{t:'Part 1',x:'🔹 ما از بچگی خیلی بهم نزدیک بودیم. اما از یه جایی محبت بینمون بیشتر شد. بعد یه روز لیام ازم خواست باهاش به دیت برم. قبول کردم و رابطه‌مون شروع شد. همه‌چیز خیلی خوب بود اما خیلی زود رسیدیم به تایمی که باید از هم جدا میشدیم.\n🔹 یک هفته به شروع دانشگاه مونده بود. یه شب لیام منو برد خونه‌ی درختی بچگی‌مون و اون شب تا صبح کنار هم بودیم. اما صبح که شد، با هم حرف زدیم و تصمیم گرفتیم علیرغم علاقه‌ای که هنوز بینمون هست، از هم جدا بشیم تا ببینیم در آینده چه اتفاقی می‌افته.\n🔹 تعجب نکردم، چون می‌دونستم کلارا هیچ‌وقت از لیام بدش نمی‌اومد. ولی اینکه بعد از اون لحظه‌هایی که با هم داشتیم، لیام با کلارا وارد رابطه شده، منو رنجوند.\n🔹 ارتباطم رو با همه‌ی گروه کامل قطع کردم. سال‌ها میشد که هیچ‌کدومشون رو ندیده بودم، تا اینکه اون روز ایوان اتفاقی اومد گلفروشی من.\n🔹 اون شب به همه گفتم مادرم زنگ زده و کار فوری داره و باید برگردم خونه.\n🔹 اون شب کسی به من زنگ نزده بود.\n🔹 چون اون شب، تایلر تو جنگل به من تجاوز کرد.\n🔹 اون شب تایلر ازم خواست برم برای جمع کردن هیزم کمکش کنم. تایلر پسر شر و شیطونی بود، ولی پیشش احساس ناامنی نمی‌کردم. وقتی از خونه خیلی دور شدیم، یهو ایستاد، منو هل داد و انداخت زمین و دست و پام رو گرفت. زورم نرسید جلوش رو بگیرم. وقتی کارش تموم شد، فرصت کردم فرار کنم و فقط دویدم. وقتی رسیدم، اون بهونه رو آوردم که بتونم سریع برگردم.'},{t:'Part 2',x:'🔹 بعد از سال‌ها همه‌شون رو یکجا دیده بودم و راحت نبودم. بودن توی اون جمع اذیتم میکرد و اگر از قبل میدونستم تو اون مهمونی شرکت نمیکردم. اولش یکم با سکوت من گذشت. بعد کمی با میا صحبت کردیم. بعدش هم نوبت شام شد و نهایتا بعد از شام خداحافظی کردم و از اونجا اومدم بیرون.\n🔹 نه. اتفاق خاصی نیوفتاده بود. فقط بودن توی اون جمع با حضور تایلر و بعدش شنیدن خبر ازدواج لیام و کلارا من رو یاد گذشته انداخته بود. من بعد از اون شب تا مدت‌ها حال خوبی نداشتم. کاری که تایلر کرد یه طرف. دیدن اینکه لیام انقدر زود کلارا رو جایگزین من کرد از طرف دیگه. همه اینا باعث شد بودن توی اون جمع به قدر کافی برای من سخت باشه.'}]};
var PP={i:0,tm:null,typing:false,full:''};
/* only people who logged in on index.html can see this page */
function personAllowed(){var ok=false;try{ok=sessionStorage.getItem('tof_user')==='lily'}catch(e){}if(location.hash==='#access')ok=true;return ok}
function personLogout(){try{sessionStorage.removeItem('tof_user')}catch(e){}location.href='index.html'}
function initPerson(){var d=PERSONAL;
 $('ppName').textContent=d.name;$('ppH3').textContent=d.name;$('ppTag').textContent='File '+d.name.toUpperCase();$('ppSil').innerHTML=sil(0);
 var ic=[IC.u,IC.l,IC.c];$('ppInfo').innerHTML=d.info.map(function(r,k){return'<div><span class="ico">'+ic[k%3]+'</span><div class="ft"><dt>'+esc(r[0])+'</dt>'+(r[1].indexOf('\n')>-1?'<dd dir="auto" class="lst">'+r[1].split('\n').map(function(l){return'<span>'+esc(l)+'</span>'}).join('')+'</dd>':'<dd dir="auto">'+esc(r[1])+'</dd>')+'</div></div>'}).join('');
 rdShow(0,1);observe()}
function rdShow(i,dir){var d=PERSONAL;PP.i=i;var x=d.texts[i],box=$('rdText');clearInterval(PP.tm);
 $('rdTitle').textContent=x.t;$('rdCount').textContent=(i+1)+' / '+d.texts.length;
 box.classList.remove('sl','sr','typing');void box.offsetWidth;box.classList.add(dir<0?'sl':'sr');PP.full=x.x;box.textContent='';box.scrollTop=0;box.classList.remove('more');
 if(matchMedia('(prefers-reduced-motion:reduce)').matches){box.textContent=x.x;PP.typing=false;rdMore()}
 else{var n=0;PP.typing=true;box.classList.add('typing');PP.tm=setInterval(function(){n+=2;box.textContent=x.x.slice(0,n);box.scrollTop=box.scrollHeight;rdMore();if(n>=x.x.length){clearInterval(PP.tm);PP.typing=false;box.classList.remove('typing')}},5)}
 $('rdDots').innerHTML=d.texts.map(function(_,k){return'<i'+(k===i?' class="on"':'')+'></i>'}).join('');
 var last=i===d.texts.length-1;$('rdPrev').disabled=i===0;$('rdNext').disabled=last;$('rdNext').textContent=last?'End of file':'Next \u2192'}
function rdMore(){var b=$('rdText');b.classList.toggle('more',b.scrollHeight-b.clientHeight-b.scrollTop>6)}
$('rdText').addEventListener('scroll',rdMore);
function rdNext(){if(PP.i<PERSONAL.texts.length-1)rdShow(PP.i+1,1)}
function rdPrev(){if(PP.i>0)rdShow(PP.i-1,-1)}
document.addEventListener('keydown',function(e){if(/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;if(e.key==='ArrowRight'||e.key==='Enter')rdNext();else if(e.key==='ArrowLeft')rdPrev()});
if(personAllowed())initPerson();else location.replace('index.html');
