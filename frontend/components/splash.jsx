import React from 'react'
import NavBarContainer from './nav_bar/nav_bar_container'
import ProductContainer from  './products/product_container'

class Splash extends React.Component{
    render(){
    return (
        <div>
            <NavBarContainer/>
            {/* <ProductContainer/> */}
            <div>
                Today's Feature:

                <ul>
                    <li>
                        Food
                    </li>
                    <li>
                        Electronics
                    </li>
                    <li>
                        Clothes
                    </li>
                    <li>
                        House Supplies
                    </li>


                </ul>
            </div>
        </div>
        )
    }
}
export default Splash