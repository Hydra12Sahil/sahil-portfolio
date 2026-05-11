# Design Brief

## Direction

Sahil Analytics Portfolio — Bold, modern tech aesthetic showcasing data analyst expertise with confidence and clarity.

## Tone

Premium SaaS tech (like Linear, Vercel) with editorial clarity and data-driven confidence — minimalist but not sterile.

## Differentiation

Animated skill bars with data visualization aesthetic; electric teal accents inspire analytics rigor; deep navy foundation conveys technical depth.

## Color Palette

| Token      | OKLCH               | Role                           |
| ---------- | ------------------- | ------------------------------ |
| background | 0.11 0.01 260       | Deep navy, dark mode primary   |
| foreground | 0.95 0.01 260       | Text on dark, high contrast    |
| card       | 0.16 0.015 260      | Charcoal surfaces, slightly elevated |
| primary    | 0.72 0.2 190        | Cyan accent, highlights        |
| accent     | 0.68 0.22 155       | Electric teal, CTAs, data viz  |
| muted      | 0.22 0.02 260       | Secondary surfaces             |
| destructive | 0.55 0.2 25        | Red action, error states       |

## Typography

- Display: Space Grotesk — hero headlines, section titles, technical confidence
- Body: DM Sans — paragraphs, descriptions, UI labels, clarity
- Scale: hero `text-6xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-4xl font-bold tracking-tight`, label `text-sm font-semibold tracking-widest uppercase`, body `text-base leading-relaxed`

## Elevation & Depth

Subtle layer approach: background (navy), card (charcoal +0.05L), elevated surfaces (0.19L with soft shadow). No harsh shadows; use ambient blur and teal glow accents sparingly on interactive elements.

## Structural Zones

| Zone    | Background           | Border         | Notes                            |
| ------- | -------------------- | -------------- | -------------------------------- |
| Header  | background with fade | subtle teal    | Minimal, logo + nav fade        |
| Hero    | gradient navy→charcoal | —             | Full viewport, centered text    |
| Content | background alternating | border-subtle | Spacious, teal accent on cards |
| Footer  | background           | border-top     | Minimal, links only             |

## Spacing & Rhythm

Spacious rhythm (gap-8, gap-12 between sections); project cards use gap-4 internally; micro-spacing on buttons (px-4 py-2). Breathe room for typography hierarchy and focus.

## Component Patterns

- Buttons: teal accent background, dark text, rounded-md, hover with slight glow and scale
- Cards: dark charcoal (0.16L), rounded-md, subtle border-teal on hover, shadow-elevated
- Badges: small, rounded-full, dark muted background, light text, uppercase tracking

## Motion

- Entrance: fade-in + slide-up on scroll (0.5–0.6s ease-out), staggered project cards
- Hover: buttons scale-105 + shadow-accent glow (0.3s smooth), cards border-teal + elevate
- Decorative: skill bars animate left-to-right on first load (1s staggered, 0.2s intervals)

## Constraints

- Dark mode always enabled; no light mode toggle (focus intensifies)
- Teal accent used sparingly (buttons, highlights, skill bars only—not as background)
- No full-page gradients; gradient reserved for hero only
- Minimal shadows; prefer teal glow for accent emphasis

## Signature Detail

Animated skill bars that fill left-to-right on page load, mimicking data pipeline fills or analytics dashboards — reinforces data analyst identity and delights on first interaction.
