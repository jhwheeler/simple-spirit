#! /bin/bash

function npm_run_build {
  npm run build
}

function build_simple_node {
  docker build -f ./server/Dockerfile -t simple-node:0.1 .
}

function build_simple_mongo {
  docker build -f ./data/Dockerfile -t simple-mongo:0.1 .
}

function build_simple_spirit {
  docker build -f ./front/Dockerfile -t simple-spirit:0.1 .
}

function import_db {
  docker exec -it simplespirit_mongo_1 mongoimport --db simple-spirit --collection users --file data/users.json
  docker exec -it simplespirit_mongo_1 mongoimport --db simple-spirit --collection maxims --file data/maxims.json
  docker exec -it simplespirit_mongo_1 mongoimport --db simple-spirit --collection sessions --file data/sessions.json
}

function setup {
  npm_run_build
  build_simple_node
  build_simple_mongo
  build_simple_spirit
  docker-compose up -d
  import_db
}


setup
