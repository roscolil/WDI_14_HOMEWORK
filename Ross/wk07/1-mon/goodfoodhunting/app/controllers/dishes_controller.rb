class DishesController < ApplicationController
  def index
    @dishes = Dish.all
  end

  def new
  end

  def show
    @dish = Dish.find(params[:id])
  end

  def create
    dish = Dish.new
    dish.name = params[:name]
    dish.save
    redirect_to '/dishes'
  end

  def edit
    @dish = Dish.find(params[:id])
  end

  def update
    dish = Dish.find(params[:id])
    dish.name = params[:name]
    dish.save
    redirect_to "/dishes/#{params[:id]}"
  end

  def destroy
    dish = Dish.new(params[:id])
    if dish.destroy
    redirect_to '/dishes'
    else
      render :show
    end
  end
end
