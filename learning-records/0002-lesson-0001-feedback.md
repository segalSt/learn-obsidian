# 0002 - Lesson 0001 feedback (2026-10-06)

## What happened
- Task 1: wrote `-path:scaffold*` -> expected `*` to work as a wildcard.
- Task 2: wrote `calculators\shared\enities` -> Windows backslashes, no `path:`, typo.
- Tasks 3-4: did not understand what to remove / what `layer` is.
- "Excluded files" was mentioned without explaining what it is.
- Sandbox feedback ("Лишние …") did not say *why* the filter was wrong.

## Insights
- Brings Windows / shell habits: `\` in paths, `*` as glob. Obsidian search uses `/` and plain substring match; say this explicitly up front.
- Tasks must list exactly what to keep / remove and the expected count; "same as above but with X" is not enough.
- Any setting or term named in a lesson gets a one-sentence definition on first use (also add to glossary).
- Feedback must diagnose: per-condition "matched 0 files", `\`, `*`, plus the two lists (should vanish / should stay).

## Changes made
- `assets/search-sim.js`: diagnostic feedback (backslash, `*`, zero-match condition, counts, full lists).
- Lesson 0001: worked example + how to read feedback; tasks 1-5 rewritten with explicit lists and expected counts; Excluded files explained.
- Cheat sheet: rule "paths with `/`, no `*`".

## Next
User to redo tasks 1-5 and the quiz; then pick lesson 0002.
