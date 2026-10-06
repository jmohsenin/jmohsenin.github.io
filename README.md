## Pizzas
1. Put new images in Google Photos "Pizza Export" foler
2. Export to `~/Downloads`
3. In Figma, create new artboard + crop image appropriately
4. Export to `~/Documents/2020-21 Freelance/pizzas-raw/`, named `YYYY-MM-DD--NN.jpg`
5. Run `./pizza_images.sh` (needs `brew install imagemagick`; only new images are exported, `--force` redoes all, `--dry-run` previews)

TODO: automate step #4 with Figma export CLI

## How images work
1. Two sizes, each as JPG + WebP: 430px (`@thumb`) and 1320px. Gallery uses the thumb; carousel picks between thumb and full via `srcset`.

## Starting the server
1. `bundle exec jekyll serve`
2. `bundle update`