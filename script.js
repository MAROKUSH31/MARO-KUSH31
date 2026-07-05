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