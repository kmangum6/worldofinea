const CENTER = [ "#balance", "#martyr", "#drowned", "#mother", "#phoenix", "#one", "#three","#stars","#twin"];
 
const FEATURES = [
    {
        id: "balance",
        title: "The Balance",
        text: "Summary",
        body: "Details",
        button: { label: "Full Culture Doc", href: "[GOOGLE LINK HERE]" },
        tone: "b",
        reverse: true,
    },
    {
        id: "martyr",
        title: "Children of the Martyr",
        text: "Summary",
        body: "Details",
        button: { label: "Full Culture Doc", href: "[GOOGLE LINK HERE]" },
        tone: "a",
    },
    {
        id: "drowned",
        title: "The Drowned Prophet",
        text: "Summary",
        body: "Details",
        button: { label: "Full Culture Doc", href: "[GOOGLE LINK HERE]" },
        tone: "b",
        reverse: true,
    },
    {
        id: "mother",
        title: "The Mother Tree",
        text: "Summary",
        body: "Details",
        button: { label: "Full Culture Doc", href: "[GOOGLE LINK HERE]" },
        tone: "a",
    },
    {
        id: "phoenix",
        title: "The Phoenix Cult",
        text: "Summary",
        body: "Details",
        button: { label: "Full Culture Doc", href: "[GOOGLE LINK HERE]" },
        tone: "b",
        reverse: true,
    },
    {
        id: "one",
        title: "The Sect of the One",
        text: "Summary",
        body: "Details",
        button: { label: "Full Culture Doc", href: "[GOOGLE LINK HERE]" },
        tone: "a",
    },
    {
        id: "three",
        title: "The Sect of the Three",
        text: "Summary",
        body: "Details",
        button: { label: "Full Culture Doc", href: "[GOOGLE LINK HERE]" },
        tone: "b",
        reverse: true,
    },
    {
        id: "stars",
        title: "Star Ancestor Worship",
        text: "Summary",
        body: "Details",
        button: { label: "Full Culture Doc", href: "[GOOGLE LINK HERE]" },
        tone: "a",
    },
    {
        id: "twin",
        title: "The Twin Pantheons",
        text: "Summary",
        body: "Details",
        button: { label: "Full Culture Doc", href: "[GOOGLE LINK HERE]" },
        tone: "b",
        reverse: true,
    },
];

const Overview = () => `
    <section class="overview" id="overview">
        <div>
            <h2>Religion Overview</h2>
            <p>PARDON OUR DUST! THIS PAGE IS UNDER CONSTRUCTION!</p>
            <p>Not to worry, it won't remain so for long. This page is empty for now as the religion information is still being fleshed out fully by the Story Team, due to some of the rules changes that are coming out in rulebook 2.0! These should become available as soon as the rulebook is also available, with Religion docs coming out shortly afterwards.</p>
            <p>To make sure that the site pieces are ready to go, this page has been left in place so that we can reference it as we make changes before deploying the full site with the new rulebook.</p>
            <div class="btn-cultures">
                <a class="btn" href="#balance">The Balance</a>
                <a class="btn" href="#martyr">Children of the Martyr</a>
                <a class="btn" href="#drowned">The Drowned Prophet</a>
                <a class="btn" href="#mother">The Mother Tree</a>
                <a class="btn" href="#phoenix">The Phoenix Cult</a>
                <a class="btn" href="#one">Sect of the One</a>
                <a class="btn" href="#three">Sect of the Three</a>
                <a class="btn" href="#stars">Star Ancestors</a>
                <a class="btn" href="#twin">Twin Pantheons</a>
            </div>
        </div>
    </section><br><br>`;
 
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