# PROJECT PROGRESS — [Project Name]

> **Source of Truth.** Read this file at the start of every Claude Code session.
> Update this file after every significant task or completed feature.
> Do not modify the Master Roadmap without an explicit approved change.

---

## You Are Here

**Status:** [e.g., "Phase 1 in progress", "Pre-launch polish", "Post-launch stabilisation"]
**Mode:** [e.g., "Feature building", "Bug fixing", "Performance optimisation", "Refactoring"]
**Last Updated:** YYYY-MM-DD
**Next Immediate Step:** [One sentence — the exact next thing to work on]

---

## Project Overview

**What it is:** [One sentence describing the product/project]
**Stack:** [e.g., Next.js 14 + TypeScript + Tailwind + Supabase]
**Primary goal:** [The single thing this project must achieve]

---

## Master Roadmap

| Phase | Status | Description | Target Date |
|-------|--------|-------------|-------------|
| 0 — Setup | ✅ | Repo, CI, local dev environment | YYYY-MM-DD |
| 1 — [Feature Area] | 🔄 | [Short description] | YYYY-MM-DD |
| 2 — [Feature Area] | ⏳ | [Short description] | YYYY-MM-DD |
| 3 — [Feature Area] | ⏳ | [Short description] | YYYY-MM-DD |
| 4 — Launch | 🔮 | Production deploy, monitoring | YYYY-MM-DD |

**Status key:** ✅ Done · 🔄 In Progress · ⏳ Pending · ❌ Blocked · 🔮 Future

---

## Phase Detail

### Phase 1 — [Feature Area]

- ✅ [Completed task]
- ✅ [Completed task]
- 🔄 [In-progress task] — [brief note on current state]
- ⏳ [Pending task]
- ❌ [Blocked task] — blocked by: [reason, see BLOCKERS.md]

### Phase 2 — [Feature Area]

- ⏳ [Task]
- ⏳ [Task]
- 🔮 [Deferred task — explain why it's deferred]

---

## Active Blockers

> For full blocker details, see [BLOCKERS.md](BLOCKERS.md)

| ID | Severity | Description | Blocks |
|----|----------|-------------|--------|
| BLK-001 | 🚨 Critical | [Short description] | [What it blocks] |
| BLK-002 | ⚠️ High | [Short description] | [What it blocks] |

_If no active blockers: "No active blockers."_

---

## Component / Feature Registry

| Component / Feature | File Path | Status | Notes |
|---------------------|-----------|--------|-------|
| [Feature name] | `src/components/Feature.tsx` | ✅ | [Any relevant note] |
| [Feature name] | `src/pages/feature.tsx` | 🔄 | [In progress note] |
| [Feature name] | `src/lib/utils.ts` | ⏳ | [Not started] |

---

## Active Technical Decisions

> These decisions must be respected in all future work. Do not reverse without explicit discussion.

| Decision | Rationale | Date |
|----------|-----------|------|
| [e.g., "Using SSR for all pages"] | [e.g., "SEO-critical, CSR failed Core Web Vitals"] | YYYY-MM-DD |
| [e.g., "Currency stored as integers (pence)"] | [e.g., "Float rounding caused production bug on 2025-01-08"] | YYYY-MM-DD |
| [e.g., "No Redux — using Zustand"] | [e.g., "Project too small to justify Redux overhead"] | YYYY-MM-DD |

---

## Known Constraints

> Hard constraints that affect all implementation decisions.

- **[Constraint name]:** [Description] — [Why it exists]
- **[Constraint name]:** [Description] — [Why it exists]
- **[Constraint name]:** [Description] — [Why it exists]

Example constraints:
- **API rate limit:** `/api/search` limited to 100 req/min per IP — implement backoff
- **Mobile-first:** All components must work at 375px width before desktop
- **No floats:** All currency is integers (pence) — float arithmetic caused production rounding errors

---

## Environment & Infrastructure

| Item | Dev | Staging | Production |
|------|-----|---------|------------|
| URL | `localhost:3000` | `staging.example.com` | `example.com` |
| Database | Local Postgres | Supabase (staging project) | Supabase (prod project) |
| Auth | Dev secrets in `.env.local` | — | — |
| Deploy | — | Auto on `develop` merge | Manual from `main` |

---

## Performance Targets

| Metric | Baseline | Target | Current | Status |
|--------|----------|--------|---------|--------|
| LCP | — | < 2.5s | — | ⏳ |
| TTI | — | < 3.5s | — | ⏳ |
| Bundle size | — | < 400kb | — | ⏳ |
| API p95 latency | — | < 200ms | — | ⏳ |

_Fill in baseline and current values once measured. Update after each performance-related session._

---

## Change Log

| Date | Action | Session Notes |
|------|--------|---------------|
| YYYY-MM-DD | Ledger initialized | — |
| YYYY-MM-DD | [What was done] | [Optional link to session file] |

---

## Session Notes

### YYYY-MM-DD

**Completed:**
- [What was finished]
- [What was finished]

**In Progress:**
- [What was started but not finished — include current state]

**Discovered:**
- [Any new information, bugs, or constraints found during this session]

**Next Session Should Start With:**
- [Exact task to pick up]

---

## Pre-Launch Checklist

- [ ] All Phase 1–3 tasks complete
- [ ] Zero active critical blockers
- [ ] Lighthouse score: Performance 90+, Accessibility 95+
- [ ] Tested on Chrome, Firefox, Safari, Safari iOS
- [ ] All environment variables set in production
- [ ] Error monitoring configured (e.g., Sentry)
- [ ] Analytics configured
- [ ] SSL certificate active
- [ ] All console.log statements removed
- [ ] Database backups configured
- [ ] Rate limiting in place on all public endpoints

---

## Glossary

| Term | Definition |
|------|------------|
| [Project-specific term] | [Plain English definition] |
| [Abbreviation] | [What it stands for and means in this project] |

_Add terms that would confuse someone new to this project._

---

*See also: [MARKDOWN_BEST_PRACTICES.md](MARKDOWN_BEST_PRACTICES.md) · [CLAUDE_CODE_PROMPTING_PATTERNS.md](CLAUDE_CODE_PROMPTING_PATTERNS.md)*
