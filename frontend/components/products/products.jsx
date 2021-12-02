import React from "react"
import ProductIndexItem from "./product_index_item"
import NavBarContainer from '../nav_bar/nav_bar_container'


class Product extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchSearchProducts(this.props.query)
    }
    render(){
        return(
            <div>
                <NavBarContainer />

                <div className='products-flex'>
                    {this.props.products.map(product => <ProductIndexItem product={product} key = {product.id} />)}
                </div>
           
            </div>
        )
    }

}
export default Product