// Smooth scrolling for internal anchor links 
// (If you don’t want to rely on Tailwind’s .scroll-smooth alone)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Ignore if href is just "#"
      if (this.getAttribute("href") !== "#") {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80, // Adjust offset for fixed nav
            behavior: "smooth",
          });
        }
      }
    });
  });
  
  /*
    If you need any extra JS for carousels/sliders or more advanced behavior,
    feel free to integrate a library (like Swiper.js) or create custom scripts here.
  */