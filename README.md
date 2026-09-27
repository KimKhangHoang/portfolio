# Kim Khang Hoang's personal site

A single page for the side projects and experiments I build to learn how things work.

**Live site:** https://kimkhanghoang.github.io/portfolio/

## How it's built

Plain HTML and CSS with no build step, no JavaScript and no dependencies.

```text
index.html                 The whole page
assets/css/site.css        All styles (light and dark themes)
assets/fonts/              Space Grotesk heading font (SIL OFL, see OFL.txt)
assets/icons/              KKH monogram favicon set and web manifest
images/projects/           Project screenshots (640 px and 1280 px WebP)
images/og-image.png        Link-preview image (1200 × 630)
```

## Run it locally

Any static file server works. From the repository root:

```sh
python -m http.server 8000
```

Then open http://localhost:8000. Opening `index.html` directly also works, apart from the web manifest.

## Add a project

- **With a live demo:** copy one of the `<li>` blocks in the **Featured projects** list in `index.html`. Add two screenshots to `images/projects/`, 1280 × 800 and 640 × 400 WebP, and write alt text that describes what the screenshot shows.
- **Code only:** copy one of the `<li>` blocks in the **More projects** list. No image is needed.

Keep descriptions to what the project actually does, then update **Last updated** in the footer.

## Deployment

GitHub Pages serves the `main` branch as is. Pushing to `main` publishes the site.

## Checks before publishing

- Resize the browser down to 320 px wide and confirm nothing scrolls sideways.
- Tab through the page and confirm every link shows a focus outline.
- Check the page in both light and dark system themes.
