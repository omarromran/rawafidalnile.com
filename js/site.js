(function(){
  var d=document.documentElement,b=document.getElementById('lang'),m=document.getElementById('menu'),theme=document.getElementById('theme'),nav=document.getElementById('site-nav'),content=window.RAWAFED_CONTENT||{};
  document.querySelectorAll('img').forEach(function(image){
    image.classList.add('image-loading');
    function ready(){image.classList.remove('image-loading');image.classList.add('image-ready')}
    if(image.complete&&image.naturalWidth>0)ready();else image.addEventListener('load',ready,{once:true});
  });
  if(content.board){document.querySelectorAll('.pp').forEach(function(card,index){var profile=content.board[index];if(!profile)return;var bio=document.createElement('p');bio.className='board-bio';bio.innerHTML='<span class="en">'+profile.en+'</span><span class="ar">'+profile.ar+'</span>';card.appendChild(bio)})}
  if(content.description){var description=document.querySelector('meta[name="description"]');if(description)description.content=content.description}
  var footer=document.querySelector('footer');
  if(footer){var profilePath=location.pathname.indexOf('/sectors/')!==-1?'../../assets/rawafed-corporate-profile-nov-2026.pdf':'assets/rawafed-corporate-profile-nov-2026.pdf';footer.id='contact';footer.className='site-footer';footer.innerHTML='<div class="wrap"><div class="site-footer__grid"><div><h2>Contact</h2><p>We welcome your inquiries and look forward to building lasting business relationships.</p></div><div><h3>Cairo</h3><a href="https://www.google.com/maps/search/?api=1&query=26+Abdullah+bin+Taher+Zone+6+Nasr+City+Cairo" target="_blank" rel="noopener">Cairo office</a></div><div><h3>Giza</h3><a href="https://www.google.com/maps/search/?api=1&query=Al-Majd+Mall+4th+Floor+6th+of+October+City+Giza" target="_blank" rel="noopener">Giza office</a></div><div><h3>Reach us</h3><p dir="ltr" style="text-align:start"><a href="mailto:info@rawafedalnile.com">info@rawafedalnile.com</a><br><a href="tel:+201097474749">+20 10 9747 4749</a><br><a href="tel:+201002159145">+20 10 0215 9145</a><br><a href="tel:+201149818181">+20 11 4981 8181</a></p></div></div><div class="site-footer__actions"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=info%40rawafedalnile.com&su=Business%20inquiry%20-%20Rawafed%20Al%20Nile" target="_blank" rel="noopener">Send an inquiry</a><a href="'+profilePath+'" target="_blank" rel="noopener">Open company profile</a></div><div class="site-footer__legal">Rawafed Al Nile for Investment and Development</div></div>'}
  function set(l){d.lang=l;d.dir=l==='ar'?'rtl':'ltr';b.textContent=l==='ar'?'English':'العربية';if(content.title)document.title=content.title;try{localStorage.setItem('rn',l)}catch(e){}}
  var s='en';try{s=localStorage.getItem('rn')||'en'}catch(e){}set(s);b.onclick=function(){set(d.lang==='ar'?'en':'ar')};
  function setTheme(value){d.dataset.theme=value;if(theme){theme.textContent=d.lang==='ar'?(value==='dark'?'الوضع الفاتح':'الوضع الداكن'):(value==='dark'?'Light mode':'Dark mode');theme.setAttribute('aria-pressed',String(value==='dark'));}try{localStorage.setItem('rn-theme',value)}catch(e){}}
  var savedTheme='dark';try{savedTheme=localStorage.getItem('rn-theme')||'dark'}catch(e){}setTheme(savedTheme);if(theme)theme.onclick=function(){setTheme(d.dataset.theme==='dark'?'light':'dark')};
  function closeMenu(){if(!m||!nav)return;nav.classList.remove('open');m.setAttribute('aria-expanded','false')}
  if(m&&nav){m.onclick=function(){var open=nav.classList.toggle('open');m.setAttribute('aria-expanded',String(open))};nav.querySelectorAll('a').forEach(function(a){a.onclick=function(e){closeMenu();var url=new URL(a.href,location.href);if(url.origin===location.origin&&url.pathname===location.pathname&&url.hash){e.preventDefault();var target=document.querySelector(url.hash);if(target)target.scrollIntoView({behavior:'smooth',block:'start'})}}})}
  var h=document.getElementById('h');addEventListener('scroll',function(){h.classList.toggle('s',scrollY>20)});
  var hero=document.querySelector('.hero'),sl=document.querySelectorAll('.sl'),dt=document.querySelectorAll('.dots button:not(.carousel-toggle)'),toggle=document.querySelector('.carousel-toggle'),n=0,paused=false,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,timer;
  function show(i){n=i;sl.forEach(function(x,k){x.classList.toggle('on',k===i)});dt.forEach(function(x,k){x.classList.toggle('on',k===i);x.setAttribute('aria-current',k===i?'true':'false')})}
  function stop(){if(timer){clearInterval(timer);timer=null}}
  function start(){if(reduce||paused||timer)return;timer=setInterval(function(){show((n+1)%sl.length)},6500)}
  if(sl.length){dt.forEach(function(x,k){x.onclick=function(){show(k);start()}});show(0);
    if(toggle){toggle.onclick=function(){paused=!paused;toggle.setAttribute('aria-pressed',String(paused));toggle.querySelector('.en').textContent=paused?'Resume':'Pause';toggle.querySelector('.ar').textContent=paused?'استئناف':'إيقاف مؤقت';paused?stop():start()}}
    if(hero){hero.onmouseenter=function(){stop()};hero.onmouseleave=function(){start()};hero.onfocusin=function(){stop()};hero.onfocusout=function(e){if(!hero.contains(e.relatedTarget))start()}}
  }
  document.querySelectorAll('.profile-block').forEach(function(block,index){
    var heading=block.querySelector('h3');
    if(!heading)return;
    var details=document.createElement('details');
    details.className='profile-block';
    details.open=index===0;
    var summary=document.createElement('summary');
    summary.innerHTML=heading.innerHTML;
    details.appendChild(summary);
    Array.prototype.slice.call(block.children).forEach(function(child){if(child!==heading)details.appendChild(child)});
    block.replaceWith(details);
  });
  if(sl.length)start();
})();
