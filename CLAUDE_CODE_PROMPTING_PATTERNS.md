# Claude Code Prompting Patterns
## Copy-Paste Prompts for Persistent Context Workflows

> These patterns work best alongside a `PROJECT_PROGRESS.md` file in your project root.
> See [MARKDOWN_BEST_PRACTICES.md](MARKDOWN_BEST_PRACTICES.md) for the full system.

---

## Pattern 1: Start of Session — Full Context Recovery

Use at the beginning of every new Claude Code session. This single prompt restores full situational awareness before any work begins.

```
Read the following files in this order:
1. CLAUDE.md — project rules and constraints
2. PROJECT_PROGRESS.md — current status and phase
3. BLOCKERS.md — active problems (if it exists)

After reading, respond with:
- Current phase and what's in progress
- Any active blockers I should know about
- The exact next task as defined in PROJECT_PROGRESS.md

Do not start any work yet. Confirm this summary with me first.
```

**Why this works:** Forces Claude Code to load all context before touching anything. The "confirm first" instruction prevents premature action based on incomplete understanding.

---

## Pattern 2: Mid-Session Reference — Constraint Enforcement

Use when you're mid-session and want to make sure active constraints are respected as you work on a specific feature.

```
Before implementing [feature name], re-read DECISIONS.md and the "Known Constraints" 
section of PROJECT_PROGRESS.md.

Call out any constraints that are directly relevant to [feature name] so we both 
know what's non-negotiable. Then proceed with implementation.

If my instructions at any point would violate a documented constraint, flag it 
immediately instead of proceeding.
```

**Why this works:** Surfaces relevant constraints at the moment they're needed, not buried in a long file read at session start. The "flag instead of proceed" instruction prevents silent constraint violations.

---

## Pattern 3: Bug Fix with Full Context

Use when addressing a tracked bug. Maximises context before touching code.

```
I need to fix [bug ID or description]. Before writing any code:

1. Read BLOCKERS.md and find the entry for this bug — understand the root cause, 
   severity, and any existing workaround
2. Read the relevant source files mentioned in the blocker entry
3. Check DECISIONS.md for any decisions that affect how this should be fixed

Then propose a fix. Explain why your approach won't break the existing workaround 
or violate any documented decisions.

After fixing: update BLOCKERS.md to mark this blocker as resolved with today's 
date and a one-line summary of the fix.
```

**Why this works:** Ensures the fix is informed by documented context, not just the immediate symptom. The update step keeps the blocker log accurate.

---

## Pattern 4: Feature Implementation — Multi-Step with Tracking

Use for features that take more than one session or involve multiple components.

```
We're implementing [feature name]. This is a multi-step task.

Step 1: Read PROJECT_PROGRESS.md. Find the entry for [feature name] and understand 
what's already done and what remains.

Step 2: Read any relevant spec files in docs/ (if they exist).

Step 3: Implement only [specific sub-task for today]. Do not move ahead to the 
next sub-task without my confirmation.

After completing each sub-task:
- Tell me what you did and how to verify it
- Update PROJECT_PROGRESS.md to reflect the completed sub-task with today's date
- State the next sub-task

Today's sub-task: [exact task]
```

**Why this works:** Prevents over-implementation. "Do not move ahead without confirmation" keeps you in control. The update step means the ledger always reflects reality.

---

## Pattern 5: Code Review Against Project Standards

Use when you want a review that respects your documented decisions and constraints, not generic best practices.

```
Review [file path or feature area] against our documented standards.

Read these files before reviewing:
- CLAUDE.md (project rules)
- DECISIONS.md (architecture decisions to uphold)

For each issue found:
1. Identify the violation (quote the relevant guideline from our docs)
2. Show the problematic code
3. Suggest the fix
4. Rate severity: Critical / High / Medium / Low

Document any Critical or High findings in BLOCKERS.md after the review.

Do not flag generic "best practices" that contradict our documented decisions — 
our decisions take priority.
```

**Why this works:** A code review that ignores your project-specific decisions produces irrelevant or contradictory recommendations. This pattern anchors the review to your actual standards.

---

## Pattern 6: Context Passing — End of Session Documentation

Use at the end of every session to preserve context for the next one.

```
We're wrapping up for today. Before we finish, update PROJECT_PROGRESS.md with:

1. Under "Change Log": add today's date (YYYY-MM-DD) with a one-line summary 
   of what was completed
2. Under "Phase Detail": update all status indicators to reflect current state
3. Under "Session Notes": create an entry for today (YYYY-MM-DD) with:
   - Completed: list of what was finished
   - In Progress: what was started but not finished, and its current state
   - Discovered: any new bugs, constraints, or decisions made this session
   - Next Session Should Start With: exact task to pick up
4. Update "Next Immediate Step" at the top to point at the next task

Use ISO date format (YYYY-MM-DD). Be specific — vague entries are useless next session.
```

**Why this works:** This is the most important pattern. A well-updated progress file means the next session starts instantly instead of spending 10 minutes re-establishing context.

---

## Pattern 7: Performance and Testing — Baseline and Track

Use when running tests or measuring performance, to capture results in a way that survives the session.

```
Run [test suite / performance measurement] and document the results.

After running:
1. Update PERFORMANCE.md (or PROJECT_PROGRESS.md "Performance Targets" section) 
   with today's measurements in the relevant table
2. Flag any metric that moved more than 10% from last measurement (positive or negative)
3. If any metric is now below target, create an entry in BLOCKERS.md with:
   - Severity based on how far below target it is
   - What changed since last measurement (what we did today)
   - Suggested next steps

Date all measurements with today's date: YYYY-MM-DD
```

**Why this works:** Performance regressions are invisible without historical comparison. Storing measurements in markdown makes trends visible across sessions.

---

## Pattern 8: Large Project Handoff — Full Orientation

Use when onboarding a new session (or a new person) to a complex, multi-month project.

```
This is a large project you haven't seen before. Read these files in order to 
build a full mental model before touching anything:

1. CLAUDE.md — rules, stack, non-negotiables
2. brain.md — business context and goals (if exists)
3. DECISIONS.md — why the architecture is the way it is
4. PROJECT_PROGRESS.md — where we are, what's done, what's next
5. BLOCKERS.md — what's broken or blocked right now

After reading all five, give me:
- A 3-paragraph summary of the project (what it is, where it is, what's hard)
- The top 3 things I should not touch without discussion
- The most important constraint affecting current work
- What the next task is

Do not assume anything not explicitly stated in these files.
```

**Why this works:** Complex projects have implicit context that's easy to miss. This pattern forces explicit understanding before action and surfaces the most critical constraints upfront.

---

## Pattern 9: Iterative Development — Feedback Loop

Use when working through feedback, QA notes, or design review changes across multiple iterations.

```
We have [N] feedback items to address from [source: design review / QA / stakeholder].

Read PROJECT_PROGRESS.md to understand current state.

For each feedback item:
1. Identify the relevant file(s)
2. Make the change
3. Tell me what you changed and how to verify it
4. After I confirm, move to the next item

After all items are addressed:
- Update PROJECT_PROGRESS.md change log with today's date
- List all changes made in the session notes
- Update any component status indicators that changed

Start with item 1: [paste first feedback item]
```

**Why this works:** Prevents batch changes that become hard to review. The "confirm before next" pattern means errors are caught early, not after 10 changes have been stacked.

---

## Pattern 10: Deployment Readiness — Pre-Launch Verification

Use before any production deployment to verify all criteria are met.

```
We're preparing for deployment. Read PROJECT_PROGRESS.md and work through the 
"Pre-Launch Checklist" section.

For each checklist item:
1. Verify the criterion is met (check the relevant files or configurations)
2. If met: confirm it and mark it checked
3. If not met: flag it as a blocker, add it to BLOCKERS.md with Critical severity, 
   and tell me what needs to happen before we can ship

Do not mark anything as complete without actually verifying it. Do not skip items.

After completing the checklist, give me:
- Total items: [N]
- Items complete: [N]  
- Active blockers preventing launch: [list]
- Recommendation: proceed / hold
```

**Why this works:** Deployment checklists are only useful if actually verified. This pattern forces evidence-based confirmation rather than assumed completion.

---

## Advanced: State Machine Pattern

For projects with clear phases and gates between them, use markdown as a state machine to make transitions explicit.

```markdown
## Project State Machine

### States
- `DISCOVERY` → Research, requirements, no code yet
- `BUILDING` → Active feature development
- `STABILIZING` → Bug fixes, no new features
- `STAGING` → On staging, QA in progress
- `LIVE` → Production deployed

### Current State: BUILDING

### Allowed Transitions
- BUILDING → STABILIZING (when: all Phase 2 features complete)
- STABILIZING → STAGING (when: no Critical or High blockers)
- STAGING → LIVE (when: pre-launch checklist 100% complete, QA sign-off)

### Blocked By (for next transition: BUILDING → STABILIZING)
- ❌ Search component not complete (Phase 2, task 3)
- ❌ Filter sidebar not complete (Phase 2, task 4)
```

**Prompt for state machine:**

```
Read the "Project State Machine" section in PROJECT_PROGRESS.md.

What state are we in? What are the remaining blockers for the next transition?
Prioritise today's work to unblock the transition to [next state].
```

---

## Quick Reference Table

| File | Purpose | Update Frequency | Session Prompt |
|------|---------|-----------------|----------------|
| `CLAUDE.md` | Rules, stack, non-negotiables | Rarely — only for new constraints | Read at session start |
| `brain.md` | Business context and strategy | Monthly or on major pivots | Read before strategic decisions |
| `PROJECT_PROGRESS.md` | Status, roadmap, next steps | After every session | Read at start and update at end |
| `BLOCKERS.md` | Active problems with severity | When blockers are created or resolved | Read at session start |
| `DECISIONS.md` | Architecture decisions with rationale | When a new decision is made | Read before implementing |
| `PERFORMANCE.md` | Metrics, benchmarks, targets | After performance-related work | Read before performance tasks |
| `docs/api-contracts.md` | External API shapes and gotchas | When APIs change | Read before touching API code |
| `sessions/YYYY-MM-DD.md` | Archived session notes | Archive when file exceeds 200 lines | Reference if context needed |

---

## Pro Tips

### Tip 1: Timestamps Are Mandatory — Use ISO Format

```markdown
<!-- ❌ Rots immediately -->
Fixed last week. Should revisit soon.

<!-- ✅ Permanent clarity -->
Fixed 2025-01-12. Revisit 2025-02-01 to remove the workaround.
```

Always use `YYYY-MM-DD`. Always convert relative references to absolute dates before saving.

### Tip 2: Specific Over Vague — Always

```markdown
<!-- ❌ Useless -->
Auth is mostly working.

<!-- ✅ Actionable -->
Auth: login ✅, registration ✅, refresh token rotation ❌ (race condition in multi-tab 
scenario — see BLOCKERS.md > AUTH-001). OAuth not started ⏳.
```

If a statement doesn't tell you exactly what to do next, make it more specific.

### Tip 3: Link to Code by File and Line

```markdown
<!-- ❌ Requires searching -->
The workaround is in the auth file.

<!-- ✅ Jump directly to it -->
Workaround implemented: `src/lib/auth.ts:247` — localStorage semaphore prevents 
simultaneous refresh calls.
```

File + line number references survive session resets. "The auth file" does not.

### Tip 4: Capture Decision Rationale — Not Just the Decision

```markdown
<!-- ❌ Decision without rationale -->
Using server-side rendering.

<!-- ✅ Decision with rationale — defensible and educational -->
Using SSR for all pages. Reason: organic SEO is the primary acquisition channel.
CSR approach failed Core Web Vitals in January audit (LCP 4.2s, target <2.5s).
SSG not viable because pricing data changes every 30 minutes.
```

The rationale is what makes the decision maintainable. Without it, every decision is vulnerable.

### Tip 5: Archive Regularly to Keep Files Scannable

When a session notes section grows beyond 10 entries, archive it:

```
Archive old session notes: move all SESSION NOTES entries older than 30 days to 
sessions/archive-YYYY-MM.md, keeping only the last 3 sessions in PROJECT_PROGRESS.md.
Update the archive index at the top of the sessions/ folder.
```

Files that are too long don't get read. Keep active files under 300 lines.

---

## Example: Real Project (Set Temp Website)

Here's how these patterns would look in practice for a real project.

### PROJECT_PROGRESS.md (excerpt)

```markdown
## You Are Here
**Status:** Phase 2 in progress — component expansion
**Mode:** Feature building
**Last Updated:** 2025-01-15
**Next Immediate Step:** Implement the temperature timeline chart component (src/components/Timeline.tsx)

## Known Constraints
- **Design tokens only:** All colours and spacing must use CSS custom properties from design-tokens.json — no hardcoded hex values
- **No JS dependencies:** This is a static site. No npm packages. Vanilla JS only.
- **Mobile-first breakpoints:** Design at 375px first, then 768px, then 1280px
```

### Session Start Prompt

```
Read PROJECT_PROGRESS.md and CLAUDE.md. Tell me current status in 3 bullet 
points and confirm the next task. Don't start anything yet.
```

### Session End Prompt

```
Update PROJECT_PROGRESS.md: we completed the Timeline chart component at 
src/components/Timeline.tsx, added responsive breakpoints, and fixed the 
date formatting bug where months were showing as integers. Next task: 
implement the temperature comparison panel. Today's date: 2025-01-15.
```

---

## Final Reminder

Markdown files are your project's brain. Claude Code's context window is temporary — your markdown files are permanent.

The difference between a productive 2-hour session and a 2-hour session wasted re-establishing context is a well-maintained `PROJECT_PROGRESS.md`.

Write it. Update it. Read it first. Every time.

---

*See also: [MARKDOWN_BEST_PRACTICES.md](MARKDOWN_BEST_PRACTICES.md) · [PROJECT_PROGRESS_TEMPLATE.md](PROJECT_PROGRESS_TEMPLATE.md)*
