# Scholar AI Landing Page

A pre-MVP landing page for Scholar AI v3.0 - an upcoming AI-powered study assistant for students.

## Purpose

This landing page exists to:
- Validate interest in the Scholar AI concept
- Collect waitlist emails from potential users
- Communicate the product vision clearly and honestly

**This is NOT the product.** This is only a landing page for idea validation.

## What This Is NOT

- ❌ No live AI chat
- ❌ No backend/API
- ❌ No database
- ❌ No authentication
- ❌ No demo functionality

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

1. Push this repository to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Deploy (zero configuration needed)

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
scholar-ai-landing/
├── public/
│   └── scholar-ai-graduation-cap.svg  # Logo
├── src/
│   └── app/
│       ├── layout.tsx    # Root layout with metadata
│       ├── page.tsx      # All landing page sections
│       └── globals.css   # Tailwind + custom styles
├── tailwind.config.ts    # Custom color palette
└── package.json
```

## Landing Page Sections

1. **Hero** — Headline, subhead, waitlist CTA
2. **How It Will Work** — 3-step conceptual flow
3. **Value Proposition** — 3 key benefits
4. **Waitlist Form** — Email collection (localStorage demo)
5. **Footer** — Description and disclaimer

## Waitlist Data

Currently stores emails in `localStorage` for demo purposes. For production, integrate with:
- [Formspree](https://formspree.io)
- [ConvertKit](https://convertkit.com)
- [Mailchimp](https://mailchimp.com)

## Accessibility

- WCAG AA contrast compliance
- Semantic HTML structure
- 44px minimum touch targets
- `prefers-reduced-motion` support
- Screen reader friendly (aria labels, roles)

## License

© 2024 Scholar AI. All rights reserved.
