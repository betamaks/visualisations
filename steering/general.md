# General Steering

This repository should steer both humans and agents toward a consistent hosted-visual workflow.

## Platform rules

- Treat this repository as a static hosting platform, not as an article repository.
- Keep published URLs stable.
- Prefer updating an existing visual over creating parallel near-duplicates.
- Reuse shared assets, theme tokens, schemas, and tooling before adding page-local duplication.

## Structure

- Topic content lives under a category folder.
- Each topic root should contain `visual.meta.json`.
- A topic can have one or more variants under `<topic>/<variant>/index.html`.
- The root `catalog.json` is the discoverable index of categories and topic manifests.

## Safe committed guidance

- Commit only generic instructions and reusable structure.
- Keep local machine details and auth outside git.

## Current categories

- `veterinary/`
- `observability/`
