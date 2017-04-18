#! /bin/bash

function npm_run_build {
  npm run build
}

function build_simple_node {
  docker build -f ./context/node/Dockerfile -t simple-node .
}

function build_simple_mongo {
  docker build -f ./context/mongo/Dockerfile -t simple-mongo .
}

function build_simple_spirit {
  docker build -f ./context/simple-spirit/Dockerfile -t simple-spirit .
}

function import_db {
  docker exec -it simplespirit_mongo_1 mongoimport --db simple-spirit --collection users --file users.json
  docker exec -it simplespirit_mongo_1 mongoimport --db simple-spirit --collection maxims --file maxims.json
  docker exec -it simplespirit_mongo_1 mongoimport --db simple-spirit --collection sessions --file sessions.json
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
