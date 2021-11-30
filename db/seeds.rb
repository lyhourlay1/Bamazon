# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all
Order.destroy_all
Cart.destroy_all
Transaction.destroy_all
Review.destroy_all

demoUser = User.create({:username=> 'demo', :password=> 'password', :email=> 'email'})
product1= Product.create({:product_name=> 'apple', :description=> 'fresh red apple', :price=>3, :quantity=>10, :seller_name=> 'MamaApple', :category=> 'food', :unit=>"per lb" })
product2= Product.create({:product_name=> 'banana', :description=> 'fresh yellow banana', :price=>2, :quantity=>10, :seller_name=> 'MamaApple', :category=> 'food', :unit=>"per lb" })
product3= Product.create({:product_name=> 'Apple Watch Series 7', :description=> 'Apple Watch Series 7 GPS, 41mm Starlight Aluminum Case with Starlight Sport Band - Regular', :price=>300, :quantity=>10, :seller_name=> 'Apple', :category=> 'electronics', :unit=>"per item" })
product4= Product.create({:product_name=> 'Imac 2021', :description=> '2021 Apple iMac (24-inch, Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM, 256GB) - Silver', :price=>1300, :quantity=>4, :seller_name=> 'Apple', :category=> 'electronics', :unit=>"per item" })
product5= Product.create({:product_name=> 'Mainstay 7-Piece Nonstick Cookware Set, Black', :description=> '7-piece set includes: 2 saucepans, 1 Dutch oven, 1 saute pan, 3 lids', :price=>20.99, :quantity=>4, :seller_name=> 'DuPont TeFlon', :category=> 'house supplies', :unit=>"per set" })
product6= Product.create({:product_name=> '6 ft Christmas Tree', :description=> 'SHareconn 6ft Prelit Premium Artificial Hinged Christmas Pine Tree with 350 Warm White & Multi-Color Lights, 60 Pine Cones and Foldable Metal Stand, Perfect Choice for Xmas Decoration, 6 FT', :price=>139.99, :quantity=>4, :seller_name=> 'SHareconn', :category=> 'house supplies', :unit=>"per item" })