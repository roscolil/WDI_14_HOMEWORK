
# Guess the number

# You are to generate a basic "guess my number" game. The computer will pick a random number
# between 0 and 10. The user will guess the number until they guess correctly.

# Specification:
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"
puts 'Choose a maximum value:'
range = gets.chomp.to_i

random_number = rand(range) + 1
puts "Guess a number between 1 and #{range}:"
guess = gets.chomp.to_i

while guess != random_number
  if guess < random_number
    puts 'Too low. Try again.'
    guess = gets.chomp.to_i
  else
    puts 'Too high. Try again.'
    guess = gets.chomp.to_i
  end
end

puts 'You guessed correctly'
