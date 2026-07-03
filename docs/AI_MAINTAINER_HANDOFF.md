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

