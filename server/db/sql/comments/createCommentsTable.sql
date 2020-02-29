DROP TABLE IF EXISTS comments CASCADE;

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  body TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  writen_by INTEGER REFERENCES users(id),
  in_response_to INTEGER REFERENCES comments(id),
  post_id INTEGER REFERENCES posts(id)
);
