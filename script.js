document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});
const certs = document.querySelectorAll(".certificate-card");

certs.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";

  setTimeout(() => {
    card.style.transition = "all 0.6s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, index * 150);
});
const points = document.querySelectorAll(".learning-points li");

points.forEach((item, index) => {
  item.style.opacity = "0";
  item.style.transform = "translateX(-10px)";

  setTimeout(() => {
    item.style.transition = "all 0.5s ease";
    item.style.opacity = "1";
    item.style.transform = "translateX(0)";
  }, index * 120);
});
