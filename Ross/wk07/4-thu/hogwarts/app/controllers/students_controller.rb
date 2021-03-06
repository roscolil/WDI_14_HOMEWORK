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
    rand_house = House.order("RANDOM()").first
    student.house_id = rand_house.id
    if student.save
      redirect_to '/students'
    else
      render :home
    end
  end

end
