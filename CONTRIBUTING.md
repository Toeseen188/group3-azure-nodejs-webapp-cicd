# 🙋 How to Add Your Own Info — Step by Step

Every team member edits **their own block** in one file: **[`data.js`](data.js)**.
You do **not** need to touch any HTML or CSS. Follow these steps.

> 💬 Motto: **There is space for everyone in the cloud.** Your bio can be up to **150 words** — there is plenty of room on your card.

---

## Step 1 — Open the data file
Open **[`data.js`](data.js)** and scroll down to the part that says:

```js
const team = [
```

This is the list of all members. Each member is a block wrapped in `{ ... }`.

## Step 2 — Find YOUR block
Look for the placeholder with your spot, e.g. `Member Two`, `Member Three`, etc.
Edit **only your block** — leave everyone else's alone.

A block looks like this:
```js
{ name: "Member Two", role: "DevOps Engineer", bestCP: "Azure", bio: "Replace me with your own bio (up to 150 words)." },
```

## Step 3 — Fill in your details
Change the text **inside the quotes** for each field:

| Field    | What to put                                                        |
|----------|--------------------------------------------------------------------|
| `name`   | Your full name                                                     |
| `role`   | Your job / title on the project                                    |
| `bestCP` | Your pick for the **best Cloud Provider** (e.g. `Azure`, `AWS`, `GCP`) |
| `bio`    | A few sentences about you — **up to 150 words**                    |

Example after editing:
```js
{ name: "Jane Doe", role: "DevOps Engineer", bestCP: "Azure",
  bio: "I'm a final-year computer science student who loves automating things. On this project I set up the CI/CD pipeline to Azure. Outside of code I play chess and hike." },
```

> ℹ️ Keep the `{` `}` and the comma `,` at the end exactly as they are.
> Only change what's inside the `"quotes"`.

## Step 4 — (Optional) Add your own photo
You add an **image file**, not a web link. The `photo` line is **already in your
block** — it's just commented out (it starts with `//`). You only need to switch
it on.

1. Put your picture in the folder **[`public/assets/team/`](public/assets/team/)**
   (e.g. `jane.jpg`). A square image looks best.
2. Find the photo line in your block. It looks like this:
   ```js
   // photo: "member-two.jpg",   // <- remove the // and use your file name in public/assets/team/
   ```
3. **Remove the `//` at the start** and put **your** file name between the quotes:
   ```js
   photo: "jane.jpg",
   ```
   (Leave the comment after it alone, or delete it — your choice.)

No photo? Just leave the line commented (with the `//`) — an avatar is generated
for you automatically.

## Step 5 — See your changes
1. In a terminal, run:
   ```bash
   npm start
   ```
2. Open **http://localhost:3000/about**
3. Your card appears with your name, role, bio, best-CP pick, and photo. 🎉

---

## ✅ Doing this without clashing with teammates
So 12 people don't overwrite each other, each person should use their own Git branch:

```bash
git checkout -b about/your-name     # make your own branch
# ...edit YOUR block in data.js, add your photo...
git add data.js public/assets/team/your-photo.jpg
git commit -m "Add about info for Your Name"
git push origin about/your-name     # then open a Pull Request
```

That way everyone edits independently and the blocks merge cleanly.

## 🆘 Common mistakes
- ❌ Removing a comma `,` or a brace `}` → the page won't load. Put it back.
- ❌ Using a web link in `photo` → it must be a file name from `public/assets/team/`.
- ❌ Editing someone else's block → only edit your own.
