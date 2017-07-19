#!/bin/bash

netlify deploy
surge -p dist/ -d http://vue-ya-semantic.surge.sh
