/* ==========================================================
   MARO KUSH 31 - SCRIPT 2.0
   Partie 1/6
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* ==========================================================
       RACCOURCIS
    ========================================================== */

    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);

    /* ==========================================================
       ÉLÉMENTS
    ========================================================== */

    const loader = $("#loader");

    const menuBtn = $("#menuBtn");
    const sideMenu = $("#sideMenu");

    const timer = $("#timer");

    const accessModal = $("#accessModal");
    const enterButton = $("#enterButton");

    /* ==========================================================
       LOADER
    ========================================================== */

    window.addEventListener("load", () => {

        if (!loader) return;

        setTimeout(() => {

            loader.classList.add("loader-hidden");

            setTimeout(() => {

                loader.remove();

            }, 700);

        }, 1400);

    });

    /* ==========================================================
       MENU LATÉRAL
    ========================================================== */

    if (menuBtn && sideMenu) {

        menuBtn.addEventListener("click", (e) => {

            e.stopPropagation();

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

    /* ==========================================================
       DÉFILEMENT FLUIDE
    ========================================================== */

    $$('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (e) => {

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

            if (sideMenu) {

                sideMenu.classList.remove("open");

            }

        });

    });

    /* ==========================================================
       OUVERTURE DE L'ÉCRAN D'ACCÈS
    ========================================================== */

    if (enterButton && accessModal) {

        enterButton.addEventListener("click", () => {

            accessModal.style.display = "flex";

        });

    }

    /* ==========================================================
       COMPTE À REBOURS
    ========================================================== */

    function updateCountdown() {

        if (!timer) return;

        const now = new Date();

        const tomorrow = new Date();

        tomorrow.setHours(24, 0, 0, 0);

        const diff = tomorrow - now;

        const hours = Math.floor(diff / 1000 / 60 / 60);

        const minutes = Math.floor(
            (diff / 1000 / 60) % 60
        );

        const seconds = Math.floor(
            (diff / 1000) % 60
        );

        timer.innerHTML =
            `⏳ Nouveau menu dans : <strong>${hours}h ${minutes}m ${seconds}s</strong>`;

    }

    updateCountdown();

    setInterval(updateCountdown, 1000);

    console.log("✅ Script 2.0 - Partie 1 chargée");

});
    /* ==========================================================
       ANIMATIONS AU SCROLL
    ========================================================== */

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

        ".card, .about-card, .countdown, .contact"

    ).forEach((element) => {

        element.classList.add("fade");

        observer.observe(element);

    });


    /* ==========================================================
       FENÊTRE PRODUIT
    ========================================================== */

    const productModal = $("#productModal");
    const closeProduct = $("#closeProduct");

    if (productModal && closeProduct) {

        document.querySelectorAll(".shopBtn").forEach((button) => {

            button.addEventListener("click", () => {

                productModal.classList.add("active");
                productModal.style.display = "flex";

            });

        });

        closeProduct.addEventListener("click", () => {

            productModal.classList.remove("active");
            productModal.style.display = "none";

        });

    }


    /* ==========================================================
       LECTEUR VIDÉO
    ========================================================== */

    const videoModal = $("#videoModal");
    const closeVideo = $("#closeVideo");
    const productVideo = $("#productVideo");

    if (videoModal && productVideo) {

        document.querySelectorAll(".videoBtn").forEach((button) => {

            button.addEventListener("click", () => {

                const video = button.dataset.video;

                if (video) {

                    productVideo.src = video;
                    productVideo.load();

                }

                videoModal.style.display = "flex";

            });

        });

    }

    if (closeVideo) {

        closeVideo.addEventListener("click", () => {

            productVideo.pause();
            productVideo.currentTime = 0;

            videoModal.style.display = "none";

        });

    }


    /* ==========================================================
       FERMETURE AU CLIC EXTÉRIEUR
    ========================================================== */

    window.addEventListener("click", (e) => {

        if (e.target === productModal) {

            productModal.style.display = "none";

        }

        if (e.target === videoModal) {

            productVideo.pause();
            productVideo.currentTime = 0;

            videoModal.style.display = "none";

        }

    });


    /* ==========================================================
       TOUCHE ÉCHAP
    ========================================================== */

    document.addEventListener("keydown", (e) => {

        if (e.key !== "Escape") return;

        if (productModal) {

            productModal.style.display = "none";

        }

        if (videoModal) {

            productVideo.pause();
            productVideo.currentTime = 0;

            videoModal.style.display = "none";

        }

        if (sideMenu) {

            sideMenu.classList.remove("open");

        }

    });
        /* ==========================================================
       BOUTON RETOUR EN HAUT
    ========================================================== */

    const backToTop = $("#backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }

    /* ==========================================================
       LIENS WHATSAPP / TELEGRAM
    ========================================================== */

    document.querySelectorAll(".whatsapp").forEach((btn) => {

        btn.addEventListener("click", () => {

            window.open(
                "https://wa.me/33756936228",
                "_blank"
            );

        });

    });

    document.querySelectorAll(".telegram").forEach((btn) => {

        btn.addEventListener("click", () => {

            window.open(
                "https://t.me/SAV_MK31",
                "_blank"
            );

        });

    });

    /* ==========================================================
       OPTIMISATION DES VIDÉOS
    ========================================================== */

    document.querySelectorAll("video").forEach((video) => {

        video.preload = "metadata";

        video.setAttribute("playsinline", "");
        video.setAttribute("controlsList", "nodownload");

    });

    /* ==========================================================
       ANIMATION DES CARTES
    ========================================================== */

    document.querySelectorAll(".card").forEach((card) => {

        card.addEventListener("mouseenter", () => {

            card.classList.add("card-hover");

        });

        card.addEventListener("mouseleave", () => {

            card.classList.remove("card-hover");

        });

    });

    /* ==========================================================
       MESSAGE DE BIENVENUE
    ========================================================== */

    console.log("🚀 Bienvenue sur MARO KUSH 31");
    const accessButton = document.getElementById("accessButton");
const accessCode = document.getElementById("accessCode");
const errorMessage = document.getElementById("errorMessage");
const accessModal = document.getElementById("accessModal");

accessButton.addEventListener("click", async () => {

    const response = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            code: accessCode.value
        })
    });

    const data = await response.json();

    if (data.success) {

        accessModal.style.display = "none";

    } else {

        errorMessage.textContent = "❌ Code incorrect";

    }

});
