const CENTER = [ "#aleriassi", "#azaldin", "#ciarza", "#deridia", "#drezhe", "#hadus", "#homeland", "#kaeralle", "#lasil", "#maresh", "#phelhar", "#saarden", "#desertedwastes", "#wyld", "#zathea"];
 
const FEATURES = [
    {
        id: "aleriassi",
        title: "The Scholarship of Aleriassi",
        text: "Cool Tag",
        body: "Details",
        button: { label: "Full Nation Doc", href: "[GOOGLE LINK HERE]" },
        tone: "b",
        reverse: true,
    },
    {
        id: "azaldin",
        title: "The Azaldin Empire",
        text: "Cool tag",
        body: "Details",
        button: { label: "Full Nation Doc", href: "[GOOGLE LINK HERE]" },
        tone: "a",
    },
    {
        id: "ciarza",
        title: "Ciarza Dominance",
        text: "Cool Tag",
        body: "Details",
        button: { label: "Full Nation Doc", href: "[GOOGLE LINK HERE]" },
        tone: "b",
        reverse: true,
    },
    {
        id: "deridia",
        title: "The Kingdom of Deridia",
        text: "Cool Tag",
        body: "Details",
        button: { label: "Full Nation Doc", href: "[GOOGLE LINK HERE]" },
        tone: "a",
    },
    {
        id: "drezhe",
        title: "Drezhe",
        text: "Cool tag",
        body: "Details",
        button: { label: "Full Nation Doc", href: "[GOOGLE LINK HERE]" },
        tone: "b",
        reverse: true,
    },
    {
        id: "hadus",
        title: "The Old Hadus Empire",
        text: "Cool tag",
        body: "Details",
        button: { label: "Full Nation Doc", href: "[GOOGLE LINK HERE]" },
        tone: "a",
    },
    {
        id: "homeland",
        title: "The Dakrian Isle (aka Homeland)",
        text: "Cool tag",
        body: "Details",
        button: { label: "Full Nation Doc", href: "[GOOGLE LINK HERE]" },
        tone: "b",
        reverse: true,
    },
    {
        id: "kaeralle",
        title: "The Republic of Kaeralle",
        text: "Cool tag",
        body: "Details",
        button: { label: "Full Nation Doc", href: "[GOOGLE LINK HERE]" },
        tone: "a",
    },
    {
        id: "lasil",
        title: "The Monastic Orders of Lasil",
        text: "Cool tag",
        body: "Details",
        button: { label: "Full Nation Doc", href: "[GOOGLE LINK HERE]" },
        tone: "b",
        reverse: true,
    },
    {
        id: "maresh",
        title: "The Maresh Confederation",
        text: "Cool tag",
        body: "Details",
        button: { label: "Full Nation Doc", href: "[GOOGLE LINK HERE]" },
        tone: "a",
    },
    {
        id: "phelhar",
        title: "The Princedom of Phelhar",
        text: "Cool tag",
        body: "Details",
        button: { label: "Full Nation Doc", href: "[GOOGLE LINK HERE]" },
        tone: "b",
        reverse: true,
    },
    {
        id: "saarden",
        title: "The Saarden Meritocracy",
        text: "Cool tag",
        body: "Details",
        button: { label: "Full Nation Doc", href: "[GOOGLE LINK HERE]" },
        tone: "a",
    },
    {
        id: "desertedwastes",
        title: "The Deserted Wastes of the Tehrux",
        text: "Cool Tag",
        body: "Details",
        button: { label: "Full Nation Doc", href: "[GOOGLE LINK HERE]" },
        tone: "b",
        reverse: true,
    },
    {
        id: "wyld",
        title: "The Swampland of Wyld",
        text: "Cool tag",
        body: "Details",
        button: { label: "Full Nation Doc", href: "[GOOGLE LINK HERE]" },
        tone: "a",
    },
    {
        id: "zathea",
        title: "The Zathean Rebellion",
        text: "Cool tag",
        body: "Details",
        button: { label: "Full Nation Doc", href: "[GOOGLE LINK HERE]" },
        tone: "b",
        reverse: true,
    },
];
 
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

    const Overview = () => `
    <section class="overview" id="overview">
        <div>
            <h2>Nations Overview</h2>
            <p>Where did you come from? Where did you go?</p>
            <div class="btn-nations">
                <a class="btn" href="#aleriassi">Aleriassi</a>
                <a class="btn" href="#azaldin">Azaldin</a>
                <a class="btn" href="#ciarza">Ciarza</a>
                <a class="btn" href="#deridia">Deridia</a>
                <a class="btn" href="#drezhe">Drezhe</a>
                <a class="btn" href="#hadus">Hadus</a>
                <a class="btn" href="#homeland">Homeland</a>
                <a class="btn" href="#kaeralle">Kaeralle</a>
                <a class="btn" href="#lasil">Lasil</a>
                <a class="btn" href="#maresh">Maresh</a>
                <a class="btn" href="#phelhar">Phelhar</a>
                <a class="btn" href="#saarden">Saarden</a>
                <a class="btn" href="#wastes">Wastes</a>
                <a class="btn" href="#wyld">Wyld</a>
                <a class="btn" href="#zathea">Zathea</a>
            </div>
        </div>
    </section><br><br>`;
 
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