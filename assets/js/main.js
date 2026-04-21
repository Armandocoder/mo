// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Preloader
window.addEventListener('load',()=>{
  setTimeout(()=>{document.getElementById('preloader').classList.add('done')},800);
});

// Custom cursor
const cur=document.getElementById('cursor');
const ring=document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
function animRing(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing);}
animRing();
document.querySelectorAll('a,button').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.transform='translate(-50%,-50%) scale(2.5)';ring.style.opacity='0';});
  el.addEventListener('mouseleave',()=>{cur.style.transform='translate(-50%,-50%) scale(1)';ring.style.opacity='.5';});
});

// Navbar scroll
const nav=document.getElementById('navbar');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>60);});

// Mobile menu
const burger=document.getElementById('burgerBtn');
const mMenu=document.getElementById('mobileMenu');
const mClose=document.getElementById('menuClose');
burger.addEventListener('click',()=>mMenu.classList.add('open'));
mClose.addEventListener('click',()=>mMenu.classList.remove('open'));
mMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mMenu.classList.remove('open')));

// Scroll animations
const obs=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
},{threshold:0.12});
document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));

// Hero elements visible on load
setTimeout(()=>{
  document.querySelectorAll('.hero .fade-in').forEach(el=>el.classList.add('visible'));
},900);