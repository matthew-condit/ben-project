INSERT INTO
posts(title, body)
VALUES(${title}, ${body})
RETURNING id;


