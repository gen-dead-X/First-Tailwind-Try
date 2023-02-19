// import "../assets/css/style.css";
console.log("Starts!");

const navBtn = document.querySelector("#menu");
const menuBar = document.querySelector('[role="menu-bar"]');

navBtn.addEventListener("click", () => {
  const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded"));
  navBtn.setAttribute("aria-expanded", !isExpanded);
  gsap.from(".menu-container", { duration: 0.6, y: "-200% ", ease: "power2" });
  menuBar.classList.toggle("hidden");
  menuBar.classList.toggle("flex");
});

// gsap.from(".container", { duration: 3, y: "-100%", ease: "bounce" });

gsap.from("nav", { duration: 2, y: "-400%", ease: "bounce" });

setTimeout(() => {
  gsap.from("section", { duration: 3, y: "-200%", ease: "elastic" });
}, 3000);
