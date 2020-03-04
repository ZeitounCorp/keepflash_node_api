#!/bin/bash

git add .
git commit -m "Version Bump"
npm --no-git-tag-version -f version patch
git push -u origin master
npm publish --access public
osascript -e 'display notification \"Et Voilà\" with title \"Publish finished running\" subtitle \"I finished publishing your library to npmjs\" sound name \"Purr\"'
