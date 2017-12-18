require 'pry'


# line of code
# write a program loc.rb to count and puts the number of lines of code in a file
#
# eg. say you have a file data.txt with the following contents
#
# cat
# dog
# rabbit
# when I run the program, it should prompt for a filename
#
# > ruby loc.rb
# > Enter filename: data.txt
# > 3 line(s)
# hint
# lookup gets method and the readlines method

puts ('Enter filename')
filename = gets.chomp

lines = IO.readlines(filename).size
script_file = File.basename(__FILE__)


File.open("output.txt", "a+") { |file| file.puts(script_file, filename, lines) }
