class ProjectsController < ApplicationController

  def show
    @project = Project.find(params[:id])
    @comments = @project.comments      # comments method refers to link in project.rb model
    render :show
  end

  def new
    redirect_to '/login' unless session[:user_id]
  end

  def create
    project = Project.new
    project.title = params[:title]
    project.user_id = session[:user_id]   # assign user_id to project
    project.preview = params[:preview]

    if project.save
      redirect_to '/'
    else
      render :new
    end
  end
end
