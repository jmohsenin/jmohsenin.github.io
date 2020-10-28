#!/bin/bash
THUMB=430
FULL=1320
EXPORT_PATH=/Users/jmo/jmohsenin.github.io/assets/images/pizzas/

for filename in /Users/jmo/Documents/2020-\ Freelance/pizzas-raw/*; do
    # path/to/filename.jpg -> filename.jpg
    x=${filename##*/}
    # filename.jpg -> filename
    y=${x%.*}

    magick "$filename" -resize $THUMBx$THUMB -quality 80 $EXPORT_PATH${y}@thumb.jpg
    magick "$filename" -resize $FULLx$FULL -quality 80 $EXPORT_PATH${y}.jpg

    magick "$filename" -resize $THUMBx$THUMB -quality 80 -define webp:lossless=false $EXPORT_PATH${y}@thumb.webp
    magick "$filename" -resize $FULLx$FULL -quality 80 -define webp:lossless=false $EXPORT_PATH${y}.webp
done