require 'pry'

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]

second_value = planeteers[1]

# add add_heart
planeteers.push("Heart")

# remove Capt planet
planeteers = planeteers -["Captain Planet"]

#Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] and save the result in a variable called heroes.
heroes = planeteers.concat rangers

#Alphabetize the contents of heroes using a method.
heroes.sort!

#Randomize the contents of heroes using a method.
heroes.shuffle!

#Select a random element from heroes using a method
heroes.sample

#Select all elements in heroes that begin with "B" using a method
heroes.include?('B')   # or start_with?

#Initialize a hash called ninja_turtle with the properties name, weapon and radical. They should have values of "Michelangelo", "Nunchuks" and true respectively.

ninja_turtle = {
  name: 'Michelangelo',
  weapon: 'Nunchuks',
  radical: true
}

# Add a key age to ninja_turtle. Set it to whatever numerical value you'd like.
ninja_turtle[:age] = 143

#Remove the radical key-value pair from ninja_turtle
ninja_turtle.delete(:radical)

# Add a key pizza_toppings to ninja_turtle. Set it to an array of strings (e.g., ["cheese", "pepperoni", "peppers"]).
ninja_turtle[:pizza_toppings] = ["cheese", "pepperoni", "peppers"]

#Access the first element of pizza_toppings
ninja_turtle[:pizza_toppings][0]

#Produce an array containing all of ninja_turtle's keys using a method
ninja_turtle.values

#Print out each key-value pair in the following format - "KEY's is equal to VALUE" -- using a method

ninja_turtle.each do |key, value|
puts "#{key}'s is equal to #{value}"
end

# binding.pry
# puts 'break'
