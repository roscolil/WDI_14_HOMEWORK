module UsersHelper

  def current_user
    User.find_by(id: session[:user_id])
  end

  def logged_in?
    if current_user # or !! current_user
      true
    else
      false
    end
  end
  
end
