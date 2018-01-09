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
  apikey = "apikey=2f6435d9"
  movie = params[:title]
  result = HTTParty.get("http://omdbapi.com/?#{apikey}&s=#{movie}").parsed_response
  @search = result["Search"]
  erb :search_result
end

get '/movie_result' do
  @title = result["Title"]
  @rated = result["Rated"]
  @genre = result["Genre"]
  @actors = result["Actors"]
  @released = result["Released"]
  @director = result["Director"]
  @language = result["Language"]
  @awards = result["Awards"]
  @poster = result["Poster"]
  @imdb_rating = result["imdbRating"]
  @plot = result["Plot"]
  erb :movie_result
end
