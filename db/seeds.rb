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

demoUser = User.create({:username=> 'demo', :password=> 'password', :email=> 'demo@gmail.com'})

product = Product.create({:product_name=> 'FRESH BANANAS FRESH FRUIT VEGETABLES PRODUCE PER LB', :description=> 'FRESH PRODUCE #1-3 BANANAS PER LB DEPENDING ON SIZE', :price=>5.99, :quantity=>10, :seller_name=> 'BANANA At The Neighborhood Corner Store', :category=> 'food', :unit=>"per lb" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/bananas.png'), filename: "bananas.png")
Review.create({:rating=>3 , :headline=>'Not that fresh', :comment=>'It takes a little while to come. And the banana is not fresh as I thought it would be. It\'s cheap though. So I guess if you perfer quanity over quality. There you have it.', :product_id=>1, :user_id=>1, :username=>'demo' })

product = Product.create({:product_name=> 'Maine Lobster Now: 1.25 LB Live Maine Lobster (6 Lobsters)', :description=> 'Guaranteed Alive #Fresh, Wild Caught #Weight Range: 1.2 to 1.4 lbs #Antibiotic-Free #Sustainably Harvested', :price=>189.99, :quantity=>10, :seller_name=> 'Whole Food in Maine', :category=> 'food', :unit=>"per box" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/lobster.png'), filename: "lobster.png")

product = Product.create({:product_name=> 'Apple Watch Series 7 GPS, 41mm Starlight Aluminum Case with Starlight Sport Band - Regular', :description=> 'Always-on Retina display has nearly 20% more screen area than Series 6, making everything easier to see and use #The most crack-resistant front crystal yet on an Apple Watch, IP6X dust resistance, and swimproof design #Measure your blood oxygen with a powerful sensor and app #Take an ECG anytime, anywhere #Get high and low heart rate, and irregular heart rhythm notifications #Stay in the moment with the new Mindfulness app, and reach your sleep goals with the Sleep app #Track new tai chi and pilates workouts, in addition to favorites like running, yoga, swimming, and dance #Track your daily activity on Apple Watch, and see your trends in the Fitness app on iPhone #Sync your favorite podcasts, and audiobooks #Pay instantly and securely from your wrist with Apple Pay', :price=>300, :quantity=>10, :seller_name=> 'Apple', :category=> 'electronics', :unit=>"per item" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/appleWatch.png'), filename: "appleWatch.png")
Review.create({:rating=>5 , :headline=>'Nice apple watch', :comment=>'Fast shipping. Good customer service when I want to return it.', :product_id=>3, :user_id=>1, :username=>'demo' })

product = Product.create({:product_name=> '2021 Apple iMac (24-inch, Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM, 256GB)', :description=> '21.5-inch (diagonal) 1920-by-1080 resolution display #Seventh-generation dual-core Intel Core i5 processor #Intel Iris Plus Graphics 640 #Ultrafast SSD storage #Two Thunderbolt 3 (USB-C) ports', :price=>1300, :quantity=>4, :seller_name=> 'Apple', :category=> 'electronics', :unit=>"per item" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/imac.png'), filename: "imac.png")
Review.create({:rating=>5 , :headline=>'nice imac', :comment=>'Fast shipping. Good customer service when I want to return it.', :product_id=>4, :user_id=>1, :username=>'demo' })

product = Product.create({:product_name=> 'Mainstay 7-Piece Nonstick Cookware Set, Black', :description=> '7-piece set includes: 2 saucepans, 1 Dutch oven, 1 saute pan, 3 lids #Tri-ply construction: 18/8 stainless-steel interior won’t react with food; pure aluminum core retains and evenly distributes heat; polished stainless-steel exterior provides strength and beauty; consists of 70% stainless steel and 30% aluminum #Nonstick cooking surface: durable Whitford Eclipse 3-layer nonstick coating ensures effortless release and quick, easy cleanup #Sturdy handle: generous cast stainless-steel handle offers a secure, comfortable, heat-resistant hold and comes permanently secured with rivets for reliable strength #Versatile: wide, flat-bottomed profile works well for frying, searing, sautéing, and browning; low sides allow for sliding food easily from the pan to a plate #Use and care and warranty: suitable for all cooktops, including induction; oven-safe up to 500 degrees F (260 degrees C); dishwasher-safe; backed by an AmazonCommercial 1-year limited warranty', :price=>20.99, :quantity=>4, :seller_name=> 'DuPont TeFlon', :category=> 'house supplies', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/pot1.png'), filename: "chirstmas.png")

product = Product.create({:product_name=> 'SHareconn 6ft Prelit Premium Artificial Hinged Christmas Pine Tree with 350 Warm White & Multi-Color Lights, 60 Pine Cones and Foldable Metal Stand, Perfect Choice for Xmas Decoration, 6 FT', :description=> 'This Dunhill Fir Full Pre-Lit Artificial Green Christmas Tree is 6.5 feet tall with a 51 inch base diameter. Featuring hundreds of individually crafted branch tips to create full bodied branches, this tree is designed to look and feel lifelike. #Features PowerConnect system and 900 Dual Color LED bulbs that can switch between white and multicolor lights. This feature includes a switch to control ten different light functions, allowing the bulbs to twinkle, flash or fade on either color setting. #This tree features pre-attached, hinged branches that drop down for a simple set-up and fold back in for quick and convenient storage. Set aside 45-60 minutes to properly shape the tree by peeling back the branches and pulling the tips apart. #Constructed with sturdy, high quality materials, hypo-allergenic, fire-resistant needles, this tree is built to bring holiday cheer for years to come. Includes a durable metal base. #At National Tree Company, we believe that special holiday memories don’t have to be far and few between. This Christmas season, let our decorations transform your home while you focus on creating more of those magical moments.', :price=>139.99, :quantity=>4, :seller_name=> 'SHareconn', :category=> 'house supplies', :unit=>"per item" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/christmasTree.jpg'), filename: "chirstmas.jpg")
Review.create({:rating=>4 , :headline=>'My favorite Christmas Tree', :comment=>'The tree is fall and pretty accurate to the size in the description. It degrades a little easily. But definitely last more than a holiday season. It\'s worth price.', :product_id=>6, :user_id=>1, :username=>'demo' })


product = Product.create({:product_name=> 'CL of 2ne1 MET GALA 2021 Dress Tighty Whitey, AMERICAN THEME, Designed by Alexander Wang', :description=> 'Former 2NE1 member CL made her Met Gala debut at the 2021 edition of “fashion’s biggest night out” on September 14 (September 13 in the US) at the Metropolitan Museum of Art in New York, USA. #The set includes Alexander Wang Underwear, Korean Demin Knott, and Denim Dress #Pefect fit for fashion week #work great for both warm and cold weater #100% cotton for the underwear #100% denim #Queen Look', :price=>2121.21, :quantity=>4, :seller_name=> 'Very Cherry', :category=> 'clothes', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/clMet.jpeg'), filename: "ClMetBall.jpeg")
Review.create({:rating=>5 , :headline=>'Best Outfit !!! WHO IS SHE ??? SLAY', :comment=>'I love the outfit. It shows the confidence and her identity as a singer and a person. My favorite met gala look. Her bow is too iconic.', :product_id=>7, :user_id=>1, :username=>'demo' })

product = Product.create({:product_name=> 'TWICE Formula of Love: O+T=<3 3rd Album Contents+Poster+Message PhotoCard SET+Tracking Kpop Sealed', :description=> 'Officially distributed Brand New & Orginal item from Manufacturer. #All items and features from original manufacturers are delivered in original sealed package condition. #Your purchase quantity will be count on Korea HANTEO & GAON Chart! #All ordered item will be shipped with a tracking number.', :price=>29.99, :quantity=>4, :seller_name=> 'JYP', :category=> 'music', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/twice.jpg'), filename: "twice.jpg")
Review.create({:rating=>5 , :headline=>'YAy Twice!!!!', :comment=>'Come new and with unsealed. My favorite kpop group.', :product_id=>8, :user_id=>1, :username=>'demo' })

product = Product.create({:product_name=> 'Blackpink - [Kill This Love] 2nd Mini Album Pink Ver. CD+1p Poster/On+52p PhotoBook+16p Photo Zine+10p Accordion Lyrics Book+4p PhotoCard+1p Polaroid+Sticker SET+Tracking K-POP Sealed', :description=> 'Officially distributed Brand New & Orginal item from Manufacturer #All items and features from original manufacturers are delivered in original sealed package condition #Your purchase quantity will be count on Korea HANTEO & GAON Chart! #All ordered item will be shipped with a tracking number', :price=>25.99, :quantity=>4, :seller_name=> 'Very Cherry', :category=> 'music', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/blackpink.jpg'), filename: "blackpink.jpg")

product = Product.create({:product_name=> 'Met Gala 2018 Iconic Look by Chadwick Boseman. 2018 Met Ball theme was "Heavenly Bodies: Fashion and the Catholic Imagination"', :description=> 'This is a steal. #Chadwick Boseman iconic 2018 look #Designed by Atelier Versace', :price=>2000.01, :quantity=>4, :seller_name=> 'Met Gala', :category=> 'clothes', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/Chadwick.jpeg'), filename: "chadwick.jpeg")
Review.create({:rating=>5 , :headline=>'Best male outfit at met gala so far', :comment=>'I really like this outfit and fits perfectly with Chadwick.', :product_id=>10, :user_id=>1, :username=>'demo' })

product = Product.create({:product_name=> 'Met Gala 2019 Iconic Look by Kim Kardashian. 2019 Met Ball theme was "Camp: Notes on Fashion.', :description=> 'Wet Dress. #Kim Iconic Met Gala Look #latex #hard to put it on but it is worth it', :price=>4000.99, :quantity=>4, :seller_name=> 'Met Gala', :category=> 'clothes', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/kim2020.jpeg'), filename: "kim2020.jpeg")
Review.create({:rating=>5 , :headline=>'How did she wear that!', :comment=>'When people say beaty is pain. I am telling you this is an example. Go kim', :product_id=>11, :user_id=>1, :username=>'demo' })

product = Product.create({:product_name=> 'Met Gala 2018 Iconic Look by Rihanna. 2018 Met Ball theme was "Heavenly Bodies: Fashion and the Catholic Imagination"', :description=> 'One of the most iconic look from Rihanna. #fashion icon #come with 5 pieces(headpiece, cape, dress, and necklace)', :price=>100000.01, :quantity=>4, :seller_name=> 'Met Gala', :category=> 'clothes', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/rihanna2019.jpeg'), filename: "rihanna2018.jpeg")

product = Product.create({:product_name=> 'Met Gala 2015 Iconic Look by Rihanna. 2015 Met Ball theme was China: Through the Looking Glass', :description=> 'iconic Omelette Look #Designed by Chinese designer Guo Pei, taking over 6,000 hours to make, and weighing in at 25 kilograms  #complete masterpiece', :price=>9000.99, :quantity=>4, :seller_name=> 'Met Gala', :category=> 'clothes', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/rihanna2018.jpeg'), filename: "rihanna2015.jpeg")
Review.create({:rating=>4 , :headline=>'What a dress', :comment=>'Whoever made this dress, it takes months. Go them. It\'s iconic but Rihanna has shown up with more iconic fashion before. Not her best but still iconic', :product_id=>13, :user_id=>1, :username=>'demo' })
Review.create({:rating=>5 , :headline=>'It\'s omelettes !!!', :comment=>'Idk how i feel about this look for Riri. It\'s great but it\'s too meme. i guess it\'s met gala.', :product_id=>13, :user_id=>1, :username=>'demo' })

product = Product.create({:product_name=> 'Met Gala 2015 Iconic Look by Beyonce. 2015 Met Ball theme was China: Through the Looking Glass', :description=> 'Dazzling gem dress #sparkling martertial #handmade dress #Givenchy #Riccardo Tisci, the designer behind Givenchy', :price=>5000.50, :quantity=>4, :seller_name=> 'Met Gala', :category=> 'clothes', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/beyonce.jpeg'), filename: "beyonce.jpeg")
product = Product.create({:product_name=> 'Met Gala 2020 Iconic Look by Beyonce. 2020 Met Ball theme was About Time: Fashion and Duration', :description=> 'The blend between femininity and masculinity #black #come with shirt and pants ', :price=>9000.99, :quantity=>4, :seller_name=> 'Met Gala', :category=> 'clothes', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/harrystyle.jpeg'), filename: "harrystyle.jpeg")
product = Product.create({:product_name=> 'Met Gala 2020 Iconic Look by Beyonce. 2020 Met Ball theme was About Time: Fashion and Duration', :description=> '#queen of CAMP #host #4 in 1 outfits set #want 4 different looks here you have it #come with 4 pieces', :price=>2121.21, :quantity=>4, :seller_name=> 'Met Gala', :category=> 'clothes', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/ladygaga2.jpeg'), filename: "ladygaga.jpeg")


product = Product.create({:product_name=> 'Amazon Brand - Happy Belly Whole Milk, Gallon, 128 Ounces', :description=> '128-fluid ounces of Happy Belly Vitamin D Whole Milk #Fresh & Delicious Product #Pasteurized #rBST & Gluten Free #Kosher #Excellent source of calcium. Perfect with breakfast, lunch or dinner! #Satisfaction Guarantee: We’re proud of our products. If you aren’t satisfied, we’ll refund you for any reason within a year of purchase. 1-877-485-0385 #An Amazon Brand', :price=>5.99, :quantity=>4, :seller_name=> 'Amazon Fresh', :category=> 'food', :unit=>"per item" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/milk2.jpg'), filename: "milk.jpg")
product = Product.create({:product_name=> '365 by Whole Foods Market, Juice Apple Organic, 64 Fl Oz', :description=> '365 by Whole Foods Market products give you that dance-down-the-aisles feeling, virtual aisles too! Our huge range of choices with premium ingredients at prices you can get down with makes grocery shopping so much more than tossing the basics in your cart.', :price=>3.99, :quantity=>4, :seller_name=> 'Amazon Fresh', :category=> 'food', :unit=>"per item" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/applejuice.jpg'), filename: "applejuice.jpg")
product = Product.create({:product_name=> 'Good Humor Ice Cream Bars For a Delicious Treat Creamsicle Just 100 Calories A Bar 16.5 oz 6 Count', :description=> 'Good Humor Creamsicle Ice Cream Bars are a classic treat for ice cream lovers big and small. #Made with rich, creamy low-fat vanilla-flavored ice cream and orange-flavored sherbet for an irresistible combination. #Each ice cream bar is wrapped separately on comes on a stick, making this a frozen snack that is easy to enjoy, anytime anywhere. #With its same original taste, this ice cream bar is a kid-friendly favorite and a great option for those who like frozen desserts like ice pops, fudgesicles, fudge bars and other fun classics. #With just 100 calories per creamsicle, this frozen dessert is the perfect size for after dinner, or to cool off on a hot day. #Good Humor has always been known for its irresistible frozen treats. Try the rest of our ice cream truck favorites and discover new additions to the ice cream truck.', :price=>10.99, :quantity=>4, :seller_name=> 'Amazon Fresh', :category=> 'food', :unit=>"per item" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/icecream.jpg'), filename: "icecream.jpg")

product = Product.create({:product_name=> '2022 Newest Dell Inspiron 3510 Laptop, 15.6" HD Display, Intel Celeron N4020 Processor, 16GB DDR4 RAM, 1TB Hard Disk Drive, Webcam, WiFi, HDMI, Bluetooth, Windows 10 Home, Black', :description=> '【High Speed RAM And Enormous Space】16GB high-bandwidth RAM to smoothly run multiple applications and browser tabs all at once; 1TB Hard Disk Drive allows to fast bootup and data transfer #【Processor】Intel Celeron N4020 Dual-Core Processor (4MB Cache, Base Frequency at 1.1 GHz, Up to 2.8GHz) #【Display 】15.6-inch HD (1366 x 768) Anti-Glare LED-Backlit Non-touch Display, Intel UHD Graphics with Shared Graphics Memory #【Tech Specs】802.11ac 1x1 WiFi and Bluetooth, 1 x SD Card Reader, 1 x USB 2.0, 1 x Wedge-shaped lock slot, 1 x Power, 1 x HDMI 1.4b, 2 x USB 3.1 Gen 1, 1 x Headphone & Microphone Audio Jack #【Operating System】Windows 10 Home-The Windows 10 Home operating system offers built-in security and app like Mail, Calendar, Photo, Microsoft Edge, and more to help keep you safe and productive (Free Upgrade to Windows 11)', :price=>1000.99, :quantity=>4, :seller_name=> 'Dell', :category=> 'electronics', :unit=>"per item" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/delllaptop.jpg'), filename: "delllaptop.jpg")
product = Product.create({:product_name=> '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Gray', :description=> 'All-Day Battery Life – Go longer than ever with up to 18 hours of battery life.#Powerful Performance – Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power. #Superfast Memory – 8GB of unified memory makes your entire system speedy and responsive. That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily. #Stunning Display – With a 13.3” Retina display, images come alive with new levels of realism. Text is sharp and clear, and colors are more vibrant. #Why Mac – Easy to learn. Easy to set up. Astoundingly powerful. Intuitive. Packed with apps to use right out of the box. Mac is designed to let you work, play, and create like never before. #Simply Compatible – All your existing apps work, including Adobe Creative Cloud, Microsoft 365, and Google Drive. Plus you can use your favorite iPhone and iPad apps directly on macOS. Altogether you’ll have access to the biggest collection of apps ever for Mac. All available on the App Store. #Easy to Learn – If you already have an iPhone, MacBook Air feels familiar from the moment you turn it on. And it works perfectly with all your Apple devices. Use your iPad to extend the workspace of your Mac, answer texts and phone calls directly on your Mac, and more.', :price=>1599.99, :quantity=>4, :seller_name=> 'Apple', :category=> 'electronics', :unit=>"per item" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/macbook2.jpg'), filename: "macbook2.jpg")
product = Product.create({:product_name=> 'New Apple AirPods Pro', :description=> 'Active Noise Cancellation blocks outside noise, so you can immerse yourself #Transparency mode for hearing and interacting with the world around you #Spatial audio with dynamic head tracking places sound all around you #Adaptive EQ automatically tunes to your ears #Three sizes of soft, tapered silicone tips for a customizable fit #Force sensor lets you easily control your entertainment, answer or end calls, and more #Sweat and water resistant', :price=>200.21, :quantity=>4, :seller_name=> 'Apple', :category=> 'electronics', :unit=>"per item" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/airpodpro.jpg'), filename: "airpodpro.jpg")

product = Product.create({:product_name=> 'Amazon Brand - Solimo Disinfecting Wipes, Lemon Scent & Fresh Scent, Sanitizes/Cleans/Disinfects/Deodorizes, 75 Count (Pack of 3)', :description=> 'One 75-count canister of Fresh Scent & Two 75-count canisters of Lemon Scent; 225 disinfecting wipes total #Kills 99.9% of bacteria in 15 seconds #Kills cold & flu virus, E. coli, salmonella, and staph #Thick wipes for tough messes; great for clean up or touch up cleaning #Multi-Packs allow you to keep canisters throughout the house, office, kitchen, or classroom #Conveniently cleans and disinfects hard, nonporous surfaces such as countertops, door knobs, light switches and remotes #Satisfaction Guarantee: We’re proud of our products. If you aren’t satisfied, we’ll refund you for any reason within a year of purchase. 1-877-485-0385 #An Amazon brand', :price=>11.99, :quantity=>4, :seller_name=> 'Solimo', :category=> 'house supplies', :unit=>"per pack(3 items)" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/wipes.jpg'), filename: "wipes.jpg")
product = Product.create({:product_name=> 'MR.SIGA Non-Scratch Cellulose Scrub Sponge, Dual-Sided Dishwashing Sponge for Kitchen, 12 Pack', :description=> 'NON SCRATCH. Consist of 2 layers - royal blue scrubbing layer and light blue scratch free cellulose sponge layer. Premium scrubbing side cleans without scratch, safe to be used on non-stick cookware, the non-abrasive light blue cellulose sponge wipes away dirt and particles, can be used with dishwashing liquid if preferred. #DURABLE & LONG LASTING. MR.SIGA scrub sponge are made to last, they maintain the shape well and do not fall apart or crack easily like regular sponges, and last a long time even when scrubbing tough burned. So scrub, wipe and clean with MR.SIGA cleaning sponges confidently. #MULTI-PURPOSE CLEANING. Perfect for cleaning more than dishes, pots, pans, but also ideal for sinks, stoves, bathroom and any household cleaning kit effectively, keep your kitchen and bathroom sparkling clean. Comes with 12-pack, each 6-piece sponges are packed in a bag. #ABSORBENT & STREAK FREE. The cellulose side has great absorption, perfect for cleaning dishes, it wipes dirt and particles easily without leaving scratches or streaks. Always test the scrub side on inconspicuous area for verifying no surface damage. Do not use it with abrasive cleaner. Rinse with water after every use, they will dry quickly and do not get smelly. #MR.SIGA mission: Make your housework easier, and make the world cleaner. Should you have any questions about the product or after-sale service, please do not hesitate to contact us. We are here for support and advice!', :price=>4.99, :quantity=>4, :seller_name=> 'MR.SIGA', :category=> 'house supplies', :unit=>"per pack(12 items)" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/sponge.jpg'), filename: "sponge.jpg")
product = Product.create({:product_name=> 'Dawn Dish Soap Platinum Dishwashing Liquid', :description=> '50% Less scrubbing #Contains 3x grease Cleaning Power (cleaning ingredients per drop vs. Dawn non-concentrated) #Our new More Powerful Formula helps you get through more dishes with less dishwashing liquid #Dawn Ultra Dishwashing Liquid Dish Soap, Original Scent', :price=>15.21, :quantity=>4, :seller_name=> 'Dawn', :category=> 'house supplies', :unit=>"per pack(3 items)" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/dawn.jpg'), filename: "dawn.jpg")

product = Product.create({:product_name=> 'JTMall Twice Light Stick Version 2 Candy Bong Girls Torch, Kpop Concert Light Stick/Cheering Light【Connect Bluetooth】', :description=> 'Support Twice, the ideal gift for fans, and being the brightest among many concerts may attract your idol attention! #TwiceVersion 2 Korean light stick through the improvement of Bluetooth technology, you can connect it on your phone via Bluetooth, and then change the color as needed, the experience will be better than before (please pay attention to choose Bluetooth and non-Bluetooth models) #Press the power button to switch the flash mode under different moods and atmospheres, 1. The light is always on; 2. The light turns slowly; 3. The light turns quickly; 4. The light flashes quickly #The auxiliary lamp is in the shape of a candy, and the handle has an anti-drop strap. This product needs a battery to support the lamp, but this product does not contain a battery, please pay attention! #Arrival time-about 15 days in most areas, if you have any questions, please contact us in time', :price=>54.99, :quantity=>4, :seller_name=> 'JYP', :category=> 'music', :unit=>"per item" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/twicelight.jpg'), filename: "twicelight.jpg")
product = Product.create({:product_name=> 'HYBE BTS Official Light Stick SE - MAP of The Soul (Incl.IDOLPARK Special BTS PhotocardS Set)', :description=> '💡 BTS Official Lightstick Map of the Soul Special Edition #💬 COMPONENTS : Lightstick, Dust Bag, Strap, Case, Photo Card, Warranty #📅 Released on OCT 5th, 2021 : We will send the brand new Lightstick #** Bluetooth works perfectly with the app, 100% authentic from SOUTH KOREA #🎁 Seller Gift : IDOLPARK special BTS photocards set', :price=>129.99, :quantity=>4, :seller_name=> 'HYBE', :category=> 'music', :unit=>"per item" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/btslightstick.jpg'), filename: "btslightstick.jpg")
product = Product.create({:product_name=> 'YG Select Blackpink Official Lightstick ver.2 Limited Edition', :description=> 'BLACKPINK OFFICIAL LIGHTSTICK VER.2 (+IDOLPARK Special BLACKPINK Photocards set) #Bluetooth Ver : Bluetooth (Operating) Range - 10M #Through App: Various MOOD Mode, Light Stick Size : 6.1 x 2.9 x 10.0 (inch) #YG Select Pre-order Photocards are included until it is run out #In Addition: IDOLPARK Special BLACKPINK Photocards set', :price=>35.99, :quantity=>4, :seller_name=> 'YG', :category=> 'music', :unit=>"per item" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/blackpinklightstick.jpg'), filename: "blackpinklightstick.jpg")

# product = Product.create({:product_name=> '', :description=> '', :price=>2121.21, :quantity=>4, :seller_name=> 'Very Cherry', :category=> 'clothes', :unit=>"per set" })
# product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/rihanna2019.jpeg'), filename: "rihanna2019.jpeg")

product = Product.create({:product_name=> 'CL - ALPHA (Vol.1) Album (Color ver.)', :description=> '🎈Ships from Korea #📆Release Date : 2021.10.22 #🎵Sleeve + Jewel Case + CD + 44p Photobook + Scratch Card + Sticker #📌100% Original Brand New Item. #Sales volume is reflected in the HANTEO and GAON Charts.', :price=>25.21, :quantity=>4, :seller_name=> 'Very Cherry', :category=> 'music', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/colorAlpha.jpg'), filename: "colorAlpha.jpg")
Review.create({:rating=>5 , :headline=>'My favorite Album', :comment=>'I really like this album because there are a lot of sides of Cl being protrayed. I get to see the empowering, independent, and the sweetheart as well. My fav album so far.', :product_id=>29, :user_id=>1, :username=>'demo' })
# Review.create({:rating=>5 , :headline=>'', :comment=>'It's little pricy. But it's bts so it was kind of expected. The package has a lot of stuffs in which took me a while to unpackage the whole thing. Feel like an army too now.', :product_id=>3, :user_id=>1, :username=>'demo' })
# Review.create({:rating=>5 , :headline=>'', :comment=>'', :product_id=>3, :user_id=>1, :username=>'demo' })
# Review.create({:rating=>5 , :headline=>'', :comment=>'', :product_id=>3, :user_id=>1, :username=>'demo' })

product = Product.create({:product_name=> 'BTS (1+2+3+4 Version Set) Map of The Soul Persona Album Bangtan Boys 4 CDs+4 Posters+4 Photobooks+4 Mini Books+4 Photocards+4 Postcards+4 Photo Films+Gift (Extra BTS 6 Photocards Set)', :description=> 'Are you an Army ? #Bundle Deal of BTS albums, #Map of The Soul Persona Album Bangtan Boys 4 CDs #4 Posters #4 Photobooks+4 Mini Books #4 Photocards #4 Postcards+4 Photo Films and Gift', :price=>179.99, :quantity=>4, :seller_name=> 'HYBE', :category=> 'music', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/mapSoul.jpg'), filename: "BTSAlbum.jpg")
Review.create({:rating=>4 , :headline=>'A lot of stuffs!!!', :comment=>'It\'s little pricy. The package has a lot of stuffs in which took me a while to unpackage the whole thing. Feel like an army too now.', :product_id=>30, :user_id=>1, :username=>'demo' })

product = Product.create({:product_name=>'CL - Alpha [Mono ver.] Album+BolsVos K-POP Webzine (20p), Decorative Stickers, Photocards' , :description=>  'BolsVos K-POP Webzine (20p) / Copyright - BolsVos - All Rights Reserved / "Warning": Unauthorized Selling Activity Without Official Permission from BolsVos MUST BE REPORTED to Amazon as Intellectual Property Rights Violation #Tracking Code Provided (Unexpected Delay Could Occur Due to Current Global Issue / Continuous Notice To Be Advised Through Email)
#Free Gift (Not Guaranteed If Not Ordered From BolsVos): Extra Decorative Sticker Set for phone or Laptop etc.+ Extra Photocard Set / The Merchs may not be only for CL but for major KPOP artists due to license issue or limited Q #PRE-ORDER BENEFITS and/or FOLDED POSTERS Cannot be Guaranteed After Pre Order Period (~Oct 22, 2021) Due to Manufacturer Distribution Policy or Limited Qty #Will be Count Towards Hanteo and Gaon Chart & Made in Korea (100% Authentic)', :price=>29.99, :quantity=>4, :seller_name=> 'Very Cherry', :category=> 'music', :unit=>"per set" })
product.photos.attach(io: open('https://bamazon-dev.s3.us-west-1.amazonaws.com/monoAlpha.jpg'), filename: "monoAlpha.jpg")
Review.create({:rating=>5 , :headline=>'Album of the year', :comment=>'It\'s my fav album as she becomes an independent artist. I really like the small shine pieces that came it. I think im going to turn into a bracelet. But the package is new and it arrives faster that it was predicted (which is always a good thing). Love all the songs. Very empowering.', :product_id=>31, :user_id=>1, :username=>'demo' })


