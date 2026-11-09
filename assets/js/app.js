const D=window.SYLLABUS.map(c=>({...c,name:c.name,mods:c.modules.map(m=>({n:m.no,t:m.title,h:m.hours,d:m.topics}))}));
const P={dbms:["#2f6bff","#6f98ff"],os:["#7a4dff","#a58bff"],ai:["#ef2f7a","#ff6fa3"],cd:["#f07a00","#ffa23d"],cn:["#00995e","#2fd18f"],cloud:["#0397b8","#34c9ea"]};
const nav=document.getElementById("nav"),main=document.getElementById("main"),root=document.documentElement;
let cur=0,lock=false,io;
const esc=s=>String(s).replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
function drawNav(){
  nav.innerHTML=D.map((c,i)=>`<a tabindex="0" data-i="${i}" class="${i==cur?"on":""}" style="--c:${P[c.id][0]}">${c.id.toUpperCase()}</a>`).join("")+`<button class="t" id="th">Switch theme</button>`;
  nav.querySelectorAll("a").forEach(a=>{a.onclick=()=>go(+a.dataset.i);a.onkeydown=k=>k.key=="Enter"&&go(+a.dataset.i)});
  document.getElementById("th").onclick=()=>{const dk=root.dataset.theme?root.dataset.theme=="dark":matchMedia("(prefers-color-scheme: dark)").matches;root.dataset.theme=dk?"light":"dark"};
}
function draw(){
  const c=D[cur];root.style.setProperty("--a",P[c.id][0]);root.style.setProperty("--ad",P[c.id][1]);
  main.innerHTML=`<h1 class="abbr" aria-label="${c.id.toUpperCase()}">${[...c.id.toUpperCase()].map((l,i)=>`<span style="animation-delay:${i*60}ms">${l}</span>`).join("")}</h1>
  <div class="full">${c.name}</div>
  ${c.mods.map(m=>`<article class="m" id="m${m.n}"><span class="n">${m.n}</span><h3>${esc(m.t)}</h3><span class="h">${m.h} hours</span>${m.d?`<p>${esc(m.d)}</p>`:""}</article>`).join("")}`;
  io&&io.disconnect();
  io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){const n=x.target.id.slice(1);main.querySelectorAll(".m").forEach(m=>m.classList.toggle("on",m==x.target))}}),{rootMargin:"-20% 0px -65% 0px"});
  main.querySelectorAll(".m").forEach(m=>io.observe(m));
  document.title=c.id.toUpperCase()+" · Syllabus";
}
function go(i){if(i<0||i>=D.length)return;cur=i;lock=true;nav.classList.add("shut");history.replaceState(null,"","#"+D[i].id);drawNav();draw();scrollTo(0,0)}
addEventListener("keydown",x=>{if(x.target.closest&&x.target.closest("button"))return;if(x.key=="ArrowRight"||x.key=="j")go(cur+1);if(x.key=="ArrowLeft"||x.key=="k")go(cur-1)});
const HOT=56,W=260;
addEventListener("mousemove",ev=>{if(innerWidth<=760)return;const x=ev.clientX,s=nav.classList.contains("shut");
  if(x>HOT)lock=false;
  if(s&&x<=HOT&&!lock)nav.classList.remove("shut");
  else if(!s&&x>W+48)nav.classList.add("shut")},{passive:true});
document.documentElement.addEventListener("mouseleave",ev=>{if(ev.clientX<=HOT&&!lock)nav.classList.remove("shut")});
const hi=D.findIndex(c=>c.id==location.hash.slice(1));
cur=hi>=0?hi:0;drawNav();draw();
