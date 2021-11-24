# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demoUser = User.create({:username=> 'demo', :password=> 'password', :email=> 'email'})
product1= Product.create({:product_name=> 'apple', :description=> 'fresh red apple', :price=>3, :quantity=>4, :seller_name=> 'MamaApple', :category=> 'food', :unit=>"per lb" })