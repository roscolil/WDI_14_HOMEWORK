require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get 'movie_get' do
  
end

get 'search_result' do
  return result = HTTParty.get('http://omdbapi.com/?t=once').parsed_response
end
