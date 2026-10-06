## Pizzas
1. Put new images in Google Photos "Pizza Export" foler
2. Export to `~/Downloads`
3. In Figma, create new artboard + crop image appropriately
4. Export to `~/Documents/2020-21 Freelance/pizzas-raw/`, named `YYYY-MM-DD--NN.jpg`
5. Run `./pizza_images.sh` (needs `brew install imagemagick`; only new images are exported, `--force` redoes all, `--dry-run` previews)

TODO: automate step #4 with Figma export CLI

## How images work
1. Two WebP sizes: 430px (`@thumb`) and 1320px. Gallery uses the thumb; carousel picks between thumb and full via `srcset`.

## Starting the server
Needs Ruby 3.x (`brew install ruby@3.4`, then put `/opt/homebrew/opt/ruby@3.4/bin` on your PATH), not the macOS system Ruby. GitHub Pages' gems don't support Ruby 4 yet.
1. `bundle install`
2. `bundle exec jekyll serve`

To pick up GitHub Pages' latest Jekyll/plugin versions: `bundle update github-pages`