const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');

const {Maxim} = require('../models');
const {app, runServer, closeServer} = require('../server');
const {TEST_DATABASE_URL} = require('../config');

const should = chai.should();

chai.use(chaiHttp);

function seedMaxims() {
  console.info('seeding maxims');
  const seedData = [];

  for (let i=1; i<=10; i++) {
    seedData.push(generateMaxim());
  }

  return Maxim.insertMany(seedData);
}

function generateMaxim() {
  return {
    maximId: faker.random.number(),
    maxim: faker.lorem.words(),
    challenge: faker.lorem.words(),
    date: Date.now()
  }
}

function tearDownDb() {
    console.warn('Deleting database');
    return mongoose.connection.dropDatabase();
}

describe('App', function() {
  it('should start server', function() {
    return chai.request(app)
      .get('/')
        .then(function(res) {
          res.should.have.status(200);
        });
  });
});

describe('API calls', function() {
    before(function() {
        return runServer(TEST_DATABASE_URL);
    });

    beforeEach(function() {
        return seedMaxims();
    });

    afterEach(function() {
        return tearDownDb();
    });

    after(function() {
        return closeServer();
    })

  describe('GET endpoint', function() {

    it('should GET all maxims', function() {
      return chai.request(app)
        .get('/maxims')
        .then(function(res) {
          res.should.have.status(200);
          res.body.should.have.length.of.at.least(1);
        });
    });
  });

  describe('POST endpoint', function() {

    it('should POST a maxim', function() {
      const newMaxim = generateMaxim();
      return chai.request(app)
        .post('/maxim')
        .send(newMaxim)
        .then(function(res) {
          console.log(res.body);
          res.should.have.status(201);
          res.should.be.json;
          res.body.should.be.an('object');
          res.body.should.include.keys(
              'maximId', 'maxim', 'challenge', 'date');
          res.body.maxim.should.equal(newMaxim.maxim);
          res.body.maximId.should.not.be.null;
          res.body.challenge.should.equal(newMaxim.challenge);

          return Maxim.findOne({maximId: res.body.maximId});
      })
      .then(function(maxim) {
          maxim.maxim.should.equal(newMaxim.title);
          maxim.challenge.should.equal(newMaxim.challenge);
      });
    });
  });
});
