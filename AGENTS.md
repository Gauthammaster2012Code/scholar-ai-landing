# AGENTS.md - AI Agent Guidelines for Scholar AI Landing Page

## Project Context

This is a **pre-MVP landing page** for Scholar AI v3.0, an upcoming AI-powered study assistant. The product does not exist yet — this page is for idea validation and waitlist collection only.

## Critical Rules for AI Agents

### ❌ DO NOT

1. **Add features that imply a working product**
   - No AI chat interfaces
   - No demo functionality
   - No "Try now" or "Get started" CTAs
   - No fake testimonials or user counts

2. **Use misleading copy**
   - Forbidden phrases: "Try now", "Watch demo", "Live", "Get instant access"
   - No present-tense claims about product functionality
   - No fake social proof (ratings, user counts, testimonials)

3. **Add backend functionality**
   - No APIs
   - No databases
   - No authentication
   - No server-side logic

4. **Use trendy or informal language**
   - No "Gen Z" slang
   - No meme references
   - No overly playful copy

### ✅ DO

1. **Use future-oriented language**
   - "Scholar AI will help..."
   - "An upcoming study assistant..."
   - "Coming 2026"

2. **Maintain honesty**
   - Clearly communicate this is pre-launch
   - Include disclaimer in footer
   - Be transparent about development status

3. **Prioritize accessibility**
   - WCAG AA contrast (4.5:1 minimum)
   - Semantic HTML (`<section>`, `<article>`, `<footer>`)
   - 44px minimum touch targets
   - Support `prefers-reduced-motion`
   - Include aria labels and roles

4. **Keep it simple**
   - Minimal dependencies
   - Clean, readable code
   - Mobile-first responsive design

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## File Structure

```
src/app/
├── layout.tsx    # Root layout, metadata, fonts
├── page.tsx      # All 5 sections in one file
└── globals.css   # Tailwind + custom components
```

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#6366f1` | CTAs, links, accents |
| `accent` | `#14b8a6` | Success states |
| `background` | `#0f172a` | Page background |
| `text-primary` | `#ffffff` | Headings |
| `text-secondary` | `#cbd5e1` | Body text |
| `surface` | `rgba(255,255,255,0.1)` | Cards |

## Landing Page Sections

1. **Hero** — Logo, headline, subhead, CTA, trust line
2. **How It Will Work** — 3 conceptual steps (future tense)
3. **Value Proposition** — 3 benefits (max)
4. **Waitlist Form** — Email input, success state
5. **Footer** — Description, disclaimer, copyright

## Waitlist Implementation

Currently uses `localStorage` for demo. For production:
- Integrate Formspree, ConvertKit, or Mailchimp
- No backend required

## Testing Checklist

Before any changes:
- [ ] All copy uses future-oriented language
- [ ] No forbidden phrases present
- [ ] Contrast meets WCAG AA
- [ ] Touch targets ≥ 44px
- [ ] Reduced motion respected
- [ ] Mobile responsive
- [ ] Form validates email
- [ ] Success state displays correctly

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Run ESLint
```
