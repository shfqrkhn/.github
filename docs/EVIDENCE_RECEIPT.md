# Evidence Receipt

This public-safe receipt keeps shared community-file claims tied to evidence instead of chat history.

## Evidence Classes

- `PASS`: directly covered by current files, tests, or checks.
- `PASS_WITH_LIMITATIONS`: true only within the stated scope.
- `NOT_RUN`: not checked in the current pass.
- `BLOCKED`: cannot be checked until an external condition changes.
- `NO_GO`: failed or unsafe; do not publish until fixed.

## Claim Boundaries

| Area | Class | Evidence | Limit |
| --- | --- | --- | --- |
| Generic public community files | `PASS_WITH_LIMITATIONS` | issue templates, PR template, maintainer handoff | Do not add repo-specific product requirements here. |
| Secret/private-data warnings | `PASS_WITH_LIMITATIONS` | issue and PR templates | Templates reduce risk but cannot prevent user-submitted secrets by themselves. |
| Private planning exclusion | `PASS_WITH_LIMITATIONS` | maintainer handoff | Recheck no private docs, future-project names, PII, keys, exports, or backups are added. |

## Required Before Public-Facing Change

- `git status --short --ignored`
- `git rev-list --left-right --count HEAD..."@{u}"`
- `git diff --check`
- protected-path scan
- template review for generic, public-safe wording
