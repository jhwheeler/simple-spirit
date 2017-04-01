exports.DATABASE_URL = (process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://localhost/simple-spirit');
exports.TEST_DATABASE_URL = (process.env.TEST_DATABASE_URL ||
	'mongodb://localhost/test-simple-spirit');

exports.PORT = process.env.PORT || 8723;

exports.secret = 'H-ZLN6@yyjXR@h^wf%z';
