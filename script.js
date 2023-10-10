document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".scenario");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((l) => {
        l.style.transform = "scale(0)";
      });
    });
  });
});
