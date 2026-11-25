const CENTER = [ "#anathema", "#archetypes", "#buider", "#signup", "#backstory", "#event1", "#nextup"];
 
const FEATURES = [
    {
        id: "anathema",
        title: "What is an Anathema?",
        text: "People keep saying that my character is an Anathema... but I have no idea what that means?",
        body: "&quot;Anathema&quot; are a special feature of this world. For the most part in Inea, magic is a chaotic thing for people. It gets in the way, causes problems out of the blue, and is generally avoided as much as possible. For Anathema, however, magic is a part of their very soul. They are the only ones who possess the ability to control it - allowing them much greater power and an inherent strength that so-called normal people lack.</p><p>However, this also comes at the price of safety. While Anathema are particularly strong, they are also in particular danger. Their ability to control magic seems to cause monsters to appear wherever they are located, getting stronger the longer that they remain in one place. That is why, no matter what culture they belong to, Anathema are almsot always on the move.",
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
            <p>Sometimes getting started in a LARP is one of the hardest parts of attending. After all, even if you've been to plenty of other LARPs things can seem overwhelming and exhausting when you're first looking at all the information.</p>
            <p>That is where this page comes in. Our Quickstart Guide is meant to help you get going with as little information as you can - letting you engage more fully in the LARP one piece at a time. Everything is easier when you can bite it off in chunks, right?</p>
            <p>The sections below will go over a lot of the simpler information. Go step by step down this list and it will walk you through the basics of who your character is, what you need to know to play the game, and how to get signed up as well as what to make sure you have for your first event. As always, if you do have any questions that aren't answered here, you're also welcome to send us an email at worldofinea@gmail.com.</p>
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