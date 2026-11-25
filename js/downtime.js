const DOWNTIME = [
    {
        id: "busk",
        title: "Busking",
        detail: "This is an action that means your character spends their time dancing, singing, speaking, or otherwise performing for random passersby in order to gain some coin. This action requires the Entertainment skill from the Lore skill tree. After selecting the Busking downtime action, at check-in at the next event, you’ll roll a number of dice and receive that amount of coin for your work. ", 
        skill: "Requires the Entertainment Lore Skill",
    },
    {
        id: "craft",
        title: "Crafting",
        detail: "This is an action that represents your character working on various crafts, working, and building new items that you can make use of in the next game. This requires that you have at least 1 rank in a skill from the Crafting skill tree. At check-in at your next event, you’ll be able to deliver any materials that were used during the downtime and receive item cards for those items. This helps to avoid the extra time at the event that is necessarily spent crafting, and lets you focus on roleplay, mods, or resource gathering - whatever you’d like to do instead - while still benefiting from your Crafting skill ranks. ", 
        skill: "Requires a rank in at least 1 Crafting Skill",
    },
    {
        id: "delve",
        title: "Delving",
        detail: "This is an action that represents your character heading out to a point of interest and exploring. This requires that at least one person going to the same location has the Delve skill from the Cunning skill tree. When submitting this downtime action, you’ll be asked to give a point of interest currently available on the local map, the type of delve that you would like to do, and any companions going with you. At check-in at your next event, you’ll be able to roll a d20 dice and receive a result based on what you roll. This might lead to a success or a failure, but the chance of success increases by 1 for each person that joins you in the delve.",
        skill: "Requires the Delve Cunning Skill"
    },
    {
        id: "gather",
        title: "Gathering",
        detail: "This is an action that represents your character searching for plants or wood components in the land around where the player characters are located. This does not require a particular skill to select this downtime action, however you can get a higher quality item if you have the Botany or Timber skills from the Lore skill tree, you can get a larger amount of them if you have the Herbalism or Forestry skills from the Fieldcraft skill tree, and you can select a specific plant or wood to search for if you have a local guidebook item. ", 
        skill: "No Required Skill",
    },
    {
        id: "hunt",
        title: "Hunting",
        detail: "This is meant to represent your character spending their time tracking, searching for, and hunting down creatures in the lands around where the characters have gathered. This does not require any skills to use, however you can get a higher quality item if you have the Beasts skill from the Lore skill tree, more components if you have the Hunting or Slaughter skill from the Fieldcraft skill tree, or a specific creature component if you have a local guidebook item. ", 
        skill: "No Required Skill",
    },
    {
        id: "prospect",
        title: "Prospecting",
        detail: "This is an action that represents your character searching for mineral or metal components in the land around where the player characters are located. This does not require a particular skill to select this downtime action, however you can get a higher quality item if you have the Metallurgy or Cartography skills from the Lore skill tree, you can get a larger amount of them if you have the Mining or Quarrying skills from the Fieldcraft skill tree, and you can select a specific plant or wood to search for if you have a local guidebook item. ",
        skill: "No Required Skill",
    },
    {
        id: "research",
        title: "Researching",
        detail: "This action represents your character spending their time asking around, investigating, and pondering different lore or informational questions that they want to know more about. This does not require a specific skill to use, however if you have an applicable skill from the Lore skill tree, you increase your chance of learning new information, or can push forward specific research actions more quickly.", 
        skill: "No Required Skill",
    },
    {
        id: "scout",
        title: "Scouting",
        detail: "This action represents your character exploring the areas around the group on the hex map in order to learn general information about the creatures, components, and factions that might be found in the area. This action does not require a specific skill to use, however you can gain an additional piece of information if you have the Scout or the Track skill from the Cunning skill tree.", 
        skill: "No Required Skill",
    },
    {
        id: "trade",
        title: "Trading",
        detail: "This action represents your character spending their time hawking goods, making deals, and buying and selling items. This action requires the Economics skill in the Lore skill tree. The Commerce skill tree has several skills that play off of the Trading downtime action, so it is also good to take a look there if you really want to participate in merchant gameplay.", 
        skill: "Requires the Economics Lore Skill",
    },
    {
        id: "train",
        title: "Training",
        detail: "This action represents your character spending time and effort to practice combat, magic, or other skills in order to practice and increase your level with them. This action doesn’t have a particular skill required to use it, however unless you have another player train with you it costs both of your downtime actions to do. When you submit this downtime action, you’ll have the option to include a player’s name who is training with you. Keep in mind that the player that you are training with will also need to select the Training downtime action and include your name in order to only expend the one action.", 
        skill: "No Required Skill, but does take two Downtime Actions without someone else joining you",
    },
    {
        id: "travel",
        title: "Traveling",
        detail: "This action allows you to perform other downtime actions in hexes beyond where the characters are currently located. Your character is able to travel anywhere by land within 2 hexes of the one that the characters are currently located in. This action does not require a specific skill to use, and using it on its own does nothing for you. If you have the Sailing skill from the Lore skill tree, you can travel via water routes that are indicated on the map as well. You’ll be able to travel two line segments per Travel action you take along the water route.", 
        skill: "No Required Skill",
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