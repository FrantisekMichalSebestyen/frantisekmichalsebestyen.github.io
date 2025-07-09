#!/bin/bash

# Directory to optimize (defaults to current directory)
TARGET_DIR="${1:-.}"

# Resize width
MAX_WIDTH=1000

# Quality (slight reduction)
QUALITY=85

echo "Optimizing JPG images in: $TARGET_DIR"
echo "Max width: ${MAX_WIDTH}px, Quality: ${QUALITY}%"

# Find all .jpg/.jpeg files (case insensitive)
find "$TARGET_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) | while read -r IMG; do
    echo "Processing: $IMG"
    
    # Resize and compress in-place
    mogrify -resize "${MAX_WIDTH}x>" -quality "$QUALITY" "$IMG"
done

echo "Optimization complete."

