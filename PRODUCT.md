## Design Context

### Users
**Primary**: Community organizers — pastors, school administrators, team coaches, PTA chairs, club leaders — evaluating Village as a tool for their group. They're typically frustrated with SignUpGenius (ads, confusing UX, required participant accounts) and arriving with a specific pain point to solve.
**Secondary**: Curious participants who followed a link and are now exploring the product.

**Context**: Browsed on phone or desktop. Often mid-planning season, slightly frustrated. The job to be done: "find something cleaner than what I'm using now."

### Brand Personality
**Three words**: Friendly, clean, playful

**Emotional goal**: Visitors should feel relief first ("this solves my SignUpGenius problem"), then delight ("this actually looks fun to use"), then confidence ("I can trust this for my community").

**Voice**: Warm and direct. Like a helpful neighbor who also happens to be good with software. Not corporate, not startup-bro, not cute-to-a-fault.

### Aesthetic Direction
**Theme**: Light mode. Community tools are used in daylight — at a desk, on a phone between meetings, at a school office.

**Visual tone**: Approachable and a bit playful, but not childish. The green (#16a34a) is the heart of the brand — growth, community, health. Village Live (magenta) and Village Venues (orange) are distinct sub-products with their own color identities.

**Fonts**:
- `font-logo` = Nunito — rounded, friendly, the brand voice
- `font-sans` = Noto Sans — clean, readable body text
- `font-signature` = Caveat — handwritten, used sparingly for personality moments

**What it should NOT feel like**: Enterprise SaaS, dark-mode developer tool, generic AI template, anything that looks like it charges $99/month.

**Established patterns (locked in)**:
- MagicCard components with gradient borders (from Magic UI)
- Animated gradient text (the "fun!" hero text — established brand moment)
- Confetti button on hero CTA
- Motion/Framer Motion stagger animations on page load
- Three distinct color systems: green (Village), magenta (Live), orange (Venues)

### Design Principles

1. **Relief before delight** — Solve the problem first, then surprise them. Lead with clarity, earn playfulness.
2. **Left-aligned on mobile, centered on desktop** — Mobile is personal and scannable; center on wider screens where it creates balance. Pattern: left on `< md`, centered on `md:`.
3. **Consistent horizontal rhythm** — All sections should have uniform horizontal padding on mobile. No section should feel like it has dramatically more or less breathing room than its neighbors.
4. **Spacing creates hierarchy** — Don't treat all vertical gaps equally. The section order matters; use spacing variation to guide the eye through the page narrative.
5. **Playfulness is earned** — Use the Caveat font, confetti, and emoji sparingly. One personality moment per section is plenty. Restraint makes the playful bits land harder.
