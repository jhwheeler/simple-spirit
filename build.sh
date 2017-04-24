#! /bin/bash

function npm_run_build {
  npm run build
}

function build_simple_mongo {
  docker build -f ./data/Dockerfile -t simple-mongo:0.1 .
}

function build_simple_spirit {
  docker build -f ./Dockerfile -t simple-spirit:0.1 .
}

function import_db {
  docker exec -it simplespirit_mongo_1 mongoimport --db simple-spirit --collection users --file users.json
  docker exec -it simplespirit_mongo_1 mongoimport --db simple-spirit --collection maxims --file maxims.json
  docker exec -it simplespirit_mongo_1 mongoimport --db simple-spirit --collection sessions --file sessions.json
}

function setup {
  npm_run_build
  build_simple_mongo
  build_simple_spirit
  docker-compose up -d
  import_db
}


setup
