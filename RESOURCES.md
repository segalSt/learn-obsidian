# Resources

## Knowledge (official, high trust)
- [Obsidian Help - Search](https://obsidian.md/help/plugins/search) - every search operator (`path:` = folders + file name; confirmed in practice: `path:Сталкер` finds the note) (`path:`, `file:`, `[property:value]`, `-`, `OR`, regex). Graph filters use the same syntax. **Primary for lesson 0004** (also 0005).
- [Obsidian Help - Graph view](https://obsidian.md/help/plugins/graph) - filters, groups, display, forces, local graph.
- [Obsidian Help - Properties](https://obsidian.md/help/properties) - frontmatter properties, types. **Primary for lesson 0002.**
- [Obsidian Help - Properties view](https://obsidian.md/help/plugins/properties) - All properties: sort by name / frequency, rename globally, click to search.
- [Obsidian Help - Tags](https://obsidian.md/help/tags) - tag characters, no spaces, not numbers-only, nested `/`, case-insensitive.
- [Obsidian Help - Aliases](https://obsidian.md/help/aliases) - `aliases` list, linking via alias.
- [Obsidian Help - Command palette](https://obsidian.md/help/plugins/command-palette) - `Ctrl+P`.
- [Obsidian Help - Hotkeys](https://obsidian.md/help/hotkeys) - Settings → Hotkeys: view, search, change.
- [Obsidian Help - Internal links](https://obsidian.md/help/links) - wikilink / Markdown, headings, blocks (^id Latin only), display text, embeds, unresolved, auto-update on rename. **Primary for lesson 0003.** Does NOT say whether property links count in backlinks (verified in user's Obsidian 2026-10-07: they do, in Linked mentions).
- [Obsidian Help - Backlinks](https://obsidian.md/help/plugins/backlinks) - linked / unlinked mentions, backlinks in document.
- [Obsidian Help - Outgoing links](https://obsidian.md/help/plugins/outgoing-links) - links and unlinked mentions of the active note.
- [Obsidian Forum - Turn case sensitivity on](https://forum.obsidian.md/t/turn-case-sensitivity-on/101287) - community answer: internal links are case-insensitive, no setting (user-verified 2026-10-07; autocomplete keeps the original casing).
- [Obsidian Help - Editing shortcuts](https://obsidian.md/help/editing-shortcuts) - default text editing keys. Graph view has no hotkey in Help (opened from the Ribbon).
- [Obsidian Help - Bases](https://obsidian.md/help/bases) - core table views over properties.
- [Dataview documentation](https://blacksmithgu.github.io/obsidian-dataview/) - query language (TABLE / LIST, FROM, WHERE, GROUP BY, FLATTEN). **Primary for lesson 0006.** Pages used: [Structure](https://blacksmithgu.github.io/obsidian-dataview/queries/structure/), [Query Types](https://blacksmithgu.github.io/obsidian-dataview/queries/query-types/), [Data Commands](https://blacksmithgu.github.io/obsidian-dataview/queries/data-commands/), [Differences to SQL](https://blacksmithgu.github.io/obsidian-dataview/queries/differences-to-sql/), [Expressions](https://blacksmithgu.github.io/obsidian-dataview/reference/expressions/), [Functions](https://blacksmithgu.github.io/obsidian-dataview/reference/functions/), [Metadata on pages (file.*)](https://blacksmithgu.github.io/obsidian-dataview/annotation/metadata-pages/), [Adding metadata (inline fields)](https://blacksmithgu.github.io/obsidian-dataview/annotation/add-metadata/), [Types of metadata](https://blacksmithgu.github.io/obsidian-dataview/annotation/types-of-metadata/), [Inline DQL](https://blacksmithgu.github.io/obsidian-dataview/queries/dql-js-inline/), [FAQ](https://blacksmithgu.github.io/obsidian-dataview/resources/faq/) (`row.where` for keyword-named fields). Not stated in docs: whether FROM [[note]] counts frontmatter links; what a comparison with a missing field returns.
- [Obsidian Help - Community plugins](https://obsidian.md/help/community-plugins) - Restricted mode, Browse, Install, Enable; security warning.
- [Obsidian Help - How Obsidian stores data](https://obsidian.md/help/data-storage) - notes are plain .md files; metadata cache in IndexedDB powers Graph view and Outline.
- [Obsidian Help - Manage vaults](https://obsidian.md/help/manage-vaults) - Vault profile → Manage vaults → Open folder as vault; command Open another vault.
- [Obsidian Help - Configuration folder](https://obsidian.md/help/configuration-folder) - `.obsidian` holds the vault's settings files.

## Pattern (LLM wiki)
- [Karpathy - LLM Wiki (gist)](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) - the original idea file: raw / wiki / schema; ingest / query / lint; index.md and log.md; Obsidian tips. **Primary for lesson 0008.**
- [Karpathy's LLM wiki: what it is and how to set one up (DEV)](https://dev.to/forrestzhang/karpathys-llm-wiki-what-it-is-and-how-to-set-one-up-56ck) - short summary of the structure.
- [julianoczkowski/karpathy-llm-wiki](https://github.com/julianoczkowski/karpathy-llm-wiki) - step-by-step build with Claude Code + Obsidian.
- [Build an LLM Wiki for Your AI Stack (The Orchestrators)](https://theorchestrators.ai/blog/build-an-llm-wiki-for-your-ai-stack) - manifest + wiki + dashboard idea.

## Wisdom (communities)
- [Obsidian Forum](https://forum.obsidian.md/) - official forum; "Help" and "Share & showcase" categories.
- [r/ObsidianMD](https://www.reddit.com/r/ObsidianMD/) - large community, many vault-structure threads.
