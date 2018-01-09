# ruby gem declarations
require "pry"
require "sinatra"
require "sinatra/reloader"
require "stock_quote"

# Tried a bunch of different stuff here and felt i've wasted a lot of time on it.
# The solution is probably obvious

get '/' do
  #stock = params[:stock]
  result = StockQuote::Stock.quote("aapl")   # just returning a hash symbol



  # query_string = params["stock_ticker"]
  # get_stock_info(query_string)
  #
  # def get_stock_info(stock_ticker)
  #   quote_response = StockQuote::Stock.quote("#{stock_ticker}")
  #   stock_hash = {}
  #
  #   quote_response.each do | stock |
  #     stock_hash[stock]
  #   end
  #
  #   return @stock_hash
  # end
  erb(:index)
end

get '/about' do
  erb(:about)
end

# binding.pry
# puts 'end'
