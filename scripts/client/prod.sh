#!/usr/bin/env bash

export $(xargs < env/.dev.env)

echo "Starting production server..."
echo "API: $API"
echo "ENVIRONMENT: $ENVIRONMENT"
echo "PORT: $PORT"

cross-env \
  API=$API \
  ENVIRONMENT=$ENVIRONMENT \
  PORT=$PORT \
  ENV=$ENV \
  webpack \
  --mode production \
  --config config/webpack.common.js \