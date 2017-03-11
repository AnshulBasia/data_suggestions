DROP DATABASE IF EXISTS anime;
CREATE DATABASE anime;

\c anime;
DROP TABLE IF EXISTS rating;
DROP TABLE IF EXISTS anime;
CREATE TABLE anime (
  anime_id INTEGER PRIMARY KEY,
  name VARCHAR,
  genre VARCHAR,
  type VARCHAR,
  episodes INTEGER,
  rating real,
  members VARCHAR
);


COPY anime(anime_id,name,genre,type,episodes,rating,members)
FROM '/home/mukesh/Desktop/Data/anime.csv'  DELIMITER ',' CSV HEADER;


CREATE TABLE rating (
  user_id INTEGER,
  anime_id INTEGER,
  rating REAL 
);

COPY rating(user_id,anime_id,rating)
FROM '/home/mukesh/Desktop/Data/rating.csv' DELIMITER ',' CSV HEADER;
