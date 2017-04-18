#! /bin/bash

function build_simple_node {
  docker build -f ./context/node/Dockerfile -t simple-node .
}

function build_simple_mongo {
  docker build -f ./context/mongo/Dockerfile -t simple-mongo .
}

function build_simple_spirit {
  docker build -f ./context/simple-spirit/Dockerfile -t simple-spirit .
}

function npm_run_build {
  npm run build
}

function setup {
  build_simple_node
  build_simple_mongo
  build_simple_spirit
  npm_run_build
}

setup
