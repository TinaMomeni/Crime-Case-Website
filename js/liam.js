/* Liam's personal page (liam.html) */
/* EDIT HERE: his details (shown next to the photo) and the texts shown one by one with the Next button */
var PERSONAL={name:'Liam',
 info:[['Name','Liam'],['Age','29'],['Occupation','معمار ارشد'],['Relationship to the victim','نامزد مقتول'],['Personality traits','شخصیت منطقی داره.\nکاریزماتیک و باهوشه.\nآدم مسئولیت پذیر و بااخلاقیه.']],
 texts:[{t:'Part 1',x:'🔹 اون روز برای هر دوی ما شلوغ بود. صبح تلفنی باهاش حرف زده بودم و بعدش ازش خبری نداشتم. برای همین بعد از کار غذا گرفتم و رفتم پیشش که با هم شام بخوریم.\n🔹 عادی بود، مثل شب‌های دیگه. شام خوردیم و بعدش نشستیم فیلم دیدیم. کلارا صبح روز بعد توی شرکت جلسه داشت، برای همین حدود ساعت ۱۰:۳۰ ازش خداحافظی کردم و رفتم خونه.\n🔹 بله، حدود ۱۰:۳۰ بود.\nنه، دشمنی یا تهدیدی ندیدم. فقط این اواخر ذهنش درگیر بود.\n🔹 من فکر می‌کردم بخاطر انتخابات انجمن خیریه است. اون انتخابات خیلی براش مهم بود.\n🔹 یه بار چند وقت پیش که با هم رفته بودیم بیرون، قیافه‌اش گرفته بود. ازش پرسیدم چیزی شده؟ گفت «نه، فقط یکم با ایوان بحث داشتم.»'},{t:'Part 2',x:'🔹 همه‌ی ما اون شب خارج شهر مهمونی داشتیم. میا مست بود و می‌خواست تنها برگرده. حالش رو که دیدم بهش گفتم توی این وضع رانندگی نکنه، ولی قبول نکرد و رفت. بعدش خبر تصادف رو شنیدیم.\n🔹 ما از بچگی با هم دوست نزدیک بودیم. وقتی بزرگ‌تر شدیم، این دوستی کم‌کم عوض شد. من داشتم به لیلی علاقمند می‌شدم و لیلی هم ظاهرا همین‌طور بود. همین شد که وارد رابطه شدیم.\n🔹 زیاد فرصت نداشتیم. دوران مدرسه داشت تموم می‌شد و دانشگاه قرار بود ما رو از هم جدا کنه. هر کدوممون قرار بود بره یه جا. برای همین یک هفته مونده به رفتن به دانشگاه، از هم جدا شدیم که ببینیم در آینده چی می‌شه.\n🔹 چرا. شب آخر همه رفتیم خونه‌ی خارج شهر یکی از بچه‌ها که برای آخرین بار دور هم جمع بشیم. اون شب دو تایی اعلام کردیم که رابطه‌مون تموم شده.\n🔹 عادی. سعی می‌کرد مثل قبل، مثل دو تا دوست معمولی رفتار کنه.\n🔹 کلارا دختر مغروری بود و هیچ‌وقت آویزون کسی نمی‌شد. ولی اون شب یه موقع تایلر برای جمع کردن هیزم رفت توی جنگل و از لیلی هم خواست کمکش کنه. وقتی دیر کردن، تصمیم گرفتم برم دنبالشون. کلارا هم باهام اومد. اونجا از علاقه‌اش به من گفت و اینکه رفتن به دانشگاه فرصتیه تا بیشتر با هم باشیم.\n🔹 اون شب زیاد الکل خورده بودم. فکر کردم اون هم همین‌طوره، برای همین چیزی بهش نگفتم. اما کلارا کم‌کم از حد خودش جلوتر رفت. اولش عقب کشیدم، ولی بعدش منم باهاش ادامه دادم.\n🔹 بعدش دیگه باهم حرفی نزدیم و برگشتیم پیش بچه‌ها. تایلر و لیلی هم برگشته بودن اما تایلر گفت لیلی ظاهرا از خونه تماس داشت و مجبور شد فورا برگرده خونه.\n🔹 بعد از اون شب، وقتی رفتیم دانشگاه، یه مدت از کلارا دوری می‌کردم. فکر می‌کردم نباید اون شب باهاش رابطه برقرار میکردم و پشیمون بودم. ولی کلارا انگار از اون اتفاق راضی بود و باز می‌اومد پیشم و سعی می‌کرد کنارم باشه.\n🔹 من کم‌کم به حضور کلارا عادت کردم. از لیلی هم دیگه خبری نبود. همین شد که رسما رابطه شروع شد.\n🔹 بعد از دانشگاه دیگه ارتباطی با هم نداشتیم.'}]};
var PP={i:0,tm:null,typing:false,full:''};
/* only people who logged in on index.html can see this page */
function personAllowed(){var ok=false;try{ok=sessionStorage.getItem('tof_user')==='liam'}catch(e){}if(location.hash==='#access')ok=true;return ok}
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
