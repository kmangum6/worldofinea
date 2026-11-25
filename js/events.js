<<<<<<< HEAD
const CENTER = [ "#nextevent", "#event3", "#event2", "#event1"];
 
const FEATURES = [
    {
        id: "nextevent",
        title: "UPCOMING! - January Day Game",
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
            <p>This page is where you can find upcoming Inea events. As the event gets closer, you'll get to see this page updated with a teaser for the event, and you can also get a link here to be able to purchase tickets! \n Feel free to reach out if you do have any questions to worldofinea@gmail.com. NOTE: With the new 2027 season still in the works, some of these days may be in flux. Keep an eye on our Discord for the most current updates on what is going on. \n We hope to see you wandering the world soon!</p>
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
=======
const EVENTS = [
    {
        id: "event1",
        title: "Event Name",
        date: "Date of Version Release", 
        teaser: "Teasing the Event", 
        link: "Ticket Link",
    },
    {
        id:"event2",
        title: "Event Name",
        date: "Date of Version Release", 
        teaser: "Teasing the Event", 
        link: "Ticket Link",
    },
    {
        id:"event3",
        title: "Event Name",
        date: "Date of Version Release", 
        teaser: "Teasing the Event", 
        link: "Ticket Link",
    },
];

const Overview = () => `
    <section class="overview" id="overview">
        <div>
            <h2>Attending an Event</h2>
            <p>One of us. One of us. One of us.</p>
        </div>
    </section>`;

const EventCard = ({ id, title, date, teaser, link }) => `
    <article ${id ? `id="${id}"` : ""} class="versioncard">
        <h2>${title}</h2>
        <p class="versiondate">${date}</p>
        <p>${teaser}</p>
        <a class="btn" href="${link}" target="_blank" rel="noreferrer">Buy a Ticket!</a>
    </article>`;

document.getElementById("app").innerHTML = `
${Overview()}
<div id="info" class="archive-grid">${EVENTS.map(EventCard).join("")}</div><br><br>`;
>>>>>>> origin/main
