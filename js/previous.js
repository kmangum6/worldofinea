<<<<<<< HEAD
const CENTER = [ "#lastevent", "#event2", "#event3"];

const EVENTS = [
    {
        id: "lastevent",
        title: "The Tower of the Wizard",
        date: "June 12th - 14th, 2026", 
        teaser: "After their encounter with the Laughing Storm and their goons, our intrepid adventurers have returned to Captain Redstone with a skiff... but not the correct one. Laughing Storm and his bandit Tehrux have made off with some kind of weapon - dangerous and risky - and now it is up to them to seek him out and try to get it back. Join us once again in the Tehrux desert as our players attempt to make their way back inside and seek after the answer behind the Redstone door and beyond.", 
        link: "Downtime Form",
    },
    {
        id:"event2",
        title: "The Redstone Door",
        date: "May 30th, 2026", 
        teaser: "Karim, led by the spell cast at the end of the previous adventure, leads their party across the Hadus Imperial marshlands and towards the desert wastelands of the Tehrux. As you all reach the border of it, Karim continues to recruit, finding more Anathema to join your ranks as you go along. Finally, you reach the borders of the desert where the marshwater turns to plains, and then to endless sandy dunes. \n This is Terhux lands - the lands of mad kings and wandering bands. There are still some signs of others who have not yet lost their mind - Morosus or Hadus wanderers who brave the wastes for their own… purposes. ", 
    },
    {
        id:"event3",
        title: "The Line That Should Not Shift",
        date: "April 11th, 2026", 
        teaser: "After the chaotic events of the Shadow Lands, our adventurers find themselves finally returned to Inea after 5 years in the darkness. What will they find there? How have things changed and what is the same from when they left? Have Hadus and Deridia successfully avoided war? What has happened to the Tower of Qedjix and their quest to reach the top? Most importantly... why do they not remember how their time in the Shadow Lands ended and what is this item they feel compelled to carry?", 
    },
];

const Overview = () => `
    <section class="overview" id="overview">
        <div>
            <h2>Overview</h2>
            <p>Below you will find all of the previous events that have occured in Inea for the last year or so, giving you a rough idea of what happened during the event so that you have some concept of how the world may have changed. This is also where you'll be able to fill out your form for Downtime Actions, if you attended and you choose to use them.</p>
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
=======
const EVENTS = [
    {
        id: "lastevent",
        title: "Event Name",
        date: "Date of Event", 
        teaser: "Teasing the Event", 
        link: "Downtime Form",
    },
    {
        id:"event2",
        title: "Event Name",
        date: "Date of Event", 
        teaser: "Teasing the Event", 
    },
    {
        id:"event3",
        title: "Event Name",
        date: "Date of Event", 
        teaser: "Teasing the Event", 
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
        ${link ? `<a class="btn" href="${link}" target="_blank" rel="noreferrer">Submit Downtime!</a>` : ""}
    </article>`;

document.getElementById("app").innerHTML = `
${Overview()}
>>>>>>> origin/main
<div id="info" class="archive-grid">${EVENTS.map(EventCard).join("")}</div><br><br>`;