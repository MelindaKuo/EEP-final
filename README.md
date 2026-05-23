# EEP Website — Yearly Update Guide

Live site: https://melindakuo.github.io/EEP-final/

Whenever you push to `main`, GitHub Actions automatically rebuilds and redeploys the site. You never need to run a build manually.

---

## Running locally (optional but recommended before pushing)

```bash
cd eep-react
npm install      # only needed the first time
npm run dev      # opens at http://localhost:5173
```

---

## Updating tutors

All tutor data lives in [`eep-react/src/data/tutors.js`](eep-react/src/data/tutors.js).  
Photos go in [`eep-react/public/tutorphotos/`](eep-react/public/tutorphotos/).

### Adding a tutor

1. Add their photo to `eep-react/public/tutorphotos/` (e.g. `FirstName.jpg`).
2. Add a block to the correct array (`programLeads`, `scribes`, `curriculumLeads`, or `tutors`):

```js
{
  id: 'firstname',           // unique, lowercase, no spaces
  name: 'First Last',
  photo: `${base}tutorphotos/FirstName.jpg`,
  role: 'Tutor',             // or 'Program Lead', 'Scribe', 'Curriculum Lead'
  bio: 'Their bio here.',
},
```

The ← / → navigation arrows in the tutor modal are computed automatically from the order of entries in each array — **you do not need to update `prev`/`next` anywhere**.

### Removing a tutor

Delete their entry from the array. Navigation updates automatically.

### Editing a tutor

Change the `name`, `bio`, `role`, or `photo` fields directly. If replacing a photo, keep the same filename or update the `photo` field to match.

---

## Updating lessons

All lesson data lives in [`eep-react/src/data/lessons.js`](eep-react/src/data/lessons.js).  
Thumbnail images go in [`eep-react/public/lsnphotos/`](eep-react/public/lsnphotos/).

### Adding a lesson

1. Export a screenshot/thumbnail from the Google Slides presentation and save it to `eep-react/public/lsnphotos/`.
2. Add a block at the end of the `lessons` array:

```js
{
  id: 'l16',                  // increment the number
  image: `${base}lsnphotos/Your Filename.png`,
  title: 'Lesson Title',
  date: 'M/DD/YY US',
  beginnerUrl: 'https://docs.google.com/...',
  intermediateUrl: 'https://docs.google.com/...',
  advancedUrl: 'https://docs.google.com/...',
},
```

### Removing a lesson

Delete its block from the array.

### Updating a link or thumbnail

Edit the `beginnerUrl`, `intermediateUrl`, `advancedUrl`, or `image` field directly.

---

## Updating events

All event data lives in [`eep-react/src/data/events.js`](eep-react/src/data/events.js).  
Photos go in [`eep-react/public/eventphotos/`](eep-react/public/eventphotos/).

```js
{
  id: 'ev5',                  // increment the number
  title: 'Event Name',
  date: 'M/DD/YY',
  time: '9am-12pm',
  location: 'Location',
  necessity: 'Optional',      // or 'Required'
  photo: `${base}eventphotos/your-photo.jpg`,
},
```

---

## Deploying

Push your changes to `main`:

```bash
git add .
git commit -m "update tutors/lessons for 2026-27"
git push
```

GitHub Actions handles the build and deploy automatically. The site updates in about 1–2 minutes.
