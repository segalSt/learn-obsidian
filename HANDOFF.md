# Handoff - learn-obsidian course (2026-10-06)

Next session focus: **continue the Obsidian course from the CLI (Claude Code)**: lesson 0006 "Dataview" (0001-0005 and 0008 are built).

## Where things are
- Repo (this folder): `C:\_repos\GitHub\segal.st\teach\learn-obsidian` -> https://github.com/segalSt/learn-obsidian (public, branch `main`).
- Commit identity is set in repo-local git config (`user.name SegalSt`); do not change it, do not use global config.
- Push state: everything pushed after lesson 0002 (2026-10-06).

## Read first (do not duplicate here)
- `MISSION.md` - why the user learns Obsidian (Kolnatun LLM-wiki + personal media wiki).
- `NOTES.md` - teaching preferences, course order, commit+push rule, user habits to pre-empt.
- `index.html` - course map with status per lesson (keep it current).
- `learning-records/0001..0003` - baseline, feedback on graph-filter lesson, restart-from-basics decision.
- `RESOURCES.md` - verified sources (Obsidian Help pages, Dataview docs, LLM-wiki refs, communities).
- `git log` - full history of what changed.

## State
| # | Lesson | File | Status |
|---|---|---|---|
| 1 | 0001 Note anatomy | `lessons/0001-note-anatomy.html` | ready, user not done yet |
| 2 | 0002 Properties | `lessons/0002-properties.html` | ready (built 2026-10-06), user not done yet |
| 3 | 0003 Links & backlinks | `lessons/0003-links.html` | ready (2026-10-06); verified: property links show in Backlinks; pending: based_on on rename, property text in unlinked mentions |
| 4 | 0004 Search | `lessons/0004-search.html` | ready (2026-10-07); open checks in hands-on: does `[prop:value]` match part of a value, does a plain word match property text |
| 5 | 0005 Graph filters | `lessons/0005-graph-filters.html` | done once, reworked after feedback |
| 6 | 0006 Dataview / 0007 Bases | - | **next to build** |
| 7 | 0008 LLM-wiki (Karpathy pattern) + Obsidian | `lessons/0008-llm-wiki.html`, vault `practice-llm-wiki/` | ready (2026-10-06), overview, readable any time |

Components in `assets/` (reuse, don't inline): `style.css`, `quiz.js` (equal-length options, shuffled), `search-sim.js` (Obsidian search simulator with diagnostic feedback), `line-tagger.js` ("what is this line" exercise).
`search-sim.js` (since 0004) also does `tag:` (nested only from the root), `content:`, body text via `file.text`, `showProps`, and explains a nested-only tag; without `file.text` it keeps the old path-only behaviour lesson 0005 relies on.
`practice-vault/` = separate vault for hands-on steps; extend it per lesson (e.g. notes with all property types for 0002).
`practice-llm-wiki/` = second practice vault (mini LLM-wiki with `CLAUDE.md` schema, raw / wiki / index / log) for lesson 0008; user runs Claude Code there. Keep it separate so practice-vault counts in 0002 stay valid.

## How each lesson is made (the user's rules)
1. Lessons in Russian; Obsidian terms / code / paths in English. Short, concrete, examples from Kolnatun + media wiki.
2. Facts only from sources fetched this session (Obsidian Help etc.), cited inline; add new sources to `RESOURCES.md`.
3. Define every term/setting on first use; add it to `reference/glossary.html`.
4. Tasks state exactly what to do and the expected result (e.g. "should leave 15 files"); feedback must explain *why* something is wrong.
5. Pre-empt Windows habits: `/` not `\`, no `*` wildcards.
6. Test the page in a headless browser (no JS errors, exercises check correctly) before delivering.
7. Update `index.html` status + add a `learning-records/000N-*.md` when something is learned about the user.
8. Finish with `git add -A && git commit` (message ends with Co-Authored-By line) and `git push`.

## Open items
- Wait for user's results on lesson 0001 (quiz score, what was unclear) before or while building 0002.
- Done in 0004: `file:` is substring match, not prefix; prefix needs regex `file:/^name/` (unverified in user's Obsidian version) - good material for 0004.

## Related (outside this repo)
- Kolnatun LLM-wiki pilot: `C:\_repos\Azure\kol-natun-vb\Main\claude\kolnatun-context-2.0\calculators\shared\` (`README.md`, `INDEX.md`, entities/concepts) and `calculators\scaffold\KNOWLEDGE-LINT-START-PROMPT.md`. Pending there (needs user's `/start` per that project's `scaffold/authorization-rules.md`): step 10b in `BL-EXTRACTION-PROCESS-LOG.md`, used_by cleanup in `RESET-CALCULATOR.md`, links from both calculators' `calc-logic.md`, optional task in `tasks/KolnatunActiveTasks.md` (trace callers of all `CalcNek` variants, find dead code - see `shared/concepts/credit-points.md`).

## Suggested skills
- `anthropic-skills:teach` - run with argument `obsidian`; it defines the workspace files (MISSION, RESOURCES, learning-records, lessons, reference, assets) used here.
- `anthropic-skills:kolnatun-daily-start` - only if the session switches to Kolnatun work.

## Prompt to continue (paste into Claude Code, started in this folder)
```
Continue my Obsidian course. Read HANDOFF.md, MISSION.md, NOTES.md, index.html and learning-records/ first, then invoke the teach skill with "obsidian".
First: run `git status` and tell me if anything is unpushed.
Then build lesson 0002 "Свойства" (properties) following the rules in HANDOFF.md: fetch facts from https://obsidian.md/help/properties, reuse assets/, extend practice-vault/, test the page in a headless browser, update index.html and glossary, then commit and push.
```
