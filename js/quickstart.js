const CENTER = [ "#anathema", "#archetypes", "#buider", "#signup", "#backstory", "#event1", "#nextup"];
 
const FEATURES = [
    {
        id: "anathema",
        title: "What is an Anathema?",
        text: "People keep saying that my character is an Anathema... but I have no idea what that means?",
        body: "&quot;Anathema&quot; are a special feature of this world. For the most part in Inea, magic is a chaotic thing for people. It gets in the way, causes problems out of the blue, and is generally avoided as much as possible. For Anathema, however, magic is a part of their very soul. They are the only ones who possess the ability to control it - allowing them much greater power and an inherent strength that so-called normal people lack.</p><p>However, this also comes at the price of safety. While Anathema are particularly strong, they are also in particular danger. Their ability to control magic seems to cause monsters to appear wherever they are located, getting stronger the longer that they remain in one place. That is why, no matter what culture they belong to, Anathema are almsot always on the move.",
        tone: "b",
        reverse: true,
    },
    {
        id: "signup",
        title: "Signing Up for an Event",
        text: "I really want to participate, but I'm not entirely sure where to put my information? What do I do?",
        body: "First of all, you'll want to make sure that you read through the rulebook on the Rulebook page, or at the very least cover some of the important information for it. Building your character is going to be your first step, so once you know the kind of character you want to build, you can submit it by clicking on the &quot;Submit Your Character&quot; at the top of the page. Once that's done, you'll get an email from us that gives you a character sheet, and you're good to get signed up for the event.</p><p>There isn't any sort of formal registration that you need to do, though there is typically a form on the Discord that the Staff will put out to make sure they know who is showing up, but you will need to purchase a ticket. You can find the link to do that on the Tickets page, under Events. Once that's all done, you're ready to show up at the location on the day of the game!",
        button: {label: "Buy A Ticket", href: "tickets.html"},
        tone: "a",
    },
    {
        id: "backstory",
        title: "Figuring Out Your Backstory",
        text: "I know my character's build, and I've got that submitted... but how do I know my character's story? I'm not sure I've really got them totally figured out.",
        body: "Sometimes you know who your character is right off the bat... and sometimes you need to play them for a bit to figure out what's going on. Not to worry - we've got both types and more already a part of our LARP, so we've made contingencies! If you have your backstory ready to go, you can submit it on your Character Submission form at the bottom. If you don't have it ready, that's also okay. Simply submit the character backstory in the form once you're ready (as long as you use the same email, you can edit your original form) and we'll be able to take it from there. If you don't really like creating character backstories, that's okay too. You can play without one as you'd like. Just keep in mind that if you haven't submitted anything, the Story Team doesn't have anything to go off of to add aspects of your backstory to the main plotlines. If that's alright with you, then that's alright with us too.",
        tone: "b",
        reverse: true,
    },
    {
        id: "event1",
        title: "Your First Event",
        text: "Alright! My character is submitted, I know what I'm doing with my build, I've purchased my ticket, and I've sent in (or I don't care to send in yet) my backstory! But... what do I need to have ready?",
        body: "Congrats and welcome to the party! We're so glad you'll be joining us!</p><p>A lot of the stuff that you'll need at your first game will be provided for you at the start of the game by the Logistics team. That will be things like your character sheet, starting items, starting gold, etc. We highly recommend arriving early to game to help speed up this process, as it can take longer for a new player to get started than an older one.</p><p>As for what you need to bring in particular, there are few primary things: weapons, costume, and some kind of ID. Weapons and costume are pretty self explanatory - you need to be able to represent your character! Weapons will need to be LARP safe (see the Weapon Spec rules in the Rulebook for details on what makes them safe!) and your costume should match whatever culture you've chosen for your character. ID is needed because we're an 18+ LARP. While we sometimes play in public parks (so we have to be careful about how 18+ we get, there will be mature themes, situations, etc., so we need to verify that everyone is allowed to be here. Don't worry - it's a quick ID check, not information we'll keep track of other than to check it once.</p><p>Keep in mind that if your first game is a Weekender game, you'll also want to bring general camping supplies - generally a tent and a sleeping bag. Feel free to also bring other memorabilia to make your tent feel in-character too, since that can help to increase the immersion of the game. There will generally be some kind of meal plan for events you attend as well, so feel free to check the Discord or make sure you bring some food to tide you over.",
        tone: "a",
    },
    {
        id: "nextup",
        title: "Where Do I Go From Here?",
        text: "I've been to my first event and it was great! Now what do I do?",
        body: "Wonderful! We're glad you liked it! For starters, you'll want to make sure that you submit a review for the game. This lets us know what we did well, what we did poorly, and what things weren't as impactful as we would like. You'll also want to send in your Downtime Actions before the next game so you can get the benefits of them at your next event.</p><p>From there, you've also gotten some more Build! That means you can get additional skills for your character. After your first game (if you just played it) you'll receive 3 Build that you can add to your character. The character sheet provided by us to your email will also be updated within the next week or so, so if you aren't sure how much build you have now, keep an eye on it there. Once you're ready, go ahead and purchase a ticket and get your character resubmitted for the next game!",
        tone: "b",
        reverse: true,
    },

];

const Overview = () => `
    <section class="overview" id="overview">
        <div>
            <h2>Where Do I Begin?</h2>
            <p>Sometimes getting started in a LARP is one of the hardest parts of attending. After all, even if you've been to plenty of other LARPs things can seem overwhelming and exhausting when you're first looking at all the information.</p>
            <p>That is where this page comes in. Our Quickstart Guide is meant to help you get going with as little information as you can - letting you engage more fully in the LARP one piece at a time. Everything is easier when you can bite it off in chunks, right?</p>
            <p>The sections below will go over a lot of the simpler information. Go step by step down this list and it will walk you through the basics of who your character is, what you need to know to play the game, and how to get signed up as well as what to make sure you have for your first event. As always, if you do have any questions that aren't answered here, you're also welcome to send us an email at worldofinea@gmail.com.</p>
            <div class="btn-quick">
                <a class="btn" href="#anathema">What Are Anathema?</a>
                <a class="btn" href="#archetypes">Character Archetypes</a>
                <a class="btn" href="#builder">Character Builder</a>
                <a class="btn" href="#signup">Signing Up</a>
                <a class="btn" href="#backstory">Backstories</a>
                <a class="btn" href="#event1">My First Event</a>
                <a class="btn" href="#nextup">What Now?</a>
            </div>
        </div>
    </section><br>`;
 
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