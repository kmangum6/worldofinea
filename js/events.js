const CENTER = [ "#nextevent", "#Feb2027", "#Mar2027", "#Apr2027", "#May2027"];
 
const EVENTS = [
    {
        id: "nextevent",
        title: "UPCOMING!",
        date: "Winter 2026", 
        teaser: "Winter 2026 event schedule will be announced in December, but it's coming soon! Keep an eye on this page!!", 
        link: "https://forms.gle/PBakKKvm9K9VZLAD8",
    },
];

const Overview = () => `
    <section class="overview" id="overview">
        <div>
            <h2>Overview</h2>
            <p>This page is where you can find upcoming Inea events. As the event gets closer, you'll get to see this page updated with a teaser for the event, and you can also get a link here to be able to purchase tickets! \n Feel free to reach out if you do have any questions to worldofinea@gmail.com. NOTE: With the new 2027 season still in the works, some of these days may be in flux. Keep an eye on our Discord for the most current updates on what is going on. \n We hope to see you wandering the world soon!</p>
        </div>
    </section>`;
 
const EventCard = ({ id, title, date, teaser, link }) => `
    <article ${id ? `id="${id}"` : ""} class="versioncard">
        <h2>${title}</h2>
        <p class="versiondate">${date}</p>
        <p>${teaser}</p>
        ${link ? `<a class="btn" href="${link}" target="_blank" rel="noreferrer">Submit Downtime!</a>` : ""}
    </article>`;

document.getElementById("app").innerHTML = `
${Overview()}
<div id="info" class="archive-grid">${EVENTS.map(EventCard).join("")}</div><br><br>`;