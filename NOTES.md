# Notes (teacher scratchpad)

- Language: Russian for lessons; Obsidian terms, code, paths stay in English.
- Style the user likes: short, simple, concrete examples, no preamble.
- Examples should come from the real Kolnatun vault (calculators/AcademicEnd, SalaryCalc, shared/) and the media wiki.
- Workspace: `C:\_repos\GitHub\segal.st\teach\learn-obsidian` (git repo `learn-obsidian`, GitHub user segalSt).
- Lessons link `../assets/style.css` - open them from disk (double-click), not from chat preview.
- Every new lesson (and its reference / learning-record updates) ends with a git commit + push to `origin main` (https://github.com/segalSt/learn-obsidian). Committer: SegalSt <olmer_news@list.ru> (repo-local config). Claude can commit from the session; push needs the user's GitHub login on Windows unless a token is provided.
- Course order (since 2026-10-06, user asked to start from basics): 0001 note anatomy, 0002 properties, 0003 links & backlinks, 0004 search, 0005 graph filters, 0006 Dataview, 0007 Bases. `index.html` is the course map; keep its status column current.
- 0008 LLM-wiki (Karpathy pattern + Obsidian) added on user request 2026-10-06: overview lesson, readable any time; practice in `practice-llm-wiki/`. Expected counts in lessons depend on vault contents - adding notes to a practice vault means re-checking those counts.
- Hands-on steps use `practice-vault/` (separate vault), never the work Kolnatun vault.
- User habits to pre-empt: Windows `\` in paths, `*` as wildcard. Define every setting / term on first use.
- Every lesson has a "Клавиши урока" table; anything a quiz or exercise checks (keys, syntax) must be explained in the lesson first. Keys go to `reference/hotkeys.html`; unverified keys are marked "проверь в Settings → Hotkeys".
- Lessons / reference stay generic: no learner results or personal phrasing ("проверено в твоём Obsidian", "твой вопрос", "скажи мне"). Facts the learner found go in as plain statements; raw results only in `learning-records/`. Before every commit: grep lessons/ and reference/ for such phrases, stage explicit paths (never `git add -A`), make sure the learner's practice-vault edits (rating, location, Untitled.canvas, daily notes) are not staged.
- Every hands-on step carries a vault badge: `<span class="vault pv">practice-vault</span>` or `<span class="vault kn">Kolnatun · рабочее</span>` (lesson 0008: `<span class="vault lw">practice-llm-wiki</span>`) (the work vault root is `kol-natun-vb/Main/claude/kolnatun-context-2.0`, so paths start with `calculators/…`). Each "в настоящем Obsidian" section starts with the legend. In-page sandboxes say «здесь, на странице». The user asked on 2026-10-07 which vault each task uses; `Kolnatun/` inside practice-vault was easy to mix up with the work vault.
