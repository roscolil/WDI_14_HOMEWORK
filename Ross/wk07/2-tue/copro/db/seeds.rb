# use ruby code to generate data
Project.delete_all
User.delete_all

arr1 = ['mistyrose', 'pudding', 'byteme']
arr2 = ['muffin', 'noodles', 'candy']

user = User.new
user.email = 'ross.lillis@gmail.com'
user.save

10.times do
  Project.create(
    title: "#{arr1.sample} #{arr2.sample}", user_id: user.id
  )
end
