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
            <p>Once the event is over and you’ve headed home, we know you’re going to be all abuzz with excitement. You’ll want to start thinking about what your character is doing during the downtime between games. Depending on the announcements at Closing of the event, there will be one or two choices you’ll want to make.</p>
            <p>Announcement or no announcement, all players will receive <b>2 Downtime Actions</b> as part of attending the previous event. Most of these Downtime Actions are static and will not change from event to event though what you can receive from them can change depending on several factors. Once your ticket and attendance has been marked down, you’ll be able to come to this site, go to the Previous Events page (or click the button below) and submit your Downtime Action choices. </p>
            <p>A lot of Downtime Actions will reference “the hex that the characters are located in” or “adjacent hexes”. This refers to the Hex Map, which you can find at the Hex Map page under "World". Effectively: the Hex Map is a version of Inea’s world map that includes hexes so you can see where the characters are located in the world at any one time.</p>
            <p>For more information on moving the player group around the map, see Journeying below!</p>
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
            <p>When you go to a LARP, often they are connected to the location that the players are located in. This is often a town or nation specifically. However, part of the premise of Inea's world lore is that the players are all &quot;Anathema&quot; and so they are expected to constantly be moving around the map to prevent themselves from running into issues. </p>
            <p>To replicate this fact, at intervals of the story, the Story Team will put a poll in with the Downtime Actions to allow players to indicate where they would like to go. This poll doesn't decide exactly where characters go - characters can break off from the whole and go in other directions as they see fit - but it does decide where the next episode of the LARP will be taking place. This gives players an amount of agency to follow a specific storyline, interact with a specific element of the world, or figure out new solutions to things that otherwise might be set in stone.</p>
            <p>Ultimately, this is meant to preserve as much of the immersion as we can, while also promoting a feeling that you are, in some part, in control of the story that you want to tell and not at the mercy of the Story Team. While the team will often offer suggestions through story elements, you can petition the other players and convince them to go another route. Keep in mind, however, that this doesn't guarantee your success. In fact, while you may not directly follow the story - the story can also continue without you. There may be consequences to avoiding an urgent situation.</p>
            <a class="btn" href="https://discord.gg/xUUk67Tx5m">Current Options</a>
        </div><br>
    </section>`;

document.getElementById("app").innerHTML = `
${Overview()}
<div id="info" class="archive-grid">${DOWNTIME.map(DowntimeCard).join("")}</div>
${Journey()}
${Downtime()}<br>`;