const CENTER = [ "#recent", "#event3", "#event2", "#event1"];
 
const FEATURES = [
    {
        id: "nextevent",
        title: "HADUS AND DERIDIA AT WAR!",
        text: "January 23th, 2027",
        body: "Welcome back to a new season of the World of Inea - Winter 2027! This space will eventually be filled with a teaser about the upcoming event, and you'll be able to register for the event soon!",
        button: { label: "Buy a Ticket!", href: "/tickets.html" },
        tone: "b",
        reverse: true,
    },
    {
        id: "event3",
        title: "February Day Game",
        text: "February 27, 2027",
        body: "This information will be updated as a teaser becomes available and event details are finalized.",
        tone: "a",
    },
    {
        id: "event2",
        title: "The Redstone Door",
        text: "May 30th, 2026",
        body: "This information will be updated as a teaser becomes available and event details are finalized.",
        reverse: true,
    },
    {
        id: "event1",
        title: "The Line That Should Not Shift",
        text: "April 11th, 2026",
        body: "This information will be updated as a teaser becomes available and event details are finalized.",
        tone: "a",
    },
];

const Overview = () => `
    <section class="overview" id="overview">
        <div>
            <h2>Overview</h2>
            <p>Want to know a bit more about what is going on in the World of Inea? Part of this game is focused around the idea that the world is constantly changing to match the actions that the PCs are taking. To represent that, this page will regularly see updates about what has happened - generally around things that the player characters did (or didn't) do.</p>
            <p>Keep in mind that this information isn't locked behind any lore skill or any special in-game interaction. All of these things are common (or generally common) knowledge. No need to worry about metagaming this info.</p>
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