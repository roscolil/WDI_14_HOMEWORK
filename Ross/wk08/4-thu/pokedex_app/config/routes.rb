Rails.application.routes.draw do

  resources :pokemons

  get '/', to: 'pages#index'

  get '/pokemons/new', to: 'pokemons#new'

  post '/pokemons', to: 'pokemons#create'

end
