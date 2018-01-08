require 'httparty'

get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get 'movie_get' do
  
end
