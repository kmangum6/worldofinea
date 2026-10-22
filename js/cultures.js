const CENTER = [ "#amorone", "#dakrian", "#eisak", "#jicos", "#morosus", "#qicca", "#ruoatath","#souza","#tehrux"];
 
const FEATURES = [
    {
        id: "amorone",
        title: "Amorone",
        text: "Cool Tag",
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
            <p>Culture, culture, what is it you say?</p>
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