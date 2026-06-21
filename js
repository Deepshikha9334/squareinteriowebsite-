// Sticky Header Shadow
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
        header.style.background = "#000";
    } else {
        header.style.boxShadow = "none";
    }
});


// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});


// Fade Animation on Scroll
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// Counter Animation
const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.innerText.replace("+", "");
        const current = +counter.getAttribute("data-count") || 0;

        const increment = target / 100;

        if (current < target) {

            const newCount = Math.ceil(current + increment);

            counter.setAttribute("data-count", newCount);

            counter.innerText = newCount + "+";

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});
