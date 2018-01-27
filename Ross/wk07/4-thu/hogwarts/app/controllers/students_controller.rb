class StudentsController < ActionController

  def index
    @students = Student.all
  end

  def show
    @students = student.find(:id)
  end

end
