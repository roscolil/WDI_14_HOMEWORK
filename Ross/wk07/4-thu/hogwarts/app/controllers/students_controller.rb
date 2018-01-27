class StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def show
    @students = Student.find(params[:id])
  end

  def new
  end

  def create
    student = Student.new
    student.name = params[:name]
    student.house_id = Student.
    if student.save
      redirect_to '/students'
    else
      render :home
  end

end
