const { createDb } = require('../createDB');
const { qf } = require('./qf');

const dbSql = qf('./createDB.sql');
const queries = [
  qf('./posts/createPostTable.sql'),
  qf('./users/createUserTable.sql'),
  qf('./likes/createLikesTable.sql'),
  qf('./likes/createDislikesTable.sql'),
  qf('./comments/createCommentsTable.sql'),
];

const { db } = createDb();

const actions = queries.map((q) => async () => await db.any(q));

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

asyncForEach(actions, async (f) => await f());
