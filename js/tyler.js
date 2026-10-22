/* Tyler's personal page (tyler.html) */
/* EDIT HERE: his details (shown next to the photo) and the texts shown one by one with the Next button */
var PERSONAL={name:'Tyler',
 info:[['Name','Tyler'],['Age','29'],['Occupation','نماینده فروش املاک لوکس'],['Relationship to the victim','دوست مقتول'],['Personality traits','آدم شوخ‌طبعی هستش.\nآدم بیخیال و خوشگذرانی هستش.\nپسر جذاب و شیطونی هستش اما چارچوبی نداره.']],
 texts:[{t:'Part 1',x:'🔹 من از مدت‌ها پیش با شرکت پدر کلارا کار می‌کنم. اون‌ها خونه و شهرک‌های لوکس می‌سازن و مسئولیت فروششون با منه.\n🔹 بله، سر چند تا معامله ضرر کردیم. ولی این بار واقعا تقصیر من نبود. ولی کلارا سر مسائل شرکت زیادی حساس بود.\n🔹 تصمیم گرفت این بار اخراجم کنه.\n🔹 همه‌چیز. تمام کار و درآمدم.\n🔹 آره. با طرف قرارداد صحبت کرده بودم و قرار بود بخشی از ضرر رو جبران کنم و به حساب شرکت برگردونم.\n🔹 نه. هنوز چیزی قطعی نشده بود. می‌خواستم وقتی قطعی شد بهش بگم. که دیگه فرصت نشد. صبح روزی که کشته شد فهمیدم اخراجم کرده.'},{t:'Part 2',x:'🔹 نه. دیگه لیلی رو ندیدم تا اون شب مهمونی ایوان.\n🔹 ما رابطه خوبی باهم داشتیم. کلارا راجع به خیلی از فکرها و مسائل زندگیش با من حرف میزد. انقدر وقتی بهم گفت از شرکت بیرونم میکنه، اصلا حرفش رو جدی نگرفتم.\n🔹 کلارا دختر جاه‌طلبی بود. و همینطور خیلی رقابتی. چیزی نبود که بخواد و بدست نیاره. منم خیلی جاها واسه رسیدنش به خواسته‌هاش بهش کمک کردم.\n🔹 مسائل زیادی تو سر کلارا میگشت. اصلا همین حضور دوباره لیلی توی گروه باعث شده بود تا همونجا به شدت از دست ایوان عصبی بشه. ولی مغرور بود و نمیخواست کسی از این موضوع چیزی متوجه بشه.\n🔹 بله. اون شب تو مهمونی یه تایمی رو رفتم تو اتاق تا از سیگارم رو بردارم. پشت سرم کلارا هم اومد و چند دقیقه اونجا راجع به این حضور ناگهانی لیلی صحبت کردیم. اینم بخشی از صحبت‌های اون شب کلارا بود.\n🔹 بله. بیشتر میترسید. کلارا همون دوران دبیرستان هم نامحسوس خیلی سعی میکرد لیام رو به طرف خودش جذب کنه. اما لیام انقدر درگیر لیلی بود که اصلا کلارا رو نمیدید. برای همین کلارا بعد از این همه سال هنوز لیلی رو شبیه به یه خطر برای رابطه خودش و لیام میدید.'}]};
var PP={i:0,tm:null,typing:false,full:''};
/* only people who logged in on index.html can see this page */
function personAllowed(){var ok=false;try{ok=sessionStorage.getItem('tof_user')==='tyler'}catch(e){}if(location.hash==='#access')ok=true;return ok}
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
