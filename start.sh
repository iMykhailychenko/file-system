#!/bin/sh

cd ./client && yarn build && cd ..
docker-compose -f docker-compose.yml --env-file ./.env up --build --remove-orphans