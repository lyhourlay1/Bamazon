# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Product.destroy_all
Order.destroy_all
Cart.destroy_all
Transaction.destroy_all
Review.destroy_all

demoUser = User.create({:username=> 'demo', :password=> 'password', :email=> 'email'})

product = Product.create({:product_name=> 'Gala Apples Fresh Produce Fruit, 3 LB Bag', :description=> 'RED GALA APPLES #JUICY #BURSTING WITH FLAVOR #EXCELLENT IN SALADS, :price=>18.14', :quantity=>10, :seller_name=> 'GALA APPLES At The Neighborhood Corner Store', :category=> 'food', :unit=>"per pack" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/apple.png'), filename: "apple.png")

product = Product.create({:product_name=> 'FRESH BANANAS FRESH FRUIT VEGETABLES PRODUCE PER LB', :description=> 'FRESH PRODUCE #1-3 BANANAS PER LB DEPENDING ON SIZE', :price=>5.99, :quantity=>10, :seller_name=> 'BANANA At The Neighborhood Corner Store', :category=> 'food', :unit=>"per lb" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/bananas.png'), filename: "bananas.png")

product = Product.create({:product_name=> 'Maine Lobster Now: 1.25 LB Live Maine Lobster (6 Lobsters)', :description=> 'Guaranteed Alive #Fresh, Wild Caught #Weight Range: 1.2 to 1.4 lbs #Antibiotic-Free #Sustainably Harvested', :price=>189.99, :quantity=>10, :seller_name=> 'Whole Food in Maine', :category=> 'food', :unit=>"per box" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/lobster.png'), filename: "lobster.png")

product = Product.create({:product_name=> 'Apple Watch Series 7 GPS, 41mm Starlight Aluminum Case with Starlight Sport Band - Regular', :description=> 'Always-on Retina display has nearly 20% more screen area than Series 6, making everything easier to see and use #The most crack-resistant front crystal yet on an Apple Watch, IP6X dust resistance, and swimproof design #Measure your blood oxygen with a powerful sensor and app #Take an ECG anytime, anywhere #Get high and low heart rate, and irregular heart rhythm notifications #Stay in the moment with the new Mindfulness app, and reach your sleep goals with the Sleep app #Track new tai chi and pilates workouts, in addition to favorites like running, yoga, swimming, and dance #Track your daily activity on Apple Watch, and see your trends in the Fitness app on iPhone #Sync your favorite podcasts, and audiobooks #Pay instantly and securely from your wrist with Apple Pay', :price=>300, :quantity=>10, :seller_name=> 'Apple', :category=> 'electronics', :unit=>"per item" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/appleWatch.png'), filename: "appleWatch.png")

product = Product.create({:product_name=> '2021 Apple iMac (24-inch, Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM, 256GB)', :description=> '21.5-inch (diagonal) 1920-by-1080 resolution display #Seventh-generation dual-core Intel Core i5 processor #Intel Iris Plus Graphics 640 #Ultrafast SSD storage #Two Thunderbolt 3 (USB-C) ports', :price=>1300, :quantity=>4, :seller_name=> 'Apple', :category=> 'electronics', :unit=>"per item" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/imac.png'), filename: "imac.png")

product = Product.create({:product_name=> 'Mainstay 7-Piece Nonstick Cookware Set, Black', :description=> '7-piece set includes: 2 saucepans, 1 Dutch oven, 1 saute pan, 3 lids #Tri-ply construction: 18/8 stainless-steel interior won’t react with food; pure aluminum core retains and evenly distributes heat; polished stainless-steel exterior provides strength and beauty; consists of 70% stainless steel and 30% aluminum #Nonstick cooking surface: durable Whitford Eclipse 3-layer nonstick coating ensures effortless food release and quick, easy cleanup #Sturdy handle: generous cast stainless-steel handle offers a secure, comfortable, heat-resistant hold and comes permanently secured with rivets for reliable strength #Versatile: wide, flat-bottomed profile works well for frying, searing, sautéing, and browning; low sides allow for sliding food easily from the pan to a plate #Use and care and warranty: suitable for all cooktops, including induction; oven-safe up to 500 degrees F (260 degrees C); dishwasher-safe; backed by an AmazonCommercial 1-year limited warranty', :price=>20.99, :quantity=>4, :seller_name=> 'DuPont TeFlon', :category=> 'house supplies', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/pot1.png'), filename: "chirstmas.png")

product = Product.create({:product_name=> 'SHareconn 6ft Prelit Premium Artificial Hinged Christmas Pine Tree with 350 Warm White & Multi-Color Lights, 60 Pine Cones and Foldable Metal Stand, Perfect Choice for Xmas Decoration, 6 FT', :description=> 'This Dunhill Fir Full Pre-Lit Artificial Green Christmas Tree is 6.5 feet tall with a 51 inch base diameter. Featuring hundreds of individually crafted branch tips to create full bodied branches, this tree is designed to look and feel lifelike. #Features PowerConnect system and 900 Dual Color LED bulbs that can switch between white and multicolor lights. This feature includes a switch to control ten different light functions, allowing the bulbs to twinkle, flash or fade on either color setting. #This tree features pre-attached, hinged branches that drop down for a simple set-up and fold back in for quick and convenient storage. Set aside 45-60 minutes to properly shape the tree by peeling back the branches and pulling the tips apart. #Constructed with sturdy, high quality materials, hypo-allergenic, fire-resistant needles, this tree is built to bring holiday cheer for years to come. Includes a durable metal base. #At National Tree Company, we believe that special holiday memories don’t have to be far and few between. This Christmas season, let our decorations transform your home while you focus on creating more of those magical moments.', :price=>139.99, :quantity=>4, :seller_name=> 'SHareconn', :category=> 'house supplies', :unit=>"per item" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/christmasTree.jpg'), filename: "chirstmas.jpg")


product = Product.create({:product_name=> 'CL of 2ne1 MET GALA 2021 Dress Tighty Whitey, AMERICAN THEME, Designed by Alexander Wang', :description=> 'Former 2NE1 member CL made her Met Gala debut at the 2021 edition of “fashion’s biggest night out” on September 14 (September 13 in the US) at the Metropolitan Museum of Art in New York, USA. #The set includes Alexander Wang Underwear, Korean Demin Knott, and Denim Dress #Pefect fit for fashion week #work great for both warm and cold weater #100% cotton for the underwear #100% denim #Queen Look', :price=>2121.21, :quantity=>4, :seller_name=> 'Very Cherry', :category=> 'clothes', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/clMet.jpeg'), filename: "ClMetBall.jpeg")

product = Product.create({:product_name=> 'TWICE Formula of Love: O+T=<3 3rd Album Contents+Poster+Message PhotoCard SET+Tracking Kpop Sealed', :description=> 'Officially distributed Brand New & Orginal item from Manufacturer. #All items and features from original manufacturers are delivered in original sealed package condition. #Your purchase quantity will be count on Korea HANTEO & GAON Chart! #All ordered item will be shipped with a tracking number.', :price=>29.99, :quantity=>4, :seller_name=> 'JYP', :category=> 'music', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/twice.jpg'), filename: "twice.jpg")

product = Product.create({:product_name=> 'Blackpink - [Kill This Love] 2nd Mini Album Pink Ver. CD+1p Poster/On+52p PhotoBook+16p Photo Zine+10p Accordion Lyrics Book+4p PhotoCard+1p Polaroid+Sticker SET+Tracking K-POP Sealed', :description=> 'Officially distributed Brand New & Orginal item from Manufacturer #All items and features from original manufacturers are delivered in original sealed package condition #Your purchase quantity will be count on Korea HANTEO & GAON Chart! #All ordered item will be shipped with a tracking number', :price=>25.99, :quantity=>4, :seller_name=> 'Very Cherry', :category=> 'music', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/blackpink.jpg'), filename: "blackpink.jpg")

product = Product.create({:product_name=> 'Met Gala 2018 Iconic Look by Chadwick Boseman. 2018 Met Ball theme was "Heavenly Bodies: Fashion and the Catholic Imagination"', :description=> 'This is a steal. #Chadwick Boseman iconic 2018 look #Designed by Atelier Versace', :price=>2000.01, :quantity=>4, :seller_name=> 'Met Gala', :category=> 'clothes', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/Chadwick.jpeg'), filename: "chadwick.jpeg")

product = Product.create({:product_name=> 'Met Gala 2019 Iconic Look by Kim Kardashian. 2019 Met Ball theme was "Camp: Notes on Fashion.', :description=> 'Wet Dress. #Kim Iconic Met Gala Look #latex #hard to put it on but it is worth it', :price=>4000.99, :quantity=>4, :seller_name=> 'Met Gala', :category=> 'clothes', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/kim2020.jpeg'), filename: "kim2020.jpeg")

product = Product.create({:product_name=> 'Met Gala 2018 Iconic Look by Rihanna. 2018 Met Ball theme was "Heavenly Bodies: Fashion and the Catholic Imagination"', :description=> 'One of the most iconic look from Rihanna. #fashion icon #come with 5 pieces(headpiece, cape, dress, and necklace)', :price=>100000.01, :quantity=>4, :seller_name=> 'Met Gala', :category=> 'clothes', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/rihanna2019.jpeg'), filename: "rihanna2018.jpeg")

product = Product.create({:product_name=> 'Met Gala 2015 Iconic Look by Rihanna. 2015 Met Ball theme wasChina: Through the Looking Glass', :description=> 'iconic Omelette Look #Designed by Chinese designer Guo Pei, taking over 6,000 hours to make, and weighing in at 25 kilograms  #complete masterpiece', :price=>9000.99, :quantity=>4, :seller_name=> 'Met Gala', :category=> 'clothes', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/rihanna2018.jpeg'), filename: "rihanna2015.jpeg")

# product = Product.create({:product_name=> '', :description=> '', :price=>2121.21, :quantity=>4, :seller_name=> 'Very Cherry', :category=> 'clothes', :unit=>"per set" })
# product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/rihanna2019.jpeg'), filename: "rihanna2019.jpeg")

product = Product.create({:product_name=> 'CL - ALPHA (Vol.1) Album (Color ver.)', :description=> '🎈Ships from Korea #📆Release Date : 2021.10.22 #🎵Sleeve + Jewel Case + CD + 44p Photobook + Scratch Card + Sticker #📌100% Original Brand New Item. #Sales volume is reflected in the HANTEO and GAON Charts.', :price=>25.21, :quantity=>4, :seller_name=> 'Very Cherry', :category=> 'music', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/colorAlpha.jpg'), filename: "colorAlpha.jpg")

product = Product.create({:product_name=> 'BTS (1+2+3+4 Version Set) Map of The Soul Persona Album Bangtan Boys 4 CDs+4 Posters+4 Photobooks+4 Mini Books+4 Photocards+4 Postcards+4 Photo Films+Gift (Extra BTS 6 Photocards Set)', :description=> 'Are you an Army ? #Bundle Deal of BTS albums, #Map of The Soul Persona Album Bangtan Boys 4 CDs #4 Posters #4 Photobooks+4 Mini Books #4 Photocards #4 Postcards+4 Photo Films and Gift', :price=>179.99, :quantity=>4, :seller_name=> 'HYBE', :category=> 'music', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/mapSoul.jpg'), filename: "BTSAlbum.jpg")

product = Product.create({:product_name=>'CL - Alpha [Mono ver.] Album+BolsVos K-POP Webzine (20p), Decorative Stickers, Photocards' , :description=>  'BolsVos K-POP Webzine (20p) / Copyright - BolsVos - All Rights Reserved / "Warning": Unauthorized Selling Activity Without Official Permission from BolsVos MUST BE REPORTED to Amazon as Intellectual Property Rights Violation #Tracking Code Provided (Unexpected Delay Could Occur Due to Current Global Issue / Continuous Notice To Be Advised Through Email)
 #Free Gift (Not Guaranteed If Not Ordered From BolsVos): Extra Decorative Sticker Set for phone or Laptop etc.+ Extra Photocard Set / The Merchs may not be only for CL but for major KPOP artists due to license issue or limited Q #PRE-ORDER BENEFITS and/or FOLDED POSTERS Cannot be Guaranteed After Pre Order Period (~Oct 22, 2021) Due to Manufacturer Distribution Policy or Limited Qty #Will be Count Towards Hanteo and Gaon Chart & Made in Korea (100% Authentic)', :price=>29.99, :quantity=>4, :seller_name=> 'Very Cherry', :category=> 'music', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/monoAlpha.jpg'), filename: "monoAlpha.jpg")


