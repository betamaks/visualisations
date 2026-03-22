#!/usr/bin/env python3

import json
from pathlib import Path
import sys


ROOT = Path(__file__).resolve().parent.parent
CATALOG = ROOT / "catalog.json"


def fail(message: str) -> None:
    print(f"ERROR: {message}")
    sys.exit(1)


def load_json(path: Path):
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def main() -> int:
    if not CATALOG.exists():
      fail("catalog.json is missing")

    catalog = load_json(CATALOG)
    categories = catalog.get("categories", [])
    if not categories:
        fail("catalog.json has no categories")

    checked_manifests = 0

    for category in categories:
        landing_path = category.get("landing_path")
        if not landing_path:
            fail(f"category {category.get('slug')} is missing landing_path")

        landing_file = ROOT / landing_path / "index.html"
        if not landing_file.exists():
            fail(f"landing page missing: {landing_file}")

        for topic in category.get("topics", []):
            manifest_rel = topic.get("manifest")
            if not manifest_rel:
                fail(f"topic {topic.get('slug')} is missing manifest")

            manifest_path = ROOT / manifest_rel
            if not manifest_path.exists():
                fail(f"manifest missing: {manifest_path}")

            manifest = load_json(manifest_path)
            for required_key in ["slug", "category", "title", "theme", "default_variant", "variants"]:
                if required_key not in manifest:
                    fail(f"{manifest_path} missing required key: {required_key}")

            if manifest["category"] != category["slug"]:
                fail(f"{manifest_path} category mismatch: {manifest['category']} != {category['slug']}")

            variants = manifest.get("variants", [])
            if not variants:
                fail(f"{manifest_path} has no variants")

            for variant in variants:
                variant_path = variant.get("path")
                if not variant_path:
                    fail(f"{manifest_path} has variant without path")
                html_file = manifest_path.parent / variant_path / "index.html"
                if not html_file.exists():
                    fail(f"variant page missing: {html_file}")

            checked_manifests += 1

    print(f"Validated {checked_manifests} manifests.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
