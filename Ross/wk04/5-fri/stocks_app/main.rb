# ruby gem declarations
require "sinatra"
require "sinatra/reloader"
require "stock_quote"


get '/' do
  stock = params["stock"]
  @quote = StockQuote::Stock.quote("aapl")

  erb(:index)
end

get '/about' do
  erb(:about)
end
