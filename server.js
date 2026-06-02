const express = require("express");
const path = require("path");
const { providers, team } = require("./data");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the static front-end (HTML, CSS, client JS, assets).
app.use(express.static(path.join(__dirname, "public")));

// --- Node-powered API endpoints -------------------------------------------
// The front-end fetches these, so Node is genuinely driving the content.

app.get("/api/providers", (_req, res) => {
  res.json(providers);
});

app.get("/api/team", (_req, res) => {
  // Each member may drop their own image file into public/assets/team/ and
  // set `photo` to its file name. If they don't, an avatar is generated.
  const withAvatars = team.map((person) => ({
    ...person,
    avatar:
      person.photo && person.photo.trim() !== ""
        ? `/assets/team/${person.photo}`
        : `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${encodeURIComponent(
            person.name
          )}`
  }));
  res.json({ count: withAvatars.length, members: withAvatars });
});

// Simple health endpoint — handy for cloud deployments (Azure/AWS/GCP probes).
app.get("/healthz", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// Pretty routes
app.get("/about", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.listen(PORT, () => {
  console.log(`☁️  Cloud Haven running at http://localhost:${PORT}`);
});
