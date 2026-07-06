# Signature Design System

This is the public-safe shared UI/UX standard for current and future `shfqrkhn` public repos. It turns the portfolio into a coherent ecosystem without forcing every app to use identical components or visual density.

## Purpose

- Make every public app feel modern minimalist, utilitarian, professional, joyful, responsive, and part of one product ecosystem.
- Keep each app contextual: tournament simulation, AI workspace, financial planning aid, local utility suite, profile, and portfolio surfaces should look related but not interchangeable.
- Preserve OmniOS-style evidence discipline: product truth, execution truth, evidence truth, operations truth, transfer truth, currentness, claim boundaries, and safe handoff.
- Keep TDD/SDD and autonomous AI-assisted development first-class: tests and evidence gates must move with UI, state, workflow, and public-surface changes.
- Keep future repo intake expandable through reusable tokens, evidence gates, input-mode rules, and public-surface checks.

## Prime Rules

- Current repo files and tests outrank chat history, screenshots, memory, or design preference.
- UI must not block, overlap, trap focus, rely on browser JS popups, or require hover-only discovery for critical actions.
- After setup, every critical workflow must work with one available input mode: keyboard only, mouse/pointer only, touch only, or platform-limited input only.
- Public claims must be verified, limited, marked not run, blocked, or no-go. Do not let visible UI text imply unproven coverage.
- No GitHub Releases. Distribution is live Pages where applicable or Code > Download ZIP/current main repo ZIP.
- No private planning docs, future-project names, keys, PII, backups, exports, logs, scratch artifacts, or protected local folders may reach public repos or repo ZIPs.
- Dependencies and design resources must be source-backed, license-checked, tested, and worth the maintenance cost. MIT UI resources such as Uiverse, Open Props, Primer, Radix Colors, Pico CSS, Heroicons, Bootstrap Icons, Floating UI, or A11y Dialog are inspiration unless a concrete need justifies adopting code.

## Visual Language

- Use restrained depth, high-contrast surfaces, crisp hierarchy, and compact first screens that expose the actual app workflow rather than marketing copy.
- Prefer stable CSS custom properties for color, spacing, radius, shadow, focus, status, and motion tokens.
- Keep cards at 8px radius or less unless the repo already has a coherent established style.
- Avoid one-note palettes. Pair each app's contextual accent with neutral surfaces and secondary status colors.
- Use icons for compact tool actions where an established icon exists; pair text with icons for unfamiliar or destructive actions.
- Do not scale font size directly with viewport width. Use stable type steps, wrapping, and container constraints.
- Define stable dimensions for boards, grids, toolbars, counters, tiles, cards, and dense panels so dynamic labels, loading states, and hover/focus states do not resize the layout.
- Do not use decorative blobs, noisy gradients, or copied showcase components when the app needs scanning, comparison, or repeated use.

## Interaction Language

- Navigation must be obvious, shallow, and reversible. The first screen should be the usable app or public routing surface.
- Use inline validation, nonblocking status regions, in-app confirmations, and undo/recovery paths instead of browser alerts, confirms, prompts, or blocking overlays.
- Critical actions must expose focus, click/tap, keyboard activation, visible state, and clear recovery guidance.
- Destructive or high-impact local actions need in-app confirmation that still works with keyboard only, pointer only, touch only, and platform-limited input.
- Motion must be reduced-motion safe and never required for understanding state.

## Reliability Language

- Public apps should be self-checking on startup and before risky local mutations.
- State must be explicit: healthy, degraded, blocked, unsafe, done, or not run.
- Local-first apps should include export/import validation, reset or safe mode where useful, corrupt-state handling, and clear diagnostics.
- Automated or source-backed data flows must preserve provenance, freshness, failure behavior, and no-invention boundaries.
- Complexity is acceptable only when it improves resilience, usability, source truth, privacy, maintainability, or repairability.

## App Adaptation

| Repo type | Adaptation |
| --- | --- |
| FIFA-WC-Sim | Dense tournament dashboard; source-backed match facts; no betting, odds, markets, invented data, future leakage, or raw/calibrated confusion. |
| ModelTab | BYOK AI workspace; calm provider setup; no bundled keys, backend, telemetry, paid fallback, free-forever claims, or key leakage in normal export. |
| nFIRE | Planning-aid dashboard; explicit assumptions, year-by-year explainability, artifact consistency, no advice, and no eligibility determinations. |
| LocalFirstApps | Compact utility suite; local-first storage; no backend, accounts, OAuth, API keys, silent upload, or standalone retired surfaces. |
| Portfolio/profile/community files | Concise public routing, generic governance, and sponsor/discovery links without private plans or app-like clutter. |

## Future Repo Intake

Before a new public repo or app surface adopts this design system, record:

- product contract, non-goals, privacy boundary, and distribution path;
- contextual accent and density level;
- first-screen critical workflow;
- required input modes and degraded HID behavior;
- state model, recovery path, and safe reset/export/import behavior where relevant;
- evidence class for every public claim;
- protected-path, no-Releases, repo ZIP, accessibility, and live-surface gates;
- local handoff, evidence receipt, and static regression checks that enforce the shared standard before public UI/UX changes ship;
- handoff text that lets a future maintainer continue from current files only.

## Minimum Evidence Gate

For every public-facing UI/UX change:

- `git status --short --ignored`
- upstream delta check
- `gh release list --limit 5` returns no releases
- documented repo gate, such as `npm run qa`
- `git diff --check`
- protected-path scan
- repo ZIP/archive scan where the repo exposes downloadable runtime files
- responsive review for no horizontal overflow and no component overlap
- keyboard-only, mouse/pointer-only, touch-only, and platform-limited input review for critical workflows
- live Pages check after runtime or public routing changes
- safe-to-publish table using `PASS`, `PASS_WITH_LIMITATIONS`, `NOT_RUN`, `BLOCKED`, or `NO_GO`
