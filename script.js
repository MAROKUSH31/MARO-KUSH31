document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       BOUTONS
    =========================== */

    document.querySelectorAll("button").forEach((button) => {

        button.addEventListener("click", () => {

            const text = button.textContent;

            if (text.includes("WhatsApp")) {
                window.open("https://wa.me/33612345678", "_blank");
            }

            else if (text.includes("Telegram")) {
                window.open("https://t.me/SAV_MK31", "_blank");
            }

            else if (text.includes("Acheter")) {
                alert("🛒 Produit ajouté au panier");
            }

        });

    });


    /* ===========================
       COMPTE À REBOURS
    =========================== */

    const timer = document.getElementById("timer");

    function updateCountdown() {

        if (!timer) return;

        const now = new Date();
        const tomorrow = new Date();

        tomorrow.setHours(24, 0, 0, 0);

        const diff = tomorrow - now;

        const h = Math.floor(diff / 1000 / 60 / 60);
        const m = Math.floor((diff / 1000 / 60) % 60);
        const s = Math.floor((diff / 1000) % 60);

        timer.innerHTML = `⏳ Nouveau code dans : ${h}h ${m}m ${s}s`;

    }

    updateCountdown();
    setInterval(updateCountdown, 1000);


    /* ===========================
       MENU LATÉRAL
    =========================== */

    const menuBtn = document.getElementById("menuBtn");
    const sideMenu = document.getElementById("sideMenu");

    if (menuBtn && sideMenu) {

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

    }


    /* ===========================
       BOUTONS CATÉGORIES
    =========================== */

    document.querySelectorAll(".btn").forEach((btn) => {

        btn.addEventListener("click", () => {
            alert("🚧 Cette catégorie sera bientôt connectée à la boutique.");
        });

    });


    /* ===========================
       VIDÉOS
    =========================== */

    document.querySelectorAll(".videoBtn").forEach((button) => {

        button.addEventListener("click", () => {
            alert("🎥 La vidéo de démonstration sera disponible ici.");
        });

    });


    /* ===========================
       APPARITION AU SCROLL
    =========================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(
        ".card, .about-card, .contact, .countdown"
    ).forEach((element) => {

        element.classList.add("fade");
        observer.observe(element);

    });


    /* ===========================
       FICHE PRODUIT
    =========================== */

    const productModal = document.getElementById("productModal");
    const closeProduct = document.getElementById("closeProduct");

    if (productModal && closeProduct) {

        document.querySelectorAll(".shopBtn").forEach((button) => {

            button.addEventListener("click", () => {
                productModal.style.display = "flex";
            });

        });

        closeProduct.addEventListener("click", () => {
            productModal.style.display = "none";
        });

    }

});


/* ===========================
   LOADER
=========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("loader-hidden");

        setTimeout(() => {
            loader.remove();
        }, 700);

    }, 2200);

});