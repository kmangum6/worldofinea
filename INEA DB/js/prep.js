const CENTER = [ "#dayvsweekend", "#month", "#weekbefore", "#daybefore", "#dayof", "#gear", "#firstevent" ];
 
const FEATURES = [
    {
        id: "dayvsweekend",
        title: "Day Games vs Weekenders",
        text: "Event Date",
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
            <h2>AUGH! My event is coming up!</h2>
            <p>Hey I heard you were a wild one. Oo-ooo-oo-oo.</p>
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