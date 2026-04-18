# Love Token

Light-Brands Love Token.

<!-- BEGIN QIE DOCTRINE -->
<!-- This file's doctrine section is managed by `bin/qie doctrine apply`. -->
<!-- Manual content above/below the markers is preserved on re-apply. -->
<!-- Regenerate with: bin/qie doctrine apply --project love-token -->

## Stack

- Documentation / content repo (no build-time compilation)
- Markdown source of truth

## Layout

```
README.md         Entry point
docs/             Long-form docs (if present)
content/          Source markdown (if present)
```

## Conventions

- **One topic per file.** When a page crosses ~500 lines, split by H2 section.
- **Links are relative and stable.** Use `./path/to/file.md`, not absolute URLs for internal content.
- **Front matter only where needed** (for tooling that consumes it, like site generators).
- **Images live in `assets/` or `public/`** next to the docs, never inlined as base64.

## Commands

(No build commands. This is markdown.)

## Change tracking

- `CHANGELOG.md` entries optional for docs-only repos; commit messages often suffice.

## Multi-session note (cross-cutting rule from QIE hub)

Before modifying files in this repo, Claude sessions run `bin/qie worktree auto <slug>` once from the QIE hub so each session works in an isolated worktree and the shared `.git/index` doesn't race. Worktrees land at `clients/light-brands/.worktrees/love-token--<slug>/` and are swept automatically after 7 days of inactivity unless they hold unpushed or unmerged work.

Full directive: see the QIE hub `CLAUDE.md` "Multi-Session Worktree Isolation" section.

## Secrets

Never log personal information. Use generic categories. Never commit `.env*.local`, API keys, tokens, passwords, or customer data. Repo-wide secrets go in `.env.local` (gitignored); shared docs go in `.env.example`.

<!-- END QIE DOCTRINE -->
