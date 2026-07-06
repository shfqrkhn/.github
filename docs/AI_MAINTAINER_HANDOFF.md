# AI Maintainer Handoff

Last updated: 2026-07-03.
Repo: `D:\VSCode\GH\.github`.

Treat this as a public-safe continuation map. Re-read current files before editing.

## Mission

Maintain default community health files for the active `shfqrkhn` project portfolio.

## Product Contract

- Keep shared security, issue, pull request, and contribution guidance concise.
- Avoid repo-specific requirements that belong in individual repos.
- Retired/deleted repositories are out of normal support; route reports to the current active repo or portfolio.
- Keep Sponsor link visible where appropriate.
- Do not leak private planning drafts, offline handoffs, or unpublished project names into default public issue/security guidance.

## OmniOS Transfer Contract

- Product truth: generic public community/security defaults, not repo-specific product policy.
- Execution truth: preserve issue-template, PR-template, funding, and public-safe wording checks before publishing.
- Evidence truth: use `docs/EVIDENCE_RECEIPT.md`, template review, protected-path scans, and GitHub alert checks; public claims must stay within `PASS` or `PASS_WITH_LIMITATIONS`.
- Operations truth: default files apply across public repos; GitHub Releases stay absent.
- Reliability truth: keep shared governance self-checking, recovery-oriented, state-explicit, maintainable, simple, one-input accessible, and TDD/SDD friendly without adding app-specific complexity.
- Design truth: keep shared public guidance modern minimalist, utilitarian, professional, joyful, responsive, and concise; treat MIT UI/design resources as inspiration only for app repos, and reject browser JS popups, blocking surfaces, inaccessible links, noisy decoration, or arbitrary component copy-paste.
- Single input truth: public links, templates, forms, and future interactive shared guidance must remain fully operable by keyboard only, mouse/pointer only, touch only, or platform-limited input only; never require a combined input-mode path.
- Transfer truth: update this handoff and the evidence receipt when shared governance wording, privacy warnings, or public-surface guarantees change.

## Doctrine Delta Decision

- After incidents, rescue runs, maturity passes, or repeated failures, classify reusable lessons as `promote`, `reject`, `quarantine`, or `keep_local`.
- Promote only source-backed, reusable, non-secret lessons that strengthen a gate, checklist, source rule, or failure guard without weakening public-surface safety.
- Keep private, project-specific, speculative, or unverified lessons out of public repos unless the user explicitly approves publication.

## Key Files

- `README.md`: public explanation of shared defaults.
- `SECURITY.md`: default security reporting guidance.
- `FUNDING.yml`: Sponsor metadata when present.
- Issue/PR templates if present.

## Required Checks

```bash
npm run qa
git diff --check
```

Also verify there are no secrets and no stale deleted-repo URLs before pushing.
