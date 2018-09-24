#!/bin/bash
set -e

echo "//registry.npmjs.org/:_authToken=$NPM_AUTH_TOKEN" > ~/.npmrc
echo "unsafe-perm=true" >> ~/.npmrc

# Why was this here? Probably just for CI?
# chown -R root /usr/local

# Publish from build/lib
cd build/lib
npm publish --tag $NPM_TAG
