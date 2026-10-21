const DOWNTIME = [
    {
        id: "busk",
        title: "Busking",
        detail: "Details", 
        skill: "Required skill",
    },
    {
        id: "craft",
        title: "Crafting",
        detail: "Details", 
        skill: "Required skill",
    },
    {
        id: "gather",
        title: "Gathering",
        detail: "Details", 
        skill: "Required skill",
    },
    {
        id: "hunt",
        title: "Hunting",
        detail: "Details", 
        skill: "Required skill",
    },
    {
        id: "research",
        title: "Researching",
        detail: "Details", 
        skill: "Required skill",
    },
    {
        id: "scout",
        title: "Scouting",
        detail: "Details", 
        skill: "Required skill",
    },
    {
        id: "trade",
        title: "Trading",
        detail: "Details", 
        skill: "Required skill",
    },
    {
        id: "train",
        title: "Training",
        detail: "Details", 
        skill: "Required skill",
    },
    {
        id: "travel",
        title: "Traveling",
        detail: "Details", 
        skill: "Required skill",
    },
];

const Overview = () => `
    <section class="overview" id="overview">
        <div>
            <h2>Downtime Actions</h2>
            <p>What are you doing? What are you doing with that box, huh?</p>
        </div>
    </section>`;

const DowntimeCard = ({ id, title, detail, skill }) => `
    <article ${id ? `id="${id}"` : ""} class="versioncard">
        <h2>${title}</h2>
        <p>${detail}</p>
        <p class="lighter">${skill}</p>
    </article>`;

const Downtime = () => `
    <section class="quickstart">
        <h1>Need to submit your Downtime Actions?</h1>
        <a class="btn" href="previous.html">Submit Downtime</a>
    </section>`;

const Journey = () => `
    <section class="overview" id="journey">
        <div>
            <h2>Journeying</h2>
            <p>Whoa the players go places? SWEET!</p>
            <a class="btn" href="https://discord.gg/xUUk67Tx5m">Current Options</a>
        </div><br>
    </section>`;

document.getElementById("app").innerHTML = `
${Overview()}
<div id="info" class="archive-grid">${DOWNTIME.map(DowntimeCard).join("")}</div>
${Journey()}
${Downtime()}<br>`;