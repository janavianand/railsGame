#!/bin/bash
set -e
unset BUNDLE_PATH
unset BUNDLE_BIN

# Remove a potentially pre-existing server.pid for Rails.
rm -f /myapp/tmp/pids/server.pid

# rake db:create --trace
# rake db:migrate

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
