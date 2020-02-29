const createDb = () => {
  const options = {
    // Initialization Options
    // promiseLib: promise
    query(e) {
      console.log('QUERY:', e.query);
    },
  };
  const connectionOptions = {
    user: 'postgres',
    password: 'password',
    host: 'localhost',
    port: 5432,
    database: 'ben_hacker_news',
  };

  const pgp = require('pg-promise')(options);
  const db = pgp(connectionOptions);

  return {
    db,
  };
};

module.exports = {
  createDb,
};
