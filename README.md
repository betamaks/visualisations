# Visualisations

Hosted interactive visuals published from a static GitHub Pages repository.

## Publishing

- GitHub Pages base URL: `https://betamaks.github.io/visualisations/`
- Machine-specific publishing configuration should live outside git, for example in `$CODEX_HOME/visual-publishing.toml`.

## Categories

- `veterinary/`: embed-first study visuals that normally pair a hosted page with a Notion article
- `observability/`: hosted systems and architecture visuals with flexible sizing and no default Notion requirement

## Structure

- `veterinary/<topic-slug>/<variant>/index.html`
- `observability/<topic-slug>/<variant>/index.html`
- `<category>/<topic-slug>/visual.meta.json`
- `catalog.json`
- `shared/themes/`
- `steering/`
- `scripts/`

Examples:

- `veterinary/dachshund-heart-valves/cycle/index.html`
- `veterinary/dachshund-heart-valves/maximal/index.html`
- `observability/ai-agent-architecture/overview/index.html`

## Steering model

- Root repository guidance lives in `AGENTS.md`.
- Category-specific behavior lives in `steering/veterinary.md` and `steering/observability.md`.
- Topic-level intent and publish metadata live in `visual.meta.json`.

## Rules

- Keep hosted URLs stable so existing published or embedded pages continue to update.
- Prefer shared themes, schemas, and tooling over repeated page-local setup.
- Keep secrets and local machine specifics out of committed guidance files.
