const CENTER = ["#about", "#rules", "#build"];
 
const FEATURES = [
    {
        id: "about",
        title: "About the Game",
        text: "The World of Inea is an 18+ fantasy LARP experience in Salt Lake City and the surrounding area.",
        body: "Taking place in a unique world called Inea, our story follows a group of adventurers known as \"Anathema\", people with the innate ability to control chaotic magical forces that plague everyone there. Some revere anathema, some revile them, but in some way, shape, or form... everyone fears them.<br><br>This LARP is a classic hero's tale adventure with intrigue, lore, exploration, and general entertainment that you are able to find and create as all the players tell their stories together. Create your characters from any of the nine cultures and fifteen nations to choose from and customize with the help of our talented Story Team!",
        tone: "a",
    },
    {
        id: "rules",
        title: "Rules",
        text: "The rules of the game are built on two primary philosophies: that mechanics should help you play any character you'd like to and that the rules shouldn't make combat a slog.",
        body: "With that in mind, our Rules Team has worked hard to try to make sure that the game is fairly easy to manage, even for the newest of LARPers. This is an open ruleset - meaning that you aren't relegated to classes and can freely choose to use your Skill Points to give yourself any skill, with the focus more on building into a skill tree instead of a specific archetype.<br><br>To read the rulebook in its entirety - click below!",
        button: {label: "Rulebook", href: "rulebook.html"},
        reverse: true,
        tone: "b",
    },
    {
        id: "build",
        title: "Character Builder",
        text: "Use the character builder to create your character and submit it to the Story and Logistics Teams before your first event!",
        body: "You can use the link to the webpage below to go through the rules and create your character - allowing it to figure out the exact math on things like stats and skill points from there. Login before each game that you participate in to allocate additional Skill Points that you earn throughout your time adventuring.",
        button: {label: "Create a Character!", href: "builder.html"},
        tone: "a",
    },
];
 
const Hero = () => `
    <header class="hero" id="home">
        <div>
            <h1>The World of Inea</h1>
            <p>An 18+ Fantasy LARP Experience</p>
            <div class="btn-main">
                <a class="btn" href="quickstart.html">Quickstart Guide</a>
                <a class="btn" href="rulebook.html">Full Rulebook</a>
            </div>
        </div>
    </header>`;
 
const Feature = ({ id, title, text, body, button, reverse, tone }) => `
    <section ${id ? `id="${id}"` : ""} class="${reverse ? "band" : ""}">
        <div class="row ${reverse ? "alt" : ""}">
            <div>
                <h2>${title}</h2>
                <h3>${text}</h3>
                <p>${body}</p>
                ${button ? `<a class="btn" href="${button.href}">${button.label}</a>` : ""}
            </div>
            <div class="img ${tone}" role="img" aria-label="Decorative placeholder"></div>
        </div>
    </section>`;
 
const QuickStart = () => `
    <section class="quickstart">
        <h1>Ready to jump in, but not sure where to start? Take a look at our Quick Start Guide!</h1>
        <a class="btn" href="quickstart.html">Quickstart Guide</a>
    </section>`;
 
document.getElementById("app").innerHTML = `
${Hero()}
<div id="info">${FEATURES.map(Feature).join("")}</div>
${QuickStart()}`;
 
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