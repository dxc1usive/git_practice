(function () {
  const nav = document.getElementById("nav");
  if (nav) nav.setAttribute("aria-label", "Primary");
  if (nav) {
    nav.innerHTML = `
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
    `;
  }
})();
