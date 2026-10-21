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