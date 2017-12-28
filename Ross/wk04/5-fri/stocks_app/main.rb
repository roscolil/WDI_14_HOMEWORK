# ruby gem declarations
require "pry"
require "sinatra"
require "sinatra/reloader"
require "stock_quote"



get '/' do

  query_string = params["stock_ticker"]
  get_stock_info(query_string)

  def get_stock_info(stock_ticker)
    quote_response = StockQuote::Stock.quote("#{stock_ticker}")
    stock_hash = {}

    quote_response.each do | stock |
      stock_hash[stock]
    end

    return @stock_hash
  end
  erb(:index)
end

get '/about' do
  erb(:about)
end

# binding.pry
# puts 'end'
