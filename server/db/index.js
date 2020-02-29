const { createDb } = require('./createDb');
const { db } = createDb();

module.exports = {};
module.exports.db = db;
module.exports.User = require('./models/User');
module.exports.Post = require('./models/Post');
module.exports.Session = require('./models/Session');
module.exports.Comment = require('./models/Comment');
module.exports.Like = require('./models/Like');
