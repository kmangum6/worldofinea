const RULEBOOKS = [
    {
        version: "v1.2.1",
        date: "April 2026", 
        notes: "The original version of the rules released in the restart of Inea, 2026", 
        link: "docs/v1.2.1Rulebook.pdf",
    },
];

const Overview = () => `
    <section class="overview" id="overview">
        <div>
            <h2>Previous Versions</h2>
            <p>Here is where you can find previous verisons of the rules, all the way back from the beginning.</p>
        </div>
    </section>`;

const VersionCard = ({ version, date, notes, link }) => `
    <article class="versioncard">
        <h2>${version}</h2>
        <p class="versiondate">${date}</p>
        <p>${notes}</p>
        <a class="btn" href="${link}" target="_blank" rel="noreferrer">PDF</a>
    </article>`;

document.getElementById("app").innerHTML = `
${Overview()}
<div id="info" class="archive-grid">${RULEBOOKS.map(VersionCard).join("")}</div><br>`;