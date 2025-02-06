// Navigation
let nav = document.querySelector(".navigation-wrap");

window.addEventListener("scroll", () => {
   requestAnimationFrame(() => {
      if (document.documentElement.scrollTop > 20) {
         nav.classList.add("scroll-on");
      } else {
         nav.classList.remove("scroll-on");
      }
   });
});


// Nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

if (navCollapse) {
   navBar.forEach((link) => {
      link.addEventListener("click", () => {
         navCollapse.classList.remove("show");
      });
   });
}

// Counter Design
document.addEventListener("DOMContentLoaded", () => {
   function counter(id, start, end, duration) {
      let obj = document.getElementById(id);
      if (!obj) return;

      let current = start,
         range = end - start,
         increment = end > start ? 1 : -1,
         step = Math.max(Math.floor(duration / range), 1);

      let timer = setInterval(() => {
         current += increment;
         obj.textContent = current;
         if (current === end) {
            clearInterval(timer);
         }
      }, step);
   }

   counter("count1", 0, 1287, 3000);
   counter("count2", 100, 1837, 2500);
   counter("count3", 0, 1440, 3000);
   counter("count4", 0, 2010, 3000);
});
