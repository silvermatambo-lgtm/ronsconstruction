(()=>{
"use strict";
const WA="27833204202";
const stock={
 build:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=950&q=80",
 renovation:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=950&q=80",
 plaster:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=950&q=80",
 painting:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=950&q=80",
 roofing:"https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=950&q=80",
 bathroom:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=950&q=80",
 paving:"https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=950&q=80",
 maintenance:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=950&q=80",
 ceilings:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=950&q=80"
};
const services=[
["New Builds & Construction","Foundations, brickwork, masonry, walls and carefully planned new structures.","Construction",stock.build],
["Renovations & Alterations","Transforming existing spaces with practical extensions, alterations and improvements.","Renovations",stock.renovation],
["Plastering & Skimming","Smooth wall preparation, plaster finishes, repairs and professional surface preparation.","Finishing",stock.plaster],
["Interior & Exterior Painting","Refresh your walls, ceilings, façades and finishes with careful preparation.","Painting",stock.painting],
["Roofing & Timber Trusses","Roof structures, roof-related improvements, timber trusses and ceiling work.","Roofing",stock.roofing],
["Bathrooms & Tiling","Bathroom upgrades, vanity and sanitary installations, tile finishes and refurbishments.","Bathrooms",stock.bathroom],
["Paving & Driveways","Practical, attractive outdoor paving, pathways and driveway improvements.","Paving",stock.paving],
["General Maintenance & Repairs","Property upkeep, patching, repairs and general building maintenance.","Maintenance",stock.maintenance],
["Ceilings & Interior Finishes","Detailed ceiling work and interior finishes to complete your project.","Finishing",stock.ceilings]
];
const projects=[
["Residential Building","Construction",stock.build],
["Modern Bathroom Finishes","Bathrooms",stock.bathroom],
["Home Renovation","Renovations",stock.renovation],
["Roofing & Structural Works","Roofing",stock.roofing],
["Interior Painting & Finishes","Finishing",stock.painting],
["Paving & Outdoor Work","Paving",stock.paving],
["Wall Finishing","Finishing",stock.plaster],
["Home Improvements","Renovations",stock.maintenance],
["Modern Interior Finishes","Bathrooms",stock.ceilings]
];
const faq=[
["How do I request a quotation?","You can use the contact form or send us a WhatsApp message on +27 83 320 4202 with your name, project type, requirements and any available measurements or photos."],
["Which types of construction work do you offer?","Our services cover new builds, renovations, alterations, brickwork, plastering, painting, roofs and timber trusses, bathroom improvements, paving, ceilings, and general maintenance."],
["Do you handle small repairs as well as larger projects?","Yes, you can enquire about both smaller maintenance and finishing jobs and larger construction or renovation projects. We can discuss suitability once we know the scope."],
["Can I send pictures of the property?","Absolutely. Project photos can be shared on WhatsApp to help explain the work you have in mind."],
["How long does a renovation take?","Timelines depend on the project size, materials, site conditions and work involved. Contact us with your requirements so we can discuss a realistic plan."],
["Which areas do you cover?","Please contact us with your location to confirm service availability for your particular project."],
["Do you offer bathroom and paving upgrades?","Yes. Bathroom installations and finishes, and outdoor paving and driveway projects are among the services you can enquire about."]
];
const $=(s,root=document)=>root.querySelector(s);
const $$=(s,root=document)=>Array.from(root.querySelectorAll(s));
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function buildContent(){
 $("#featured-services").innerHTML=services.slice(0,6).map((s,i)=>'<div class="flip-card reveal up" tabindex="0" role="button" aria-label="Flip '+esc(s[0])+' card" aria-pressed="false"><div class="flip-inner"><div class="flip-front"><div class="card-image" style="background-image:url('+s[3]+')"></div><span class="service-num">0'+(i+1)+'</span><span class="flip-hint">TAP TO EXPLORE ↻</span><h3 class="service-name">'+esc(s[0])+'</h3></div><div class="flip-back"><b>RON’S CONSTRUCTION</b><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p><a href="/services" data-link>EXPLORE SERVICE ↗</a></div></div></div>').join("");
 $$(".flip-card").forEach(card=>{const flip=()=>{const state=!card.classList.contains("flipped");card.classList.toggle("flipped",state);card.setAttribute("aria-pressed",String(state));};card.addEventListener("click",e=>{if(e.target.closest("a"))return;flip();});card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();flip();}});});
 $("#full-services").innerHTML=services.map((s,i)=>'<article class="service-row reveal '+(i%2?"right":"left")+'"><div class="service-image" role="img" aria-label="'+esc(s[0])+'" style="background-image:url('+s[3]+')"></div><div class="service-info"><small>0'+(i+1)+' / '+esc(s[2].toUpperCase())+'</small><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></div></article>').join("");
 $("#home-gallery").innerHTML=projects.slice(0,3).map((p,i)=>'<a href="/gallery" data-link class="project-tile reveal up"><div class="tile-image" style="background-image:url('+p[2]+')"></div><span class="tile-arrow">↗</span><div class="project-title"><small>0'+(i+1)+' / '+esc(p[1].toUpperCase())+'</small><h3>'+esc(p[0])+'</h3></div></a>').join("");
 const cats=["All",...new Set(projects.map(p=>p[1]))];$("#gallery-filter").innerHTML=cats.map((c,i)=>'<button type="button" data-category="'+esc(c)+'" class="'+(i===0?"active":"")+'">'+esc(c)+'</button>').join("");
 $("#gallery-filter").addEventListener("click",e=>{const btn=e.target.closest("button");if(!btn)return;$$(".gallery-filter button").forEach(el=>el.classList.toggle("active",el===btn));renderGallery(btn.dataset.category);});
 renderGallery("All");
 $("#faq-list").innerHTML=faq.map(f=>'<details class="faq-item"><summary>'+esc(f[0])+'</summary><p>'+esc(f[1])+'</p></details>').join("");
 ["#chat-service","#service-field"].forEach(sel=>{$(sel).insertAdjacentHTML("beforeend",services.map(s=>'<option value="'+esc(s[0])+'">'+esc(s[0])+'</option>').join(""));});
}
function renderGallery(category){
 $("#gallery-grid").innerHTML=projects.filter(p=>category==="All"||category===p[1]).map(p=>'<button class="gallery-item" type="button" data-src="'+esc(p[2])+'" data-title="'+esc(p[0])+'"><div class="gallery-photo" role="img" aria-label="'+esc(p[0])+'" style="background-image:url('+p[2]+')"></div><span class="gallery-title"><span class="gallery-cat">'+esc(p[1].toUpperCase())+'</span>'+esc(p[0])+' ↗</span></button>').join("");
 $$(".gallery-item").forEach(el=>el.addEventListener("click",()=>{const box=$("#lightbox");$("#lightbox-image").src=el.dataset.src;$("#lightbox-image").alt=el.dataset.title;$("#lightbox-caption").textContent=el.dataset.title;box.hidden=false;document.body.style.overflow="hidden";}));
}
function route(){
 let path=decodeURI(location.pathname).replace(/\/+$/,"")||"/";
 if(!$( '.page[data-page="'+path+'"]'))path="/";
 $$(".page").forEach(el=>el.classList.toggle("is-active",el.dataset.page===path));
 $$("a[data-link]").forEach(el=>{const here=el.getAttribute("href")===path;el.classList.toggle("active",here);if(here)el.setAttribute("aria-current","page");else el.removeAttribute("aria-current")});
 document.title=(path==="/"? "Ron’s Construction | Built With Purpose":path.substring(1).replace(/^./,c=>c.toUpperCase())+" | Ron’s Construction");
 $("#mobile-nav").classList.remove("open");$("#menu-toggle").setAttribute("aria-expanded","false");$("#menu-toggle").setAttribute("aria-label","Open navigation");
 window.scrollTo({top:0,behavior:"instant"});initReveals();initHeadings();
}
document.addEventListener("click",e=>{const link=e.target.closest("a[data-link]");if(!link)return;const href=link.getAttribute("href");if(!href||!href.startsWith("/"))return;e.preventDefault();if(location.pathname!==href)history.pushState({},"",href);route();});
window.addEventListener("popstate",route);
$("#menu-toggle").addEventListener("click",()=>{const nav=$("#mobile-nav");const open=nav.classList.toggle("open");$("#menu-toggle").setAttribute("aria-expanded",String(open));$("#menu-toggle").setAttribute("aria-label",open?"Close navigation":"Open navigation");});
let observer;
const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function initReveals(){if(observer)observer.disconnect();observer=new IntersectionObserver(entries=>{entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add("visible");observer.unobserve(en.target);}})},{threshold:.08,rootMargin:"0px 0px -35px 0px"});$$(".is-active .reveal").forEach(el=>{el.classList.remove("visible");if(reduce)el.classList.add("visible");else observer.observe(el)});}
let headingObserver;
function initHeadings(){if(headingObserver)headingObserver.disconnect();headingObserver=new IntersectionObserver(es=>{es.forEach(en=>{if(en.isIntersecting){animateHeading(en.target);headingObserver.unobserve(en.target);}})},{threshold:.3});$$(".is-active .typed-heading").forEach(el=>{if(el.dataset.text){if(reduce){el.innerHTML=el.dataset.text;return;}el.textContent="";headingObserver.observe(el);}});}
function animateHeading(el){const text=el.dataset.text.replace(/<br>/g,"\n");el.style.whiteSpace="pre-line";el.classList.add("typing");let i=0;const typing=setInterval(()=>{el.textContent=text.slice(0,++i);if(i>=text.length){clearInterval(typing);el.classList.remove("typing");}},Math.max(20,Math.floor(1100/Math.max(1,text.length))));}
const slides=[
{top:"WE BUILD",typing:"WITH PURPOSE.",desc:"From the foundation to the finishing touch, we bring care, skill and attention to every project."},
{top:"RENEW YOUR",typing:"LIVING SPACE.",desc:"Thoughtful renovations, modern bathroom finishes, painting and detailed interior improvements."},
{top:"STRONG WORK.",typing:"LASTING RESULTS.",desc:"From paving and roofing to masonry and property maintenance — let's build it right."}
];
let active=0,heroTimer,typingTimer,progressTimer,heroStart=Date.now();
function heroSlide(i){
 active=(i+slides.length)%slides.length;
 $$(".hero-photo").forEach((el,j)=>el.classList.toggle("active",active===j));
 $("#hero-static").textContent=slides[active].top;
 $("#hero-desc").textContent=slides[active].desc;$("#hero-index").innerHTML="0"+(active+1)+" <i>/ 03</i>";
 clearInterval(typingTimer);$("#hero-type").textContent="";
 const typed=slides[active].typing;let n=0;
 if(reduce)$("#hero-type").textContent=typed;
 else typingTimer=setInterval(()=>{ $("#hero-type").textContent=typed.slice(0,++n);if(n>=typed.length)clearInterval(typingTimer);},83);
 heroStart=Date.now();
}
function next(){heroSlide(active+1)}
function startHero(){clearInterval(heroTimer);heroTimer=setInterval(next,6500);}
$("#hero-prev").addEventListener("click",()=>{heroSlide(active-1);startHero()});
$("#hero-next").addEventListener("click",()=>{heroSlide(active+1);startHero()});
progressTimer=setInterval(()=>{$("#hero-bar").style.width=Math.min(100,((Date.now()-heroStart)/6500)*100)+"%";},75);
function formMessage(form){
 const data=new FormData(form);const message="Hello Ron’s Construction,\n\nMy name: "+data.get("name")+"\nPhone: "+data.get("phone")+"\nService: "+data.get("service")+"\nProject details: "+data.get("message")+"\n\nPlease contact me about a quotation.";
 window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(message),"_blank","noopener,noreferrer");
}
$("#contact-form").addEventListener("submit",e=>{e.preventDefault();formMessage(e.currentTarget)});
$("#chat-form").addEventListener("submit",e=>{e.preventDefault();formMessage(e.currentTarget);$("#chat-panel").hidden=true});
$("#chat-open").addEventListener("click",()=>{$("#chat-panel").hidden=!$("#chat-panel").hidden;});
$("#chat-close").addEventListener("click",()=>{$("#chat-panel").hidden=true;});
$("#lightbox").addEventListener("click",e=>{if(e.target.id==="lightbox"||e.target.closest(".lightbox-close")){$("#lightbox").hidden=true;document.body.style.overflow="";}});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){$("#lightbox").hidden=true;document.body.style.overflow="";$("#chat-panel").hidden=true;}});
$("#copyright-year").textContent=String(new Date().getFullYear());
let deferred;
window.addEventListener("beforeinstallprompt",event=>{event.preventDefault();deferred=event;$("#install-button").hidden=false;});
$("#install-button").addEventListener("click",async()=>{if(!deferred)return;deferred.prompt();await deferred.userChoice;deferred=null;$("#install-button").hidden=true;});
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("/sw.js").catch(()=>{}));
buildContent();route();heroSlide(0);startHero();
})();