# Solvely Design System

##Solvely笔试?
solvely笔试demo，包括拍照解题流程

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Friendly, encouraging, not condescending.** Talks to students as peers.
- **Short, active sentences.** "Snap. Solve. Understand."
- **First-person singular avoided** — speaks directly to the user ("you", "your question").
- **No jargon.** Math terms are exact (e.g. "quadratic") but UI copy is plain English.
- **Casing:** Sentence case for UI labels, ALLCAPS for small status chips (`QUADRATIC`, `DETECTED`).
- **Numbers in copy:** spelled out below ten ("3 free scans"), numerals for math.

### Sample copy patterns
- Headings: "Stuck on a homework question?" / "Take a picture of your question"
- CTAs: "Solve this →" / "Unlock full solution" / "Retake"
- Status: "1 question found" / "3 free scans left" / "SOLVELY IS THINKING"
- Tooltips: "Tip: one question per frame works best"

---

## VISUAL FOUNDATIONS

### Colors
| Token | Hex | Usage |
|---|---|---|
| `--navy` | `#000080` | Primary CTA, answer hero, dock button, active states |
| `--sky` | `#ADD8E6` | Accent, icons on navy, crop frame, badges |
| `--sky-soft` | `#E5F1F7` | Card backgrounds, chips, hover tints |
| `--snow` | `#FFFAFA` | App background (warm white, not pure) |
| `--slate` | `#6D8196` | Secondary text, muted icons, dividers |
| `--ink` | `#0A0A2A` | Primary text, headings |
| `--hairline` | `#ECEAE5` | Card borders, dividers |
| `--line` | `#D6E5EE` | Viewfinder card border |

**Color rule:** Navy is the only "loud" color. Everything else is supportive.
**No gradients** except the dock shadow and camera dark overlay. Never use rainbow or multi-stop brand gradients.

### Typography
| Role | Family | Weight | Size | Usage |
|---|---|---|---|---|
| Display heading | Inter | 700 | 30/36px, -0.75px | Screen titles, hero phrases |
| Section heading | Inter | 700 | 18-22px, -0.02em | Section names |
| UI label | Inter | 600 | 16px | Nav titles, card labels |
| Body | Inter | 500 | 13-14px | Descriptions, tips |
| Caption | Inter | 500 | 10-12px | Metadata, dates, status |
| Math/code | Geist Mono | 600-700 | 13-30px | All equations, detected text, answer display |
| Tab label | Inter | 700 (active) / 500 | 10px | Bottom nav |

**Tracking:** Display headings use -0.025em. No tracking on body.
**Line-height:** 36px on 30px display. 20px on 13-14px body.

### Spacing (8pt grid)
`4 · 6 · 8 · 10 · 12 · 14 · 16 · 20 · 24 · 28 · 32 · 40 · 48`

### Corner Radii
| Token | Value | Usage |
|---|---|---|
| `--r-xs` | 8px | Small chips, tags |
| `--r-sm` | 12px | Buttons (small), icon containers |
| `--r-md` | 18px | Cards, dock items |
| `--r-lg` | 22-24px | Main cards |
| `--r-xl` | 28px | Viewfinder, photo cards |
| `--r-pill` | 999px | Dock, streak pill, chips |
| `--r-phone` | 48px | iPhone frame |

### Shadows
- **sm:** `0 1px 2px rgba(10,10,42,.04), 0 4px 14px rgba(10,10,42,.06)` — inline cards
- **md:** `0 2px 8px rgba(10,10,42,.05), 0 18px 36px rgba(10,10,42,.10)` — elevated cards
- **cta:** `0 10px 24px rgba(0,0,128,.28)` — navy buttons
- **dock:** `0 8px 24px rgba(0,0,128,.12), 0 24px 60px rgba(0,0,128,.18)` — floating dock

### Surfaces & Cards
- **Default card:** white bg, `inset 0 0 0 1px #ECEAE5` (hairline border), `--r-lg`, shadow-sm
- **Sky tint card:** `#E5F1F7` bg, no border — chips, step bullets, thumbnails
- **Navy hero:** `#000080` bg, `--snow` text — final answer surface
- **Camera overlay:** `#0A0C1A` base, dark vignette radial gradient

### Animation
- Transitions: `200-300ms ease` for state changes
- Loading: pulse ring (pulsing box-shadow), blink dot, spinning step indicator
- Illustration: `bob` float (3.4s ease-in-out, -6px Y)
- No page transitions — snap between screens

### Icons
Single-stroke, 1.8px stroke weight, round caps and joins. No fills except sparkle (solid) and flame (solid). See `assets/` for SVGs.

### Camera / dark surfaces
Backdrop blur (`12px saturate(180%)`) for glass pills. Dark bg `#0A0C1A`. Tab bar uses `rgba(10,12,26,.85)` + blur.

---

## FILES IN THIS PROJECT

| File | Purpose |
|---|---|
| `README.md` | This file |
| `colors_and_type.css` | All CSS custom properties |
| `assets/` | Logo mark SVG, note icon SVGs, icon SVGs |
| `preview/` | Design System tab cards (colors, type, spacing, components, brand) |
| `ui_kits/mobile/` | Interactive mobile UI kit (Home, Camera, Confirm, Analyzing, Result) |
| `SKILL.md` | Agent skill definition |
| `proto-*.jsx` | Source JSX for the live interactive prototype |
| `Solvely Interactive Prototype.html` | Full interactive prototype |
