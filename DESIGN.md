# Scholar AI v3.0 Landing Page - Design & Content Guidance

## 1. High-Level Design Layout
**Goal:** clarity and immediate value (< 5s).
**Style:** Modern, curious, energetic. Think "Apple meets Duolingo."

### **Section 1: The Hero (Above the Fold)**
*   **Layout:** Split screen (Desktop) / Stacked (Mobile).
*   **Left:** Strong Headline, Subhead, Primary CTA, Trust Badge ("Used by 10k+ students").
*   **Right:** Dynamic Visual. A high-fidelity glassmorphic card showing a chat interface with the AI giving a clear, step-by-step answer.
*   **Background:** Deep midnight blue/purple mesh gradient to make text pop vs white cards.

### **Section 2: Social Proof Ticker**
*   **Content:** Logos of schools or "Featured in" (TechCrunch, etc.) or drifting user avatars with short quotes like "Lifesaver!", "Got an A!".
*   **Style:** Monochrome or low-opacity logos to not distract from the hero.

### **Section 3: The "How It Works" (Value Props)**
*   **Layout:** 3-Column Grid (Cards).
*   **Interaction:** Hovering over a card creates a glow effect and slightly tilts it (3D transform).
*   **Content:** Focus on *Speed*, *Clarity*, and *Learning*.


### **Section 5: Footer**
*   **Layout:** Simple hierarchy. Minimal links.
*   **Socials:** Big, friendly icons (TikTok, Instagram focus).

---

## 2. Suggested Text Copy

### **Headline**
> **"Homework Help, Designed for How You Learn."**
*(Alternative: "Master Any Subject in Seconds with Scholar AI.")*

### **Subheading**
> "Stuck on calculus or history? Type in your question and get instant, step-by-step explanations that actually make sense. No textbooks, no confusion."

### **Value Proposition Bullets**
1.  **Instant Answers:** "Just type or paste your question. We handle the math (and the history, and the science)."
2.  **Simple Explanations:** "Complex terms broken down into simple, bite-sized language."
3.  **24/7 Tutor:** "Late-night study session? We’re awake when your teachers aren’t."

### **Button / CTA**
*   **Primary:** "Start Learning for Free"
*   **Secondary:** "See Examples"

### **Trust Elements**
*   "Trusted by 50,000+ Students"
*   "4.9/5 Star Rating on App Store"

---

## 3. Suggested UI Decisions

### **Color Palette Recommendation**
*   **Primary (Brand):** `Electric Indigo` (#6366f1) - Energetic, digital.
*   **Secondary (Accent):** `Neon Teal` (#14b8a6) - For success states and fresh highlights.
*   **Background:** `Deep Space` (#0f172a) - rich dark mode base.
*   **Text:** `White` (#ffffff) for headings, `Stardust Grey` (#cbd5e1) for body.
*   **Surface:** Glassmorphism (White at 10% opacity, blur 12px) for cards.

### **Typography Scale**
*   **Headings:** *Outfit* or *Clash Display*. Bold, quirky, geometric.
    *   H1: 3.5rem (Desktop), 2.5rem (Mobile).
*   **Body:** *Inter* or *DM Sans*. Highly readable, clean.
    *   Body: 1.125rem (18px) - slightly larger for easy scanning.

### **Visual Components**
*   **Icons:** Thick-outline, colorful icons (3D style or "Memphis" style flat icons).
*   **Illustrations:** Abstract 3D shapes (spheres, cubes) floating in the background to add depth.
*   **Buttons:** Pill-shaped with a subtle inner glow (inset shadow) and gradient border.

### **Layout Grid**
*   **Desktop:** 12-column grid. Max-width 1200px.
*   **Mobile:** 4-column grid. 20px margins.
*   **Spacing:** Generous whitespace (80px+ between sections) to prevent cognitive overload.

---

## 4. Accessibility Considerations
1.  **Contrast:** Ensure `Electric Indigo` on `Deep Space` meets WCAG AA standards (4.5:1). Use lighter shades for text if needed.
2.  **Motion:** "Reduce Motion" media query support. If user prefers reduced motion, stop the floating background shapes.
3.  **Screen Readers:** All icons require `aria-label`. Ensure high contrast for all text elements.
4.  **Touch Targets:** All buttons must be at least 44x44px for easy mobile tapping.

---

## 5. Why This Works
*   **Speed:** The "Hero" immediately tells them *what* it is (Homework help) and *who* it's for (Students).
*   **Relatability:** The language ("Late-night study") speaks directly to the student experience, removing the friction of "boring educational tools."
*   **Visual Trust:** High-quality 3D visuals and glassmorphism signal "Modern Tech," which implies the AI is smarter/newer than competitors.
*   **Z-Pattern:** The eye flows from Headline -> Visual -> CTA naturally.

---

## 6. Visual Inspiration
*   **Ref 1:** [Linear.app](https://linear.app) (Dark mode, glow effects, precision).
*   **Ref 2:** [Duolingo](https://duolingo.com) (Gamification, friendly rounded buttons).
*   **Ref 3:** [Cash App](https://cash.app) (Bold typography, floating 3D elements, Gen Z appeal).
