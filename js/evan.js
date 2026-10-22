/* Evan's personal page (evan.html) */
/* EDIT HERE: his details (shown next to the photo) and the texts shown one by one with the Next button */
var PERSONAL={name:'Evan',
 info:[['Name','Evan'],['Age','25'],['Occupation','مدیر ارشد عملیاتی'],['Relationship to the victim','برادر مقتول'],['Personality traits','خوش‌اخلاقه و کمی درونگراست.\nروابط احتماعی خوبی داره.\nاز اون دسته افراده که سرش تو کار خودشه.']],
 texts:[{t:'Part 1',x:'🔹 سر چندتا از مسائل شرکت. برنامه‌های من و کلارا برای موفقیت شرکت جدا از هم بود. پدرم به کلارا اعتماد بیشتری داشت و بهش قدرت بیشتری داده بود. برای همین من برای هر کاری اول باید کلارا رو متقاعد می‌کردم. اون شب هم کلارا مثل همیشه با یکی از طرح‌های من مخالفت کرد.\n🔹 از نظر من نه. قبلا هم پیش اومده بود.\n🔹 شرکت روال عادی خودش رو داشت. فقط سر یه سری معامله‌ها که مسئولیتشون با تایلر بود، ضرر کرده بودیم. قبلا هم پیش اومده بود، ولی نه به این شدت.\n🔹 به این فکر افتاده بود که تایلر رو کنار بذاره.\n🔹 اولش چیزی به من نگفته بود. ولی بعدش وکیل پدرم به هر دوی ما گفت. پدرم می‌خواست بزودی بخش بزرگی از سهام شرکت رو به اسم کلارا بزنه و کلارا رو جای خودش توی شرکت بذاره.\n🔹 بله. کلارا می‌دونست بابا می‌خواد اونو جای خودش بذاره. اما مثل همیشه این تبعیض بین ما رو دید و سکوت کرد.'},{t:'Part 2',x:'🔹 چند ماه پیش اتفاقی رفتم گلفروشی لیلی و بعد از سال‌ها دیدمش. یکم تغییر کرده بود و چهره‌اش بالغ‌تر شده بود، ولی نگاهش هنوز همون آرامش و مهربونی قبل رو داشت. یهو ازش خوشم اومد و تصمیم گرفتم بیشتر ببینمش.\n🔹 همون‌جا شماره‌اش رو گرفتم و چند روز بعد به شام دعوتش کردم. اونجا فهمیدم بعد از دانشگاه یه گلخونه زده و تازگی گلفروشی هم باز کرده. اون شب فقط از اوضاع زندگیمون حرف زدیم و اشاره‌ای هم به گذشته نکردیم.\n🔹 دنبال بهونه می‌گشتم که دوباره ببینمش. فهمیده بودم لیلی عمدا از جمع دوری می‌کنه، ولی فکر می‌کردم بخاطر رابطه‌ی کلارا و لیامه. با خودم گفتم خیلی از اون سال‌ها گذشته و حتما دیگه همه‌چی رو فراموش کرده.\n🔹 نه، اصلا نمی‌دونستم. اگه می‌دونستم، هیچ‌وقت لیلی رو توی جمعی که تایلر هست دعوت نمی‌کردم.\n🔹 اولش عادی بود. یعنی بیشتر ساکت بود و فقط کمی با میا حرف زد. اما از یه جایی به بعد بهت‌زده بود و هی میرفت تو خودش. نهایتا بعد از شام هم زود خداحافظی کرد و رفت.'}]};
var PP={i:0,tm:null,typing:false,full:''};
/* only people who logged in on index.html can see this page */
function personAllowed(){var ok=false;try{ok=sessionStorage.getItem('tof_user')==='evan'}catch(e){}if(location.hash==='#access')ok=true;return ok}
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
