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
    });

  describe('GET endpoint', function() {

    it('should get all maxims', function() {
      return chai.request(app)
        .get('/maxims')
        .then(function(res) {
          res.should.have.status(200);
          res.body.should.have.length.of.at.least(1);
        });
    });

    it('should get latest maxim', function() {
      return chai.request(app)
        .get('/maxim')
        .then(function(res) {
          res.should.have.status(200);
          res.body.should.have.length.of.at.least(1);
        });
    });

    it('should get a maxim by id', function() {
      Maxim
        .findOne()
        .exec()
        .then((randomMaxim) => {
          const randId = randomMaxim.maximId;
          return chai.request(app)
            .get(`/maxim/${randId}`)
            .then(function(res) {
              res.should.have.status(200);
              res.body.should.have.length.of.at.least(1);
            });
        });
    });
  });

  describe('POST endpoint', function() {

    it('should post a maxim', function() {
      const newMaxim = generateMaxim();
      return chai.request(app)
        .post('/maxim')
        .send(newMaxim)
        .then(function(res) {
          res.should.have.status(200);
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
          maxim.maxim.should.equal(newMaxim.maxim);
          maxim.challenge.should.equal(newMaxim.challenge);
      });
    });
  });

  describe('PUT endpoint', function() {

    it('should update fields you send', function() {
      const updateData = {
        maxim: 'The best maxim ever',
        challenge: 'Make it happen. You can do it!'
      };

      return Maxim
        .findOne()
        .exec()
        .then(function(maxim) {
          updateData.maximId = maxim.maximId;

          return chai.request(app)
            .put(`/maxim/${maxim.maximId}`)
            .send(updateData);
        })
        .then(function(res) {
          res.should.have.status(200);

          return Maxim.findOne({maximId: updateData.maximId}).exec();
        })
        .then(function(maxim) {
          maxim.maxim.should.equal(updateData.maxim);
          maxim.challenge.should.equal(updateData.challenge);
        });
    })
  })

  describe('DELETE endpoint', function() {

    it('should delete selected maxim', function() {
      let maxim;

      return Maxim
        .findOne()
        .exec()
        .then(function(_maxim) {
          maxim = _maxim;
          return chai.request(app).delete(`/maxim/${maxim.maximId}`);
        })
        .then(function(res) {
          res.should.have.status(204);
          return Maxim.findOne({maximId: maxim.maximId}).exec();
        })
        .then(function(_maxim) {
          should.not.exist(_maxim)
        });
    });
  });
});
