class Comment < ApplicationRecord
  belongs_to :user    #  telling active record so you can use comment object to access user table
end
