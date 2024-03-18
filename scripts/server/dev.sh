#!/usr/bin/env bash

export $(xargs < env/.dev.env)

echo "Starting production server..."
echo "ENVIRONMENT: $ENVIRONMENT"

cross-env \
  ENVIRONMENT=$ENVIRONMENT \
  webpack \
  --mode development \
  --config config/webpack.server.js \