# ruby gem declarations
require "pry"
require "sinatra"
require "sinatra/reloader"
require "stock_quote"



get '/' do
  stock = params["stock"]
  quote_response = StockQuote::Stock.quote("aapl")


  def get_stock_info(stock)
    stock.each do | stock |
      return @stock
    end
  end

  # binding.pry
  # puts 'end'

  erb(:index)
end

get '/about' do
  erb(:about)
end
