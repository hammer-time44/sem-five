# Syllabus

A minimal, static website for browsing course syllabi: **Cloud, OS, AI, DBMS, CN, CD**.
No build step, no dependencies.

## Structure

```
.
├── index.html            # page shell
├── assets/
│   ├── css/style.css     # all styles (light + dark)
│   └── js/app.js         # navigation and rendering
├── data/
│   └── syllabus.js       # all course content, edit here
├── source/               # original university PDFs
├── .nojekyll
└── .gitignore
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Deploy on GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
4. Save. The site appears at `https://<user>.github.io/<repo>/`.

## Edit content

Each course in `data/syllabus.js` has an `id`, `name`, and a list of `modules`
(`no`, `title`, `hours`, `topics`). The sidebar order follows the order of the array.
To change a subject's colour, edit the `P` map at the top of `assets/js/app.js`.

## Navigation

- Move the mouse to the left edge to open the sidebar; it closes after you pick a subject.
- `←` / `→` (or `k` / `j`) switch subjects.
- Each subject has its own link, for example `#os`.
