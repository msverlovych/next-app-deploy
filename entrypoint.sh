#!/bin/sh

export NEXT_PUBLIC_API=$(cat /run/secrets/NEXT_PUBLIC_API)

# Start the app
exec "$@"