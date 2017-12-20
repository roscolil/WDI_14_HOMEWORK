require 'pry'
# Explanation
# You will be building a CLI calculator. Which means it will be a command line text based program. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
# Phase 3
# User should be given a menu of Calculator functionality
# User should be able to choose intended functionality
# Optional Extensions
# Does your calculator allows addition of more then 2 numbers in one go? eg: 2 + 3 + 4

puts 'My crappy calculator:'

operation = nil

until operation == 'q'
  print 'Enter arithmetic operation:
        1 - Add,
        2 - Subtract,
        3 - Multiply,
        4 - Divide,
        5 - Exponent,
        6 - Square Root,
        (q) to quit: '

  operation = gets.chomp

  case operation
  when '1'
    print 'Enter first number: '
    num1 = gets.chomp.to_f

    print 'Enter second number: '
    num2 = gets.chomp.to_f

    result = num1 + num2
    puts "#{num1} added to #{num2} = #{result}"

  when '2'
    print 'Enter first number: '
    num1 = gets.chomp.to_f

    print 'Enter second number: '
    num2 = gets.chomp.to_f

    result = num1 - num2
    puts "#{num1} subtracted from #{num2} = #{result}"

  when '3'
    print 'Enter first number: '
    num1 = gets.chomp.to_f

    print 'Enter second number: '
    num2 = gets.chomp.to_f

    result = num1 * num2
    puts "#{num1} multiplied by #{num2} = #{result}"

  when '4'
    print 'Enter first number: '
    num1 = gets.chomp.to_f

    print 'Enter second number: '
    num2 = gets.chomp.to_f

    result = num1 / num2
    puts "#{num1} divided by #{num2} = #{result}"

  when '5'
    print 'Enter first number: '
    num1 = gets.chomp.to_f

    print 'Enter the exponent: '
    num2 = gets.chomp.to_f

    result = num1**num2
    puts "#{num1} to the power of #{num2} = #{result}"

  when '6'
    print 'Enter the number you want the square root of: '
    num1 = gets.chomp.to_f

    result = Math.sqrt(num1)
    puts "The square root of #{num1} is #{result}"

  end
end


# binding.pry
# puts 'end'
