/* ==========================================================
   ADMIN PANEL
   PARTIE 4
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);

    /* ==========================================================
       DÉCONNEXION (INTERFACE)
    ========================================================== */

    const logoutBtn = $("#logoutBtn");

    if (logoutBtn) {

        logoutBtn.addEventListener("click", () => {

            localStorage.removeItem("admin_session");

            window.location.href = "login.html";

        });

    }

    /* ==========================================================
       SESSION LOCALE
    ========================================================== */

    if (!localStorage.getItem("admin_session")) {

        localStorage.setItem("admin_session", "active");

    }

    /* ==========================================================
       MENU LATÉRAL
    ========================================================== */

    const menuItems = $$(".sidebar li");

    menuItems.forEach((item) => {

        item.addEventListener("click", () => {

            menuItems.forEach((i) => i.classList.remove("active"));

            item.classList.add("active");

            showToast(`${item.textContent.trim()} sélectionné`);

        });

    });

    /* ==========================================================
       ACTIONS RAPIDES
    ========================================================== */

    const quickButtons = [
        "#addProduct",
        "#addVideo",
        "#addImage",
        "#saveChanges"
    ];

    quickButtons.forEach((selector) => {

        const button = $(selector);

        if (!button) return;

        button.addEventListener("click", () => {

            showToast("Fonction disponible prochainement.");

        });

    });

    /* ==========================================================
       TOAST
    ========================================================== */

    function showToast(message) {

        const oldToast = $("#toast");

        if (oldToast) oldToast.remove();

        const toast = document.createElement("div");

        toast.id = "toast";

        toast.textContent = message;

        Object.assign(toast.style, {
            position: "fixed",
            right: "20px",
            bottom: "20px",
            padding: "14px 18px",
            borderRadius: "12px",
            background: "#222",
            color: "#fff",
            boxShadow: "0 10px 25px rgba(0,0,0,.3)",
            zIndex: "9999",
            opacity: "0",
            transition: "opacity .25s ease"
        });

        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.style.opacity = "1";
        });

        setTimeout(() => {

            toast.style.opacity = "0";

            setTimeout(() => toast.remove(), 250);

        }, 2500);

    }

    /* ==========================================================
       SAUVEGARDE D'UNE PRÉFÉRENCE
    ========================================================== */

    const savedSection = localStorage.getItem("admin_last_section");

    if (savedSection) {

        menuItems.forEach((item) => {

            if (item.textContent.trim() === savedSection) {

                menuItems.forEach((i) => i.classList.remove("active"));

                item.classList.add("active");

            }

        });

    }

    menuItems.forEach((item) => {

        item.addEventListener("click", () => {

            localStorage.setItem(
                "admin_last_section",
                item.textContent.trim()
            );

        });

    });

    console.log("✅ Admin Panel initialisé");

});
