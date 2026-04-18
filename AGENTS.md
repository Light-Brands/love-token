# Love Token — Agent Doctrine

## What this is

Love Token is the consumer web platform for **The World's Greatest Experiment (TWGE)** — a "Love Economy" where verified meditation generates a local-circulating, donor-backed digital currency for underserved communities. The repo currently holds **docs only**: the previous Next.js 14 site was deleted in commit `61494f3` ("Remove web platform for full rebuild — preserve docs only", 2026-03-06). The next session that adds code is doing a **greenfield rebuild** against the spec already in `docs/`.

## Stack

- **Target stack (per `docs/EXECUTIVE_SUMMARY.md` and whitepaper §10):** Next.js 14 / React 18 / TypeScript / Tailwind CSS / Framer Motion / Lucide icons. App Router (`app/`).
- **Backend:** Not built. Whitepaper §10 specifies API gateway + ledger service + auth (RBAC) + redemption + analytics, but the rebuild is currently a marketing/content site. Do not invent a backend without TWGE sign-off.
- **No blockchain in this MVP.** Whitepaper §3 explicitly forbids it (LP/LVC are tracked units, not on-chain). Phase 4 ("Love Coin") is future. Don't pre-build it.

## Where things live

```
docs/
  LOVE_TOKEN_WHITEPAPER.md          Source of truth. 1088 lines, 19 sections. Read TOC first.
  Love App Overviw - Dan Lawless .docx.md   Founder-authored vision + dev framing. Tradeoff rules in §4.
  WEBSITE_EXPANSION_PLAN.md         Per-page content map for the rebuild (home, about, how-it-works, etc).
  EXECUTIVE_SUMMARY.md              74-line elevator pitch. Good for headers/meta.
.gitignore                          Standard Next.js + `_bmad` symlink ignore.
```

When the rebuild begins, restore the App Router shape that previously lived here (see `git show 61494f3 --stat`): `app/{about,communities,energy,faq,how-it-works,impact,join,meditate,roadmap,roles,whitepaper}/`, `components/{layout,lumi,ui,icons}/`, `lib/utils.ts`, `public/images/`. The pre-deletion tree is your reference for routes — but the rebuild is freedom to re-architect, not a verbatim restoration.

## Current focus (per recent commits)

- `b85b728` (HEAD) Merge of executive summary PR.
- `70cc797` Added `EXECUTIVE_SUMMARY.md` as a derivative of the whitepaper.
- `61494f3` Stripped the entire web platform — rebuild pending.
- The next meaningful commit is expected to be **the rebuild starting point** (likely `package.json` + `app/layout.tsx` + `app/page.tsx`).

## Conventions (real, observable)

- **Whitepaper governs vocabulary.** Always: "Love Farmers" (never "users" or "beneficiaries"); "Love Points (LP)" vs "Love Credits (LVC)"; "TWGE" (not "the team"); "Lumi" for the AI guide. Mis-naming these in copy or code is a doctrinal failure.
- **Dignity > efficiency** is hard-coded in the spec (Whitepaper §4 trade-off table, App Overview §4). When two paths exist, the dignity-preserving one wins even if slower.
- **Symbol-first UI.** Many Love Farmers have low literacy. Design components to work with icons + minimal text. Tailwind + Lucide React is the kit. Color tokens are pre-named in Whitepaper §10.2 (Heart Rose `#C06C84`, Sacred Cream `#FAF7F2`, etc) — use those exact hexes, not approximations.
- **Wallet display is dual.** Local fiat is primary, LVC is secondary. Never show LVC as the headline number to a Love Farmer (Whitepaper §6 wallet diagram).
- **Markdown only, for now.** Until rebuild starts, every change is in `docs/`. One topic per file; split at H2 when a file passes ~500 lines (current files exceed this — leave them; this rule is for *new* docs).

## Gotchas

- **The repo looks empty but isn't.** A fresh `ls` shows `docs/` and `.gitignore` only. Don't assume bootstrapping is needed — the docs are the contract. Read them before proposing structure.
- **Three currencies, not two.** LP (global recognition, no $ value), LVC (local, redeemable), and EAC ("Energy Access Credits", community-aggregate, unlocks infrastructure). Treat EAC as a separate ledger conceptually — easy to lump it with LVC and break the model.
- **Verification is gentle, not biometric.** Presence checks are intermittent thumb-holds (Whitepaper §8). Do not propose camera, mic, or device-attestation gating without TWGE review — it violates the accessibility principle.
- **Group meditations bypass individual verification.** Logged by Administrators. The trust model is human-attested, not technical.
- **Credit ceilings are per-community, configurable.** Don't hardcode rate limits — they ride on donor-backed liquidity (Whitepaper §8 "Credit Ceiling System").
- **`_bmad` is a symlink** (gitignored). Do not commit it; do not delete it. It's the project's view back to QIE intelligence.

## Don'ts (hard bans for this codebase)

- **No "beneficiary," no "recipient," no "the poor."** Whitepaper §4.2 forbids these framings.
- **No speculative/transferable tokens.** LVC is non-transferable between farmers, burned on redemption. Anything resembling a tradable token is out of scope.
- **No open chat / social network surface.** App Overview §3 explicitly excludes this from MVP.
- **No real-time hardware/IoT integration for the energy layer.** Visualize the *pattern*, don't build a power plant (App Overview §5.1).
- **No charity language.** Donors are "investing in an experiment," not giving aid (Whitepaper §7.2).
- **No "institutional-grade" / "enterprise" hype copy.** This is a dignity-first community platform; pretentious framing breaks the voice.

## Secrets

Never log Love Farmer personal info, location data, or session content. Never commit `.env*.local`, donor payment processor keys, Twilio/SMS credentials, or community admin tokens. The system carries reputational risk for vulnerable communities — privacy failures cascade. Log generic categories only.

## Multi-session note

Before modifying files in this repo, run `bin/qie worktree auto <slug>` from the QIE hub once. The command is idempotent and protects the shared `.git/index` from concurrent Claude sessions. Worktrees land at `clients/light-brands/.worktrees/love-token--<slug>/` and are auto-swept after 7 inactive days unless they hold unpushed work. See QIE hub `CLAUDE.md` "Multi-Session Worktree Isolation" for the full directive.
