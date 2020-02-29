DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  body TEXT
);

INSERT INTO posts (title, body)
  VALUES ('Test post 1', 'Test post 1 body, eventually make this very long');

INSERT INTO posts (title, body)
  VALUES ('Bens post', 'Test post 2 body, eventually make this very long');
