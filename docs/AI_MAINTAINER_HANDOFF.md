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
- Transfer truth: update this handoff and the evidence receipt when shared governance wording, privacy warnings, or public-surface guarantees change.

## Key Files

- `README.md`: public explanation of shared defaults.
- `SECURITY.md`: default security reporting guidance.
- `FUNDING.yml`: Sponsor metadata when present.
- Issue/PR templates if present.

## Required Checks

```bash
git diff --check
```

Also verify there are no secrets and no stale deleted-repo URLs before pushing.
