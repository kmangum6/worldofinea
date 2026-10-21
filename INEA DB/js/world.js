const CENTER = [ "#nextevent", "#event3", "#event2", "#event1"];
 
const FEATURES = [
    {
        id: "nextevent",
        title: "Event Title",
        text: "Event Date",
        body: "Details",
        button: { label: "Buy a Ticket!", href: "/tickets.html" },
        tone: "b",
        reverse: true,
    },
    {
        id: "event3",
        title: "Event Title",
        text: "Event Date",
        body: "Details",
        tone: "a",
    },
    {
        id: "event2",
        title: "Event Title",
        text: "Event Date",
        body: "Details",
        tone: "b",
        reverse: true,
    },
    {
        id: "event1",
        title: "Event Title",
        text: "Event Date",
        body: "Details",
        tone: "a",
    },
];

const Overview = () => `
    <section class="overview" id="overview">
        <div>
            <h2>Overview</h2>
            <p>What the hell are the Ides of March?</p>
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