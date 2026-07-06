# Evidence Receipt

This public-safe receipt keeps shared community-file claims tied to evidence instead of chat history.

## Evidence Classes

- `PASS`: directly covered by current files, tests, or checks.
- `PASS_WITH_LIMITATIONS`: true only within the stated scope.
- `NOT_RUN`: not checked in the current pass.
- `BLOCKED`: cannot be checked until an external condition changes.
- `NO_GO`: failed or unsafe; do not publish until fixed.

## Claim Firewall Invariant

- Every public technical, security, privacy, download, support, or governance claim must map to a `Claim Boundaries` row or be added with evidence before publication.
- Public claims may not exceed `PASS` or `PASS_WITH_LIMITATIONS`; `NOT_RUN`, `BLOCKED`, and `NO_GO` items must stay unpublished or be labeled as unavailable.
- Volatile GitHub settings, alerts, workflows, and policy claims must be rechecked from current repo state before reliance.

## Currentness Watchdog

- Recheck claim evidence before public-facing changes, not on a fixed calendar.
- If current evidence is stale, missing, inaccessible, or contradicted by repo/GitHub state, downgrade the affected claim to `NOT_RUN`, `BLOCKED`, or `NO_GO`.
- Do not preserve old status snapshots as proof after templates, workflows, alerts, branch protection, or public governance wording changes.

## Safe-To-Publish Receipt

- Mark this repo safe to publish only when the current pass proves a clean synced tree, no GitHub Releases, no protected tracked paths, no open secret/dependabot/code-scanning alerts or a documented code-scanning not-applicable/no-analysis state, passing required gates, and generic public-safe wording.
- If any proof is missing, stale, or contradicted by GitHub/repo state, record the repo as `PASS_WITH_LIMITATIONS`, `NOT_RUN`, `BLOCKED`, or `NO_GO` instead of safe.
- The final status table must name remaining risks rather than implying safety from silence.

## Default Community Scope Evidence

- Default issue, PR, support, security, and profile files must stay generic; repo-specific product contracts belong in each app repo.
- Templates may warn users not to submit secrets, private data, or unsupported retired-app reports, but they must not request credentials, private exports, local backups, or sensitive personal data.
- Retired, absorbed, deleted, or private projects should be routed to current public repos or the portfolio only when current repo state proves that public surface exists.

## Mission-Critical Reliability Evidence

- Shared governance files must improve self-checking, crash recovery, clear state handling, maintainable code, simple UI flow, one-input accessibility, autonomous AI-assisted development, and TDD/SDD discipline without adding repo-specific product scope.
- Public templates and policies must route failures to explicit evidence, reproduction steps, current files, and safe in-app or GitHub-native recovery paths instead of browser popup workflows or private-data collection.
- Remove or reject shared guidance that increases complexity without improving resilience, usability, security, or public maintainability.

## Single Input Directive Evidence

- Public links, templates, forms, and any future interactive shared guidance must stay operable with one available input mode: keyboard only, mouse/pointer only, touch only, or platform-limited input only.
- No public surface may require a combined keyboard-plus-pointer, keyboard-plus-touch, hover-plus-keyboard, drag-plus-keyboard, or browser-popup path.
- Links and controls must expose visible focus, click/tap alternatives, platform text-entry support where text is unavoidable, and nonblocking status or recovery guidance for degraded HID conditions.
- If a public surface lacks direct input-mode coverage, label it `PASS_WITH_LIMITATIONS` or `NOT_RUN`.

## Design Language Evidence

- Shared public guidance must stay modern minimalist, utilitarian, professional, joyful, responsive, and concise with clear links, accessible templates, no noisy decoration, and no component overlap.
- Signature Ecosystem Evidence: `docs/SIGNATURE_DESIGN_SYSTEM.md` is the canonical shared signature design system for current and future public repos; app repos adapt it to their product contracts rather than copying components blindly.
- MIT UI libraries/resources are inspiration sources for app or portfolio repos only unless a source-backed, license-checked, tested need justifies a dependency.
- Reject browser JS popups, blocking surfaces, arbitrary component copy-paste, mixed visual systems, unbounded animation, external CDNs, or styling that makes shared guidance less scannable.

## Claim Boundaries

| Area | Class | Evidence | Limit |
| --- | --- | --- | --- |
| Generic public community files | `PASS_WITH_LIMITATIONS` | issue templates, PR template, maintainer handoff, default community scope evidence | Do not add repo-specific product requirements here. |
| Secret/private-data warnings | `PASS_WITH_LIMITATIONS` | issue and PR templates | Templates reduce risk but cannot prevent user-submitted secrets by themselves. |
| Private planning exclusion | `PASS_WITH_LIMITATIONS` | maintainer handoff, `git archive` | Recheck no private docs, future-project names, PII, keys, exports, or backups are added. |
| Mission-critical reliability | `PASS_WITH_LIMITATIONS` | mission-critical reliability evidence, static tests, template review | This repo can enforce shared process guardrails only; app-specific runtime recovery belongs in app repos. |
| Single input operation | `PASS_WITH_LIMITATIONS` | single input directive evidence, template review, no browser popup policy | Does not certify every GitHub rendering surface, OS assistive technology, or unusual HID/browser pairing. |
| Design language/UI safety | `PASS_WITH_LIMITATIONS` | handoff/evidence docs, static tests, manual template review where run | Does not certify every GitHub rendering surface; shared guidance should stay concise rather than app-like. |
| Signature ecosystem fit | `PASS_WITH_LIMITATIONS` | `docs/SIGNATURE_DESIGN_SYSTEM.md`, handoff/evidence docs, static tests | Does not require identical UI components; each repo must stay contextual to its product contract. |

## Required Before Public-Facing Change

- `git status --short --ignored`
- `git rev-list --left-right --count 'HEAD...@{u}'`
- `gh release list --limit 5` returns no releases
- review `docs/SIGNATURE_DESIGN_SYSTEM.md` for design, input, reliability, repo-ZIP, and public-surface fit
- `npm run qa`
- `git diff --check`
- `git archive --format=tar HEAD`
- protected-path scan
- template review for generic, public-safe wording
