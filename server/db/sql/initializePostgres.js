const { createDb } = require('../createDB');
const { qf } = require('./qf');

const dbSql = qf('./createDB.sql');
const createPostTable = qf('./posts/createPostTable.sql');

const { db } = createDb();

const actions = [
  // async () => await db.any(dbSql),
  async () => await db.any(createPostTable),
];

const syncLoop = async (array) => array.forEach(async (fn) => await fn());

syncLoop(actions);
