#!/bin/bash
set -eu
STACK=${1:-mctest}
TARGET=${2:-local}
TESTS=${3:-working}
BROWSER=${4:-safari}
PATH=$PATH:npm-global/bin

# Depending on the environment chosen, use the proper navindex-*.json file
# Built so that if other dev environments change the indexes of the menu bar, it'll be easy
# to control which JSON gets loaded.
# rm -rf ./data/navindexes.json

# case $1 in
#    mcdev2 )
#        cp ./data/navindexes-mcdev2.json ./data/navindexes.json
#        ;;
#    mctest )
#        cp ./data/navindexes-mcdev2.json ./data/navindexes.json
#        ;;
#    * )
#        cp ./data/navindexes-gen.json ./data/navindexes.json
# esac

# Cleanup node_modules before each run
# rm -rf node_modules
npm set registry https://registry.npmjs.org/

# Ensure gulp is installed globally
command -v gulp || { npm install --global gulp ;}

# Install packages before each run
npm install

# Execute test through gulp
# STACK = @param for test environment
# TARGET = @param for test execution environment
# TESTS = @param for the tests that are going to be performed
# BROWSER = used of 'bs' is chosen as the 'TARGET'.  If TARGET = local, this parameter is ignored.
# It has the following options:
# win7-chrome
# win7-firefox
# win7-ie
# win10-chrome
# win10-firefox
# win10-ie
#
gulp run --stack $STACK --target $TARGET --tests $TESTS --browser $BROWSER

## Add a parameter/option to give a menu of available tests
