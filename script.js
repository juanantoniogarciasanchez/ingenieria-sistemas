// MENU MÓVIL

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});


document.querySelectorAll(".nav a").forEach(link => {

  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });

});


// AÑO AUTOMÁTICO

document.getElementById("year").textContent =
  new Date().getFullYear();


// ANIMACIÓN DE ESTADÍSTICAS

const counters =
  document.querySelectorAll("[data-target]");


const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      const counter = entry.target;

      const target =
        Number(counter.dataset.target);

      let current = 0;

      const increment =
        Math.max(1, Math.ceil(target / 60));


      const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

          counter.textContent = target;
          clearInterval(timer);

        } else {

          counter.textContent = current;

        }

      }, 25);


      observer.unobserve(counter);

    });

  },
  {
    threshold: 0.5
  }
);


counters.forEach(counter => {
  observer.observe(counter);
});


// HEADER AL HACER SCROLL

const header =
  document.querySelector(".header");


window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    header.style.background =
      "rgba(5, 8, 13, .97)";

  } else {

    header.style.background =
      "rgba(5, 8, 13, .85)";

  }

});