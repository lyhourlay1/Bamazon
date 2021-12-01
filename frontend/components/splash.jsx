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
            <div>
                Today's Features:

                <ul>
                    <li>
                        <Link className="food-category" to="/search/food">Food</Link>
                    </li>
                    <li>
                        <Link className="electronics-category" to="/search/electronics">Electronics</Link>
                    </li>
                    <li>
                        <Link className="clothes-category" to="/search/clothes">Clothes</Link>
                    </li>
                    <li>
                        <Link className="house-category" to="/search/house">House Supplies</Link>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}
export default Splash