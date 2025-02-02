/**
 * Smooth Scrolling for Internal Anchor Links
 * Enhances navigation by smoothly scrolling to target sections.
 */
document.addEventListener("DOMContentLoaded", () => {
  const anchors = document.querySelectorAll('a[href^="#"]');

  anchors.forEach((anchor) => {
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
});

/*
  Additional JavaScript functionality (e.g., for sliders/carousels) can be added here.
*/