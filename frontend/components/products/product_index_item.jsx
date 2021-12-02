import React from 'react'
import {Link} from 'react-router-dom'

class ProductIndexItem extends React.Component{
    render(){
        
        return(
            <div className='product-flex' > 
                <Link to={`/products/${this.props.product.id}`}> {this.props.product.product_name}</Link>
                
            </div>
        )
    }
}

export default ProductIndexItem