-- main table
CREATE TABLE movies_cache (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  rated VARCHAR(255),
  genre VARCHAR(255),
  released VARCHAR(255),
  director VARCHAR(255),
  imdbID VARCHAR(255)
  );

-- query to db based on selected movie id
SELECT EXISTS (SELECT 1 FROM movies_cache WHERE imdbid = '#{params[:id]}');
