const CENTER = [ "#amorone", "#dakrian", "#eisak", "#jicos", "#morosus", "#qicca", "#ruoatath","#souza","#tehrux"];
 
const FEATURES = [
    {
        id: "amorone",
        title: "Amorone",
        text: "The Rats of the Sea",
        body: "Details",
        button: { label: "Full Culture Doc", href: "[GOOGLE LINK HERE]" },
        tone: "b",
        reverse: true,
    },
    {
        id: "dakrian",
        title: "Dakrian",
        text: "Cool tag",
        body: "Details",
        button: { label: "Full Culture Doc", href: "[GOOGLE LINK HERE]" },
        tone: "a",
    },
    {
        id: "eisak",
        title: "Eisak",
        text: "Cool Tag",
        body: "Details",
        button: { label: "Full Culture Doc", href: "[GOOGLE LINK HERE]" },
        tone: "b",
        reverse: true,
    },
    {
        id: "jicos",
        title: "Jicos",
        text: "Cool tag",
        body: "Details",
        button: { label: "Full Culture Doc", href: "[GOOGLE LINK HERE]" },
        tone: "a",
    },
    {
        id: "morosus",
        title: "Morosus",
        text: "Cool Tag",
        body: "Details",
        button: { label: "Full Culture Doc", href: "[GOOGLE LINK HERE]" },
        tone: "b",
        reverse: true,
    },
    {
        id: "qicca",
        title: "Qicca",
        text: "Cool tag",
        body: "Details",
        button: { label: "Full Culture Doc", href: "[GOOGLE LINK HERE]" },
        tone: "a",
    },
    {
        id: "ruoatath",
        title: "Ruoatath",
        text: "Cool Tag",
        body: "Details",
        button: { label: "Full Culture Doc", href: "[GOOGLE LINK HERE]" },
        tone: "b",
        reverse: true,
    },
    {
        id: "souza",
        title: "Souza",
        text: "Cool tag",
        body: "Details",
        button: { label: "Full Culture Doc", href: "[GOOGLE LINK HERE]" },
        tone: "a",
    },
    {
        id: "tehrux",
        title: "Tehrux",
        text: "Cool tag",
        body: "Details",
        button: { label: "Full Culture Doc", href: "[GOOGLE LINK HERE]" },
        tone: "b",
        reverse: true,
    },
];

const Overview = () => `
    <section class="overview" id="overview">
        <div>
            <h2>Cultural Overview</h2>
            <p>In many RPG-style games and LARPs that you may have played, you'll often run into character species or "races' that identify what a character is and where they come from. In Inea, everyone is human (or mostly human) and so instead we use the character's culture to represent that. There are nine character cultures that you can choose from - each of them with their own unique history, style, and way of life. These cultures span across multiple of the fifteen nations you can find (see the Nations section for more detaisl on those).</p>
            <p>Your character's culture is more than just costume and mannerisms, however, and the world that a character was raised in can make a large difference in the abilities they have learned from the generations before them. Each culture has three mechanics that a character who comes from them can choose from which will fundamentally change some aspect of the game for that character and allow you to interact with the mechanics in a new and unique way from others - even others of the same culture. When creating a character, this can often give you a solid idea of a direction that you can take the character in - or you can always break that standard in order to take your character to even more unique heights.</p>
            <p>While these cultures share many characteristics of common costumes that you can find in a local costume shop, this is more for ease of being able to find something to represent that culture with rather than a signifier of exacty what that culture is about. It's important that you make sure to read through the information provided for your culture to ensure that you understand how they might be similar, or different, to the cultures that their costumes come from. You are also welcome, and heavily encouraged, to use the characteristics of the costumes we describe in order to create something new and more unique for yourself.</p>
            <p>Keep in mind that if your character comes from multiple cultures, you can only select one aspect of one of the cultures to apply to your character.</p> 
            <div class="btn-cultures">
                <a class="btn" href="#amorone">Amorone</a>
                <a class="btn" href="#dakrian">Dakrian</a>
                <a class="btn" href="#eisak">Eisak</a>
                <a class="btn" href="#jicos">Jicos</a>
                <a class="btn" href="#morosus">Morosus</a>
                <a class="btn" href="#qicca">Qicca</a>
                <a class="btn" href="#ruoatath">Ruoatath</a>
                <a class="btn" href="#souza">Souza</a>
                <a class="btn" href="#tehrux">Tehrux</a>
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