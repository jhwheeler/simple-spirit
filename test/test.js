const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');

const {Koan} = require('../models');
const {app, runServer, closeServer} = require('../server');
const {TEST_DATABASE_URL} = require('../config');

const should = chai.should();

chai.use(chaiHttp);

function seedKoans() {
  console.info('seeding koans');
  const seedData = [];

  for (let i=1; i<=10; i++) {
    seedData.push(generateKoan());
  }

  return Koan.insertMany(seedData);
}

function generateKoan() {
  return {
    koanId: faker.lorem.words(),
    koan: faker.lorem.words(),
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
        return seedKoans();
    });

    afterEach(function() {
        return tearDownDb();
    });

    after(function() {
        return closeServer();
    });

  describe('GET endpoint', function() {

    it('should get all koans', function() {
      return chai.request(app)
        .get('/api/koans')
        .then(function(res) {
          res.should.have.status(200);
          res.body.should.have.length.of.at.least(1);
        });
    });

    it('should get latest koan', function() {
      return chai.request(app)
        .get('/api/koan')
        .then(function(res) {
          res.should.have.status(200);
          res.body.should.have.length.of.at.least(1);
        });
    });

    it('should get a koan by id', function() {
      Koan
        .findOne()
        .exec()
        .then((randomKoan) => {
          const randId = randomKoan.koanId;
          return chai.request(app)
            .get(`/api/koan/${randId}`)
            .then(function(res) {
              res.should.have.status(200);
              res.body.should.have.length.of.at.least(1);
            });
        });
    });
  });

  describe('POST endpoint', function() {

    it('should post a koan', function() {
      const newKoan = generateKoan();
      return chai.request(app)
        .post('/api/koan')
        .send(newKoan)
        .then(function(res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.an('object');
          res.body.should.include.keys(
              'koanId', 'koan', 'challenge', 'date');
          res.body.koan.should.equal(newKoan.koan);
          res.body.koanId.should.not.be.null;
          res.body.challenge.should.equal(newKoan.challenge);

          return Koan.findOne({koanId: res.body.koanId});
      })
      .then(function(koan) {
          koan.koan.should.equal(newKoan.koan);
          koan.challenge.should.equal(newKoan.challenge);
      });
    });
  });

  describe('PUT endpoint', function() {

    it('should update fields you send', function() {
      const updateData = {
        koan: 'The best koan ever',
        challenge: 'Make it happen. You can do it!'
      };

      return Koan
        .findOne()
        .exec()
        .then(function(koan) {
          updateData.koanId = koan.koanId;

          return chai.request(app)
            .put(`/api/koan/${koan.koanId}`)
            .send(updateData);
        })
        .then(function(res) {
          res.should.have.status(200);

          return Koan.findOne({koanId: updateData.koanId}).exec();
        })
        .then(function(koan) {
          koan.koan.should.equal(updateData.koan);
          koan.challenge.should.equal(updateData.challenge);
        });
    })
  })

  describe('DELETE endpoint', function() {

    it('should delete selected koan', function() {
      let koan;

      return Koan
        .findOne()
        .exec()
        .then(function(_koan) {
          koan = _koan;
          return chai.request(app).delete(`/api/koan/${koan.koanId}`);
        })
        .then(function(res) {
          res.should.have.status(204);
          return Koan.findOne({koanId: koan.koanId}).exec();
        })
        .then(function(_koan) {
          should.not.exist(_koan)
        });
    });
  });
});
