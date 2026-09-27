// Small progressive enhancements. The page works without them.

// Light/dark theme switch. Dark is the default; a chosen theme is remembered.
(function () {
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  var themeColour = document.querySelector('meta[name="theme-color"]');
  var colours = { dark: "#0b1210", light: "#f3f7f4" };

  function currentTheme() {
    return root.dataset.theme === "light" ? "light" : "dark";
  }

  function render() {
    var theme = currentTheme();
    toggle.setAttribute("aria-pressed", String(theme === "light"));
    toggle.title = theme === "light" ? "Switch to dark theme" : "Switch to light theme";
    if (themeColour) themeColour.content = colours[theme];
  }

  if (!toggle) return;

  toggle.addEventListener("click", function () {
    var next = currentTheme() === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    render();
  });

  render();
  toggle.hidden = false;
})();

// In-page navigation that keeps # fragments out of the address bar.
(function () {
  var main = document.getElementById("main");
  var skipLink = document.querySelector(".skip-link");
  var brand = document.querySelector(".brand");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (skipLink && main) {
    skipLink.addEventListener("click", function (event) {
      event.preventDefault();
      main.focus();
    });
  }

  if (brand) {
    brand.addEventListener("click", function (event) {
      // Let modified clicks (new tab, new window) behave normally.
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
    });
  }
})();
