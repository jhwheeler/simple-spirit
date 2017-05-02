#! /bin/bash

function npm_run_build {
  npm run build
}

function build_simple_mongo {
  docker build -f ./data/Dockerfile -t simple-mongo .
}

function build_simple_spirit {
  docker build -f ./Dockerfile -t simple-spirit .
}

function import_db {
  docker exec -it simplespirit_mongo_1 mongoimport --db simple-spirit --collection users --drop --file users.json
  docker exec -it simplespirit_mongo_1 mongoimport --db simple-spirit --collection koans --drop --file koans.json
  docker exec -it simplespirit_mongo_1 mongoimport --db simple-spirit --collection sessions --drop --file sessions.json
}

function setup {
  npm_run_build
  build_simple_mongo
  build_simple_spirit
  docker-compose up -d
  import_db
}


setup
