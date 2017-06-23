#!/bin/bash
set -eu
STACK=${1:-mctest}
TARGET=${2:-local}
TESTS=${3:-working}
PATH=$PATH:npm-global/bin

npm set registry https://registry.npmjs.org/

# Ensure gulp is installed globally
command -v gulp || { npm install --global gulp ;}

# Install packages before each run
npm install

# Execute test through gulp

gulp run --stack $STACK --target $TARGET --tests $TESTS
