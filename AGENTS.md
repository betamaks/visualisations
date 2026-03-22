# Visualisations Repository Guidance

This repository is the hosting platform for published visuals.

Use this file only for generic repository guidance that is safe to commit. Do not store secrets, machine-specific paths, tokens, credentials, or private endpoints here.

## First steps

- Inspect the existing repository hierarchy before adding or moving files.
- Preserve stable published URLs. If a visual already exists, update it in place unless the user explicitly asks for a new path.
- Read [steering/general.md](./steering/general.md) first.
- If the target path is under `veterinary/`, also read [steering/veterinary.md](./steering/veterinary.md).
- If the target path is under `observability/`, also read [steering/observability.md](./steering/observability.md).

## Routing

- Veterinary topics belong under `veterinary/<topic>/<variant>/`.
- Observability and systems topics belong under `observability/<topic>/<variant>/`.
- Shared assets, reusable tokens, schemas, and tooling belong under `shared/` or `scripts/`.

## Steering files

- Each topic should have a `visual.meta.json` file at the topic root.
- The repository-wide catalog lives in `catalog.json`.
- Shared theme references live in `shared/themes/`.

## Config and local overrides

- Prefer `$CODEX_HOME/visual-publishing.toml` for machine-specific publishing configuration.
- If a repo-local override is ever needed, keep it in an ignored local file such as `.visualisations.local.toml`.
- Never commit authentication material.
