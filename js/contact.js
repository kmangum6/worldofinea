const CONTACT_ENDPOINT = "https://formspree.io/f/xdeardlb";

const contactForm = document.getElementById("contact-form");
const statusEl = document.getElementById("contact-status");
 
contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const sendButton = contactForm.querySelector("button");
    sendButton.disabled = true;
    statusEl.textContent = "Sending...";
 
    try {
        const res = await fetch(CONTACT_ENDPOINT, {
            method: "POST",
            headers: { Accept: "application/json" },
            body: new FormData(contactForm),
        });
        if (!res.ok) throw new Error("Request failed");
        contactForm.reset();
        statusEl.textContent = "Thanks! Your message was sent.";
    } catch (err) {
        statusEl.textContent =
            "Something went wrong. Please email us at worldofinea@gmail.com instead.";
    } finally {
        sendButton.disabled = false;
    }
});