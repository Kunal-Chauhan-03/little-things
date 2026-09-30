# for Pri — Priyanshi's birthday site

A one-page, scroll-and-click birthday experience built for Priyanshi. No games,
no generic template — just mystery, memories, and one long overdue message,
told through a cinematic scrapbook.

## Stack

Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Framer Motion

The whole thing is a single scrolling page (`app/page.tsx`) made of 16
section components under `components/sections/`, each one screen from the
original flow.

## Running it locally

You'll need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000 — that's it.

## Adding your photos

1. Drop image files into `public/images/`.
2. Open `lib/assets.ts` and point each entry at your filenames:
   - `soloPhotos` — the Screen 8 photo gallery (5 slots, add/remove freely)
   - `favoritePhoto` — Screen 9, her favorite photo
   - `togetherPhotos` — Screen 10, the two of you
   - `birthdayHeroPhoto` — Screen 17, the final birthday photo

Until you add real files, the site shows a soft placeholder card instead of
breaking, so you can build everything else first and drop photos in last.

Tips:
- Use photos that are already reasonably sized (under ~2MB each) so the site
  stays fast on her phone.
- Portrait or near-4:5 photos fit the Polaroid frames best; the frames will
  crop other ratios to fit.

## Adding audio

1. Voice note → save as `public/audio/voice-note.mp3` (Screen 11).
2. Background music → save as `public/audio/background.mp3`. It starts softly
   after her first tap/click anywhere on the page (browsers block audio from
   autoplaying without interaction) and can be muted with the button in the
   bottom-right corner.
3. Her favorite/current song → save as `public/audio/favorite-song.mp3` and
   set its title in `lib/assets.ts` under `favoriteSong` — this is reserved
   for the "music" object in the Look Around section if you want to wire it
   in as a short preview.

Keep files reasonably compressed (128kbps mp3 is plenty) so the page loads
fast on mobile data.

## Changing text

Every line of copy lives in `lib/content.ts`, organized in the same order as
the flow (entry → memories → the message → the birthday wish → the ending).
Edit the strings there — you don't need to touch any component file.

The nickname mix (Priyanshi / Pri / Cutu / Pinky Ponky / Sher) and the "don't
repeat this joke" rules from the original brief are already baked into where
each phrase appears — if you add new lines, keep that same restraint.

## Colors

The palette lives in `tailwind.config.ts`:

| Name | Hex | Used for |
|---|---|---|
| Espresso | `#211814` | base background |
| Coffee | `#6F4E37` | secondary sections |
| Blush | `#E8A0B5` | emotional accents, captions |
| Cream | `#F7EDE3` | body text, polaroid paper |
| Champagne | `#D6B27C` | buttons, highlights |

## Deployment (Vercel)

1. Push this project to a GitHub repo (private is fine — recommended, since
   it has her photos in it).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo, keep the
   defaults, and deploy. No environment variables are required.
3. Share the generated link with her — or attach a custom domain under
   Vercel's project settings if you want something like `for-pri.com`.

## Production build (optional, to test locally before deploying)

```bash
npm run build
npm start
```

## Notes

- No database, no backend — everything is static and frontend-only, since
  this is a one-off personal experience, not an app with ongoing data.
- Reduced-motion is respected (`prefers-reduced-motion`), all buttons are
  keyboard-reachable, and images have alt text.
- There is intentionally no page-load "loading screen" or generic hero
  banner — the mystery of Screen 1 *is* the hero.
