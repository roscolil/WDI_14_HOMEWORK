class SessionController < ApplicationController

  def new
  end

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to '/'
    else
      render :new
    end

    # user = User.new
    # user.email = params[:email]
    # user.password = params[:password]
    # user.save
    # redirect_to '/'

  end

  def destroy
    session[:user_id] = nil
    redirect_to '/login'
  end
end
