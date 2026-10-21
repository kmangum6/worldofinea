const CENTER = [ "#freetrade", "#heartbound", "#nightmkt", "#lantern", "#additional"];
 
const FEATURES = [
    {
        id: "freetrade",
        title: "The Free Traders",
        text: "Event Date",
        body: "Details",
        tone: "b",
        reverse: true,
    },
    {
        id: "heartbound",
        title: "Heartbound",
        text: "Cool tag",
        body: "Details",
        tone: "a",
    },
    {
        id: "nightmkt",
        title: "The Night Market",
        text: "Cool tag",
        body: "Details",
        tone: "b",
        reverse: true,
    },
    {
        id: "lantern",
        title: "The Silver Lantern",
        text: "Cool Tag",
        body: "Details",
        tone: "a",
    },
    {
        id: "additional",
        title: "Other Factions",
        text: "Cool tag",
        body: "Details",
        tone: "b",
        reverse: true,
    },
];

const Overview = () => `
    <section class="overview" id="overview">
        <div>
            <h2>What are Factions?</h2>
            <p>You find out who your friends are. Somebody's gonna drop everything...</p>
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