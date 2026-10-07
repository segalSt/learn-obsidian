# 0006 — Lesson 0004: property search

Date: 2026-10-07

- Practice task 4: the learner answered `[type:book OR person]`, which is valid per Help. The sandbox did not support `OR` inside brackets and rejected the answer. The sandbox was fixed to accept it.
- Practice task 5: in real Obsidian, `[aliases]` returned 3 files in practice-vault: Солярис and Тарковский (both have the property) plus README, whose body contains the word `aliases`. Help says `[property]` returns files that have the property. The lesson now records this mismatch neutrally.
- Takeaway: the learner checks results against real Obsidian. Sandbox numbers must not be presented as Obsidian's numbers when the two can differ.
- Practice task 7: the learner wrote `-(path:Kolnatun OR Хранилища)`. In real Obsidian it returned 6: 1 book, 1 person, 2 films, 2 storage notes. README was excluded because its body contains «Хранилища», and the storage notes stayed. This confirms that an operator does not carry over to the next word. The 6 matched the sandbox's expected 6 by coincidence, so the task prompt now gives the real-vault number (5) and the symptom.
- Screenshot of task 7 in real Obsidian: the header shows "0 results" while 6 files are listed (HDD-2TB-01, Пикник, Полка 2, Солярис, Сталкер, Тарковский). A query made only of exclusions shows a match count of 0 even though files are listed. The lesson now has a note on this in section 7.
