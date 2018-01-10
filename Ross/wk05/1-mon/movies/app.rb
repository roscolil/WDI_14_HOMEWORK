require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get '/search_result' do
  @apikey = "apikey=2f6435d9"
  @movie = params[:title]
  result = HTTParty.get("http://omdbapi.com/?#{@apikey}&s=#{@movie}").parsed_response
  @search = result["Search"]
  erb :search_result
end

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

  file = File.open('history.txt', 'a')
  file.puts(@title)
  file.close

  erb :movie_result
end

get '/history' do
  file = File.readlines('history.txt')
  @list = file
  erb :history
end
