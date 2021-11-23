import React from "react"
import ProductIndexItem from "./product_index_item"

class Product extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        
        this.props.fetchProducts()
    }
    render(){
        return(
            <div>
                <ul>
                    {this.props.products.map(product => <ProductIndexItem product={product} />)}
                </ul>
            </div>
        )
    }

}
export default Product