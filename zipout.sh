#!/bin/zsh

set -e  # exit on error

# Remove existing out.zip if present
if [[ -f ./out.zip ]]; then
    echo "Removing existing ./out.zip"
    rm ./out.zip
fi

# Ensure out directory exists
if [[ ! -d out ]]; then
    echo "Error: out directory not found."
    exit 1
fi

# Create zip of the contents of out/ (without the out directory itself)
echo "Creating zip archive from out/..."
cd out && zip -r ../out.zip .

echo "Zip archive created: ./out.zip"
