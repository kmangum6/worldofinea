const SECTIONS = [
    {
        id: "changelog",
        title: "Changelog",
        body: `
            <p>Details</p>
            <h3>A subheading</h3>
            <p>More text goes here.</p>`,
    },
    {
        id: "oog",
        title: "Out-Of-Game Rules",
        body: `
            <p>Details</p>`,
    },
    {
        id: "ig",
        title: "In-Game Rules",
        body: `
            <p>Details</p>`,
    },
    {
        id: "combat",
        title: "Combat",
        body: `
            <p>Details</p>`,
    },
    {
        id: "creation",
        title: "Character Creation",
        body: `
            <p>Details</p>`,
    },
    {
        id: "backstory",
        title: "Character Backstory",
        body: `
            <p>Details</p>`,
    },
    {
        id: "skillrules",
        title: "Skill Rules",
        body: `
            <p>Details</p>`,
    },
    {
        id: "skilltrees",
        title: "Skill Trees",
        body: `
            <p>Details</p>`,
    },
    {
        id: "enhancements",
        title: "Enhancements",
        body: `
            <p>Details</p>`,
    },
    {
        id: "proficiency",
        title: "Proficiency Classes",
        body: `
            <p>Details</p>`,
    },
    {
        id: "mastery",
        title: "Mastery and Specialty Skills",
        body: `
            <p>Details</p>`,
    },
    {
        id: "negotiations",
        title: "Negotiations",
        body: `
            <p>Details</p>`,
    },
    {
        id: "gathering",
        title: "Social Gatherings",
        body: `
            <p>Details</p>`,
    },
    {
        id: "economy",
        title: "Inean Economy",
        body: `
            <p>Details</p>`,
    },
    {
        id: "expeditions",
        title: "Expeditions",
        body: `
            <p>Details</p>`,
    },
    {
        id: "crafting",
        title: "Crafting",
        body: `
            <p>Details</p>`,
    },
    {
        id: "monsters",
        title: "Monster Reference",
        body: `
            <p>Details</p>`,
    },
    {
        id: "skilldict",
        title: "Skill Dictionary",
        body: `
            <p>Details</p>`,
    },
    {
        id: "calldict",
        title: "Call Dictionary",
        body: `
            <p>Details</p>`,
    },
    {
        id: "glossary",
        title: "Glossary",
        body: `
            <p>Details</p>`,
    },
    {
        id: "index",
        title: "Index",
        body: `
            <p>Details</p>`,
    },
];
 
const Tab = (s) => `
    <button class="tab" role="tab" id="tab-${s.id}" data-id="${s.id}"
            aria-controls="panel-${s.id}" aria-selected="false" tabindex="-1">${s.title}</button>`;
 
const Panel = (s) => `
    <section class="tab-panel" role="tabpanel" id="panel-${s.id}"
             aria-labelledby="tab-${s.id}" hidden>
        <h2>${s.title}</h2>
        ${s.body}
    </section>`;

const Download = () => `
    <section class="quickstart">
        <h1>Just want a PDF Version?</h1>
        <a class="btn" href="quickstart.html">Coming Soon!</a>
    </section>`;
 
document.getElementById("rulebook").innerHTML = `
    <div class="tabs" role="tablist" aria-label="Rulebook sections">
        ${SECTIONS.map(Tab).join("")}
    </div>
    <div class="tab-panels">${SECTIONS.map(Panel).join("")}</div>
    ${Download()}`;
 
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");
 
function selectTab(id, { focus = false, updateHash = true } = {}) {
    tabs.forEach((t) => {
        const active = t.dataset.id === id;
        t.classList.toggle("active", active);
        t.setAttribute("aria-selected", String(active));
        t.tabIndex = active ? 0 : -1;
        if (active && focus) t.focus();
    });
    panels.forEach((p) => {
        p.hidden = p.id !== `panel-${id}`;
    });
    if (updateHash) history.replaceState(null, "", `#${id}`);
}
 
const isSection = (id) => SECTIONS.some((s) => s.id === id);
 
tabs.forEach((t, i) => {
    t.addEventListener("click", () => selectTab(t.dataset.id));
 
    t.addEventListener("keydown", (e) => {
        let next;
        if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
        else if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = tabs.length - 1;
        else return;
        e.preventDefault();
        selectTab(tabs[next].dataset.id, { focus: true });
    });
});
 
window.addEventListener("hashchange", () => {
    const id = location.hash.slice(1);
    if (isSection(id)) selectTab(id, { updateHash: false });
});
 
const startId = location.hash.slice(1);
selectTab(isSection(startId) ? startId : SECTIONS[0].id, { updateHash: false });