#!/bin/bash

git add .
git commit -m "Version Bump"
git push -u origin master
npm version patch
npm publish --access public
osascript -e 'display notification \"Et Voilà\" with title \"Publish finished running\" subtitle \"I finished publishing your library to npmjs\" sound name \"Purr\"'
