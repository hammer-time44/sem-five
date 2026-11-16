const D=window.SYLLABUS.map(c=>({...c,name:c.name,mods:c.modules.map(m=>({n:m.no,t:m.title,h:m.hours,d:m.topics}))}));
const P={dbms:["#2f6bff","#6f98ff"],os:["#7a4dff","#a58bff"],ai:["#ef2f7a","#ff6fa3"],cd:["#f07a00","#ffa23d"],cn:["#00995e","#2fd18f"],cloud:["#0397b8","#34c9ea"]};
const hd=document.getElementById("hd"),nav=document.getElementById("nav"),main=document.getElementById("main"),root=document.documentElement;
root.dataset.theme||(root.dataset.theme="light");
let cur=0,io;
const esc=s=>String(s).replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
const tip=document.createElement("div");tip.id="tip";document.body.appendChild(tip);
let items=[],tipOn=false;
function buildNav(){
  nav.innerHTML=D.map((c,i)=>`<a tabindex="0" role="button" data-i="${i}" aria-label="${esc(c.name)}" style="--w:${Math.max(12,Math.min(24,Math.round(c.name.length*.5)))}px"><i></i></a>`).join("")+`<button class="t" id="th" aria-label="Switch theme" title="Switch theme"></button>`;
  hd.innerHTML='<div><i class="ind"></i><i class="hov"></i>'+D.map((c,i)=>`<a tabindex="0" data-i="${i}" href="#${c.id}">${c.id.toUpperCase()}</a>`).join("")+"</div>";
  hd.querySelectorAll("a").forEach(a=>{a.onclick=e=>{e.preventDefault();go(+a.dataset.i)};a.onmouseenter=()=>place(hd.querySelector(".hov"),a,true)});
  hd.firstChild.onmouseleave=()=>hd.querySelector(".hov").style.opacity=0;
  items=[...nav.querySelectorAll("a")];
  items.forEach(a=>{const i=+a.dataset.i;a.onclick=()=>go(i);a.onkeydown=k=>(k.key=="Enter"||k.key==" ")&&(k.preventDefault(),go(i));a.onmouseenter=()=>showTip(i);a.onfocus=()=>{nt=1;nraf||(nraf=requestAnimationFrame(ntick));showTip(i);const r=a.getBoundingClientRect();aim(r.top+r.height/2)}});
  nav.onmouseleave=()=>{hideTip();aim(null)};nav.addEventListener("focusout",()=>setTimeout(()=>{if(!nav.contains(document.activeElement)&&!nav.matches(":hover"))nearRail(null)}));
  nav.addEventListener("focusout",()=>setTimeout(()=>{if(!nav.contains(document.activeElement)&&!nav.matches(":hover"))hideTip()}));
  nav.addEventListener("mousemove",ev=>aim(ev.clientY),{passive:true});
  const thb=document.getElementById("th");thb.onfocus=()=>{tt=1;traf||(traf=requestAnimationFrame(tick))};thb.onblur=()=>reveal(null);thb.onclick=()=>{const dk=root.dataset.theme?root.dataset.theme=="dark":matchMedia("(prefers-color-scheme: dark)").matches;root.dataset.theme=dk?"light":"dark"};
}
const K=[],T=[];let raf=0;
function aim(y){
  items.forEach((a,i)=>{if(y==null)T[i]=0;else{const r=a.getBoundingClientRect(),d=Math.min(1,Math.abs(y-(r.top+r.height/2))/90);T[i]=(1+Math.cos(Math.PI*d))/2}});
  raf||(raf=requestAnimationFrame(step));
}
function step(){
  let busy=false;
  items.forEach((a,i)=>{const k=K[i]||0,t=T[i]||0,n=k+(t-k)*.2;K[i]=Math.abs(t-n)<.002?t:n;if(K[i]!==t)busy=true;a.style.setProperty("--k",K[i].toFixed(3))});
  raf=busy?requestAnimationFrame(step):0;
}
function showTip(i){
  const c=D[i],r=items[i].getBoundingClientRect();
  tip.style.setProperty("--tc",P[c.id][root.dataset.theme=="dark"||(!root.dataset.theme&&matchMedia("(prefers-color-scheme: dark)").matches)?1:0]);
  tip.textContent=c.id.toUpperCase();
  tip.classList.toggle("snap",!tipOn);
  tip.style.top=(r.top+r.height/2)+"px";
  requestAnimationFrame(()=>tip.classList.add("show"));tipOn=true;
}
function hideTip(){tip.classList.remove("show");tipOn=false}
let tp=0,tt=0,traf=0;
let np=0,nt=0,nraf=0;
function nearRail(x,y){
  if(innerWidth<=760)return;
  if(x==null)nt=0;else{const r=nav.getBoundingClientRect(),d=Math.hypot(Math.max(r.left-x,0,x-r.right),Math.max(r.top-y,0,y-r.bottom)),f=Math.min(1,Math.max(0,(110-d)/80));nt=f*f*(3-2*f)}
  nraf||(nraf=requestAnimationFrame(ntick));
}
function ntick(){np+=(nt-np)*.14;if(Math.abs(nt-np)<.004)np=nt;nav.style.setProperty("--np",np.toFixed(3));nav.classList.toggle("near",np>.35);nraf=np!==nt?requestAnimationFrame(ntick):0}
let hp=0,ht=0,hraf=0;
function nearTop(x,y){
  if(y==null)ht=0;else{const w=hd.offsetWidth,h=hd.offsetHeight,dx=Math.max(0,Math.abs(x-innerWidth/2)-w/2),dy=Math.max(0,y-(12+h)),d=Math.hypot(dx,dy),f=Math.min(1,Math.max(0,(80-d)/55));ht=f*f*(3-2*f)}
  hraf||(hraf=requestAnimationFrame(htick));
}
function htick(){hp+=(ht-hp)*.16;if(Math.abs(ht-hp)<.004)hp=ht;hd.style.setProperty("--hp",hp.toFixed(3));hd.classList.toggle("near",hp>.4);hraf=hp!==ht?requestAnimationFrame(htick):0}
hd.addEventListener("focusin",()=>{ht=1;hraf||(hraf=requestAnimationFrame(htick))});
hd.addEventListener("focusout",()=>setTimeout(()=>{if(!hd.contains(document.activeElement)&&!hd.matches(":hover"))nearTop(null,null)}));
function reveal(x,y){nearTop(x,y);nearRail(x,y);
  const th=document.getElementById("th");if(!th||innerWidth<=760)return;
  if(x==null){tt=0}else{const r=th.getBoundingClientRect(),d=Math.hypot(x-(r.left+r.width/2),y-(r.top+r.height/2)),f=Math.min(1,Math.max(0,(120-d)/90));tt=f*f*(3-2*f)}
  traf||(traf=requestAnimationFrame(tick));
}
function tick(){
  const th=document.getElementById("th");tp+=(tt-tp)*.16;if(Math.abs(tt-tp)<.004)tp=tt;
  th.style.setProperty("--p",tp.toFixed(3));th.classList.toggle("near",tp>.45);
  traf=tp!==tt?requestAnimationFrame(tick):0;
}
addEventListener("mousemove",e=>reveal(e.clientX,e.clientY),{passive:true});
document.documentElement.addEventListener("mouseleave",()=>reveal(null));
function place(el,a,hov){
  if(!el||!a)return;
  if(hov&&el.style.opacity!=="1"){el.style.transition="none";el.style.transform=`translateX(${a.offsetLeft}px)`;el.style.width=a.offsetWidth+"px";el.offsetWidth;el.style.transition=""}
  el.style.transform=`translateX(${a.offsetLeft}px)`;el.style.width=a.offsetWidth+"px";if(hov)el.style.opacity=1;
}
function placeInd(first){const ind=hd.querySelector(".ind"),a=hd.querySelector("a.on");if(!ind||!a)return;ind.classList.remove("go");if(!first)ind.classList.add("go");place(ind,a);if(first)requestAnimationFrame(()=>requestAnimationFrame(()=>ind.classList.add("go")))}
addEventListener("resize",()=>placeInd(true));
document.fonts&&document.fonts.ready.then(()=>placeInd(true));
function drawNav(){const first=!hd.querySelector("a.on");hd.querySelectorAll("a").forEach((a,i)=>a.classList.toggle("on",i==cur));placeInd(first);items.forEach((a,i)=>{a.classList.toggle("on",i==cur);i==cur?a.setAttribute("aria-current","true"):a.removeAttribute("aria-current")})}
function draw(){
  const c=D[cur];root.style.setProperty("--a",P[c.id][0]);root.style.setProperty("--ad",P[c.id][1]);
  main.innerHTML=`<h1 class="abbr" aria-label="${c.id.toUpperCase()}">${[...c.id.toUpperCase()].map((l,i)=>`<span style="animation-delay:${i*60}ms">${l}</span>`).join("")}</h1>
  <div class="full">${c.name}</div>
  ${c.mods.map(m=>`<article class="m" id="m${m.n}"><span class="n">Module:${m.n}</span><h3>${esc(m.t)}</h3><span class="h">${m.h} hours</span>${m.d?`<p>${esc(m.d)}</p>`:""}</article>`).join("")}`;
  io&&io.disconnect();
  io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){const n=x.target.id.slice(1);main.querySelectorAll(".m").forEach(m=>m.classList.toggle("on",m==x.target))}}),{rootMargin:"-20% 0px -65% 0px"});
  main.querySelectorAll(".m").forEach(m=>io.observe(m));
  document.title=c.id.toUpperCase()+" · Syllabus";
}
function go(i){if(i<0||i>=D.length)return;cur=i;history.replaceState(null,"","#"+D[i].id);drawNav();draw();scrollTo(0,0)}
addEventListener("keydown",x=>{if(x.target.closest&&x.target.closest("button"))return;if(x.key=="ArrowRight"||x.key=="j")go(cur+1);if(x.key=="ArrowLeft"||x.key=="k")go(cur-1)});
const hi=D.findIndex(c=>c.id==location.hash.slice(1));
cur=hi>=0?hi:0;buildNav();drawNav();draw();
