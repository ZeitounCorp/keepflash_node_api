#!/bin/bash

git add .
git commit -m "Version Bump"
git push -u origin master
npm publish --access public
