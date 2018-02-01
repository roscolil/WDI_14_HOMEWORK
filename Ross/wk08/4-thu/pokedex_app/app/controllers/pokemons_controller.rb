class PokemonsController < ApplicationController

  def index
    @pokemons = Pokemon.all
  end

  def new
  end

  def create
    pokemon = Pokemon.new
    pokemon.species = params[:species]
    pokemon.nickname = params[:nickname]
    pokemon.level = params[:level]
    if pokemon.save
      redirect_to '/'
    else
      redirect_to '/pokemons/new'
    end
  end

end
