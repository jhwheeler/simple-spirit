exports.DATABASE_URL = (process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://mongo/simple-spirit');
exports.TEST_DATABASE_URL = (process.env.TEST_DATABASE_URL ||
	'mongodb://mongo/test-simple-spirit');

exports.PORT = process.env.PORT || 8723;

