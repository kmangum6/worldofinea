const CENTER = [ "#dayvsweekend", "#month", "#weekbefore", "#daybefore", "#dayof", "#gear", "#firstevent" ];
 
const FEATURES = [
    {
        id: "dayvsweekend",
        title: "Day Games vs Weekenders",
        text: "Day Games, Half-Day Games, and Weekenders all have different requirements depending on which you're going to. What you'll need for them is going to vary from piece to piece.",
        body: "Details",
        tone: "b",
        reverse: true,
    },
    {
        id: "month",
        title: "What to Check the Month Before",
        text: "Cool tag",
        body: "Details",
        tone: "a",
    },
    {
        id: "weekbefore",
        title: "What to Check the Week Before",
        text: "Cool tag",
        body: "Details",
        tone: "b",
        reverse: true,
    },
    {
        id: "daybefore",
        title: "What to Check the Day Before",
        text: "Cool Tag",
        body: "Details",
        tone: "a",
    },
    {
        id: "dayof",
        title: "What to Check the Day Of",
        text: "Cool tag",
        body: "Details",
        tone: "b",
        reverse: true,
    },
    {
        id: "gear",
        title: "Weapons, Armor, and Costume",
        text: "Cool Tag",
        body: "Details",
        tone: "a",
    },
];

const Overview = () => `
    <section class="overview" id="overview">
        <div>
            <h2>AUGH! My event is coming up! What am I gonna do?</h2>
            <p>Don't worry random citizen! We're here to help!</p>
            <p>This page is all about making sure that you know what you need to have, what you should probably bring, and what could be cool to bring to each event that you attend. This can sometimes vary from game to game, so we generally recommend that each type of event you double check one of these lists. After all, you aren't going to want to bring a sleeping back to a weekender event, but you'll <b>definitely</b> want one if you're at a weekender!</p>
            <p>Granted, this isn't all encompassing, and you're always welcome to bring other things along as needed. If you ever have any questions about whether you should or shouldn't bring an item - you're welcome to ask the question on our Discord.</p>
        </div>
    </section>`;
 
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
 
const FirstEvent = () => `
    <section class="overview" id="overview">
        <div>
            <h2>What's Different About Your First Event?</h2>
            <p>Hey I heard you were a wild one. Oo-ooo-oo-oo.</p>
        </div>
    </section>`;

document.getElementById("app").innerHTML = `
${Overview()}
<div id="info">${FEATURES.map(Feature).join("")}</div>
${FirstEvent()}`;
 
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