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
  result = HTTParty.get("http://omdbapi.com/?#{apikey}&t=#{movie}").parsed_response
  @title = result["Title"]
  @year = result["Year"]
  @rated = result["Rated"]
  @released = result["Released"]

end
