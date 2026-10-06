# 0004 - Lesson 0002: spaces in tags (2026-10-06)

## What happened
In the "так можно или ошибка?" exercise the user saw a contradiction: item 6 (`- научная фантастика`) says "no spaces in tags", item 8 (`- кино/советское`) is OK - yet both lines have a space after `-`.

## Insight
YAML list syntax (`- ` before each value) is not yet automatic: the space after `-` reads as part of the value. When a rule is about the *value*, say explicitly which characters are syntax and which are the value.

## Changes made
- Feedback for items 6 and 8, the tags row in section 3, rule 6 in section 9 and the cheat sheet: "no spaces *inside* the tag; the space after `-` is list markup".

## Follow-up: "/" in tags
The exercise asked about `кино/советское` but the lesson only said "/ makes a nested tag" in passing. Rule: anything an exercise or quiz checks must be explained in the lesson first, with an example.
Added section 3.1 "Синтаксис тегов" (two ways to tag, character rules, nested tags with search / Tags view results), a hands-on Tags view step (`кино/советское` added to Сталкер and Солярис in practice-vault), a quiz question, cheat sheet and glossary rows.

## Follow-up: hotkeys
The quiz asked about hotkeys (incl. Ctrl+G) with no list in the lesson. Ctrl+G is not in Obsidian Help at all (graph opens from the Ribbon) - it was an unverified fact.
Added: "Клавиши урока" table in lesson 0002, `reference/hotkeys.html` (where to see all hotkeys: Settings → Hotkeys, Command palette; course keys; editing keys), quiz option Ctrl+G -> Ctrl+Z, Ctrl+G marked "check in Settings → Hotkeys" in glossary and lesson 0005.

## Follow-up: quiz before practice
Quiz question 4 (rename a property everywhere) was only covered in the hands-on section, which comes *after* the quiz. Rule: the quiz may only use what is explained above it, including distractors (F2, "Properties in document" were unexplained).
Added section 5 "All properties" (open, sort, rename, search, change type) before the exercises; "comma list = one Text" row in section 4; quiz 4 distractors replaced with taught options.
