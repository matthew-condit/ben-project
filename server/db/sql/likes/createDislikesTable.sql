
DROP TABLE IF EXISTS dislikes CASCADE;
CREATE TABLE dislikes (
  userId INTEGER REFERENCES users(id),
  postId INTEGER REFERENCES posts(id)
);
