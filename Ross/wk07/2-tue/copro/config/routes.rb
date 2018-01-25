Rails.application.routes.draw do
  resources :likes
  resources :comments
  resources :projects, only: [:new, :create, :show]
  resources :users

  get '/', to: 'pages#home'

  get '/about', to: 'pages#about'

  get '/login', to: 'session#new'

  post '/session', to: 'session#create'

  delete '/session', to: 'session#destroy'

end
