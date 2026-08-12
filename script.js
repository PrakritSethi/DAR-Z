/* ==========================================
   DAR-Z V2 JavaScript
========================================== */

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Navbar background on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(0,0,0,.85)";
        header.style.backdropFilter = "blur(22px)";

    } else {

        header.style.background = "rgba(0,0,0,.20)";
        header.style.backdropFilter = "blur(18px)";
    }

});

// Fade-in animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.classList = entry.classList;
            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// Counter animation
const counters = document.querySelectorAll(".stat-card h3");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const text = counter.innerText.replace("+", "").replace("%", "");

        const target = parseInt(text);

        let current = 0;

        const increment = Math.ceil(target / 40);

        const update = () => {

            current += increment;

            if (current >= target) {

                counter.innerText = target +
                    (counter.innerText.includes("%") ? "%" : "+");

            } else {

                counter.innerText = current;

                requestAnimationFrame(update);

            }

        };

        update();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});