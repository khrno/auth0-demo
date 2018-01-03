# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'
unless Rails.env.test?
  puts 'Load example data'

  User.create(username: 'portega', email: 'portega@modyo.com',
              password: 'q1w2e3r4')

  User.create(username: Faker::Internet.user_name, email: Faker::Internet.safe_email,
              password: Faker::Internet.password)

  User.create(username: Faker::Internet.user_name, email: Faker::Internet.safe_email,
              password: Faker::Internet.password)

  User.create(username: Faker::Internet.user_name, email: Faker::Internet.safe_email,
              password: Faker::Internet.password)
end