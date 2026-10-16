# Different Paths, One Dream

A personal, responsive mini-website about supporting each other's goals, communicating honestly, and growing together. Built with plain HTML, CSS, and JavaScript—no framework, package install, API, or backend required.

## Preview locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser.
3. For a local development server, run `python -m http.server 8000` from the project folder and open `http://localhost:8000`.

## Project structure

```text
aira-and-dreams/
├── index.html          # Page structure, message, gallery, dream cards
├── css/
│   └── styles.css      # Theme, layout, responsive rules, animation
├── js/
│   └── main.js         # Scroll reveals, gallery lightbox, reminder button
├── assets/
│   ├── photo-01.jpg    # Original waterfront photo
│   ├── photo-02.jpg    # Sunset future-dreams portrait
│   ├── photo-03.jpg    # Career-themed portrait
│   └── photo-04.jpg    # Closer crop of the original photo
└── README.md
```

## Features

- Mobile-first responsive styling for phone, tablet, and desktop.
- Four local photo assets; the site does not rely on remote image hosting.
- Tap-to-expand photo viewer with captions.
- Scroll-reveal transitions, with reduced-motion support.
- A personal letter and two dream cards.
- A small interactive reminder near the bottom.
- Accessible navigation labels and image alternative text.

## Publish with GitHub Pages

1. Create a repository on GitHub and upload the files in this project.
2. Open **Settings → Pages**.
3. Under build and deployment, choose **Deploy from a branch**.
4. Choose `main` and `/ (root)`, then save.
5. Wait for the Pages URL to appear in the same section, then open it and test on your phone.

## Personalize it

- Edit the text in `index.html` to make the letter sound more like you.
- Replace the four files in `assets/` to change the photos. Keep the same filenames or update the matching `src` and `data-full` attributes in `index.html`.
- Adjust colors and spacing near the top of `css/styles.css` in the `:root` variables.

## Notes

- This is a static website; it does not collect, store, or send visitor data.
- The career-themed artwork is illustrative. Confirm any generated details before sharing publicly.
- The page uses Google Fonts when an internet connection is available and falls back to system fonts otherwise.
