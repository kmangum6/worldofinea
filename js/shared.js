const LINKS = [
    {
        label: "World",
        children: [
            { label: "Current Events", href: "world.html" },
            { label: "Cultures", href: "cultures.html" },
            { label: "Nations", href: "nations.html" },
            { label: "Religions", href: "religions.html" },
            { label: "Factions", href: "factions.html" },
        ],
    },
    {
        label: "Rules",
        children: [
            { label: "Quickstart Guide", href: "quickstart.html" },
            { label: "Full Rulebook", href: "rulebook.html" },
            { label: "Archived Rules", href: "archive.html" },
        ],
    },
    { 
        label: "Events",
        children: [
            { label: "Next Event Dates", href: "events.html" },
            { label: "Previous Event Dates", href: "previous.html" },
            { label: "Pre-Game Prep", href: "prep.html" },
            { label: "Between Games", href: "downtime.html" },
        ],
    }, 
    { label: "Character Builder", href: "builder.html" },
    { label: "Contact", href: "contact.html" },
];
 
const navLinks = () =>
    LINKS.map((l) =>
        l.children
            ? `<div class="dropdown">
                   <button class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">${l.label} ▾</button>
                   <div class="dropdown-menu">
                       ${l.children.map((c) => `<a href="${c.href}">${c.label}</a>`).join("")}
                   </div>
               </div>`
            : `<a href="${l.href}">${l.label}</a>`
    ).join("");
 
const Navbar = () => `
    <nav class="navbar" aria-label="Main">
        <a class="home" href="index.html">Home</a>
        <div class="links">${navLinks()}</div>
        <button class="burger" aria-expanded="false" aria-label="Toggle menu">☰</button>
        <div class="drawer" style="display:none">${navLinks()}</div>
    </nav>`;
 
const Footer = () => `
    <footer class="footer">
        <p class="footer-links">
            <a href="mailto:worldofinea@gmail.com">Email us with questions!</a><br />
            <a href="#">Back to Top</a>
        </p>
    </footer>`;
 
function closeDropdowns() {
    document.querySelectorAll(".dropdown.open").forEach((dd) => {
        dd.classList.remove("open");
        dd.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
    });
}
 
function initMenu() {
    // Dropdowns: click a toggle to open it, click elsewhere (or press Escape) to close
    document.querySelectorAll(".dropdown").forEach((dd) => {
        const toggle = dd.querySelector(".dropdown-toggle");
        toggle.addEventListener("click", (e) => {
            e.stopPropagation();
            const willOpen = !dd.classList.contains("open");
            closeDropdowns();
            dd.classList.toggle("open", willOpen);
            toggle.setAttribute("aria-expanded", String(willOpen));
        });
    });
    document.addEventListener("click", closeDropdowns);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeDropdowns();
    });
 
    // Burger menu
    const burger = document.querySelector(".burger");
    const drawer = document.querySelector(".drawer");
 
    function setMenu(open) {
        drawer.style.display = open ? "" : "none";
        burger.setAttribute("aria-expanded", String(open));
    }
 
    burger.addEventListener("click", () =>
        setMenu(burger.getAttribute("aria-expanded") !== "true")
    );
    drawer.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => setMenu(false))
    );
}
 
const navEl = document.getElementById("nav");
if (navEl) {
    navEl.innerHTML = Navbar();
    initMenu();
}
 
const footerEl = document.getElementById("footer");
if (footerEl) {
    footerEl.innerHTML = Footer();
}