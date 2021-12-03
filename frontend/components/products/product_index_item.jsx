import React from 'react'
import {Link} from 'react-router-dom'

class ProductIndexItem extends React.Component{
    render(){
        
        return(
            <div className='product-flex' > 
                <div>
                    <Link to={`/products/${this.props.product.id}`}> 
                        <h2 className= 'product-name'>
                            {this.props.product.product_name}
                        </h2>
                        <h3 className= 'product- price'>
                            $ {this.props.product.price}
                        </h3>
                        <div className='product-image'>
                            <img src={this.props.product.photoUrls[0]} height='180px' />

                        </div>
                    </Link> 
                </div>
            </div>
        )
    }
}

export default ProductIndexItem