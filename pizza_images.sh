#!/bin/bash
# Resize raw pizza photos into thumb/full WebP variants for the site.
#
# Usage: ./pizza_images.sh [--force] [--dry-run] [raw_dir]
#   --force    re-export images that already exist
#   --dry-run  print what would be exported without writing anything
#   raw_dir    defaults to $PIZZA_RAW_DIR, then the Freelance folder below
set -euo pipefail

THUMB=430
FULL=1320
QUALITY=80
EXPORT_PATH="$(cd "$(dirname "$0")" && pwd)/assets/images/pizzas"

FORCE=false
DRY_RUN=false
while [[ $# -gt 0 ]]; do
    case "$1" in
        --force) FORCE=true; shift ;;
        --dry-run) DRY_RUN=true; shift ;;
        -*) echo "Unknown option: $1" >&2; exit 1 ;;
        *) break ;;
    esac
done
RAW_DIR="${1:-${PIZZA_RAW_DIR:-$HOME/Documents/2020-21 Freelance/pizzas-raw}}"

if [[ ! -d "$RAW_DIR" ]]; then
    echo "Raw image folder not found: $RAW_DIR" >&2
    exit 1
fi
if ! $DRY_RUN && ! command -v magick >/dev/null; then
    echo "ImageMagick not found. Install it with: brew install imagemagick" >&2
    exit 1
fi

shopt -s nullglob nocaseglob
exported=0
skipped=0
for filename in "$RAW_DIR"/*.{jpg,jpeg,png,heic}; do
    # path/to/filename.jpg -> filename.jpg
    x=${filename##*/}
    # filename.jpg -> filename
    y=${x%.*}

    # pizza.html derives the entry date from the part before "--"
    if [[ ! $y =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}--[0-9]+(-[0-9]+)?$ ]]; then
        echo "warning: $x doesn't match YYYY-MM-DD--NN, check the name" >&2
    fi

    if ! $FORCE && [[ -e "$EXPORT_PATH/$y.webp" ]]; then
        skipped=$((skipped + 1))
        continue
    fi

    echo "exporting $x"
    exported=$((exported + 1))
    $DRY_RUN && continue

    magick "$filename" -resize "${THUMB}x${THUMB}" -quality $QUALITY -define webp:lossless=false "$EXPORT_PATH/${y}@thumb.webp"
    magick "$filename" -resize "${FULL}x${FULL}" -quality $QUALITY -define webp:lossless=false "$EXPORT_PATH/${y}.webp"
done

echo "done: $exported exported, $skipped already up to date"
