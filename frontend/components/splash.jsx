import React from 'react'
import NavBarContainer from './nav_bar/nav_bar_container'
import ProductContainer from  './products/product_container'

class Splash extends React.Component{
    render(){
    return (
        <div>
            <NavBarContainer/>
            {/* <ProductContainer/> */}
        </div>
        )
    }
}
export default Splash