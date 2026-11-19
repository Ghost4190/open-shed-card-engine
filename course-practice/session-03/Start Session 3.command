#!/bin/bash

cd -- "$(dirname -- "$0")" || exit 1
node_bin="$(command -v node)"
prepared_node="${NVM_DIR:-$HOME/.nvm}/versions/node/v22.14.0/bin/node"
if [ -z "$node_bin" ] || [ "$("$node_bin" --version 2>/dev/null)" != "v22.14.0" ]; then
  for candidate in "$prepared_node" /opt/homebrew/bin/node /usr/local/bin/node; do
    if [ -x "$candidate" ] && [ "$("$candidate" --version 2>/dev/null)" = "v22.14.0" ]; then
      node_bin="$candidate"
      break
    fi
  done
fi
if [ -z "$node_bin" ]; then
  printf '%s\n' 'Node is unavailable. Ask your trainer for the prepared Node 22.14.0 runtime.'
  exit 1
fi
exec "$node_bin" run-session-3.mjs
