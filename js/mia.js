/* Mia's personal page (mia.html) */
/* EDIT HERE: his details (shown next to the photo) and the texts shown one by one with the Next button */
var PERSONAL={name:'Mia',
 info:[['Name','Mia'],['Age','28'],['Occupation','بلاگر و اینفلوئنسر'],['Relationship to the victim','دوست مقتول'],['Personality traits','زیاد پر میده اما تو قلبش چیزی نیست.\nدختر ادایی هستش.\nبراش مهمه بین مردم چطور دیده میشه.']],
 texts:[{t:'Part 1',x:'🔹 خوب بود. از نوجوانی بین بچه‌های اکیپ، رابطه‌ی من و کلارا از بقیه نزدیک‌تر بود.\n🔹 بله. من و کلارا مدت‌هاست اونجا با هم فعالیت می‌کنیم.\n🔹 بله. بزودی قرار بود بین چند نفر از ما برای ریاست انجمن رای‌گیری بشه.\n🔹 درسته.\n🔹 بله. ریاست انجمن روی برند هر دوی ما تاثیر زیادی داشت و وجهه‌ی اجتماعی‌مون رو بالاتر می‌برد. ولی شانس من برای بردن از کلارا بیشتر بود، چون من توی خیریه فعال‌تر بودم. برای همین کلارا سعی کرد منو قانع کنه که کنار بکشم.\n🔹 یه نفر توی خیریه هست که سال‌هاست هزینه‌هاش مستقیم از طرف من پرداخت می‌شه. یه جوون ۳۶ ساله‌ست که چند سال پیش یه شب توی یکی از خیابون‌های خارج شهر زدن بهش. راننده بالای سرش رفت، اما وضعیتش رو که میبینه، میترسه و ولش میکنه. از اون موقع کاملا بستریه. می‌بینه و می‌شنوه، ولی نمی‌تونه جواب بده.\n🔹 راننده‌ای که بهش زد، من بودم.\n🔹 همه‌ی ما خارج شهر مهمونی داشتیم و من مثل همیشه زیاده‌روی کردم. موقع برگشتن می‌خواستم تنها برگردم، ولی هنوز مست بودم. لیام حالم رو دید و گفت توی این وضع رانندگی نکن. قبول نکردم و اون اتفاق افتاد.\n🔹 موقع رفتن دیر کرده بودم و کلارا زنگ زد. گفت لایو لوکیشن براش بفرستم. فرستادم اما بعدا یادم رفت خاموشش کنم. کلارا همه‌چیز رو از روی گوشیش دید. جایی که تصادف کردم، اینکه مدتی بالای سرش بودم و بعدش که حرکت کردم. فردا که خبرش پخش شد، فهمید ماجرا چی بوده.\n🔹 بله. گفت ماجرای اون شب رو به همه می‌گه. اگه می‌گفت، همه‌چیزم رو از دست می‌دادم.'},{t:'Part 2',x:'🔹 از اوضاع و احوال زندگیش پرسیدم. من از کارش و گلفروشی پرسیدم و اون هم کوتاه سوالاتمو جواب میداد.\n🔹 آخرین پیام رو قبل از رای‌گیری فرستاد. نوشته بود هنوز وقت دارم و اگه کنار نکشم، ماجرای اون شب رو به همه می‌گه.\n🔹 نه. هنوز جوابش رو نداده بودم. کلارا راهی برای من نذاشته بود. باید قید ریاست انجمن خیریه رو میزدم تا به قیمت این موضوع همه چیزم رو از دست ندم. هنوز درگیر گرفتن این تصمیم بودم که این ماجرا پیش اومد.'}]};
var PP={i:0,tm:null,typing:false,full:''};
/* only people who logged in on index.html can see this page */
function personAllowed(){var ok=false;try{ok=sessionStorage.getItem('tof_user')==='mia'}catch(e){}if(location.hash==='#access')ok=true;return ok}
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
