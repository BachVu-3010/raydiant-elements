#!/bin/bash
set -e

yarn styleguide:build
cd dist
git init
git config user.name $GITHUB_USER
git config user.email $GITHUB_EMAIL
git add .
git commit -m "Deployed to Github Pages [skip ci]"
git push --force --quiet "https://${GITHUB_TOKEN}@${GITHUB_REF}" master:gh-pages > /dev/null 2>&1
