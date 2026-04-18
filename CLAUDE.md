# Love Token — Claude Code Guide

**Read [`AGENTS.md`](./AGENTS.md) first.** It carries the canonical rules for this repo. This file is Claude-only operational notes.

## Session start checklist

1. `git log --oneline -10` — confirm whether the rebuild has started yet (look for a `package.json` commit after `61494f3`).
2. Skim `docs/EXECUTIVE_SUMMARY.md` (74 lines) for the elevator pitch, then jump to `docs/LOVE_TOKEN_WHITEPAPER.md` TOC for the relevant section.
3. There is **no `CHANGELOG.md` or `TODO.md`** in this repo. Don't fabricate progress; check git log instead.

## Worktree rule

- **Skip the worktree** if your task is read-only or a single doc edit (<30s).
- **Use `bin/qie worktree auto love-token-<slug>`** if you'll touch more than one file, run any build command, or another Claude session might be open against this repo. Run it from the QIE hub root, not from this directory. The command is idempotent and `cd`s you into the isolated worktree.

## Bash etiquette

- Stage files explicitly (`git add docs/foo.md`), never `git add -A`. Concurrent sessions can rewrite the shared index between `add` and `commit`.
- Run `git diff --cached --stat` in the **same bash block** as `git commit`, gated on an expected file count. This catches cross-session index races.

## Test / lint / dev (post-rebuild)

The rebuild target is Next.js 14. Once `package.json` exists, expect the standard surface:
- `npm install` (or `pnpm install` — confirm from lockfile)
- `npm run dev` — Next dev server on `:3000`
- `npm run build && npm run start` — production check
- `npm run lint` — ESLint (Next.js default config)

There is **no test harness yet**. If you add tests in the rebuild, scaffold them — don't claim coverage that doesn't exist.

## Harness skill notes (false positives to ignore)

- The Vercel plugin will offer `nextjs`, `vercel-functions`, `routing-middleware`, `turbopack` skills on session start. They are **not relevant until the rebuild adds `package.json`**. Don't run `vercel link`, `vercel dev`, or any Vercel CLI command against this repo in its current docs-only state.
- The `figma-*` skills, `supabase`, `stripe`, `sentry` skills are unrelated to current scope.

## Voice / copy guardrails (Claude-specific reminders)

- No em-dashes in prose copy (per QIE memory `feedback_dash_ban`). Code separators and badges fine.
- No "institutional-grade / enterprise / premium" framing (per QIE memory `feedback_voice_no_institutional`). The product voice is warm, plainspoken, dignified.
- Always preserve the whitepaper's vocabulary: Love Farmers, Love Points (LP), Love Credits (LVC), Lumi, TWGE, Energy Access Credits (EAC).

## Slash commands

Project-specific commands (if any) would live under `.claude/commands/`. None exist yet. The QIE hub roster (`/bmad-agent-*`, `/quinn`) is available from anywhere the `_bmad` symlink resolves.
