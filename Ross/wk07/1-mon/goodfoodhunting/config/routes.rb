Rails.application.routes.draw do            # keep an eye on order of routes!!

  # resources :dishes

  get '/', to: 'pages#home'   #  route points to the controller file and method

  get '/about', to: 'pages#about'

  get '/dishes/:id', to: 'dishes#show'

  get '/dishes/new', to: 'dishes#new'

  get '/dishes', to: 'dishes#index'

  post '/dishes', to: 'dishes#create'

  get '/dishes/:id/edit', to: 'dishes#edit'

  put '/dishes', to: 'dishes#update'

  delete '/dishes/:id', to: 'dishes#destroy'

end
