
// Navbar scroll
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 50));

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 60);
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));



const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// MOBILE MENU TOGGLE
function toggleMenu() {

  if (window.innerWidth <= 991) {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

      navLinks.style.cssText = `
        display:flex;
        flex-direction:column;
        position:fixed;
        top:78px;
        left:0;
        width:100%;
        height:auto;
        background:rgba(255,255,255,0.98);
        backdrop-filter:blur(20px);
        padding:20px 28px;
        gap:18px;
        border-bottom:1px solid #D0DCF0;
        box-shadow:0 8px 30px rgba(26,73,200,0.12);
        z-index:999;
      `;

    } else {

      navLinks.removeAttribute("style");

    }

  }

}

// DESKTOP SCREEN PE AUTO CLOSE
window.addEventListener("resize", () => {

  if (window.innerWidth > 991) {

    navLinks.classList.remove("active");

    navLinks.removeAttribute("style");

  }

});

// LINK CLICK PE MENU CLOSE
document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    if (window.innerWidth <= 991) {

      navLinks.classList.remove("active");

      navLinks.removeAttribute("style");

    }

  });

});








  