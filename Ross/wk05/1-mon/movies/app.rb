require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require 'pg'


get '/' do
  erb :index
end


get '/search_result' do
  @apikey = "apikey=2f6435d9"
  @movie = params[:title]           # Passed in from form on index.erb
  result = HTTParty.get("http://omdbapi.com/?#{@apikey}&s=#{@movie}").parsed_response
  @search = result["Search"]        # Index 'Search' returns array for list in search_result.erb
  erb :search_result
end

# Details page for selected title
get '/movie_result' do
  movie_result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&i=#{params[:id]}").parsed_response

  @title = movie_result["Title"]
  @rated = movie_result["Rated"]
  @genre = movie_result["Genre"]
  @actors = movie_result["Actors"]
  @released = movie_result["Released"]
  @director = movie_result["Director"]
  @language = movie_result["Language"]
  @awards = movie_result["Awards"]
  @poster = movie_result["Poster"]
  @imdb_rating = movie_result["imdbRating"]
  @plot = movie_result["Plot"]

  conn = PG.connect(dbname: 'movies_db')
  sql_query = "SELECT EXISTS (SELECT 1 FROM movies_cache WHERE imdbid = '#{params[:id]}');"
  conn.exec(sql_query)
  conn.close

# Condition always true, even if == 't' or 'f' could be sql_query
  if sql_query == 't'
    # conn = PG.connect(dbname: 'movies_db')
    # sql = "SELECT title, rated, genre, released, director FROM movies_cache;"
    # conn.exec(sql)
    # conn.close

    erb :cached_result
  else
    conn = PG.connect(dbname: 'movies_db')
    sql = "INSERT INTO movies_cache (title, rated, genre, released, director, imdbID) VALUES ('#{@title}', '#{@rated}', '#{@genre}', '#{@released}', '#{@director}', '#{params[:id]}');"
    conn.exec(sql)
    conn.close

    file = File.open('history.txt', 'a')
    file.puts(@title)
    file.close

    erb :movie_result
  end
end

get '/cached_result' do
  erb :cached_result
end

get '/about' do
  erb :about
end

get '/history' do
  file = File.readlines('history.txt')
  @list = file
  erb :history
end
