#!/usr/bin/env bash

export $(xargs < env/.dev.env)

echo "Starting development server..."
echo "API: $API"
echo "ENVIRONMENT: $ENVIRONMENT"

cross-env \
  API=$API \
  ENVIRONMENT=$ENVIRONMENT \
  PORT=$PORT \
  ENV=$ENV \
  webpack \
  --mode development \
  --config config/webpack.client.js \