#!/usr/bin/env bash

export $(xargs < env/.dev.env)

echo "Starting development server..."
echo "API: $API"
echo "ENVIRONMENT: $ENVIRONMENT"

cross-env \
  API=$API \
  ENVIRONMENT=$ENVIRONMENT \
  PORT=$PORT \
  webpack \
  --mode production \
  --config config/webpack.client.js \