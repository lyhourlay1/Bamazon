# Bamazon
## Live link - [Bamazon](https://bamazon-lyhour.herokuapp.com/#/)

Welcome to Bamazon and the production repo for the site. This site is an app clone to [Amazon](https://www.amazon.com/) ecommerce site. Similar to Amazon, Bamazon allows user to shop products online. Users can browse through items, sign-in, sign-up, add items to the cart, view transactions, and write review for any purchased products. This site specifically was chosen to connect relevant ecommerce backend logic and data structure with a beatiful, yet functional, front end delivery to allow user dynamically shop. Given the above several key features and functionalities were pursued in creating Bamazon, so it is important to note that the site is not an identical clone but consists of a majority of the funtionalities from the original website.

### Technology Used
* Backend Structure
    * Bamazon's backend was built from a Rails framework and utilizes Ruby, jbuilder and jquery to communicate with our frontend
* Frontend Structure
    * Bamazon's backend was built from a React framework utilizing the React library heavily relying on Javascript for functionality and CSS to bring the site to life


## Notable Features
* Cart functionality
    * One of the amazing key features of the website is the Cart functionality which allows users to add item from the product show page, view all the added products and display the total orders in the cart, checkout the products which remove the products from the cart and add it the transaction history. This feature requires users to sign in so that all database is linked to the specific user's account. A simple effect in the larger UI of a site, but highly relevant for site conversion and a seamless experience.
    * To achieve these functionalites, the website renders the CartContainer component that dispatches the relevant actions like fetchOrder(s), createOrder, removeOrder(s) after sending the HTTP requests to the backend. Then the reducer was integrated to manipulate the state based of the request's result from the database.
  

    
* Product List/Product Detail pages
    * Product feature allows user to browse the products with or without sign-in
    * The product information is fetched after ajax request and then dispatches the relevant action to manipulate the state through the reducer based of the database.
    * To create a dynamic UX/UI, React was used to update the information based of the state which was updated after search or category navigation. 