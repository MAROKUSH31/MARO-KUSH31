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

            alert("🛒 Produit ajouté au panier (bientôt disponible)");

        }

    });

});

});