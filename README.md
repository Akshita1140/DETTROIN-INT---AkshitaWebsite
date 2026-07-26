# Excellence International School — Website

## Submission Details

| Field | Detail |
|---|---|
| Full Name | *Akshita Goyal* |
| Email Address | *akshitagoyalw123@gmail.com* |
| GitHub Username | [Akshita1140](https://github.com/Akshita1140) |
| Selected Website | Excellence International School, Aligarh — redesigned from a Google Stitch concept |
| Live Demo Link | [dettroin-int-akshita-website.vercel.app](https://dettroin-int-akshita-website.vercel.app/) |
| Technologies Used | React 18, Vite, Tailwind CSS, React Router, shadcn-style components (class-variance-authority, tailwind-merge), Lucide React |
| Key Improvements Made | Converted static Stitch mockups into a fully functional multi-page React app with client-side routing; made the testimonial carousel, FAQ accordion, and enquiry form interactive with real React state; built a `SafeImage` component with automatic fallback so no image can ever break; added a Vercel rewrite config so all routes work on direct load/refresh |

A modern, responsive website for **Excellence International School, Aligarh** — built with React, Vite, and Tailwind CSS, styled around a custom "Enlightened Tradition" design system.

**Live site:** [dettroin-int-akshita-website.vercel.app](https://dettroin-int-akshita-website.vercel.app/)

---

## Design Intent

The core idea behind this design is a **Modern-Traditional Hybrid**: the school should feel like a prestigious institution where heritage meets innovation — not a generic ed-tech template, and not a purely historical brochure either.

That tension shows up in three deliberate choices:

**1. A serif/sans-serif counterpoint**
Headings use **EB Garamond**, a classical serif that carries literary and academic weight — it signals heritage and authority. Body text and UI labels use **Hanken Grotesk**, a sharp, contemporary sans-serif — it signals the school's forward motion and technological seriousness. Neither typeface dominates; they're used to represent two things the school wants to be at once: rooted and modern.

**2. A palette drawn from the campus itself, not a color wheel**
- **Aligarh Red `#8B2323`** — a deep, scholarly oxblood inspired by AMU brickwork. Used for navigation, key headings, and primary actions.
- **Excellence Gold `#D4AF37`** — a metallic accent for highlights, borders, and status indicators like "Admissions Open."
- **Heritage Cream `#F9F6F0`** — a warm neutral for section backgrounds, softer than pure white.
- **Modern White `#FFFFFF`** — the dominant surface color, kept clean and spacious to feel premium rather than busy.

Red is reserved for high-importance actions; gold for secondary accents; everything else recedes into generous whitespace so the content — and the two "important" colors — get room to breathe.

**3. Structure over decoration**
Layout follows a fixed 12-column grid capped at 1280px, so text lines never get uncomfortably long on wide screens. Motifs like the jali (lattice) pattern and hero clip-paths reference Islamic architectural heritage, but only ever as background texture — never competing with the content for attention.

The result should read as: *elite, stable, culturally proud, and unmistakably real* — not another stock school template.

---

## Design System Stats

| Category | Detail |
|---|---|
| Typefaces | 2 (EB Garamond — serif headings, Hanken Grotesk — sans body/UI) |
| Type scale | 8 sizes, from `label-md` (14px) to `headline-xl` (48px) |
| Core palette | 4 signature colors + a full Material-derived surface/tertiary system (40+ tokens total) |
| Spacing scale | 6 tokens (`stack-sm` 8px → `section-padding-desktop` 120px) |
| Max content width | 1280px, 24px gutters, 12-column grid |
| Border radius | 4 steps, 0.125rem → full pill |
| Pages | 4 — Home, Academics, Admissions, Heritage & Campus Life |
| Production bundle | ~250KB JS / ~75KB gzipped, ~30KB CSS / ~6KB gzipped |

---

## Tech Stack

- **React 18** + **Vite** — fast dev server, lean production build
- **Tailwind CSS** — utility-first styling, fully configured with the custom design tokens above
- **React Router** — client-side routing across all 4 pages
- **shadcn-style components** (`class-variance-authority`, `tailwind-merge`) — the `Button` component follows shadcn conventions without the full CLI overhead
- **Lucide React** — icon set for nav, footer, and interactive sections

## Notable Implementation Details

- **`SafeImage` component & `useSafeImage` hook** (`src/components/SafeImage.jsx`) — every image has a topically relevant primary source with an automatic, guaranteed-uptime fallback if the primary ever fails to load. No broken image icons, ever.
- **Interactive elements built as real React state**, not static markup: the testimonial carousel, the admissions enquiry form, and the FAQ accordion all use `useState`/`useEffect` rather than being purely visual.
- **`vercel.json` rewrite rule** ensures client-side routes (`/academics`, `/admissions`, `/heritage`) don't 404 on direct load or refresh.

---

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Output is written to `dist/`.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── SafeImage.jsx
│   └── ui/
│       └── button.jsx
├── pages/
│   ├── Home.jsx
│   ├── Academics.jsx
│   ├── Admissions.jsx
│   └── Heritage.jsx
├── lib/
│   └── utils.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## Author

Built by **Akshita** as part of an internship assignment — designed in Google Stitch, engineered in React.