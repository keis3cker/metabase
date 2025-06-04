#!/bin/bash
set -e

rm -rf build

npm ci --install-links
npm audit --audit-level=low

if [ "$WATCH" = "true" ]; then
  PORT=$CLIENT_PORT npm run dev
else
  npm run build
  npm run preview -- -p $CLIENT_PORT
fi
