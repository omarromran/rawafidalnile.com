(function(){
  var d=document.documentElement,b=document.getElementById('lang'),m=document.getElementById('menu'),nav=document.getElementById('site-nav'),content=window.RAWAFED_CONTENT||{};
  if(nav&&content.navigation)nav.innerHTML=content.navigation.map(function(item){return '<a href="'+item.href+'"><span class="en">'+item.en+'</span><span class="ar">'+item.ar+'</span></a>'}).join('');
  if(content.board){document.querySelectorAll('.pp').forEach(function(card,index){var profile=content.board[index];if(!profile)return;var bio=document.createElement('p');bio.className='board-bio';bio.innerHTML='<span class="en">'+profile.en+'</span><span class="ar">'+profile.ar+'</span>';card.appendChild(bio)})}
  if(content.description){var description=document.querySelector('meta[name="description"]');if(description)description.content=content.description}
  function set(l){d.lang=l;d.dir=l==='ar'?'rtl':'ltr';b.textContent=l==='ar'?'English':'العربية';if(content.title)document.title=content.title;try{localStorage.setItem('rn',l)}catch(e){}}
  var s='en';try{s=localStorage.getItem('rn')||'en'}catch(e){}set(s);b.onclick=function(){set(d.lang==='ar'?'en':'ar')};
  function closeMenu(){if(!m||!nav)return;nav.classList.remove('open');m.setAttribute('aria-expanded','false')}
  if(m&&nav){m.onclick=function(){var open=nav.classList.toggle('open');m.setAttribute('aria-expanded',String(open))};nav.querySelectorAll('a').forEach(function(a){a.onclick=function(e){e.preventDefault();closeMenu();var target=document.querySelector(a.getAttribute('href'));if(target)target.scrollIntoView({behavior:'smooth',block:'start'})}})}
  var h=document.getElementById('h');addEventListener('scroll',function(){h.classList.toggle('s',scrollY>20)});
  var hero=document.querySelector('.hero'),sl=document.querySelectorAll('.sl'),dt=document.querySelectorAll('.dots button:not(.carousel-toggle)'),toggle=document.querySelector('.carousel-toggle'),n=0,paused=false,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,timer;
  function show(i){n=i;sl.forEach(function(x,k){x.classList.toggle('on',k===i)});dt.forEach(function(x,k){x.classList.toggle('on',k===i);x.setAttribute('aria-current',k===i?'true':'false')})}
  function stop(){if(timer){clearInterval(timer);timer=null}}
  function start(){if(reduce||paused||timer)return;timer=setInterval(function(){show((n+1)%sl.length)},6500)}
  dt.forEach(function(x,k){x.onclick=function(){show(k);start()}});show(0);
  if(toggle){toggle.onclick=function(){paused=!paused;toggle.setAttribute('aria-pressed',String(paused));toggle.querySelector('.en').textContent=paused?'Resume':'Pause';toggle.querySelector('.ar').textContent=paused?'استئناف':'إيقاف مؤقت';paused?stop():start()}}
  if(hero){hero.onmouseenter=function(){stop()};hero.onmouseleave=function(){start()};hero.onfocusin=function(){stop()};hero.onfocusout=function(e){if(!hero.contains(e.relatedTarget))start()}}
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
  start();
})();
