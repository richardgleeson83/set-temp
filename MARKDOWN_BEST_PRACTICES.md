# Markdown Best Practices for Claude Code
## Using Markdown Files as Persistent Context

---

## Core Principle

Claude Code sessions are stateless. Every new conversation starts from zero — no memory of previous decisions, no knowledge of what was tried and failed, no awareness of the architecture choices you made last Tuesday.

**Markdown files solve this.** They survive context resets, live in your repo, and can be read instantly at the start of any session to restore full context. Think of them as your project's external brain — persistent, structured, and always available.

This is not just documentation. It is **active working memory** for AI-assisted development.

---

## Why This Matters

Without persistent context:
- Claude Code re-explores decisions you already made
- You explain the same constraints every session
- Bugs you documented reappear because Claude didn't know about them
- Architecture drift happens because the reasoning behind choices is lost
- Time is wasted re-establishing ground truth

With persistent markdown context:
- Sessions resume instantly with full situational awareness
- Constraints are enforced automatically when read at session start
- Decisions are justified, not just recorded
- Progress is visible and measurable
- Handoffs (including to future-you) are seamless

---

## Recommended Folder Structure

```
project-root/
├── CLAUDE.md                    # Core project instructions (always read first)
├── brain.md                     # Business context and strategy
├── PROJECT_PROGRESS.md          # Current status, what's done, what's next
├── BLOCKERS.md                  # Active problems with severity and workarounds
├── DECISIONS.md                 # Architecture and design decisions with rationale
├── PERFORMANCE.md               # Metrics, benchmarks, targets
├── docs/
│   ├── api-contracts.md         # External API shapes and gotchas
│   ├── component-spec.md        # Component design specs
│   └── deployment-runbook.md    # How to ship
└── sessions/
    ├── 2025-01-15-session.md    # Archived session notes
    └── 2025-01-16-session.md
```

You don't need all of these. Start with `PROJECT_PROGRESS.md` and add others as the project grows. The structure should match your actual working patterns.

---

## Hierarchy Guidelines

Use consistent heading depth so Claude Code can parse your files predictably.

```markdown
# Document Title (H1 — once per file)
## Major Section (H2 — phases, categories)
### Subsection (H3 — specific topics)
#### Detail Item (H4 — edge cases, fine-grained notes)
```

**Avoid skipping levels.** Jumping from `##` to `####` breaks the logical hierarchy and makes files harder to scan.

---

## Status Indicators

Use these consistently across all project files. Consistency means Claude Code learns your system immediately.

| Indicator | Meaning |
|-----------|---------|
| ✅ | Complete — done, verified, no action needed |
| 🔄 | In Progress — actively being worked on |
| ⏳ | Pending — queued, not yet started |
| ❌ | Blocked — cannot proceed without resolving something |
| 🔮 | Future — planned for later, not current scope |
| 🐛 | Bug — known issue, tracked |
| ⚠️ | Warning — works but needs attention |
| 🚨 | Critical — must fix before shipping |

**Example usage:**

```markdown
## Phase 1 — Authentication
- ✅ Login form component
- ✅ JWT token handling
- 🔄 Refresh token logic (in progress, see BLOCKERS.md)
- ⏳ OAuth integration
- 🔮 SSO support
```

---

## Checkbox Usage

Use checkboxes for concrete, completable tasks. Use status indicators for ongoing phases.

```markdown
### Pre-Launch Checklist
- [x] Remove all console.log statements
- [x] Set environment variables in production
- [ ] Verify CSP headers
- [ ] Run Lighthouse audit (target: 90+ performance)
- [ ] Test on Safari iOS
```

The difference: checkboxes are binary (done/not done). Status indicators describe richer states (blocked, in progress, etc.).

---

## Code Blocks for Technical Notes

Always specify the language for syntax highlighting and clarity.

```markdown
### Known Issue: API Rate Limiting

The `/api/search` endpoint returns 429 after 100 requests/minute per IP.

Current workaround:

```typescript
// Exponential backoff — do NOT use linear retry, it makes 429s worse
const delay = Math.min(1000 * 2 ** attempt, 30000);
await sleep(delay);
```

Fixed in: not yet. Tracked in BLOCKERS.md under HIGH severity.
```

Code blocks with context are far more useful than code blocks alone. Add the "why" above the block.

---

## Tables for Comparisons

Use tables when you evaluated options and chose one. This prevents re-litigating decisions.

```markdown
## State Management Decision

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| Zustand | Small, simple, no boilerplate | Less structure on large projects | ✅ Chosen |
| Redux Toolkit | Mature, DevTools excellent | Heavy for this project size | ❌ |
| Jotai | Atomic, flexible | Team unfamiliar | ⏳ Revisit in v2 |

**Decision:** Zustand. This project has <10 shared state slices. Redux overhead not justified.
```

---

## Blockquotes for Critical Context

Use blockquotes to surface warnings, constraints, or decisions that must not be ignored.

```markdown
> ⚠️ **Do not change the API response shape for `/users/{id}`.**
> The mobile app v1.2 is still in production and cannot be updated until April.
> Any change to this endpoint will break live users.

> **Decision (2025-01-10):** All currency values stored as integers (pence/cents).
> Never use floats. This was decided after a £0.01 rounding error in production.
```

Blockquotes stand out visually and signal "this is load-bearing information."

---

## Timestamp Formatting

Always use ISO 8601 format: `YYYY-MM-DD`. Never use "last Tuesday" or "recently" — these rot immediately.

```markdown
<!-- ✅ Good -->
**Last updated:** 2025-01-15
**Decision made:** 2025-01-10 — switched from REST to GraphQL for the feed endpoint

<!-- ❌ Bad -->
**Last updated:** last week
**Decision made:** recently — switched from REST to GraphQL
```

ISO dates let you understand the age of any context at a glance, even months later.

---

## What NOT to Do

### Vague Language

```markdown
<!-- ❌ Bad — meaningless in a new session -->
The auth stuff is mostly done. Some things still need fixing.

<!-- ✅ Good — actionable and specific -->
Authentication: login and registration complete ✅. Refresh token rotation has a race
condition when two tabs request simultaneously (tracked: BLOCKERS.md > AUTH-001). 
OAuth is not started ⏳.
```

### Burying Critical Information

```markdown
<!-- ❌ Bad — the warning is hidden in prose -->
We set up the database and configured pooling. There were some connection issues
initially but those are resolved. The max connections is set to 20 because we
found that going higher caused issues with the hosting provider. The schema
migrations run automatically on deploy.

<!-- ✅ Good — critical constraint is visible immediately -->
> ⚠️ **DB connection limit: 20 max.** Heroku Postgres hobby tier hard limit.
> Exceeding this crashes the app. Do not increase pool size without upgrading plan.

Database setup ✅. Schema migrations run automatically on deploy via Prisma migrate.
```

### Missing Context for Decisions

```markdown
<!-- ❌ Bad — no reason, impossible to evaluate later -->
Using SSR for all pages.

<!-- ✅ Good — the why prevents undoing good decisions accidentally -->
Using SSR for all pages. Reason: SEO is critical for organic acquisition. Client-side
rendering failed Core Web Vitals audit in January (LCP 4.2s). SSG not viable because
pricing data changes hourly.
```

### Not Explaining "Why"

The single most common mistake. Future sessions (and future-you) need to understand not just what was decided, but why. Without the why, every good decision is vulnerable to being reversed.

---

## Prompting Patterns for Claude Code

### Pattern 1: Reference Progress Before Starting

```
Read PROJECT_PROGRESS.md and BLOCKERS.md. Summarize the current state in 3 bullet 
points, then tell me what the next priority task is. Don't start work yet — confirm 
with me first.
```

### Pattern 2: Using MD as Guidelines

```
Before writing any code, read CLAUDE.md and DECISIONS.md. The constraints in those 
files are non-negotiable. If any of my requests conflict with those constraints, 
flag it before proceeding.
```

### Pattern 3: Ask Claude Code to Update Progress

```
We just completed the search component. Update PROJECT_PROGRESS.md:
1. Mark the search component as ✅ complete
2. Add today's date (2025-01-15) to the change log
3. Update the "Next Immediate Step" section to point at the filter sidebar
```

### Pattern 4: Context Dump Before Session End

```
Before we end: update PROJECT_PROGRESS.md with everything we accomplished today.
Include: what we completed, what's still in progress, any new blockers discovered, 
and the exact next step for the next session. Use ISO date format.
```

### Pattern 5: Using MD for Specifications

```
Read component-spec.md carefully before implementing anything. The spec is the 
source of truth. If the spec is ambiguous on anything, ask me to clarify before 
writing code — don't make assumptions.
```

---

## Recommended File Structure by Project Size

### Small Project (1–2 weeks)
```
project/
├── CLAUDE.md
├── PROJECT_PROGRESS.md
└── BLOCKERS.md   (add if blockers emerge)
```

### Medium Project (1–3 months)
```
project/
├── CLAUDE.md
├── brain.md
├── PROJECT_PROGRESS.md
├── BLOCKERS.md
├── DECISIONS.md
└── docs/
    └── api-contracts.md
```

### Large Project (3+ months, multiple features)
```
project/
├── CLAUDE.md
├── brain.md
├── PROJECT_PROGRESS.md
├── BLOCKERS.md
├── DECISIONS.md
├── PERFORMANCE.md
├── docs/
│   ├── api-contracts.md
│   ├── component-spec.md
│   └── deployment-runbook.md
└── sessions/   (archive old session notes here)
```

---

## Special Use Cases

### Change Tracking — Why Did We Do This?

```markdown
## Change Log

| Date | File | Change | Reason |
|------|------|--------|--------|
| 2025-01-15 | auth.ts | Switched to HttpOnly cookies | XSS vulnerability in localStorage approach |
| 2025-01-12 | api/users.ts | Added rate limiting | Abuse from scrapers, 10k req/min from single IP |
| 2025-01-10 | schema.sql | Denormalized user_stats | JOIN was causing 800ms query times on dashboard |
```

### Bug Tracking

```markdown
## Active Bugs

### 🚨 AUTH-001 — Refresh Token Race Condition
- **Severity:** High
- **Discovered:** 2025-01-12
- **Symptoms:** Users logged out randomly when multiple tabs open
- **Root Cause:** Both tabs hit refresh simultaneously, second invalidates first token
- **Workaround:** Single-tab lock using localStorage semaphore (see auth.ts:247)
- **Fix Status:** 🔄 In progress — testing mutex approach
- **Blocks:** v1.1 release
```

### Performance Tracking

```markdown
## Performance Targets

| Metric | Baseline | Target | Current | Status |
|--------|----------|--------|---------|--------|
| LCP | 4.2s | <2.5s | 2.1s | ✅ |
| TTI | 6.8s | <3.5s | 3.9s | ⚠️ |
| Bundle size | 892kb | <400kb | 412kb | ⚠️ |
| API p95 latency | 820ms | <200ms | 180ms | ✅ |
```

### Session Compression — Archiving Old Work

When a session notes file grows beyond ~200 lines, archive it:

```markdown
## Archive Process
1. Move completed session notes to `sessions/YYYY-MM-DD-session.md`
2. Keep only the "Next Immediate Step" content in PROJECT_PROGRESS.md
3. Update the change log with a one-line summary of what was archived
```

---

## Best Practice Checklist

### Day 1 of a New Project
- [ ] Create `CLAUDE.md` with project overview, stack, and non-negotiable constraints
- [ ] Create `brain.md` with business context if applicable
- [ ] Create `PROJECT_PROGRESS.md` from the template
- [ ] Define status indicator conventions and add them to `CLAUDE.md`
- [ ] Add all files to version control immediately

### After Each Claude Code Session
- [ ] Ask Claude Code to update `PROJECT_PROGRESS.md` with what was completed
- [ ] Document any new blockers in `BLOCKERS.md`
- [ ] Record any new decisions in `DECISIONS.md` with rationale
- [ ] Update the "Next Immediate Step" section to point at the exact next task
- [ ] Commit the updated markdown files with a descriptive commit message

### Before Starting a Session
- [ ] Read `PROJECT_PROGRESS.md` to restore context
- [ ] Read `BLOCKERS.md` to know what constraints exist
- [ ] Confirm with Claude Code what the next step is before starting work
- [ ] Check if any decisions in `DECISIONS.md` are relevant to today's work

### Version Control
- Commit markdown updates alongside the code they document
- Write commit messages like: `docs: update progress after completing auth module`
- Never let markdown fall more than one session behind the code

---

## Why This Works

1. **Survives context resets.** Claude Code's context window is finite. Files are infinite.
2. **Enforces constraints automatically.** Rules in `CLAUDE.md` are read at session start and applied throughout.
3. **Prevents decision regression.** Documented decisions with rationale stop good choices from being undone.
4. **Scales with complexity.** Small projects use 2 files. Large projects use 8+. The system grows with you.
5. **Makes handoffs trivial.** New team members (or new Claude instances) can reach full context in minutes.
6. **Captures the "why."** Code shows what was built. Markdown shows why it was built that way.
7. **Creates accountability.** A visible change log means nothing disappears quietly.
8. **Reduces cognitive load.** You don't have to remember — you read.

---

*See also: [PROJECT_PROGRESS_TEMPLATE.md](PROJECT_PROGRESS_TEMPLATE.md) for a ready-to-use template, and [CLAUDE_CODE_PROMPTING_PATTERNS.md](CLAUDE_CODE_PROMPTING_PATTERNS.md) for copy-paste prompts.*
