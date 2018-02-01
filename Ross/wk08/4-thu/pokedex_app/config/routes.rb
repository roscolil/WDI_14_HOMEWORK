Rails.application.routes.draw do

  resources :pokemons, only: [:new, :create, :index]

  get '/', to: 'pokemons#index'

  get '/pokemons/new', to: 'pokemons#new'

  post '/pokemons', to: 'pokemons#create'


end
