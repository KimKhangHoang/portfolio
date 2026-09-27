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
