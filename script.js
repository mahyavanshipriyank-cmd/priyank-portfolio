// Current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal sections as they enter the viewport
const revealItems = document.querySelectorAll(
  ".section-kicker, .section-title, .about-lead, .muted-copy, .skill-card, .project-card, .contact-form"
);

revealItems.forEach((item) => item.classList.add("reveal"));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => revealObserver.observe(item));

// Close the mobile Bootstrap menu after selecting a navigation link
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("mainNav");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

// Contact form: prepare an email in the visitor's default email application.
// Replace the email address below with your real email address.
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) return;

  const recipient = "your-email@example.com"; // TODO: Add your email address
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  document.getElementById("formNote").textContent =
    "Your email app should open with the message ready to send.";
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
