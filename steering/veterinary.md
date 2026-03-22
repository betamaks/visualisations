# Veterinary Steering

Veterinary visuals are embed-first study aids that normally pair a hosted visual with a Notion article.

## Default deliverables

- One hosted visual under `veterinary/<topic>/<variant>/index.html`
- One topic manifest at `veterinary/<topic>/visual.meta.json`
- One article source at `veterinary/<topic>/article.md` when article content is being maintained in the repository

## Visual rules

- Optimize for a maximized Notion embed on desktop.
- Keep the full desktop visual visible without vertical scrolling.
- Use a bounded canvas, compact top controls, and a main visual area with compact side explanation.
- End the hosted page at the visual itself.
- Keep longer explanations, legend, and takeaways in the article, not below the visual.
- Keep direction cues secondary to anatomy. Prefer particles or subtle arrows over oversized markers.

## Article rules

- Default Notion location: `Veterinary stuff -> visualisations` unless the user says otherwise.
- Put the hosted visual URL near the top.
- Focus on anatomy or mechanism, not implementation notes.
- Include title, short legend, and key takeaways.
- Separate mechanism, signs, diagnostics, and treatment when relevant.
- Mark uncertainty explicitly when source material is ambiguous.
