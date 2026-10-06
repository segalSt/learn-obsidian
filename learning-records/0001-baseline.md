# 0001 - Baseline (2026-10-06)

## Context
Starting point, from the first working session (no lessons yet).

## What the user can already do
- Opened `kolnatun-context-2.0` as a vault (understands why the root must be that folder, not `shared/`).
- Installed Dataview; first queries showed as plain code -> plugin was not enabled yet.
- Understands the LLM-wiki layering: raw sources / analysis results / process prompts; entities (container > member) vs concepts.
- Asked how to cut the graph down to "results + related source parts" -> graph filtering is the live need.

## Not yet shown
- Search operator syntax (`path:`, `-`, `OR`, `[property:value]`), graph groups, local graph.
- Writing or editing Dataview queries alone.

## Decision
Lesson 0001 = graph filters via search operators (the immediate need). Next candidates: local graph + groups, then properties as layers, then Dataview basics.
