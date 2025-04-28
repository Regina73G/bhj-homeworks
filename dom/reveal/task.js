const reveal = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", () => {
    reveal.forEach(revealActive => {
      function getElement() {
        const {top, bottom} = revealActive.getBoundingClientRect();
        const isVisible = (top <= window.innerHeight) && (bottom >= 0);
        return isVisible;
      }

      if(getElement()) {
        revealActive.classList.add("reveal_active");
      } else {
        revealActive.classList.remove("reveal_active");
      }
    });
  });