document.addEventListener("DOMContentLoaded", () => {

const boutons = document.querySelectorAll("button");

boutons.forEach(bouton => {

    bouton.addEventListener("click", () => {

        if (bouton.textContent.includes("WhatsApp")) {
            window.open("https://wa.me/33612345678","_blank");
        }

        else if (bouton.textContent.includes("Telegram")) {
            window.open("https://t.me/SAV_MK31","_blank");
        }

        else if (bouton.textContent.includes("Acheter")) {
            alert("🛒 Produit ajouté au panier");
        }

    });

});

// ===== COMPTE À REBOURS =====

const timer = document.getElementById("timer");

function updateCountdown(){

    if(!timer) return;

    const now = new Date();

    const tomorrow = new Date();

    tomorrow.setHours(24,0,0,0);

    const diff = tomorrow - now;

    const h = Math.floor(diff / 1000 / 60 / 60);

    const m = Math.floor((diff / 1000 / 60) % 60);

    const s = Math.floor((diff / 1000) % 60);

    timer.innerHTML =
    "⏳ Nouveau code dans : "
    + h + "h "
    + m + "m "
    + s + "s";

}

setInterval(updateCountdown,1000);

updateCountdown();

});
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.addEventListener("click", () => {

sideMenu.classList.toggle("open");

});
document.querySelectorAll(".btn").forEach((btn)=>{

btn.addEventListener("click",()=>{

alert("🚧 Cette catégorie sera bientôt connectée à la boutique.");

});

});
document.querySelectorAll(".videoBtn").forEach(button=>{

button.addEventListener("click",()=>{

alert("🎥 La vidéo de démonstration sera disponible ici.");

});

});
/* ===========================
   MENU LATÉRAL
=========================== */

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.addEventListener("click", () => {

    sideMenu.classList.toggle("open");

});

document.addEventListener("click", (e) => {

    if (
        !sideMenu.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {

        sideMenu.classList.remove("open");

    }

});
/* ===========================
   APPARITION AU SCROLL
=========================== */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll(
".card,.about-card,.contact,.countdown"
).forEach(el=>{

el.classList.add("fade");

observer.observe(el);

});
/* ===========================
   LOADER
=========================== */

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.classList.add("loader-hidden");

setTimeout(()=>{

loader.remove();

},700);

},2200);

});