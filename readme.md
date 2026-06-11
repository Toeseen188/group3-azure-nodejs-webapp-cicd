# ☁️ Cloud Haven — Group 3 (Cloud Development Final Project)

[![version](https://img.shields.io/badge/version-1.0.0-blue.svg)](./package.json) [![license](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE) [![node](https://img.shields.io/badge/node-%3E%3D14-brightgreen.svg)](https://nodejs.org/)

A heavenly, cloud-themed web app built with **HTML, CSS, and Node.js (Express)**.
It celebrates the three major real-world cloud providers — **AWS, Azure, and GCP** —
and introduces our team.

## ✨ Features
- **Home page** — animated hero, a **carousel** of the three major cloud providers,
  "Why Cloud" columns, and a stats strip.
- **About page** — a grid of **7+ team members**, each with a role, a bio of up
  to 150 words, their own photo, and their pick for best cloud provider.
- **Light & Dark mode** — toggle in the navbar (☀️/🌙), remembered via `localStorage`.
- **Node.js-powered** — the front-end pulls its data from real API endpoints:
  - `GET /api/providers` — cloud provider data for the carousel
  - `GET /api/team` — team members (with server-generated avatars)
  - `GET /healthz` — health check for cloud deployments
- **Heavenly design** — floating clouds, sky gradients, and "real cloud" references
  (rain, lightning, overcast) used throughout the columns and sections.

## 🚀 Run it locally
```bash
npm install
npm start
```
Then open **http://localhost:3000**

## 👤 How each member adds their OWN info

Every member edits **their own block** in **[`data.js`](data.js)** → the `team` array.
Each block has `name`, `role`, `bestCP` (your pick for best cloud provider),
a `bio` of **up to 150 words**, and an optional `photo` (an image file you drop
into `public/assets/team/`).

📖 **Full step-by-step instructions are in [`CONTRIBUTING.md`](CONTRIBUTING.md)** —
written so anyone on the team can follow it, even with no coding experience.

Quick version:
1. Open [`data.js`](data.js), find your block in `team = [ ... ]`.
2. Edit only **your** block: `name`, `role`, `bestCP`, `bio` (≤150 words).
3. (Optional) Drop your image in [`public/assets/team/`](public/assets/team/) and set `photo: "yourfile.jpg"`.
4. Run `npm start` → open `/about` → your card updates instantly.

### Other customisation
- **Add / remove a member:** add or delete a whole `{ ... },` block in the array.
- **Providers / colors / copy:** edit the `providers` array, also in [`data.js`](data.js).

## 🗂️ Structure
```
├── server.js          # Express server + API endpoints
├── data.js            # Providers & team data (members edit me!)
├── CONTRIBUTING.md    # Step-by-step guide for adding your own info
├── package.json
└── public/
    ├── index.html     # Home
    ├── about.html     # About / team
    ├── css/style.css
    ├── js/app.js      # Theme toggle, carousel, data fetching
    └── assets/team/   # Drop your own photo here
```

Group 3 · There is space for everyone in the cloud. ☁️
