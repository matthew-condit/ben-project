const { createDb } = require('./createDb');
const { db } = createDb();

module.exports = {};
module.exports.db = db;
module.exports.User = require('./models/User');
module.exports.Post = require('./models/Post');
