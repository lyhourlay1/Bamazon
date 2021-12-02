import React from 'react'
import NavBarContainer from './nav_bar/nav_bar_container'
import ProductContainer from  './products/product_container'
import { fetchSearchProducts } from '../actions/product_action'
import { Link } from 'react-router-dom'


class Splash extends React.Component{


    render(){
    return (
        <div>
            <NavBarContainer/>

            <div className='home-container'>
                <div className='splash-background'>
                    <img src="images/splashpic.jpeg" className='home-img' />
                </div>

                <div className='row-home'>
                    <div className='category-display' id='one'>
                        <Link className="food-category" to="/search/food">
                            <h1>Food</h1>
                            <img src="/images/food_category.png" width="600px"/>
                        </Link>    
                    </div>
                    <div className='category-display' id='one'>
                            <Link className="clothes-category" to="/search/clothes">
                                <h1>Clothes</h1>
                                <img src="/images/clothes_category.png" width="500px" />
                            </Link>
                    </div>

                </div>
                <div className='row-home' >
                    <div className='category-display' id='two'>
                
                        <Link className="electronics-category" to="/search/electronics">
                            <h1>
                                Electronics
                            </h1>
                            <img src="/images/electronics_category.png" width="300px" className='electronics-image' />
                        </Link>
                    </div>
                    <div className='category-display' id='two'>
                        <Link className="house-category" to="/search/house">
                            <h1>
                                House Supplies
                            </h1>
                            <img src="/images/house_supplies.png" width="200px" className='house-supplies-image' />
                        </Link>
                    </div>
                    <div className='category-display' id='two'>
                        <Link className="music-category" to="/search/music">                            
                        <h1>
                            Music
                        </h1>
                            <img src="/images/music_category.png" width="300px" className='music-image' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Splash