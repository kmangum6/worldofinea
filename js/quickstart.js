const CENTER = [ "#anathema", "#archetypes", "#buider", "#signup", "#backstory", "#event1", "#nextup"];
 
const FEATURES = [
    {
        id: "anathama",
        title: "What is an Anathema?",
        text: "Cool Tag",
        body: "Details",
        tone: "b",
        reverse: true,
    },
    {
        id: "archetypes",
        title: "Character Archetypes",
        text: "Cool tag",
        body: "Details",
        tone: "a",
    },
    {
        id: "builder",
        title: "The Character Builder",
        text: "Cool tag",
        body: "Details",
        button: {label: "Create a Character!", href: "builder.html"},
        tone: "b",
        reverse: true,
    },
    {
        id: "signup",
        title: "Signing Up",
        text: "Cool Tag",
        body: "Details",
        button: {label: "Buy A Ticket", href: "tickets.html"},
        tone: "a",
    },
    {
        id: "backstory",
        title: "Figuring Out Your Backstory",
        text: "Cool tag",
        body: "Details",
        tone: "b",
        reverse: true,
    },
    {
        id: "event1",
        title: "Your First Event",
        text: "Cool Tag",
        body: "Details",
        tone: "a",
    },
    {
        id: "nextup",
        title: "Where Do I Go From Here?",
        text: "Cool tag",
        body: "Details",
        tone: "b",
        reverse: true,
    },

];

const Overview = () => `
    <section class="overview" id="overview">
        <div>
            <h2>Where Do I Begin?</h2>
            <p>AAAAUGH! TOO MANY WORDS! NO WANT READ LOTS!</p>
            <div class="btn-quick">
                <a class="btn" href="#anathema">What Are Anathema?</a>
                <a class="btn" href="#archetypes">Character Archetypes</a>
                <a class="btn" href="#builder">Character Builder</a>
                <a class="btn" href="#signup">Signing Up</a>
                <a class="btn" href="#backstory">Backstories</a>
                <a class="btn" href="#event1">My First Event</a>
                <a class="btn" href="#nextup">What Now?</a>
            </div>
        </div>
    </section><br>`;
 
const Feature = ({ id, title, text, body, button, reverse, tone }) => `
    <section ${id ? `id="${id}"` : ""} class="${reverse ? "band" : ""}">
        <div class="row ${reverse ? "alt" : ""}">
            <div>
                <h2>${title}</h2>
                <h3>${text}</h3>
                <p>${body}</p>
                ${button ? `<a class="btn" href="${button.href}">${button.label}</a>` : ''}
            </div>
            <div class="img ${tone}" role="img" aria-label="Decorative placeholder"></div>
        </div>
    </section>`;
 
document.getElementById("app").innerHTML = `
${Overview()}
<div id="info">${FEATURES.map(Feature).join("")}</div>`;
 
document.querySelectorAll(`a[href^="#"]`).forEach((a) => {
    a.addEventListener("click", (e) => {
        const href = a.getAttribute("href");
        if (!CENTER.includes(href)) return;
        const el = document.querySelector(href);
        if (!el) return;
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "center" });
    });
});