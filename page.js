document.getElementById("menu-button").onclick=()=>{
    document.getElementById("side-nav").style.width = "100%";
}
document.getElementById("close").onclick=()=>{
    document.getElementById("side-nav").style.width = "0";
}
document.getElementById("side-nav-id").onclick=()=>{
    document.getElementById("side-nav").style.width ="0";
}
document.getElementById("side-nav-id2").onclick=()=>{
    document.getElementById("side-nav").style.width ="0";
}
document.getElementById("side-nav-id3").onclick=()=>{
    document.getElementById("side-nav").style.width ="0";
}
document.getElementById("side-nav-id4").onclick=()=>{
    document.getElementById("side-nav").style.width ="0";
}

// page.js
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const scrollReveal = () => {
        const triggerBottom = window.innerHeight * 0.8; // Trigger when 80% of the element is in view

        fadeElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible'); // Optional: remove class if scrolled back up
            }
        });
    };

    // Initial check
    scrollReveal();

    // Add scroll event listener
    window.addEventListener('scroll', scrollReveal);
});