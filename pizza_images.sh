#!/bin/bash
SIZE=250
RETINA_SIZE=$((SIZE * 2))

for filename in /Users/jmo/Documents/2020-\ Freelance/pizzas-raw/*; do
    # path/to/filename.jpg -> filename.jpg
    x=${filename##*/}
    # filename.jpg -> filename
    y=${x%.*}

    magick "$filename" -resize $SIZEx$SIZE -quality 70 /Users/jmo/jmohsenin.github.io/assets/images/pizzas/${y}.jpg
    magick "$filename" -resize $RETINA_SIZEx$RETINA_SIZE -quality 70 /Users/jmo/jmohsenin.github.io/assets/images/pizzas/${y}@2x.jpg
    magick "$filename" -resize $SIZEx$SIZE -quality 70 -define webp:lossless=false /Users/jmo/jmohsenin.github.io/assets/images/pizzas/${y}.webp
    magick "$filename" -resize $RETINA_SIZEx$RETINA_SIZE -quality 70 -define webp:lossless=false /Users/jmo/jmohsenin.github.io/assets/images/pizzas/${y}@2x.webp
done