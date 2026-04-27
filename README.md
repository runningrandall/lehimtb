# Lehi MTB Hub

Official website for the **Lehi High School Mountain Bike Team** — one of the top high school mountain biking clubs in the state of Utah.

🌐 **Live site:** [runningrandall.github.io/lehimtb](https://runningrandall.github.io/lehimtb)

---

## About

The Lehi MTB Hub is the central resource for riders, parents, coaches, and sponsors of the Lehi High School Mountain Bike Team. The site includes:

- Team programs (Lehi HS MTB, GRiT, Junior Devo)
- Coach and captain profiles
- Race schedule and events
- Training plans (Training Peaks)
- Sponsor information and 2026 sponsorship letter
- Photo & video gallery
- Blog & news
- Brand book

Our 5 Core Values: **Strong Body · Strong Mind · Strong Character · All Inclusive · Total Equality**

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | Framework (App Router, static export) |
| [pnpm](https://pnpm.io/) | Package manager |
| Vanilla CSS | Custom design system |
| GitHub Pages | Free static hosting |

---

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build static site
pnpm run build
```

The site runs at `http://localhost:3000` in development.

---

## Deployment

The site is automatically deployed to GitHub Pages on every push to `main` via the [deploy workflow](.github/workflows/deploy.yml).

The static build is output to `./out/` using Next.js's `output: 'export'` mode.

### Manual Deploy

```bash
git add .
git commit -m "your message"
git push origin main
```

GitHub Actions picks it up automatically.

---

## Project Structure

```
src/
  app/                  # Next.js App Router pages
    page.tsx            # Home page
    coaches/            # Coaching staff
    sponsors/           # Sponsors & sponsorship letter
    gallery/            # Photo and video gallery
    training/           # Training plans
    events/             # Race schedule
    blog/               # News and updates
    kickoff/            # Kickoff meeting details
    brand/              # Brand book
    join/               # Join / FAQ
  components/
    Navbar.tsx          # Site navigation
    AnnouncementBanner.tsx
    SponsorCarousel.tsx
    HomePageNav.tsx
public/
  images/               # Team photos, coach headshots, sponsors
    coaches/
    sponsors/
    2026_captains/
```

---

## Sponsors

To become a 2026 sponsor, contact:
- **Steve Stringham** — spinordie@gmail.com · 801-400-7886  
- **Randall Adams** — rjadams96@gmail.com · 801-837-2016

Use coupon code **LEHIMTB** on Training Peaks for free training plans.
