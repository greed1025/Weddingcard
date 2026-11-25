// Wedding countdown: 31 January 2027 at 11:15 AM India time.
const weddingDate = new Date("2027-01-31T11:15:00+05:30").getTime();
const ids = ["days", "hours", "minutes", "seconds"];
function updateCountdown() {
  const distance = weddingDate - Date.now();
  if (distance <= 0) {
    document.getElementById("countdown").innerHTML = '<p class="countdown-note">The wedding day is here. Let the celebrations begin!</p>';
    return;
  }
  const values = [
    Math.floor(distance / 86400000),
    Math.floor((distance % 86400000) / 3600000),
    Math.floor((distance % 3600000) / 60000),
    Math.floor((distance % 60000) / 1000)
  ];
  ids.forEach((id, i) => document.getElementById(id).textContent = String(values[i]).padStart(2, "0"));
}
updateCountdown();
setInterval(updateCountdown, 1000);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.textContent = "☰";
}));

const welcome = document.getElementById("welcome");
document.getElementById("openInvite").addEventListener("click", () => {
  welcome.classList.add("dismissed");
  document.body.classList.add("invitation-opened");
});
