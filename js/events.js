const CENTER = [ "#nextevent", "#Feb2027", "#Mar2027", "#Apr2027", "#May2027"];
 
const FEATURES = [
    {
        id: "nextevent",
        title: "COMING SOON!",
        text: "Winter 2027 Season",
        body: "Our Winter season has not yet started, and we're currently working to solidify dates for the event. Once the rulebook gets fully completed (2.0 coming soon) we'll be able to get our schedule sent out. This should be released in December of 2026.",
        tone: "b",
        reverse: true,
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