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

// gsap.from("nav", { duration: 2, y: "-400%", ease: "bounce" });

// setTimeout(() => {
//   gsap.from(".section-1", { duration: 3, y: "-200%", ease: "elastic" });
// }, 3000);

gsap.from(".soumili-container", { duration: 3, x: "400%", ease: "sine" });

let letsConnectBtn = document.querySelector(".lets-connect");

letsConnectBtn.onclick = () => {
  console.log("Clicked!");
  if (letsConnectBtn.innerHTML == "Connected!") {
    letsConnectBtn.innerHTML = "Let's Connect";
    letsConnectBtn.style.backgroundColor = "#ff6699";
  } else {
    letsConnectBtn.innerHTML = "Connected!";
    letsConnectBtn.style.backgroundColor = "#00cc66";
    document.querySelector(".the-spawner").innerHTML =
      "You're now connected with Soumili!";
    document.querySelector(".the-spawner").style.display = "flex";

    setTimeout(function () {
      document.querySelector(".the-spawner").style.display = "none";
    }, 2000);
  }
};
