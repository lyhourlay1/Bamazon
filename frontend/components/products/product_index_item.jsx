import React from 'react'
import {Link} from 'react-router-dom'

class ProductIndexItem extends React.Component{
    render(){
        
        return(
            <div>
                <ul>
                    <Link to={`/products/${this.props.product.id}`}> {this.props.product.product_name}</Link>
                </ul>
            </div>
        )
    }
}

export default ProductIndexItem